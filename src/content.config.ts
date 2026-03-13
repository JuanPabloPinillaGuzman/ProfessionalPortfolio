import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    titleEn: z.string().optional(),
    summary: z.string(),
    summaryEn: z.string().optional(),
    problem: z.string(),
    problemEn: z.string().optional(),
    solution: z.string(),
    solutionEn: z.string().optional(),
    technologies: z.array(z.string()),
    result: z.string(),
    resultEn: z.string().optional(),
    cover: z.string().optional(),
    featured: z.boolean().default(false),
    year: z.number().int(),
    repoUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional()
  })
});

export const collections = { projects };
