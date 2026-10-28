import { redis, KEY, fail } from './_db.js';

// Clears all responses. Needs the ADMIN_KEY environment variable set in Vercel.
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Use POST' });
  const admin = process.env.ADMIN_KEY;
  if (!admin) return res.status(403).json({ error: 'Set ADMIN_KEY in Vercel → Settings → Environment Variables first.' });
  if (req.headers['x-admin-key'] !== admin) return res.status(401).json({ error: 'Wrong admin key.' });
  try {
    await redis(['DEL', KEY]);
    res.status(200).json({ ok: true });
  } catch (err) {
    fail(res, err);
  }
}
