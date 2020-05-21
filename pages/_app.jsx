// les estoy diciendo a todas las paginas que yo tenga declarada que se vana renderizar a partir de esta funcion

import Header from "../components/sections/Header"

// esta funcion es la que se va a encargar de rederizar el contenido de todas mis paginas

function App ( { Component, pageProps } ) {
  return  (
    <>
      <Header />
      <Component { ...pageProps } />
    </>
  )
}

export default App
