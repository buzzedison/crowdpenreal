import AirtableForm from '@/components/Airtable'
import Footer from '@/components/Footer'
import Navbar from '@/components/Nav'
import React from 'react'

function waiting() {
  return (
    <div>
      <Navbar/>
        <AirtableForm/>
        <Footer/>
    </div>
  )
}

export default waiting