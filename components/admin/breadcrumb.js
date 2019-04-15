export default () => (
  <div className="header bg-primary pb-6">
    <div className="container-fluid">
      <div className="header-body">
        <div className="row align-items-center py-4">
          <div className="col-lg-6 col-7">
            <h6 className="h2 text-white d-inline-block mb-0">Pages</h6>
            <nav
              aria-label="breadcrumb"
              className="d-none d-md-inline-block ml-md-4"
            >
              <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                <li className="breadcrumb-item">
                  <a href="#">
                    <i className="fas fa-home" />
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  List page
                </li>
              </ol>
            </nav>
          </div>
          <div className="col-lg-6 col-5 text-right">
            <a href="#" className="btn btn-sm btn-neutral">
              New
            </a>
            <a href="#" className="btn btn-sm btn-neutral">
              Filters
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)
