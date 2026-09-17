import { file } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const books = defineCollection({
    loader: file('src/content/books.json'),
    schema: z.object({
        id: z.number().positive(),
        title: z.string().max(200),
        author: z.string().max(200),
        year: z.number().min(0),
        genre: z.string().max(100),
        summary: z.string().max(500),
        rating: z.number().min(0).max(5)
    })
});

export const collections = {
  books
};