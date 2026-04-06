import React from 'react'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import Main from './Components/Main'
import Desc from './Components/Desc'
import Footer from './Components/Footer'
import Card from './Components/Card'

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Main />
      <div className='bg-[#F5F5F7]'>

      <Card />
      <Desc />
      <Footer />
            </div>

    </div>
  )
}

export default App