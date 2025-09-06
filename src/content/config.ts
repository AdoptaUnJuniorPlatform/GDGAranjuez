import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    author: z.string(),
    authorImage: z.string().url(),
    tags: z.array(z.string()).optional(),
  }),
});

// export const collections = {
//   posts,
// };
