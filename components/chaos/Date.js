import Link from "next/link"
export default function DateAndDetails() {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Date & Details</h2>
  
        <p className="mb-4 text-2xl font-bold">
          Creative Chaos maiden event will be virtual! <br/><span className="text-gray-600 text-lg">
          Join us for an exciting online event open to 
          African creative changemakers and writers across the globe. </span> 
        </p>
  
        <div className="bg-gray-200 p-4 mb-4 w-1/2 px-4 rounded-2xl">
          <p className="text-lg mb-2">
            <strong>Date:</strong> December 6, 2023
          </p>
          
          <p className="text-lg">
            <strong>Time:</strong> 10AM to 5PM GMT
          </p>
        </div>
  
        <p className="mb-4">
          Since it's an online event, you can participate from anywhere with an internet connection. All you need is a computer or mobile device.
        </p>
        
        <p>
       Gurantee your place for free <Link href="https://events.teams.microsoft.com/event/67caa980-aa48-479a-9eec-bcb023d0e98c@0ff22ae2-bf0f-4aa2-91a1-2c3f1a83c6c6" className="text-blue-500 hover:underline">secure yours today</Link> before they run out!
        </p>
  
        <div className="mt-8 text-center">
          <Link
            href="https://events.teams.microsoft.com/event/67caa980-aa48-479a-9eec-bcb023d0e98c@0ff22ae2-bf0f-4aa2-91a1-2c3f1a83c6c6"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-600"  
          >
            Get Free Tickets
          </Link>
        </div>
  
      </div>
    )
  }