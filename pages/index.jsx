// Head setear desde nuestro componente de pagina osea Home las opciones que va atener la pagina como tal  , pero especificamente dentro del componente Head
import Head from 'next/head'
import Header from '../components/sections/Header'
import fetch from 'node-fetch'
import Post from '../components/blog/Post'

const Home = ( { posts } ) => (
  <div>
    <Head>
      <title>Home | { process.env.SITE_NAME }</title>
    </Head> 

    <main>
      <h1>EdBlog</h1>
      <span>{ process.env.API_BLOG }</span>
      <div className="ed-grid m-grid-3 row-gap">
        {
          posts.map( item => <Post key={ item.id } post={ item } /> )
        }
        {/* <p>{ JSON.stringify( posts ) }</p> */}
      </div>
    </main>
  </div>
)

// va a retornar un objeto en el cua se va a construtir las propiedades que este comoponete Home reciba
// como voy hacer una peticion a un servidor de forma asyncrona async
// la exporto para que pueda ser utilizada desde otro lado 
export async function getStaticProps ( ) {
  
  const resp = await fetch( `${ process.env.API_BLOG }/posts` )
  const posts = await resp.json() 

  return {
    props : {
      posts
    }
  }
}

export default Home
