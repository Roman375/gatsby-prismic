import React from 'react'
import styles from './styles.module.scss'

const Footer = () => {
  return (
    <>
    <div className={styles.container}>
        <footer className={styles.footer}>
          <h4 className={styles.footer__text}>
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Try awsome tool for desgners{' '}
            <a href="#">symu.co</a>
          </h4>
        </footer>
      </div>
    </>
  )
}

export default Footer
