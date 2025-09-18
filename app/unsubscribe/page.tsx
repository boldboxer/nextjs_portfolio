'use client'

import { Suspense } from 'react'
import UnsubscribeContent from '@/components/unsubscribe-content'

export const dynamic = "force-dynamic"
export const revalidate = 0


// ✅ Page just wraps client logic in Suspense
export default function UnsubscribePage() {
  return (
    <Suspense fallback={<p className="text-center mt-20">Loading...</p>}>
      <UnsubscribeContent />
    </Suspense>
  )
}
