import React from 'react'

function Cta() {
  return (
    <div>
        <section className="py-20 bg-gradient-to-r from-black to-gray-700 text-white">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-5xl font-bold mb-6">🌻 Sow a Seed in the Soil of African Creativity 🌍</h2>
    <p className="mb-8 text-xl md:text-2xl">Investing in CrowdPen Stories is like sowing a seed in fertile soil. Your support equips African creators with a platform to bloom and thrive. Join us on this thrilling odyssey as we unleash the untapped potential of Africa's creative minds. So, are you in?</p>
    <div className="flex justify-center space-x-6">
      <a
        className="inline-block py-3 px-6 text-black bg-white hover:bg-gray-200 rounded"
        href="https://join.slack.com/t/crowdpenworkspace/shared_invite/zt-1u3da3b7a-rUkF93gzQLQJNW02H3rGZA"
      >
        Join Us
      </a>
      <a
        className="inline-block py-3 px-6 text-black bg-white hover:bg-gray-200 rounded"
        href="/donate"
      >
        Donate Now
      </a>
    </div>
  </div>
</section>


    </div>
  )
}

export default Cta