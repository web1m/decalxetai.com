export default ({ services }) => {
  return (
    <section className="pb-lg bg-dark">
      <div className="container">
        <div className="text-center">
          <h3 className="h2 text-white">{services.title}</h3>
          <div className="mt-5">
            <p className="text-light mt-4">{services.description}</p>
            <a
              href="#"
              className="btn btn-outline-light btn-circle btn-translate--hover d-none d-lg-inline-block"
            >
              Xem thêm
            </a>
          </div>
        </div>
      </div>

      <div className="container masonry-container mt-5">
        <div className="row">
          {services.listServices.map((value, i) => (
            <div key={i} className="masonry-item col-lg-4">
              <div className="card shadow-sm shadow--hover overflow-hidden">
                <img
                  alt="Image placeholder"
                  src={value.image}
                  className="card-img-top"
                />
                <span className={`mask ${value.bgColor} opacity-9`} />
                <span
                  className={`mask mask--hover ${value.bgColor} opacity-8`}
                />
                <div className="card-img-overlay d-flex flex-column">
                  <div className="my-auto justify-content-center text-center px-3 py-5">
                    <a href={value.link} className="h3 text-white">
                      {value.name}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
