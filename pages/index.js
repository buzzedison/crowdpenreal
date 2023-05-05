import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Feature from '@/components/Feature'
import Experience from '@/components/Experience'
import Cta from '@/components/Cta'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Hero/>
      <Feature/>
      <Experience/>
      <Cta/>
      <Footer/>
     
    </div>
  )
}
