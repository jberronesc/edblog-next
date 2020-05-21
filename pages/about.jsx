// Head setear desde nuestro componente de pagina osea Home las opciones que va atener la pagina como tal  , pero especificamente dentro del componente Head
import Head from 'next/head'
import Header from '../components/sections/Header'

const About = () => ( 
  <div>
    <Head>
      <title>Home | { process.env.SITE_NAME }</title>
    </Head> 
    <Header />
    <main>
      <h1>EdBlog About</h1>
      <span>Bienvenidos a EdBlog de Jeffferson About</span>
    </main>
  </div> 
)

export default About
