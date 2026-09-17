import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const books = defineCollection({
    loader: glob({base: "src/content/books", pattern: "*.md"}),
    schema: z.object({
        title: z.string(),
        author: z.string(),
        year: z.number(),
        genre: z.string(),
        summary: z.string(),
        rating: z.number()
    })
});

export const collections = {
  books
};