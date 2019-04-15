export default ({ hero }) => {
  return (
    <section
      className="slice slice-xl pb-0 bg-secondary pb-5"
      data-separator="rounded-continuous"
      data-separator-bg="dark"
      style={{ background: 'white' + ' !important' }}
    >
      <div className="container d-flex align-items-end px-0 pt-md pt-lg-0">
        <div className="col">
          <div className="row align-items-center justify-content-around">
            <div className="col-lg-6 text-center text-lg-left">
              <h1>{hero.title}</h1>
              <p className="lead mt-4">{hero.description}</p>
              <div className="mt-5">
                <a
                  href="#"
                  className="btn btn-primary btn-circle btn-translate--hover mr-4"
                >
                  Danh sách dịch vụ
                </a>
                <a
                  href="#"
                  className="btn btn-outline-dark btn-circle btn-translate--hover d-none d-lg-inline-block"
                >
                  Xem báo giá
                </a>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0 align-self-end">
              {/* <img
                alt="Image placeholder"
                src={hero.image}
                className="img-fluid img-center"
              /> */}
              <video autoPlay loop muted playsinline style={{ width: '100%' }}>
                <source src="/static/video/Render.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
