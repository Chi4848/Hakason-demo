import React from 'react'
import { motion } from "framer-motion"
import './App.css'


const App = () => {
  return (
    <div>
      <header>
        <div className="container">
          <motion.h1 initial={{ x: 2000 }} animate={{ x: 0 }}><a href="">Hakason-demo</a></motion.h1>
          <nav>
            <ul className='menu'>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="hero">
          <img src="/yozora.jpg" alt="" />
        </div>

        <motion.div initial={{ y: 200 }} whileInView={{ y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} className="about">
          <div className="container">
            <h2>ABOUT</h2>
            <div className="intro">
              <div className="intro-img-box">
                <img src="/yozora.jpg" alt="" />
              </div>
              <div className="intro-text-box">
                <h3>Chihi</h3>
                <p>私は元気です</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="photes">
          <div className="container">
            <h2>PHOTES</h2>
            <div className="photes-list">
              <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="phote-1">
                <img src='/yozora.jpg' alt="" />
              </motion.div>
              <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="phote-2">
                <img src='/yozora.jpg' alt="" />
              </motion.div>
              <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="phote-3">
                <img src='/yozora.jpg' alt="" />
              </motion.div>
              <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="phote-4">
                <img src='/yozora.jpg' alt="" />
              </motion.div>
            </div>
          </div>
        </div>



      </main>
      <footer>
        <div className="copyright">
          <p>&copy; 2023 Hakason-demo All rights reserved</p>
        </div>
      </footer>
    </div>
  )
}

export default App