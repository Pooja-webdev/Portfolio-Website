import React from 'react'
import './Certificate.css'
import css from '../assets/css-certificate.png'
import js from '../assets/javascript-certificate.png'
import intern from '../assets/Intern-certificate.png'
import { Element } from 'react-scroll'

const Certificates = () => {
  return (
    <Element name="certificate">
    <div className='certificate-container'>
    <h1>CERTIFICATE</h1>
    <img src={intern} alt="Intern-certificate"/>
    <img src={css} alt="css-certificate"/>
    <img src={js} alt="js-certificate"/>
    
    </div>
    </Element>
  )
}

export default Certificates