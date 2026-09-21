import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const entrySchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.string(),
  date: z.string().optional(),
  link: z.string(),
  excerpt: z.string(),
  image: z.string().nullable(),
  html: z.string(),
});

const pages = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/pages" }),
  schema: entrySchema,
});

const posts = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/posts" }),
  schema: entrySchema,
});

export const collections = { pages, posts };
