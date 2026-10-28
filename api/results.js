import { redis, KEY, fail } from './_db.js';

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  try {
    const rows = (await redis(['LRANGE', KEY, '0', '-1'])) || [];
    const responses = rows.map(r => { try { return JSON.parse(r); } catch { return null; } }).filter(Boolean);
    res.status(200).json({ responses });
  } catch (err) {
    fail(res, err);
  }
}
