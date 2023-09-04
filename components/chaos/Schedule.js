

function Schedule() {
  return (
    <div>

<section className="bg-black text-white py-16">

<div className="container mx-auto px-4">

  <h2 className="text-3xl font-bold text-center mb-10">
    Creative Chaos Event Schedule
  </h2>

  <div className="flex flex-wrap -mx-4 text-gray-300">

    <div className="w-full md:w-1/3 px-4 mb-12">
      <div className="p-8 bg-gray-800 rounded">
        <h3 className="text-xl font-semibold mb-4">
          8 AM - Espresso Your Ideas
        </h3>
        <p className="text-sm">
          Kickstart your creative juices with exotic coffees, chaos theory donuts, and caffeine-fueled conversations.  
        </p>
      </div>
    </div>

    <div className="w-full md:w-1/3 px-4 mb-12">
      <div className="p-8 bg-gray-800 rounded">
        <h3 className="text-xl font-semibold mb-4">
          9 AM - Harnessing Chaos, Crafting Tomorrow 
        </h3>
        <p className="text-sm">
          Get ready to rip up the rulebook and embrace unpredictable innovation. This isn't your typical event...
        </p>
      </div>
    </div>

    <div className="w-full md:w-1/3 px-4 mb-12">
      <div className="p-8 bg-gray-800 rounded">
        <h3 className="text-xl font-semibold mb-4">
          10 AM - Hack Your Growth Mindset  
        </h3>
        <p className="text-sm">
          A high-intensity 30-minute workshop to expand your thinking and intensify your hunger for groundbreaking ideas.
        </p>
      </div>
    </div>

    {/* Additional schedule items */}

  </div>
  
  <div className="text-center">
    <a href="#" className="bg-red-700 text-white px-8 py-3 rounded-lg inline-block font-semibold hover:bg-indigo-600">
      Get Tickets
    </a>
  </div>

</div>

</section>
    </div>
  )
}

export default Schedule