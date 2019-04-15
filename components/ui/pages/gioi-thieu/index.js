export default ({ title, text, features }) => {
  return (
    <>
      <section
        className="sice slice-lg pb-50"
        style={{ backgroundColor: '#05172A' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7 py-lg">
              <div className="">
                <h2 className="display-4 text-white mb-4 lh-110">{title}</h2>
                <div className="row">
                  <div className="col-lg-10">
                    <p className="lead text-white lh-180">{text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="slice slice-lg">
        <div className="container">
          <div className="row row-grid align-items-center mt--200">
            <div className="col-lg-7">
              <img
                alt="Image placeholder"
                src={features[0].image}
                className="img-center img-fluid rounded shadow"
              />
            </div>

            <div className="col-lg-5 ml-lg-auto">
              <div className="pt-lg-lg pl-lg-5">
                <h3 className="heading h3">{features[0].name}</h3>
                <p className="lead text-gray my-4">{features[0].description}</p>
              </div>
            </div>
          </div>
          <div className="row row-grid align-items-center">
            <div className="col-lg-7 order-lg-2 ml-lg-auto">
              <img
                alt="Image placeholder"
                src={features[1].image}
                className="img-center img-fluid rounded shadow"
              />
            </div>

            <div className="col-lg-5 order-lg-1">
              <div className="pr-lg-5">
                <h3 className="heading h3">{features[1].name}</h3>
                <p className="lead text-gray my-4">{features[1].description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="slice slice-lg bg-secondary">
        <span className="tongue tongue-top">
          <i className="far fa-angle-up" />
        </span>

        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-8 text-center">
              <h3 className="font-weight-400">
                Choose the best solution for your business
              </h3>
              <div className="mt-5">
                <a
                  href="/"
                  className="btn btn-primary btn-circle btn-translate--hover px-4"
                  style={{ backgroundColor: '#05172A', border: '0' }}
                >
                  Xem dịch vụ
                </a>
                <a href="/" className="btn btn-link">
                  Liên hệ
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
