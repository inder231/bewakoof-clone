import { Box } from '@chakra-ui/react'
import React from 'react'
import Banner from '../component/Banner'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Navbar from '../component/Navbar'

const Home = () => {
  return (
    <Box position="relative" >
        <Header/>
        <Navbar/>
        <Banner/>
        <Footer/>
    </Box>
  )
}

export default Home