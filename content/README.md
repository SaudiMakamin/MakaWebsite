# News release data

`news.json` is the authoritative release list for published News articles. It currently contains seven article records; the article count is the number of records, not a separate release-plan target.

`client/src/content/news.json` is the application copy and must remain byte-for-byte identical. Static generation and verification derive their expected article counts from these records. When article slugs change, update the explicit News route in `vercel.json` to match.
