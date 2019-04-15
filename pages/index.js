import Layout from '../components/ui/layout'
import Header from '../components/ui/globals/header'
import Footer from '../components/ui/globals/footer'
import Hero from '../components/ui/pages/index/hero'
import Services from '../components/ui/pages/index/services'
import Testimonial from '../components/ui/pages/index/testimonial'
import Subscribe from '../components/ui/pages/index/subscribe'
import LastestBlog from '../components/ui/pages/index/lastest-blog'
import content from '../content/index.md'

export default () => {
  const {
    attributes: { hero, services, testimonial }
  } = content
  return (
    <Layout>
      <Header />
      <Hero hero={hero} />
      <Services services={services} />
      <Testimonial testimonial={testimonial} />
      <Subscribe />
      <LastestBlog />
      <Footer />
    </Layout>
  )
}
