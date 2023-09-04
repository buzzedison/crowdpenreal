import Image from 'next/legacy/image'

export default function CreativeChaos() {

  return (
    <section className="relative bg-gray-900">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/images/chaosback.png"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-32 sm:px-6 lg:px-8">

        {/* Text Content */}
        <div className="text-center">

          <h1 className="text-5xl font-bold text-white sm:text-6xl">
            Creative Chaos
          </h1>

          <p className="mt-8 text-3xl text-white">
            An event to spark new ideas and innovative collaborations
          </p>

          <p className="px-2 md:px-24 mt-8 text-xl text-gray-300">
            Held once every two months, Creative Chaos brings together a wide range of creative professionals, entrepreneurs, startup founders, and visionary thinkers.
          </p>

          {/* CTA Button */}
          <div className="mt-8">
             <a href="#" className="bg-white text-gray-900 rounded-lg px-8 py-3 font-semibold">
               Join The Chaos
             </a>
          </div>

        </div>
        
      </div>
    </section>
  )

}