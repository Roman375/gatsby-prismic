import React from 'react'
import styles from './styles.module.scss'

const Boxes = () => {
  return (
    <>
    <div className={styles.container}>
        <div className={styles.boxes}>
          <div className={styles.boxes__item} style={{ paddingRight: '20px' }}>
            <div className={styles.boxes__img1}>
              <button className={styles.boxes__btn1}>Nature</button>
            </div>
            <h4 className={styles.boxes__text}>
              Donec elementum dui semper, pretium dui quis, pretium nisl.
            </h4>
            <p className={styles.boxes__link}>
              11 septemvber 2016 | <a href="#">John Doe</a>
            </p>
          </div>

          <div className={styles.boxes__item} style={{ padding: '0 10px' }}>
            <div className={styles.boxes__img2}>
              <button className={styles.boxes__btn2}>People</button>
            </div>
            <h4 className={styles.boxes__text}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae.
            </h4>
            <p className={styles.boxes__link}>
              11 septemvber 2016 | <a href="#">John Doe</a>
            </p>
          </div>

          <div className={styles.boxes__item} style={{ paddingLeft: '20px' }}>
            <div className={styles.boxes__img3}>
              <button className={styles.boxes__btn3}>Tech</button>
            </div>
            <h4 className={styles.boxes__text}>
              Sed arcu ipsum, convallis quis porttitor bibendum, convallis non
              enim.
            </h4>
            <p className={styles.boxes__link}>
              11 septemvber 2016 | <a href="#">John Doe</a>
            </p>
          </div>

          <div className={styles.boxes__item} style={{ paddingRight: '20px' }}>
            <div className={styles.boxes__img4}>
              <button className={styles.boxes__btn4}>Trips</button>
            </div>
            <h4 className={styles.boxes__text}>
              Donec elementum dui semper, pretium dui quis, pretium nisl.
            </h4>
            <p className={styles.boxes__link}>
              11 septemvber 2016 | <a href="#">John Doe</a>
            </p>
          </div>

          <div className={styles.boxes__item} style={{ padding: '0 10px' }}>
            <div className={styles.boxes__img5}>
              <button className={styles.boxes__btn5}>Trips</button>
            </div>
            <h4 className={styles.boxes__text}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae.
            </h4>
            <p className={styles.boxes__link}>
              11 septemvber 2016 | <a href="#">John Doe</a>
            </p>
          </div>

          <div className={styles.boxes__item} style={{ paddingLeft: '20px' }}>
            <div className={styles.boxes__img6}>
              <button className={styles.boxes__btn6}>Fashion</button>
            </div>
            <h4 className={styles.boxes__text}>
              Sed arcu ipsum, convallis quis porttitor bibendum, convallis non
              enim.
            </h4>
            <p className={styles.boxes__link}>
              11 septemvber 2016 | <a href="#">John Doe</a>
            </p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Boxes
