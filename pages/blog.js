import format from 'date-fns/format'
import Layout from '../components/ui/layout'
import Header from '../components/ui/globals/header'
import Footer from '../components/ui/globals/footer'

const Blog = ({ posts }) => {
  return (
    <Layout>
      <Header />
      <div className="container" style={{ marginTop: '7rem' }}>
        <div className="row">
          {posts.map((v, i) => (
            <div className="col-lg-4 mb-4" key={i}>
              <a href={`/blog/${v.sourceBase.split('.')[0]}`}>
                <div data-animate-hover="1">
                  <div className="animate-this">
                    <img
                      alt="Image placeholder"
                      className="img-fluid rounded shadow"
                      src={v.thumbnail}
                    />
                  </div>
                  <div className="pt-4">
                    <small className="text-uppercase">
                      {format(new Date(`${v.date}`), 'dd/MM/yyyy')}
                    </small>
                    <h5>{v.title}</h5>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </Layout>
  )
}
Blog.getInitialProps = async () => {
  const SUMMARY_BLOG_JSON = require('../content/blog/summary.json')
  let posts = []
  SUMMARY_BLOG_JSON.fileMap &&
    Object.keys(SUMMARY_BLOG_JSON.fileMap).forEach(file => {
      const fileObj = SUMMARY_BLOG_JSON.fileMap[file]
      posts.push(fileObj)
    })

  return { posts }
}
export default Blog
