// Tiny Upstash Redis REST client (no npm packages needed).
// Vercel → Storage → Upstash Redis adds these environment variables automatically.
const URL_ = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

export const KEY = 'krushi-poll:responses';

export async function redis(command) {
  if (!URL_ || !TOKEN) {
    const e = new Error('Database not connected. In Vercel open Storage → Upstash Redis → Connect, then redeploy.');
    e.code = 'NO_DB';
    throw e;
  }
  const res = await fetch(URL_, {
    method: 'POST',
    headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(command)
  });
  const data = await res.json();
  if (data.error) throw new Error(data.error);
  return data.result;
}

export function fail(res, err) {
  const status = err.code === 'NO_DB' ? 503 : 500;
  res.status(status).json({ error: err.message });
}
