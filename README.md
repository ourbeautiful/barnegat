# Our Beautiful Barnegat — Website

A Jekyll site for the Our Beautiful Barnegat founding chapter, built to host free on
GitHub Pages with content editable through Decap CMS.

## What's in here

- `index.html`, `about.html`, `get-involved.html`, `contact.html`, `updates.html` — the site's pages
- `_updates/` — one Markdown file per news item / event / announcement (the "Updates" collection)
- `_data/site.yml` — org name, phone, email, nav links — edit this to change contact info sitewide
- `_layouts/`, `_includes/` — shared page structure (header, footer, fonts, the table illustration)
- `assets/` — CSS and images
- `admin/` — the Decap CMS content editor

## 1. Put this on GitHub

1. Create a **new, public** repository on GitHub (public is required for free GitHub Pages), e.g. `oba-barnegat`.
2. Upload these files: on the repo's main page, click **Add file → Upload files**, drag in everything from this folder (keeping the folder structure), and commit.
   - Prefer using git on your computer? `git init`, `git add .`, `git commit -m "Initial site"`, then `git remote add origin <your repo URL>` and `git push -u origin main`.
3. In the repo, go to **Settings → Pages**. Under "Build and deployment," set **Source** to "Deploy from a branch," branch **main**, folder **/(root)**. Save.
4. GitHub will build the Jekyll site automatically (no extra workflow file needed) and give you a URL like `https://yourusername.github.io/oba-barnegat/`.
5. Open `_config.yml` and update `url` and `baseurl` to match that address exactly, then commit the change (this fixes internal links and SEO tags).

### Using a real domain (e.g. ourbeautifulbarnegat.org)
Add a `CNAME` file to the repo root containing just your domain, point your domain's DNS at GitHub Pages (GitHub's docs: "Managing a custom domain for your GitHub Pages site"), and set `_config.yml`'s `url` to your domain with `baseurl` left blank.

## 2. How the GitHub workflow works (plain terms)

- **`main` branch** is what's live on the website. Anything merged into `main` publishes automatically within a minute or two.
- **Branches** are safe drafts. If someone wants to try a bigger change without risking the live site, they create a branch (`git checkout -b new-homepage-photo`), make changes there, then open a **Pull Request (PR)** — a request to merge that branch into `main`. A teammate can review it before it goes live.
- **For day-to-day content** (a new event, an updated phone number), you don't need branches at all — the CMS (below) commits straight to `main` for you.
- **For design/code changes**, ask your developer to work in a branch and PR, so nothing goes live half-finished.

## 3. Setting up the CMS login

The CMS (`/admin`) lets non-technical teammates log in and edit content through
a form — no code, no git commands. Because GitHub Pages is static hosting, the
CMS needs one small piece elsewhere to handle secure login (GitHub Pages
itself can't do this part). Two free options:

**Option A — Netlify for auth only (recommended, ~10 minutes, still hosts on GitHub Pages)**
1. Create a free Netlify account and "Import" this same GitHub repo as a new Netlify site (Netlify will build it, but you keep GitHub Pages as your real public URL — Netlify is only providing login here).
2. In that Netlify site: **Site configuration → Identity → Enable Identity**, then **Services → Git Gateway → Enable Git Gateway**.
3. In `admin/config.yml`, change the `backend` block to:
   ```yaml
   backend:
     name: git-gateway
     branch: main
   ```
4. Under Netlify **Identity → Invite users**, invite your teammates by email. They'll set a password and can then log in at `yourusername.github.io/oba-barnegat/admin/`.

**Option B — GitHub OAuth app + a small proxy**
Keeps everything within GitHub/Vercel/Cloudflare (no Netlify at all). Follow Decap CMS's guide: https://decapcms.org/docs/github-backend/ — you'll register a GitHub OAuth App and deploy one of the free open-source OAuth proxy templates linked there, then set `base_url` in `admin/config.yml` to that proxy's URL.

Either way, also update `repo:` in `admin/config.yml` to your actual `username/reponame`.

## 4. Day-to-day content editing

**Adding an event, announcement, or impact story:**
1. Go to `yourdomain/admin/`, log in, choose **Updates (Events & Announcements) → New Update**.
2. Fill in the title, date, category, a short summary, an optional photo, and the full story.
3. Click **Publish** — it commits a new file to `_updates/` and goes live automatically.
4. Prefer editing on GitHub directly? Copy `_updates/2026-08-02-founding-trustees-now-recruiting.md` as a template.

**Updating contact info, tagline, or nav links:**
Go to `admin/ → Site Settings → Organization Info`, edit, and publish. This updates the phone/email/tagline everywhere on the site (footer, contact page, CTAs).

## 5. Previewing changes locally (optional, for your developer)

```bash
bundle install
bundle exec jekyll serve
```
Then open `http://localhost:4000/oba-barnegat/`.

## Notes on the "Get Involved" form
It has no backend server, so it opens a pre-filled email to your chapter inbox when submitted (keeps things free and simple). If you'd rather have submissions land in a dashboard, swap it for a free service like Netlify Forms or Formspree later — ask your developer, it's a small change.
