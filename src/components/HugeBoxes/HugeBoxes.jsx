import React from 'react'
import styles from './styles.module.scss'

const HugeBoxes = () => {
  return (
    <>
    <div className={styles.container}>
        <div className={styles.hugebox}>
          <div className={styles.hugebox__item}>
            <button className={styles.hugebox__btn}>Trips</button>
            <h1 className={styles.hugebox__text}>
              Proin congue elit fringilla
              <p>
                sodales tellus interdum fermentum nulla. Aliquam vitae arcu
                condimentum, consectetur diam sed, ultrices urna.
              </p>
            </h1>
            <p className={styles.hugebox__link}>
              11 septemvber 2016 | <a href="#">John Doe</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HugeBoxes
