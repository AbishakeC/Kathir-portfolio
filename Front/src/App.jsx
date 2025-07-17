import React from 'react'
import { motion } from 'framer-motion'
import { GiHamburger } from 'react-icons/gi';
import Header from './Header'
import Mainpage from './pages/mainpage'
import Page2 from './pages/page2'
import Page3 from './pages/page3'
import Page4 from './pages/page4'
import Page5 from './pages/page5'
import Form from './pages/Form'

const App = () => {
  return (
    <div >
    <Header/>
    <Mainpage/>
    <Page2/>
    <Page3/>
    <Page4/>
    <Page5/>
    <Form/>
    </div>
  )
}

export default App
