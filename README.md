# Our Beautiful Barnegat — Website (v2, OBB-branded)

This replaces the previous OBA-forest-green version of the site with OBB's own
identity — black/tiger-orange, built from the Barnegat High School crest —
plus new content: the Programs page, the first-event section, founding-story
details, and social links.

**This is a full replacement of the repo contents**, not a patch. Since it's
the same repo (`ourbeautiful/barnegat`) and same live site
(`barnegat.ourbeautiful.org`), see "Applying this update" below before you
push anything.

## What's new since the last version

- **New visual identity**: palette and type pulled from the OBB crest instead of the OBA deck (see `assets/css/style.css` token comments at the top)
- **`/programs/`** — a new page: OBB Times, Debate & Speech Club, and Beautification Corps (Construction + Environmental divisions), written as a flowing narrative instead of bullets, connected by a "trail marker" visual motif
- **First event section on the homepage** — a manual-advance photo carousel (arrows/dots, no auto-rotate — see comment in `_includes/event-carousel.html` for why) paired with the May 3, 2026 trail cleanup story and real stats
- **Founding story update** — About page and homepage now mention Barnegat High School, the 13–18 age range (parents/older adults welcome), and the skills/local-business angle
- **Social links** — X, Instagram, TikTok in the footer sitewide, plus a dedicated block on the Contact page
- **New signature element**: a paw-print "trail" motif (see `_includes/icons/paw.svg` and `.trail-divider` / `.programs-trail` in the CSS) — distinct from OBA's "seats at the table" motif, which stays used only for the trustee-recruitment sections since that's specifically the founder's story, not OBB's

## Applying this update

1. **Back up first.** Your live repo already has real commits and possibly CMS-submitted content in `_updates/`. Before overwriting, either:
   - Pull the current repo down locally and diff `_updates/` against what's here (I only added one seed post — `2026-05-03-first-trail-cleanup.md` — so check whether you already have others to keep), or
   - Just tell me what's currently in your live `_updates/` folder and I'll merge it in for you.
2. **Replace these files/folders** in your local copy of the repo: `_config.yml`, `_data/site.yml`, `_includes/`, `_layouts/`, `assets/`, `admin/config.yml`, `index.html`, `about.html`, `contact.html`, `updates.html`, `404.html`, plus the new `programs.html` and `CNAME`.
3. **Keep as-is / don't overwrite**: anything already in your live `_updates/` folder that isn't in this package, and `admin/index.html` (identical, safe to overwrite too).
4. Commit and push (GitHub Desktop: review the changed-files list before committing so nothing unexpected gets removed).

## `_config.yml` — already set for your live domain
Since you're running this at `barnegat.ourbeautiful.org`, `_config.yml` in this
package is already set to:
```yaml
url: "https://barnegat.ourbeautiful.org"
baseurl: ""
```
A `CNAME` file (containing `barnegat.ourbeautiful.org`) is included at the repo root — required for GitHub Pages to serve the custom domain correctly. If you already have a `CNAME` file in the live repo, this one is identical, so overwriting is safe.

## Editing content going forward
Nothing changes about the CMS workflow — `/admin/` still edits Updates and
Site Settings the same way. Site Settings now also includes the social links
and age range, editable without touching code.

## New assets note
- `assets/img/obb-logo.png` — the crest, used as the header/footer mark and favicon
- `assets/img/events/` — the three first-event photos, already resized/compressed for web (originals were several MB each; these are optimized to load fast on mobile)

## Everything else
Repo setup, GitHub Pages, and CMS login instructions are unchanged from before — see the original README steps you already followed for enabling Pages and setting up Netlify Identity + Git Gateway.
