import Layout from '../components/ui/layout'
import Header from '../components/ui/globals/header'
import Footer from '../components/ui/globals/footer'

export default () => {
  return (
    <Layout>
      <Header />
      <section className="slice slice-xl pb-md bg-secondary">
        <div className="container">
          <div className="mb-md text-center">
            <h1 className="text-dark">Liên hệ</h1>
          </div>
          <div className="row row-grid justify-content-center align-items-center">
            <div className="col-lg-6">
              <form>
                <div className="form-group">
                  <label className="sr-only">Tên của bạn</label>
                  <input
                    placeholder="Tên của bạn"
                    className="form-control form-control-lg"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label className="sr-only">Địa chỉ email</label>
                  <input
                    placeholder="Địa chỉ email"
                    className="form-control form-control-lg"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label className="sr-only">Số điện thoại</label>
                  <input
                    placeholder="Số điện thoại"
                    className="form-control form-control-lg"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label className="sr-only">Tin nhắn</label>
                  <textarea
                    placeholder="Tin nhắn"
                    className="form-control form-control-lg textarea-autosize"
                    rows="5"
                    style={{
                      overflow: 'hidden',
                      overflowWrap: 'break-word',
                      resize: 'none',
                      height: '182px'
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-lg btn-block btn-primary shadow mt-4"
                >
                  Gửi tin nhắn
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <iframe
        width="100%"
        height="450"
        frameborder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC0jlNWT_6YjgSxjavZS_sekNH7A76qGYg
    &q=Space+Needle,Seattle+WA"
        allowfullscreen
      />
      <Footer />
    </Layout>
  )
}
