import Link from "next/link"

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
          10 AM - Powerful Networking
        </h3>
        <p className="text-sm">
          Kickstart your creative juices with deep and fun networking sessions, conversations to get to know you.  
        </p>
      </div>
    </div>

    <div className="w-full md:w-1/3 px-4 mb-12">
      <div className="p-8 bg-gray-800 rounded">
        <h3 className="text-xl font-semibold mb-4">
          11 AM - Harnessing Chaos, Crafting Tomorrow 
        </h3>
        <p className="text-sm">
          Get ready to rip up the rulebook and embrace unpredictable innovation. This isn't your typical event...
        </p>
      </div>
    </div>

    <div className="w-full md:w-1/3 px-4 mb-12">
      <div className="p-8 bg-gray-800 rounded">
        <h3 className="text-xl font-semibold mb-4">
          12 PM - Hack Your Growth Mindset  
        </h3>
        <p className="text-sm">
          Pop up group conversations, quick hackathons, and whatever we all decide to talk about
        </p>
      </div>
    </div>

    {/* Additional schedule items */}

  </div>
  
  <div className="text-center">
    <Link href="https://events.teams.microsoft.com/event/67caa980-aa48-479a-9eec-bcb023d0e98c@0ff22ae2-bf0f-4aa2-91a1-2c3f1a83c6c6" className="bg-red-700 text-white px-8 py-3 rounded-lg inline-block font-semibold hover:bg-indigo-600">
      Get Tickets
    </Link>
  </div>

</div>

</section>
    </div>
  )
}

export default Schedule