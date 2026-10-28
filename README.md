# Digital Marketing for Agriculture – Live Poll

Two pages:
- **/** – phone poll (participants scan the QR and answer, Sinhala + English)
- **/present.html** – projector screen: QR code, live charts, evaluation report

## Deploy to Vercel (about 5 minutes)

1. Push this folder to a GitHub repo (or drag the folder into `vercel deploy`).
2. In Vercel: **Add New → Project** → import the repo → Framework preset **Other** → **Deploy**.
3. Connect the database (free):
   **Project → Storage → Create Database → Upstash for Redis → Free plan → Connect to project.**
4. Add an admin password:
   **Settings → Environment Variables →** `ADMIN_KEY` = any password you choose.
5. **Deployments → ⋯ → Redeploy** (so the database and password are picked up).

## On the day

1. Open `https://your-site.vercel.app/present.html` on the projector laptop.
2. Scan the QR yourself and submit one test answer to check it works.
3. Go to the **Evaluation** tab → type your admin key → **Clear all responses** (click twice).
4. Back to the **QR** tab. Participants scan and answer; the counter goes up live.
5. Show the **Live** tab while they answer, then the **Evaluation** tab.
6. Click **Download CSV** to keep the results.

## How the evaluation works

Each person gets a readiness score out of 100:
- 60% from the six 1–5 skill ratings
- 40% from the 3 quiz questions

Levels: 0–34 Beginner (ආරම්භක), 35–65 Intermediate (මධ්‍යම), 66–100 Advanced (උසස්).

The Evaluation tab shows the main level, the two weakest skills, the most wanted topic,
the biggest challenge, and a recommendation for how to pitch today's session.

## Change the questions

Edit `questions.js`. If you change the number of options, also update the numbers at the top of `api/submit.js`.
