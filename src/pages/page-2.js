import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => {
 //agregar sidepanel con nombre de usuario y boton de logout
 // lista con archivos, Nombre de archivo y fecha de subida
 // debajo de la lista un campo donde añadir mas archivos con boton de subida


  return(
 <Layout>
    <Seo title="Page two" />
    <h1>Panel</h1>
    
  </Layout>)
}

export default SecondPage
