import Image from 'next/image'
import authorImage from '@/public/images/authors/dnmonogram.png'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Nyamunga.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
        {/* I&#39;m a software engineer based in Nairobi, Kenya. I&#39;m
          passionate about learning new technologies and sharing knowledge with
          others. */}
          Hi, I&#39;m Dev Nyamunga, a software engineer based in Nairobi, Kenya. I specialize in building 
          modern, scalable web applications with technologies like Next.js, TypeScript, and TailwindCSS.
          Over the past year, I&#39;ve delivered production-ready websites, school management systems, and 
          e-commerce platforms for clients, while also consulting on SEO, design, and infrastructure.
          I&#39;m passionate about learning new technologies, sharing knowledge through blog posts, and 
          creating solutions that are reliable, user-friendly, and tailored to the local context (including M-Pesa and custom hosting setups).
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='dev Nyamunga'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}