import Layout from '../components/ui/layout'
import Header from '../components/ui/globals/header'
import Footer from '../components/ui/globals/footer'

export default () => {
  return (
    <Layout>
      <Header />
      <section class="slice mt-lg">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <h2 class="h2 mb-2">Getting started with Purpose</h2>
              <p class="lead mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              <article class="mt-5">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit
                </p>
                <h5>First thing you need to do</h5>
                <figure class="figure">
                  <img
                    alt="Image placeholder"
                    src="/static/img/code-1.jpg"
                    class="img-fluid rounded"
                  />
                  <figcaption class="mt-3 text-muted">
                    Figure one: Type here your description
                  </figcaption>
                </figure>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <h5>Second thing you need to do</h5>
                <figure class="figure">
                  <img
                    alt="Image placeholder"
                    src="/static/img/code-1.jpg"
                    class="img-fluid rounded"
                  />
                  <figcaption class="mt-3 text-muted">
                    Figure two: Type here your description
                  </figcaption>
                </figure>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </article>
            </div>
            <div class="col-lg-4 ml-lg-auto">
              <div data-toggle="sticky" data-sticky-offset="100" class="">
                <div class="card">
                  <div class="card-header">
                    <span class="h6 mb-0">Categories</span>
                  </div>
                  <div class="list-group list-group-flush">
                    <a
                      href="#section_1"
                      data-scroll-to=""
                      data-scroll-to-offset="50"
                      class="list-group-item list-group-item-action d-flex justify-content-between px-4"
                    >
                      <div>
                        <i class="far fa-desktop mr-2" />
                        <span>Theme integration</span>
                      </div>
                      <div>
                        <i class="far fa-angle-right" />
                      </div>
                    </a>
                    <a
                      href="#section_2"
                      data-scroll-to=""
                      data-scroll-to-offset="50"
                      class="list-group-item list-group-item-action d-flex justify-content-between px-4"
                    >
                      <div>
                        <i class="far fa-hand-pointer mr-2" />
                        <span>Customization</span>
                      </div>
                      <div>
                        <i class="far fa-angle-right" />
                      </div>
                    </a>
                    <a
                      href="#section_3"
                      data-scroll-to=""
                      data-scroll-to-offset="50"
                      class="list-group-item list-group-item-action d-flex justify-content-between px-4"
                    >
                      <div>
                        <i class="far fa-tint mr-2" />
                        <span>Fonts and colors</span>
                      </div>
                      <div>
                        <i class="far fa-angle-right" />
                      </div>
                    </a>
                    <a
                      href="#"
                      class="list-group-item list-group-item-action d-flex justify-content-between px-4"
                    >
                      <div>
                        <i class="far fa-cloud mr-2" />
                        <span>Updates</span>
                      </div>
                      <div>
                        <i class="far fa-angle-right" />
                      </div>
                    </a>
                    <a
                      href="#"
                      class="list-group-item list-group-item-action d-flex justify-content-between px-4"
                    >
                      <div>
                        <i class="far fa-at mr-2" />
                        <span>Premium support</span>
                      </div>
                      <div>
                        <i class="far fa-angle-right" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  )
}
