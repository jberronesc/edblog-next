// archivo de configuracion

const { PHASE_DEVELOPMENT_SERVER } = require( 'next/constants' )

module.exports  = phase => {
  
  const isDevlopment = phase === PHASE_DEVELOPMENT_SERVER

  const env = {
    SITE_NAME : 'EDBlog',
    API_BLOG : ( () => {
      if ( isDevlopment ) {
        return "https://jsonplaceholder.typicode.com"
      } else {
        return "https://api.edblog.com"
      }
    } )(), //funcion sobre funcion, y que la primera funcion me va a retornar un callback
  }

  return {
    env,
  }
  // env : {
  //   SITE_NAME : 'EDBlog'
  // }
}
