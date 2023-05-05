import Footer from '@/components/Footer'
import React from 'react'

function waitinglist() {
  return (
    <div className="container-fluid">
        <h2 className="py-10 px-10 justify-center text-3xl">
            Thank you for your interest in Crowdpen. <br/>
You have joined our waiting list. <br/>And can't wait to share our roadmap with you.
           
        </h2>
        <Footer/>
    </div>
  )
}

export default waitinglist