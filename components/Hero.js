import React from 'react'
import { FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';

function Hero() {
  return (
 <>
 <div className="container mx-auto">
 <section className="bg-gray-50 relative">
  <div
    className="mx-auto max-w-screen-xl px-4 py-2 lg:flex lg:h-screen lg:items-center"
  >
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl pt-5">
        Welcome to Crowdpen:
        <strong className="font-extrabold text-red-700 sm:block">
          The Heartbeat of African Creativity
        </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
        Africa: a vibrant tapestry of cultures and a treasure chest of untold tales. We're here to unlock the riches and share them with the world. Imagine if Medium and Twitter had a love child, with an African soul - that's us! We're a canvas for the creatively bold, the audaciously innovative. Ready to join the revolution?
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="https://discord.gg/VEqUXcXm9k"
        >
          Join the CrowdPen Revolution
        </a>

        <a
          className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          href="/donate"
        >
          Donate
        </a>
      </div>
      <Link href="#needle">
        <div className="flex justify-center items-center mt-8">
          <FaChevronDown className="animate-bounce text-4xl text-gray-700" />
        </div>
      </Link>
    </div>
  </div>
</section>

</div>

 
 </>
  )
}

export default Hero