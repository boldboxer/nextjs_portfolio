'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { unsubscribe } from '@/lib/actions'

export default function UnsubscribePage() {
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
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      {status === 'loading' && (
        <p className="text-lg text-gray-600">Processing your request...</p>
      )}

      {status === 'success' && (
        <div>
          <h1 className="text-2xl font-bold text-emerald-600">
            You have been unsubscribed
          </h1>
          <p className="mt-2 text-gray-700">
            {email} has been successfully removed from our mailing list.
          </p>
        </div>
      )}

      {status === 'error' && (
        <div>
          <h1 className="text-2xl font-bold text-rose-600">Unsubscribe Failed</h1>
          <p className="mt-2 text-gray-700">
            We could not process your request. Please try again later.
          </p>
        </div>
      )}
    </div>
  )
}
