// Head setear desde nuestro componente de pagina osea Home las opciones que va atener la pagina como tal  , pero especificamente dentro del componente Head
import Head from 'next/head'
import Header from '../components/sections/Header'

const Home = () => (
  <div>
    <Head>
      <title>Home | { process.env.SITE_NAME }</title>
    </Head> 
    
    <main>
      <h1>EdBlog</h1>
      <span>{ process.env.API_BLOG }</span>
    </main>
  </div>
)

export default Home
