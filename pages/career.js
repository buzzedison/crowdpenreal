import React from 'react'
import { FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';
import CareerAction from '@/components/CareerAction';
import Navbar from '@/components/Nav'
import Footer from '@/components/Footer'
import Image from 'next/legacy/image'
import Head from "next/head"
function Hero() {

  return (
    <>
     <Head>
      <title> Careers-CrowdPen</title>
    </Head>
          <Navbar/>
      <div className="container mx-auto">

        {/* Hero */}
        <section className="bg-gray-50 relative">
          
          <div className="mx-auto max-w-screen-xl px-4 py-2 lg:flex lg:h-screen lg:items-center">

            {/* Content */}
            <div className="lg:w-1/2 md:pr-24">
              <h1 className="text-4xl font-bold text-gray-800">
                Creative Visionary Wanted - Join the Crowdpen Revolution  
              </h1>

              <p className="mt-4 text-xl text-gray-600">
                Are you ready to be part of the change we need? Are you ready to join the African renaissance, one tweet-story at a time? Get in touch, let's write history together. This isn't just our dream; it's the dream of every African storyteller, every innovator, every creator. Join us in the Crowdpen Revolution and let’s create a platform that is truly ours, truly African!
              </p>
            </div>

       
            <div className="lg:w-1/2 first-letter:first-line:">
           <Image className="rounded-lg hover:opacity-95 p-10"
           width={500}
           height={500}
           src="crowd.png"/>

            </div>

          </div>

        </section>

      </div>

      <div>
        <CareerAction/>
      </div>
      <Footer/>
    </>
  )
}

export default Hero