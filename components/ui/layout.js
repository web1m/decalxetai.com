import React from 'react'
import '../../lib/ui/app.css'
import '../../lib/admin/animate.css'
import './layout.css'
import Head from 'next/head'

export default props => (
  <>
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/img/global/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="/static/img/favicon.png"
        sizes="32x32"
      />
    </Head>
    <div>{props.children}</div>
  </>
)
