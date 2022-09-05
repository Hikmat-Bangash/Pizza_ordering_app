import React, { useEffect } from 'react'
import style from '../styles/map.module.css'
import Aos from 'aos'
import Image from 'next/image'

const Map = () => {

  useEffect(() => {
    Aos.init({duration: 1000});
 
}, []) 

  return (
    <>
    <hr className={style.line} />
    <div className="bgcolr">
    <div className={style.container}>
        <div className={style.direc}>
        <h1 className={style.heading} data-aos="fade-left">
          Get <span>Direction</span>
        </h1>
        </div>
      <div className={style.row}>
          <iframe className={style.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105610.23704487827!2d71.96884652486604!3d34.18930180116996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38deca20e7a77bd9%3A0xcede96de9f847fd5!2sMardan%2C%20Khyber%20Pakhtunkhwa%2023200%2C%20Pakistan!5e0!3m2!1sen!2s!4v1648747970967!5m2!1sen!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
</div>
</div>
    </>
  )
}

export default Map