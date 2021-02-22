import React from 'react'
import styles from './styles.module.scss'
import search from '../../images/search.png'
import ellipse from '../../images/ellipse.png'

const Header = () => {
  return (
    <>
    
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.header__inner}>
            <h4 className={styles.logo}>Blog tamplate</h4>
            <div className={styles.search}>
              <img src={search}></img>
            </div>
            <nav className={styles.nav__pages}>
              <a className={styles.nav__pages_link} href="#">
                About
              </a>
              <a className={styles.nav__pages_link} href="#">
                Cooperation
              </a>
              <a className={styles.nav__pages_link} href="#">
                Contact
              </a>
            </nav>
            <nav className={styles.nav}>
              <a className={styles.nav__link} href="#">
                Nature
              </a>
              <a className={styles.nav__link} href="#">
                People
              </a>
              <a className={styles.nav__link} href="#">
                Trips
              </a>
              <a className={styles.nav__link} href="#">
                Animals
              </a>
              <a className={styles.nav__link} href="#">
                Fashion
              </a>
              <a className={styles.nav__link} href="#">
                Tech
              </a>
              <a className={styles.nav__link_ellipse}>
                <img src={ellipse} alt="ellipse"></img>
                <img src={ellipse} alt="ellipse"></img>
                <img src={ellipse} alt="ellipse"></img>
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
