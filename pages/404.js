import Layout from '../components/ui/layout'
import Header from '../components/ui/globals/header'
import Footer from '../components/ui/globals/footer'
import Link from 'next/link'

export default () => (
  <Layout>
    <Header />
    <div className="container">
      <article
        style={{
          textAlign: `center`,
          display: 'flex',
          height: '100vh',
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'center'
        }}
      >
        <section>
          Error 404! Page not found, <Link to="/">return home</Link> to start
          over
        </section>
      </article>
    </div>
    <Footer />
  </Layout>
)
