import { getCollection, type CollectionEntry } from 'astro:content'

export async function getFilteredPosts() {
  const posts = await getCollection('posts')
  return posts.filter((post: CollectionEntry<'posts'>) => !post.id.startsWith('_'))
}

export async function getSortedFilteredPosts() {
  const posts = await getFilteredPosts()
  return posts.sort((a: CollectionEntry<'posts'>, b: CollectionEntry<'posts'>) => {
    const orderA = a.data.order ?? Number.MAX_SAFE_INTEGER
    const orderB = b.data.order ?? Number.MAX_SAFE_INTEGER
    if (orderA !== orderB) {
      return orderA - orderB
    }
    return a.data.title.localeCompare(b.data.title)
  })
}

export async function getFilteredWork() {
  const jobs = await getCollection('work')
  return jobs.filter((job: CollectionEntry<'work'>) => !job.id.startsWith('_'))
}

export async function getSortedFilteredWork() {
  const jobs = await getFilteredWork()
  return jobs.sort((a: CollectionEntry<'work'>, b: CollectionEntry<'work'>) => {
    const orderA = a.data.order ?? Number.MAX_SAFE_INTEGER
    const orderB = b.data.order ?? Number.MAX_SAFE_INTEGER
    if (orderA !== orderB) {
      return orderA - orderB
    }
    return a.data.title.localeCompare(b.data.title)
  })
}
