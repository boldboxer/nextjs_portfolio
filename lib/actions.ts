'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { ContactFormSchema, NewsletterFormSchema } from '@/lib/schemas'
import ContactFormEmail from '@/emails/contact-form-email'
import WelcomeEmail from '@/emails/welcome-email'
import ContactConfirmationEmail from '@/components/confirmation-email'


type ContactFormInputs = z.infer<typeof ContactFormSchema>
type NewsletterFormInputs = z.infer<typeof NewsletterFormSchema>
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data)

  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { name, email, message } = result.data
    const { data: adminData, error: adminError } = await resend.emails.send({
      from: 'Dev Nyamunga <dev.nyamunga@qualifixdevs.online>',
      to: 'ebesteinpr@gmail.com',
      replyTo: email,
      subject: `📩 New message from ${name}`,
      react: ContactFormEmail({ name, email, message })
    })

    if (!adminData || adminError) {
      throw new Error('Failed to notify admin')
    }

    // 📩 2. Send confirmation to the USER
    const { data: confirmData, error: confirmError } = await resend.emails.send({
      from: 'Dev Nyamunga <dev.nyamunga@qualifixdevs.online>',
      to: email,
      subject: `✅ We received your message, ${name}!`,
      react: ContactConfirmationEmail({ name }),
    })

    if (confirmError || !confirmData) throw new Error('Failed to send confirmation')

    return { success: true }
  } catch (error) {
    return { error }
  }
}

export async function subscribe(data: NewsletterFormInputs) {
  const result = NewsletterFormSchema.safeParse(data)

  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { name, email } = result.data
    const { data: contact, error: contactError } = await resend.contacts.create({
      email: email,
      firstName: name,
      audienceId: process.env.RESEND_AUDIENCE_ID as string
    })

    if (!contact || contactError) {
      throw new Error('Failed to subscribe')
    }

    // ✅ Send welcome email
    const { error: emailError } = await resend.emails.send({
      from: 'dev.nyamunga@qualifixdevs.online',
      to: email,
      subject: `Welcome, ${name}!`,
      react: WelcomeEmail({
        email,
        name: ''
      }),
    })

    if (emailError) {
      console.error('Failed to send welcome email:', emailError)
      // Don’t fail subscription just because email didn’t send
    }

    return { success: true }
  } catch (error) {
    console.error("Error creating contact:", error);
    return { error }
  }

}

export async function unsubscribe(email: string) {
  try {
    if (!email) throw new Error("No email provided")

    const { error } = await resend.contacts.remove({
      email,
      audienceId: process.env.RESEND_AUDIENCE_ID as string,
    })

    if (error) {
      console.error("Failed to unsubscribe:", error)
      throw new Error("Unsubscribe failed")
    }

    return { success: true }
  } catch (error) {
    console.error("Error during unsubscribe:", error)
    return { error }
  }
}
