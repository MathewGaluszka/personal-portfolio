import { getCollection, type CollectionEntry } from 'astro:content'
import { OGImageRoute } from 'astro-og-canvas'
import { themeConfig } from '../../config'

export const prerender = true

const postEntries = await getCollection('posts')
const workEntries = await getCollection('work')

const pages = Object.fromEntries([
  ...postEntries.map((entry: CollectionEntry<'posts'>) => [entry.id.replace(/\.(md|mdx)$/, ''), entry.data]),
  ...workEntries.map((entry: CollectionEntry<'work'>) => [entry.id.replace(/\.(md|mdx)$/, ''), entry.data])
])

export const { getStaticPaths, GET } = await OGImageRoute({
  pages,
  getImageOptions: (_path: string, page: { title: string }) => ({
    title: page.title,
    description: themeConfig.site.title,
    logo: {
      path: 'public/og/og-logo.png',
      size: [80, 80]
    },
    bgGradient: [[255, 255, 255]],
    bgImage: {
      path: 'public/og/og-bg.png',
      fit: 'fill'
    },
    padding: 64,
    font: {
      title: {
        color: [28, 28, 28],
        size: 68,
        weight: 'Bold',
        families: ['Inter Variable', 'Noto Sans SC']
      },
      description: {
        color: [180, 180, 180],
        size: 40,
        weight: 'Normal',
        families: ['Inter Variable', 'Noto Sans SC']
      }
    },
    fonts: ['public/fonts/Inter.woff2', 'public/fonts/NotoSansSC-Regular.otf', 'public/fonts/NotoSansSC-Bold.otf']
  })
})
