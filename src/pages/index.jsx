import React from 'react'
import { graphql } from 'gatsby'

import styles from './styles.module.scss'
import Header from '../components/Header/Header'
import Slider from '../components/Slider/Slider'
import BigBoxes from '../components/BigBoxes/BigBoxes'
import HugeBoxes from '../components/HugeBoxes/HugeBoxes'
import Boxes from '../components/Boxes/Boxes'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import Footer from '../components/Footer/NewsLetter/Footer'

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
      <Header />
      {/* Slider */}
      <Slider />
      {/* Big Boxes */}
      <BigBoxes />
      {/* Huge Box */}
      <HugeBoxes />
      {/* Boxes */}
      <Boxes />
      {/* Big Boxes */}
      <BigBoxes />
      {/* Newsletter */}
      <NewsLetter />
      {/* Footer */}
      <Footer />
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
