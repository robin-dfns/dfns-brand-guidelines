# `assets/email/` — do not delete, do not rename

These two files are served over an **absolute, public URL** and are the only
part of this repository whose URL is an external contract:

```
https://robin-dfns.github.io/dfns-design-system/assets/email/header-logo.png
https://robin-dfns.github.io/dfns-design-system/assets/email/footer-logo.png
```

## Why they have to stay

Emails already sent embed that exact URL. Their HTML is frozen in the
recipients' inboxes and cannot be edited: every time somebody opens one, the
mail client fetches this path again — months later included. Delete the files
and those logos break permanently, for everyone who ever received them.

GitHub Pages cannot redirect its way out of it. There is no server config, no
`_redirects`, and `.nojekyll` disables Jekyll, so `jekyll-redirect-from` is not
available — and it only ever covered HTML pages, never images.

## New emails do not use these

Since 2026-09-03 the templates point at the S3 bucket instead:

```
https://dfns-assets.s3.eu-west-3.amazonaws.com/header-logo.png
https://dfns-assets.s3.eu-west-3.amazonaws.com/footer-logo.png
```

Same bytes, same filenames. This folder is kept purely so the back catalogue
keeps rendering — it is a tombstone, not a source. Point new work at S3.

## If you ever host email images again

- HTTPS with a valid certificate; many clients refuse plain http.
- Public GET, no auth, no cookie.
- `Content-Type: image/png` — S3 will happily serve `octet-stream` if the
  metadata is not set, and clients will not render that as an image.
- Never reuse a filename for different content. Gmail proxies and caches
  images behind `googleusercontent.com`; at an unchanged URL you do not
  control when recipients see the new one.
