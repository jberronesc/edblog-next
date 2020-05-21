import React from 'react'
import Link from 'next/link'

const Post = ( { post } ) => (
  <article className="card">
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-4">
      <h3 className="t5 s-mb-2 s-center">
        { post.title }
      </h3>
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
              <img src="path/img" alt="" />
            </div>
          </div>
          <span className="small">{ post.body }</span>
        </div>
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="#"><span>{ `Escrito por el usuario ${ post.id }` }</span></a>
      </div>
      <div className="s-main-center">
        <Link href={ `/blog/${ post.id }` }><a>Leer mas...</a></Link>
      </div>
    </div>
  </article>
)

export default Post
