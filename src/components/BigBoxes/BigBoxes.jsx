import React from 'react'
import styles from './styles.module.scss'

const BigBoxes = () => {
  return (
    <>
    <div className={styles.bigboxes__backroud}>
        <div className={styles.container}>
          <div className={styles.bigboxes}>
            <div className={styles.bigboxes__item1}>
              <div className={styles.bigboxes__img}>
                <button className={styles.bigboxes__btn}>Trips</button>
              </div>
              <h4 className={styles.bigboxes__text}>
                Donec elementum dui semper, pretium dui quis, pretium nisl. Nunc
                quis ornare odio.
              </h4>
              <p className={styles.bigboxes__link}>
                11 septemvber 2016 | <a href="#">John Doe</a>
              </p>
            </div>

            <div className={styles.bigboxes__item2}>
              <div className={styles.bigboxes__img}>
                <button className={styles.bigboxes__btn}>Tech</button>
              </div>
              <h4 className={styles.bigboxes__text}>
                Maecenas quis lobortis nunc. Nullam sit amet augue vel odio
                congue vulputate a ut nisi.
              </h4>
              <p className={styles.bigboxes__link}>
                14 septemvber 2016 | <a href="#">John Doe</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BigBoxes
