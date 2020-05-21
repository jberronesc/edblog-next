// tiene un [] en el archivo porque le voy a decir que tiene que recibir un parametro

import Head from 'next/head'
import fetch from 'node-fetch'

const PostBlog = ( { post } ) => ( 
  <div>
    <Head>
      <title>Home | { process.env.SITE_NAME }</title>
    </Head> 
    <main>
      <h1>{ post.title }</h1>
      <p>{ post.body }</p>
    </main>
  </div> 
)

// esto a diferencia del index que me retornaba que dentro tenia props "export async function getStaticProps ( ) {" 
// este ya me va a devolver automaticamente el objeto props ya directamente
PostBlog.getInitialProps = async function ( context  ) {
  
  const { id } = context.query

  const resp = await fetch( `${ process.env.API_BLOG }/posts/${ id }` )
  const post = await resp.json() 

  return {
    post
  }
}

export default PostBlog
