import { glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: () =>
    z.object({
      title: z.string(),
      pubDate: z.coerce.date().optional(),
      order: z.number().optional(),
      image: z.string().optional(),
      repo: z.string().url().optional(),
      repoLabel: z.string().optional()
    })
})

const about = defineCollection({
  loader: glob({ base: './src/content/about', pattern: '**/*.md' }),
  schema: z.object({})
})

const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.{md,mdx}' }),
  schema: () =>
    z.object({
      title: z.string(),
      company: z.string(),
      dates: z.string(),
      order: z.number().optional(),
      image: z.string().optional()
    })
})

export const collections = { posts, about, work }
