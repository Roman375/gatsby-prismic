import React from 'react'
import styles from './styles.module.scss'
import slider from '../../images/slider.png'
import avatar from '../../images/avatar.png'

const Slider = () => {
  return (
    <>
    <div className={styles.slider}>
        <img src={slider} alt="slider"></img>
        <div className={styles.slider__inner}>
          <div className={styles.container}>
            <button className={styles.slider__btn}>People</button>
            <p className={styles.slider__link}>
              14 septemvber 2016 | <a href="#">John Doe</a>
            </p>
            <div className={styles.description}>
              <img src={avatar} alt="avatar"></img>
              <h1 className={styles.text}>
                Maecenas quis lobortis nunc. Nullam sit vel odio congue
                vulputate a ut nisi.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Slider
