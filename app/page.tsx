import Intro from "@/components/intro"
import NewsletterForm from "@/components/news-letter-form"
import RecentPosts from "@/components/recent-posts"
import RecentProjects from "@/components/recentprojects"
import { Suspense } from "react"

export default function Home() {
  return (
    <section className="py-24">
      <div className="container max-w-5xl">
        <Intro />

        <RecentPosts />
        <RecentProjects />

        <Suspense fallback={<p className="text-center mt-10">Loading newsletter form...</p>}>
          <NewsletterForm />
        </Suspense>
      </div>
    </section>
  )
}
