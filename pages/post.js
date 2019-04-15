import { withRouter } from 'next/router'
import Layout from '../components/ui/layout'
import Header from '../components/ui/globals/header'
import Footer from '../components/ui/globals/footer'

const Post = ({ router: { query } }) => {
  let fileContent = {}
  try {
    if (query) {
      if (query.q) {
        fileContent = require(`../content/blog/${query.q}.md`)
      }
    }
  } catch (error) {}

  const {
    html,
    attributes: { title, date, thumbnail, slug }
  } = fileContent

  return (
    <Layout>
      <Header />
      <div className="main-content">
        <section className="slice slice-sm mt-5" data-offset-top="#header-main">
          <div className="container">
            <div className="row justify-content-center  mt-5">
              <div className="col-md-9">
                <h1 className="lh-150">{title}</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="slice">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <article dangerouslySetInnerHTML={{ __html: html }} />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </Layout>
  )
}

export default withRouter(Post)
