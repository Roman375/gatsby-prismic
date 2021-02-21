import React from 'react'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import styles from './styles.module.scss'
import slider from '../../public/images/slider.png'
import avatar from '../../public/images/avatar.png'
import prev from '../../public/images/prev.png'
import next from '../../public/images/next.png'
import ellipse from '../../public/images/ellipse.png'
import search from '../../public/images/search.png'

const Homepage = ({ data }) => {
  console.log(data)
  const prismicContent = data.prismic.allHomepages.edges[0]
  if (!prismicContent) {
    return null
  }
  const document = prismicContent.node

  const bannerContent = {
    title: document.banner_title,
    description: document.banner_description,
    link: document.banner_link,
    linkLabel: document.banner_link_label,
    background: document.banner_background,
  }

  console.log(data)
  return (
    <div className={styles.body}>
      {/* Header */}
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

      {/* Slider */}
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

      {/* Big Boxes */}
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

      {/* Huge Box */}
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

      {/* Boxes */}
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

      {/* Big Boxes */}
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

      {/* Newsletter */}
      <div className={styles.newsletter}></div>

      {/* Footer */}
      <div className={styles.container}>
        <footer className={styles.footer}>
          <h4 className={styles.footer__text}>
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Try awsome tool for desgners{' '}
            <a href="#">symu.co</a>
          </h4>
        </footer>
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    prismic {
      allHomepages {
        edges {
          node {
            banner_title
            banner_description
            banner_link {
              _linkType
              ... on PRISMIC_Page {
                _meta {
                  uid
                  type
                }
              }
            }
            banner_link_label
            banner_background
          }
        }
      }
    }
  }
`

export default Homepage
