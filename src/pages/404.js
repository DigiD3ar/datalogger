import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import ghost from '../images/404.gif'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <img src={ghost} alt="a ghost" />


  </Layout>
)

export default NotFoundPage
