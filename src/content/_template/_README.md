# Creating New Posts

## Basic Structure

1. Create a file in `/content/posts/` with the following format:

   ```bash
   YYYY-MM-DD-title-separated-with-dashes.md
   # Example: 2024-06-25-astro-guide.md
   ```

2. Required frontmatter
   ***
   title: 'Title'
   excerpt: 'Short summary (max 160 characters)'
   date: AAA-MM-DD # Actual publication date
   author: 'Author name'
   authorImage: '/images/authors/avatar.jpg' # Path relative to /public
   tags:

- 'tag1'
- 'tag2'

---

## Style Guidelines

- **Images**: Place them in `/public/images/posts/` and reference them like this:

  ```markdown
  ![Description](/images/posts/example.jpg)
  ```

- **Highlights**: Use `> ` for quotes and `**text**` for bold.

## Tips

✔️ You can preview posts with `npm run dev`  
✔️ Optional tags
❌ Avoid future dates (they are not used as drafts)

**Problems?** @mention the development team.
