'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react' // close icon

export default function Modal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  // close modal when pressing Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-3xl rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-900">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-neutral-300 p-1 hover:bg-neutral-400 dark:bg-neutral-700 dark:hover:bg-neutral-600"
          aria-label="Close"
        >
          <X className="h-5 w-5 text-neutral-800 dark:text-neutral-200" />
        </button>

        {children}
      </div>
    </div>
  )
}
