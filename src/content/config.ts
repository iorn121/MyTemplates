import { defineCollection, z } from 'astro:content';

const questions = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number(),
    difficulty: z.enum(['easy', 'medium', 'hard']).optional(),
    answer: z.string(),
  }),
});

export const collections = { questions };
