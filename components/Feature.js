import React from 'react'
import Image from 'next/image'
function Feature() {
  return (
    <div id="about">

<section className="bg-gradient-to-r from-black to-gray-600 py-20">
  <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
    <div className="lg:w-1/2 xl:w-1/2 flex flex-col items-start relative z-10">
      <h2 className="font-extrabold text-4xl text-white leading-tight mt-4">Spotting the Needle in the Haystack</h2>
      <p className="font-extralight text-white leading-relaxed mt-6 mb-6">African creators, we see you! We know you're hunting for platforms to amplify your unique voices, celebrate your talent, and help pay the bills. We're here to ensure your mesmerizing works don't stay hidden like a rainbow in the dark.</p>
      <a
        className="mt-10 mb-16 sm:mb-0 inline-block py-3 px-8 leading-none text-white bg-red-600 hover:bg-red-700 rounded shadow"
        href="/waiting"
      >
    Join our Waiting List
      </a>
    </div>
    <div className="hidden lg:w-1/2 xl:w-3/5 lg:block relative">
      <Image 
      src="crowdwriters.svg" 
      width={1000}
      height={1000}
    
      className="max-w-xs md:max-w-2xl m-auto w-full h-auto" alt="African Writers" style={{animation: "movement 2s infinite cubic-bezier(.55,.01,.45,.95)", animationDelay: "1s"}} />
    
    </div>
  </div>
  <style jsx>{`
    @keyframes movement {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
  `}</style>
</section>


    </div>
  )
}

export default Feature