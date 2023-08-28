import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Feature from '@/components/Feature'
import Experience from '@/components/Experience'
import Cta from '@/components/Cta'
import Footer from '@/components/Footer'
import Navbar from '@/components/Nav'
import VideoPlayer from '@/components/CrowdVideo'
import Head from "next/head"
import GoogleAnalytics from './api/GoogleAnalytics'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <GoogleAnalytics/>
    <Head>
      <title> CrowdPen</title>
    </Head>
    <div>
      <Navbar/>
    </div>
    <div>
      
      <Hero/>
    
      <VideoPlayer videoId="ac7LcD3oFyI" />
      <Feature/>
      <Experience/>
      <Cta/>
      <Footer/>
     
    </div>
    </>
  )
}
