import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypeHighlight from "rehype-highlight";
import { z } from "zod";

const projects = defineCollection({
  name: "projects",
  directory: "content/projects",
  include: "*.mdx",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroImage: z.string().optional(),
    github: z.string(),
    projectType: z.string().optional(),
    order: z.number(),
    tags: z.string().array(),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx,
    };
  },
});

const writing = defineCollection({
  name: "writing",
  directory: "content/writing",
  include: "*.mdx",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    heroImage: z.string().optional(),
    date: z.string(),
    tags: z.string().array(),
    published: z.boolean(),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      cwd: process.cwd(),
      rehypePlugins: [rehypeHighlight],
    });
    return {
      ...document,
      mdx,
    };
  },
});

export default defineConfig({
  content: [projects, writing],
});
