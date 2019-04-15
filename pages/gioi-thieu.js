import Layout from '../components/ui/layout'
import Header from '../components/ui/globals/header'
import Footer from '../components/ui/globals/footer'
import GioiThieu from '../components/ui/pages/gioi-thieu'
import content from '../content/gioi-thieu.md'

export default () => {
  const {
    html,
    attributes: { title, text, features }
  } = content
  return (
    <Layout>
      <Header />
      <GioiThieu title={title} text={text} features={features} />
      <Footer />
    </Layout>
  )
}
