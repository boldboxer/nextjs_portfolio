import * as React from 'react'

interface ContactConfirmationEmailProps {
  name: string
}

const ContactConfirmationEmail: React.FC<Readonly<ContactConfirmationEmailProps>> = ({ name }) => (
  <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6 }}>
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://devnyamunga.qualifixdevs.online/images/authors/dnmonogram.png"
        alt="Dev Nyamunga Logo"
        width="50"
        height="50"
        style={{ borderRadius: '8px' }}
      />
      <h1 style={{ fontSize: '20px', margin: '10px 0' }}>Thanks for reaching out!</h1>
    </div>

    <p>Hi {name},</p>
    <p>We&apos;ve received your message and will get back to you as soon as possible.</p>

    <p style={{ marginTop: '20px' }}>— Dev Nyamunga</p>

    <p style={{ fontSize: '12px', color: '#666', marginTop: '20px' }}>
      This is an automated confirmation. Please do not reply to this email.
    </p>
  </div>
)

export default ContactConfirmationEmail
