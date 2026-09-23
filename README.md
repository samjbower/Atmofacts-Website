# AtmoFacts website

The public website for AtmoFacts, built with Next.js (App Router) and deployed from this
repository. The site is mostly static: content lives in plain files, so publishing an update
is a matter of editing a file and pushing to `main`.

## Running locally

```bash
npm install
npm run dev      # local preview at http://localhost:3000
npm run build    # the same production build the host runs; run before pushing
```

## How to publish a news article

1. Create a new Markdown file in `content/posts/`, for example `content/posts/my-article.md`.
2. Start it with this header (the file name becomes the URL, e.g. `/blog/my-article`):

   ```markdown
   ---
   title: "Readable headline for the article"
   date: "2026-09-23"
   description: "One or two sentences shown in the news list and on the home page."
   ---

   The article body goes here, in regular Markdown.
   ```

3. Commit and push. The two most recent posts by date appear automatically on the home page,
   and the full list appears at `/blog`.

## How to add or edit an FAQ entry

Edit `content/faq.json`. Each entry has a unique `id`, a `category` (categories appear in the
order they are first used), a `question`, and an `answer`. Push to publish.

## How to add a publication to the Impacts page

Add a Markdown file to `content/impacts/` with this header:

```markdown
---
title: "Paper title"
year: 2024
authors: "Last, F., Last, F."
link: "https://doi.org/..."
image: "/images/pubs/example.jpg"   # optional
type: publication                    # publication | abstract | technical | review
---

One or two sentence summary shown on the card.
```

## Where things live

- `app/` — one folder per page (`app/page.js` is the home page).
- `components/` — header, footer, contact form, subscription modal, timeline.
- `app/globals.css` — all styling: colors and fonts are defined once as variables at the top.
- `content/` — news posts, impacts, and FAQ data (the files you edit most often).
- `public/images/` — photos and graphics. Openly licensed photos are credited on `/legal`.

The contact form posts to Formspree and the mailing list modal posts to Mailchimp; both are
configured directly in `components/ContactForm.js` and `components/SubscriptionModal.js`.

## Deployment

Pushing to `main` triggers the Vercel deployment. The site is plain Next.js with no special
configuration, so it can also be deployed on Google Cloud (Cloud Run or Firebase App Hosting)
from this same repository later.

If a deploy fails, run `npm run build` locally: the error and file it points to will be the
same one the host saw. Fix, commit, and push again; Vercel redeploys automatically on every
push. A previous working version can always be restored in the Vercel dashboard under
Deployments with "Promote to Production".
