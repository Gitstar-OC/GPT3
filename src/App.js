import React from 'react';
import { Footer, Blog, Possiblity, WhatGPT3, Header, Features} from "./container"
import { CTA, Brand, Navbar, Article } from './components'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Article />
      <Possiblity />
      <CTA /> 
      <Blog />
      <Footer />
    </div>
  )
}

export default App
