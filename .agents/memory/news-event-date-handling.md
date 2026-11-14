---
name: News event-date handling
description: Handling article records when the supplied date is an event date rather than the publication date.
---

When a News record uses an event-end date only for chronological sorting, show the approved human-readable date label, but do not present that sort value as a publication date in page metadata, structured data, or feeds.

**Why:** Some approved articles provide event dates and month/year display copy, but no exact original web publication date. Reusing the event-end date as `datePublished` or a feed date would misstate the publication timeline.

**How to apply:** Mark sort-only dates explicitly, use the provided English and Arabic display labels, and omit publication-date fields wherever the source provides no publication date.
