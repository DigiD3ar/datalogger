import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo" 
import "../css/style.css"


const IndexPage = () =>{

  const [valor, setValor] = React.useState(true)
  const cambioValor = () => setValor(!valor)

  return(
  <Layout>
    <Seo title="Home" />
    <div class="login-page">
      <div class="form">
        <div class="login">
          <div class="login-header">
            <h3>LOGIN</h3>
            <p>Inicia sesión.</p>
          </div>
        </div>
        <form class="login-form">
          <input type="text" placeholder="Usuario"/>
          <input type="password" placeholder="Contraseña"/>
          <Link to="/page-2/"><button>Iniciar</button></Link>
          <p class="message">No estoy registrado? <a href="#">Crer una cuenta?</a></p>
        </form>
      </div>
    </div>
  </Layout>
  )
}

export default IndexPage
