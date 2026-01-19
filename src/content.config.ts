import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const globPattern = "**/*.{md,mdx}";
const contentDir = "./src/content";

const projects = defineCollection({
  loader: glob({ pattern: globPattern, base: `${contentDir}/projects` }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: globPattern, base: `${contentDir}/blog` }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
  }),
});

const personal = defineCollection({
  loader: glob({ pattern: globPattern, base: `${contentDir}/personal` }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { projects, blog, personal };
