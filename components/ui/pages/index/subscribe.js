export default () => {
  return (
    <section className="slice py-5 bg-dark">
      <div className="container">
        <div className="row row-grid align-items-center justify-content-center">
          <div className="col-lg-4">
            <div className="pr-lg-5 text-center text-lg-right">
              <h5 className="mb-0 text-white" style={{ fontSize: '0.9rem' }}>
                Để lại số điện thoại để chúng tôi liên lạc bạn
              </h5>
            </div>
          </div>
          <div className="col-lg-6">
            <form>
              <div className="form-group shadow mb-0">
                <div className="input-group input-group-lg">
                  <input
                    type="text"
                    className="form-control border-left-0"
                    style={{ height: 50, fontSize: 16 }}
                    placeholder="Nhập vào số điện thoại ..."
                    data-kwimpalastatus="alive"
                    data-kwimpalaid="1549300727124-3"
                  />
                  <div className="input-group-append">
                    <button
                      type="button"
                      className="btn btn-outline-light"
                      style={{ height: 50, fontSize: 16 }}
                    >
                      Gửi
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
