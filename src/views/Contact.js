import React from 'react'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import LetsConnectSection from '../components/LetsConnectSection/LetsConnectSection'
import Map from '../components/MapSection/MapSection'
import ContactMenuSection from '../components/ContactMenuSection/ContactMenuSection'
import LeaveAMessageSection from '../components/LeaveAMessageSection/LeaveAMessageSection'

const contact = () => {
  return (
    <div className='wrapper'>
      <Header/>
      <LetsConnectSection/>
      <ContactMenuSection/>
      <LeaveAMessageSection/>
      <Map/>
      <Footer/>
    </div>
  )
}

export default contact