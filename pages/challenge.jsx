import Link from 'next/link';
import Footer from '@/components/Footer'
import Navbar from '@/components/Nav'
import Head from "next/head"


export default function Signup() {
  return (
    <>
      <Head>
      <title> Challenge-CrowdPen</title>
    </Head>
    <Navbar/>
    <div className="min-h-screen bg-black py-6 flex flex-col justify-center sm:py-12">
      {/* Hero Section */}
      <div className="w-full relative py-16 sm:max-w-xl sm:mx-auto  text-white">
        <h1 className="text-5xl font-extrabold text-center">
          Join the Ultimate Writing Challenge!
        </h1>
        <p className="mt-4 text-center text-lg">
          You could be one of 20 winners who receive up to $100 in cash prizes and perks!
        </p>
      </div>

      {/* Top 3 Things */}
      <div className="container mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card bg-white shadow-2xl rounded-xl p-6 transform hover:scale-105 transition-transform">
          <h2 className="text-2xl font-extrabold mb-4">Win up to $100 </h2>
          <p>Get rewarded for your writing.<br/>Like never before.</p>
        </div>
        <div className="card bg-white shadow-2xl rounded-xl p-6 transform hover:scale-105 transition-transform">
          <h2 className="text-2xl font-extrabold mb-4">Community Connection</h2>
          <p>Connect with a community of like-minded writers.</p>
        </div>
        <div className="card bg-white shadow-2xl rounded-xl p-6 transform hover:scale-105 transition-transform">
          <h2 className="text-2xl font-extrabold mb-4">Industry Exposure</h2>
          <p>Gain exposure and recognition in the industry.</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-extrabold text-center mb-8">
          Ready to Join the Waitlist?
        </h2>
        <div className="text-center">
          <Link href="/waiting-list">
            <button className="px-8 py-4 text-lg font-bold bg-yellow-700 text-white rounded-full shadow-2xl">
              Sign Up Now
            </button>
          </Link>
        </div>
      </div>
    </div>
     
    <Footer/>
    </>
  );
}
