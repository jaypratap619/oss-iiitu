import React, { useState } from 'react'
import Hero from '../components/Hero';
import Info from '../components/Info';
import { homeObjOne, homeObjTwo } from '../components/Info/data';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggleNav={toggleNav} />
      <Navbar toggleNav={toggleNav} />
      <Hero />
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
    </>
  )
}

export default Home