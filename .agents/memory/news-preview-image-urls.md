---
name: News Preview image URLs
description: Why generated News page image links resolve against their current deployment while SEO metadata stays canonical.
---

Rendered image URLs in generated News pages should be root-relative so both Preview deployments and production serve their own static image files. Canonical, social, and structured-data URLs should continue to use the production domain.

**Why:** Preview smoke checks must validate the Preview's own image files, not accidentally fetch production assets, while SEO metadata remains canonical to the public site.

**How to apply:** Keep visible image-link generation separate from absolute URLs used in metadata, sitemap, and structured data.
