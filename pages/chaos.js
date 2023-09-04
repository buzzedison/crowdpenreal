
import CreativeChaos from "../components/chaos/Creativechaos"
import Footer from '@/components/Footer'
import Navbar from '@/components/Nav'
import Expect from "@/components/chaos/Expect"
import Schedule from "@/components/chaos/Schedule"
import Head from "next/head"
export default function chaos() {
  return (
    <div>
       <Head>
      <title> Creative Chaos-CrowdPen</title>
    </Head>
          <Navbar/>
        <CreativeChaos/>
        <Expect/>
        <Schedule/>

<Footer/>
    </div>
  )
}
