import Link from 'next/link';
export default function ChallengeHero() {
    return (
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto py-12 md:py-24 px-4 sm:px-6 lg:px-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Voices of the Future Writing Challenge
          </h1>
          <p className="mt-4 text-xl">
            Discover how future generations in African communities might evolve in technology, culture, and identity.
          </p>
          <div className="mt-6">
            <span className="block text-2xl font-semibold mb-4">
              Win $50 Cash!
            </span>
            <Link href="#details" className="bg-white text-black px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-100 transition duration-300">
            Apply Now
            </Link>
          </div>
        </div>
      </div>
    );
  }
  