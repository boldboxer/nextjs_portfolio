import { getPosts } from '@/lib/posts'
import PostsWithSearch from '@/components/posts-with-search'
import { Suspense } from 'react'

// ✅ Force static generation
export const dynamic = 'error'

export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Posts</h1>

        <Suspense fallback={<p className="text-center mt-20">Loading posts...</p>}>
          <PostsWithSearch posts={posts} />
        </Suspense>
      </div>
    </section>
  )
}