'use client'

import { useRouter } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import { X } from 'lucide-react'

export default function PrivacyPolicyPage() {
  const router = useRouter()

  const markdownContent = `
## Introduction

This Privacy Policy outlines how devNyamunga collects, uses, and protects your personal information. By using our website or services, you consent to the practices described in this policy.

## Information We Collect

We may collect the following information from you:

* **Email address:** This is required if you choose to contact us or subscribe to our newsletter.

## How We Use Your Information

We use your email address to:

* Respond to your inquiries or requests
* Send you information or updates related to our products or services
* Provide customer support

**We will not:**

* Sell or rent your email address to third parties
* Use your email address for spam or unsolicited advertising purposes

## Your Rights

You have the right to:

* Access the personal information we hold about you
* Request that your personal information be corrected, updated, or deleted
* Object to the processing of your personal information

## Data Security

We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure.

## Changes to This Policy

We may update this Privacy Policy from time to time. Any changes will be posted on this page.

## Contact Us

If you have any questions about this Privacy Policy or our practices, please contact us at [dev.nyamunga@qualifixdevs.online](mailto:dev.nyamunga@qualifixdevs.online).
  `

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      {/* Modal container */}
      <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-900">
        {/* Header with close button */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
          <h1 className="text-xl font-bold">Privacy Policy</h1>
          <button
            onClick={() => router.back()}
            className="rounded-full bg-neutral-300 p-2 hover:bg-neutral-400 dark:bg-neutral-700 dark:hover:bg-neutral-600"
            aria-label="Close"
          >
            <X className="h-5 w-5 text-neutral-800 dark:text-neutral-200" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto p-6 prose max-w-none dark:prose-invert">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}








// import fs from 'fs'
// import path from 'path'
// import matter from 'gray-matter'

// const privacypolicypath = path.join(process.cwd(), 'content', 'privacy-policy');

// export async function getPrivacyPolicyContent() {
//     const fileContent = fs.readFileSync(privacypolicypath, 'utf8');
//     const { content } = matter(fileContent);
//   return content;
// }