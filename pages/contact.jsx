// Head setear desde nuestro componente de pagina osea Home las opciones que va atener la pagina como tal  , pero especificamente dentro del componente Head
import Head from 'next/head'
import Header from '../components/sections/Header'

const Contact = () => ( 
  <div>
    <Head>
      <title>Contacto | { process.env.SITE_NAME }</title>
    </Head> 
    
    <main>
      <h1>EdBlog Contact</h1>
      <span>Bienvenidos a EdBlog de Jeffferson Contact</span>
    </main>
  </div> 
)

export default Contact
