interface WelcomeEmailProps {
    name: string
    email: string
}

const WelcomeEmail: React.FC<Readonly<WelcomeEmailProps>> = ({ name, email }) => (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: '1.6' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <img
                src="https://devnyamunga.qualifixdevs.online/images/authors/dnmonogram.png"
                alt="Dev Nyamunga Logo"
                width="80"
                style={{ borderRadius: '8px' }}
            />
        </div>

        <h1 style={{ color: '#0d9488' }}>Welcome aboard, {name}! 🎉</h1>
        <p>
            Thanks for subscribing with <strong>{email}</strong>.
            You&apos;ll now get exclusive updates on my latest <strong>projects</strong>,
            <strong> blog posts</strong>, and behind-the-scenes insights.
        </p>

        <p style={{ marginTop: '20px' }}>
            I&apos;m excited to share my journey with you, and I hope the content inspires you as much as I enjoy creating it.
        </p>

        <a
            href="https://your-portfolio-link.com"
            style={{
                display: 'inline-block',
                marginTop: '30px',
                padding: '12px 24px',
                backgroundColor: '#0d9488',
                color: '#fff',
                borderRadius: '6px',
                textDecoration: 'none'
            }}
        >
            Visit My Portfolio 🚀
        </a>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <p style={{ fontSize: '12px', color: '#888', textAlign: 'center' }}>
            Sent with ❤️ from Dev Nyamunga&apos;s Portfolio.
            If you didn&apos;t mean to subscribe, you can ignore this email.
        </p>

        <p style={{ fontSize: '12px', color: '#888', textAlign: 'center', marginTop: '10px' }}>
            👉 <a href={`https://devnyamunga.qualifixdevs.online/unsubscribe?email=${email}`} style={{ color: '#0d9488' }}>
                Unsubscribe
            </a>
        </p>

    </div>
)

export default WelcomeEmail
