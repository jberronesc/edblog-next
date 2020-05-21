// El _document.jsx es el que te va a permitir sobreescribir las etiquetas header como body que next se salta ese renderizado

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument  extends Document {

  // resulta que next por defecto tiene un metodo estatico y es asincrono, 
  // nos permite obtener propiedades del lado del servidor 

  // este nos va a permitir cargarle propiedades a nuetsra clase pero desde el lado del servidor
  // en otras palabras este metodo asincrono nos va permitir obtener propiedades del lado del servidor
  static async getInitialProps ( ctx ) {
    // vas a ser una respuesta asincrona, va a esperar que el documento cargue precisamente ese conexto
    const initialProps = await Document.getInitialProps( ctx )
    return { ...initialProps }
  }

  render () {
    return (
      /* podemos aprobechar para sobreescribir algunas etiquetas como lang="es"  */
      <Html lang="es">
        <Head>
          <body className="ed-grid">
            <Main />
            <NextScript />
          </body>
        </Head>
      </Html>
    )
  }

}

export default MyDocument
