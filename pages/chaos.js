
import CreativeChaos from "../components/chaos/Creativechaos"
import Footer from '@/components/Footer'
import Navbar from '@/components/Nav'

import Schedule from "@/components/chaos/Schedule"
import Tabs from "@/components/chaos/Tabs"
import Head from "next/head"
export default function chaos() {
  return (
    <div>
       <Head>
      <title> Creative Chaos-CrowdPen</title>
    </Head>
          <Navbar/>
        <CreativeChaos/>
        <Tabs/>
   
        <Schedule/>

<Footer/>
    </div>
  )
}
