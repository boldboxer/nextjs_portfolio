import ContactForm from '@/components/contact-form'
import { Suspense } from 'react'

export default function Contact() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h2 className='title'>Let&apos;s talk about your project</h2>

        {/* ✅ Suspense wrapper added */}
        <Suspense fallback={<p className="mt-10 text-center">Loading form...</p>}>
          <ContactForm />
        </Suspense>
      </div>
    </section>
  )
}