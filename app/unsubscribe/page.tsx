'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { unsubscribe } from '@/lib/actions'

// Prevent Next.js from prerendering this page
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

function UnsubscribeContent() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email')
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')

  useEffect(() => {
    if (!email) {
      setStatus('error')
      return
    }

    unsubscribe(email).then(result => {
      if (result?.success) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    })
  }, [email])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50 dark:bg-zinc-900">
      <div className="w-full max-w-md rounded-lg bg-white dark:bg-zinc-800 shadow-lg p-8 text-center">
        {status === 'loading' && (
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Processing your request...
          </p>
        )}

        {status === 'success' && (
          <div>
            <h1 className="text-2xl font-bold text-emerald-600">
              You have been unsubscribed
            </h1>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              {email} has been successfully removed from our mailing list.
            </p>
          </div>
        )}

        {status === 'error' && (
          <div>
            <h1 className="text-2xl font-bold text-rose-600">
              Unsubscribe Failed
            </h1>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              We could not process your request. Please try again later.
            </p>
          </div>
        )}

        <Link
          href="/"
          className="mt-6 inline-block rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-300 dark:bg-zinc-700 dark:text-gray-200 dark:hover:bg-zinc-600"
        >
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  )
}

export default function UnsubscribePage() {
  return (
    <Suspense fallback={<p className="text-center mt-20">Loading...</p>}>
      <UnsubscribeContent />
    </Suspense>
  )
}
