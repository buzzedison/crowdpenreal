export default function Tickets() {
    return (
      <div className="bg-gray-900 text-white py-16">
  
        <div className="container mx-auto px-4">
  
          <div className="max-w-lg mx-auto text-center">
          
            <h2 className="text-3xl font-bold mb-4">
              Get Your Free Tickets
            </h2>
  
            <p className="text-gray-400 mb-8">
              Spots are limited for this exclusive online event. Reserve your virtual seat today!
            </p>
            
            <a 
              href="https://events.teams.microsoft.com/event/67caa980-aa48-479a-9eec-bcb023d0e98c@0ff22ae2-bf0f-4aa2-91a1-2c3f1a83c6c6"
              target="_blank"
              className="inline-block bg-yellow-500 hover:bg-black active:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-300 text-black hover:text-white px-8 py-3 rounded-full"
            >
              Get Tickets
            </a>
          
          </div>
  
        </div>
  
      </div>
    )
  }