import React from 'react'
import Carouselapp from '../Components/Carousel'
import Footer from '../Components/Footer'
import CategoryBar from '../Components/Navbar/CategoryBar'
import SearchBar from '../Components/Navbar/SearchBar'

import Topbar from '../Components/Navbar/TopBar'

const Homepage = () => {
  return (
    <div>
      <Topbar/>
      <SearchBar/>
      <CategoryBar/>
      <Carouselapp/>
      <Footer />
    </div>
  )
}

export default Homepage
