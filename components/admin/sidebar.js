import Link from './activeLink'

export default () => (
  <nav className="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white">
    <div
      className="scroll-wrapper scrollbar-inner"
      style={{ position: 'relative' }}
    >
      <div
        className="scrollbar-inner scroll-content scroll-scrolly_visible"
        style={{
          height: 'auto',
          marginBottom: 0,
          marginRight: 0,
          maxHeight: 346
        }}
      >
        <div className="sidenav-header d-flex align-items-center">
          <a
            className="navbar-brand"
            href="../../pages/dashboards/dashboard.html"
          >
            <img
              src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/brand/blue.png"
              className="navbar-brand-img"
              alt="logo"
            />
          </a>
          <div className="ml-auto">
            <div
              className="sidenav-toggler d-none d-xl-block active"
              data-action="sidenav-unpin"
              data-target="#sidenav-main"
            >
              <div className="sidenav-toggler-inner">
                <i className="sidenav-toggler-line" />
                <i className="sidenav-toggler-line" />
                <i className="sidenav-toggler-line" />
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-inner">
          <div className="collapse navbar-collapse" id="sidenav-collapse-main">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link activeClassName="active" href="/admin">
                  <a className="nav-link">
                    <i className="fa fa-puzzle-piece text-primary" />
                    <span className="nav-link-text">Dashboards</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link activeClassName="active" href="/admin/pages">
                  <a className="nav-link">
                    <i className="fa fa-puzzle-piece text-primary" />
                    <span className="nav-link-text">Pages</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
)
