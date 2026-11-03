# Norskveien

A website for learning Norwegian (bokmål) from A2 to B2. It covers grammar, pronunciation, reading, speaking, writing and everyday life in Norway. It includes a placement test, a "today's focus" plan, level tests, and accounts so each learner's progress is saved.

The site is plain HTML with no build step. Accounts and saved progress use [Supabase](https://supabase.com), which is free for small projects.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole site: lessons, exercises, progress, login |
| `config.js` | Your Supabase address and public key (fill in once) |
| `supabase-setup.sql` | Creates the progress table and its privacy rules (run once) |

## Setup (about 15 minutes, done once)

### 1. Create the database and login (Supabase)
1. Go to https://supabase.com, sign up, and click **New project**. Pick any name and password, and the region closest to you (for example Stockholm).
2. When it's ready, open **SQL Editor** → **New query**. Paste everything from `supabase-setup.sql` and click **Run**.
3. Open **Project Settings** → **API**. Copy the **Project URL** and the **anon public** key into `config.js`.

### 2. Put the site online (GitHub Pages)
1. In your GitHub repository, open **Settings** → **Pages**.
2. Under "Build and deployment", choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then click **Save**.
3. After about a minute your site is live at `https://<your-username>.github.io/<repo-name>/`.

### 3. Tell Supabase your site address
In Supabase, open **Authentication** → **URL Configuration** and set **Site URL** to your GitHub Pages address. This makes the "confirm your email" and "reset password" links lead back to your site.

To skip email confirmation, turn off **Confirm email** under **Authentication** → **Sign In / Providers** → **Email**.

## How saving works
- Logged-in users: progress is saved to their account and follows them to any device. Each person can only read and change their own row, enforced by the rules in `supabase-setup.sql`.
- Visitors without an account: progress is saved in their browser.
- If someone used the site before creating an account, their progress is merged into the account the first time they log in.

## Audio
Pronunciation and listening use the browser's built-in voice. For the best result, learners should install a Norwegian voice on their device. The site explains how.
