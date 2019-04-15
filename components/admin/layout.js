import Head from 'next/head'
// import '../../lib/admin/main.css'
// import '../../lib/admin/font-awesome.css'
// import '../../lib/admin/animate.css'
// import './layout.css'

export default ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
    </Head>
    <div className="mdc-typography">{children}</div>
  </>
)
