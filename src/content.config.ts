import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { file } from "astro/loaders";

const asideArticles = defineCollection({
  loader: file("src/data/aside.json"),
  schema: z.object({
    id: z.number(),
    title: z.string(),
    text: z.string(),
    link: z.string(),
  }),
});

const mainArticles = defineCollection({
  loader: file("src/data/articles.json"),
  schema: z.object({
    id: z.number(),
    number: z.string(),
    title: z.string(),
    imagePath: z.string(),
    text: z.string(),
    link: z.string(),
  }),
});

export const collections = { asideArticles, mainArticles };
