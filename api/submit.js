import { redis, KEY, fail } from './_db.js';

const SINGLE = { age: 5, role: 5, internet: 3, official: 3, learn: 5, challenge: 5, q1: 4, q2: 4, q3: 4 };
const MULTI = { devices: 4, platforms: 6, aitools: 6, aifor: 6 };
const SKILL_ROWS = 6;

const isInt = (v, max) => Number.isInteger(v) && v >= 0 && v < max;

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Use POST' });

  let b = req.body;
  if (typeof b === 'string') { try { b = JSON.parse(b); } catch { b = null; } }
  if (!b || typeof b !== 'object') return res.status(400).json({ error: 'Missing answers' });

  const name = typeof b.name === 'string' ? b.name.trim().replace(/\s+/g, ' ') : '';
  if (name.length < 2 || name.length > 60) return res.status(400).json({ error: 'Bad answer: name' });

  let whatsapp = typeof b.whatsapp === 'string' ? b.whatsapp.replace(/[^\d+]/g, '').replace(/^\+/, '') : '';
  if (whatsapp.startsWith('94') && whatsapp.length === 11) whatsapp = '0' + whatsapp.slice(2);
  if (!/^07\d{8}$/.test(whatsapp)) return res.status(400).json({ error: 'Bad answer: whatsapp' });

  const rec = { name, whatsapp };
  for (const [k, n] of Object.entries(SINGLE)) {
    if (!isInt(b[k], n)) return res.status(400).json({ error: `Bad answer: ${k}` });
    rec[k] = b[k];
  }
  for (const [k, n] of Object.entries(MULTI)) {
    const a = b[k];
    if (!Array.isArray(a) || a.length < 1 || a.length > n || !a.every(v => isInt(v, n))) {
      return res.status(400).json({ error: `Bad answer: ${k}` });
    }
    rec[k] = [...new Set(a)];
  }
  const s = b.skills;
  if (!Array.isArray(s) || s.length !== SKILL_ROWS || !s.every(v => Number.isInteger(v) && v >= 1 && v <= 5)) {
    return res.status(400).json({ error: 'Bad answer: skills' });
  }
  rec.skills = s;
  rec.t = Date.now();

  try {
    await redis(['RPUSH', KEY, JSON.stringify(rec)]);
    res.status(200).json({ ok: true });
  } catch (err) {
    fail(res, err);
  }
}
