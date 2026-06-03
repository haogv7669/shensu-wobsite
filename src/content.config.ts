import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const taobao = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/taobao" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

const materials = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/materials" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

const guide = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guide" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    category: z.string().optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

export const collections = { taobao, materials, guide };
