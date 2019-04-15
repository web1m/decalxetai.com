import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap'

export default () => (
  <nav className="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form
          className="navbar-search navbar-search-light form-inline mr-sm-3"
          id="navbar-search-main"
        >
          <div className="form-group mb-0">
            <div className="input-group input-group-alternative input-group-merge">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-search" />
                </span>
              </div>
              <input
                className="form-control"
                placeholder="Search"
                type="text"
              />
            </div>
          </div>
          <button
            type="button"
            className="close"
            data-action="search-close"
            data-target="#navbar-search-main"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </form>
        <ul className="navbar-nav align-items-center ml-md-auto">
          <li className="nav-item d-xl-none">
            <div
              className="pr-3 sidenav-toggler sidenav-toggler-dark active"
              data-action="sidenav-pin"
              data-target="#sidenav-main"
            >
              <div className="sidenav-toggler-inner">
                <i className="sidenav-toggler-line" />
                <i className="sidenav-toggler-line" />
                <i className="sidenav-toggler-line" />
              </div>
            </div>
          </li>
          <li className="nav-item d-sm-none">
            <a
              className="nav-link"
              href="#"
              data-action="search-show"
              data-target="#navbar-search-main"
            >
              <i className="ni ni-zoom-split-in" />
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-bell" />
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-object-ungroup" />
            </a>
          </li>
        </ul>
        <ul className="navbar-nav align-items-center ml-auto ml-md-0">
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav className="nav-link pr-0">
              <div className="media align-items-center">
                <span className="avatar avatar-sm rounded-circle">
                  <img
                    alt="Image placeholder"
                    src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg"
                  />
                </span>
                <div className="media-body ml-2 d-none d-lg-block">
                  <span className="mb-0 text-sm  font-weight-bold">
                    John Snow
                  </span>
                </div>
              </div>
            </DropdownToggle>
            <DropdownMenu right>
              <div className="dropdown-header noti-title">
                <h6 className="text-overflow m-0">Welcome!</h6>
              </div>
              <a href="#!" className="dropdown-item">
                <i className="ni ni-single-02" />
                <span>My profile</span>
              </a>
              <a href="#!" className="dropdown-item">
                <i className="ni ni-settings-gear-65" />
                <span>Settings</span>
              </a>
              <a href="#!" className="dropdown-item">
                <i className="ni ni-calendar-grid-58" />
                <span>Activity</span>
              </a>
              <a href="#!" className="dropdown-item">
                <i className="ni ni-support-16" />
                <span>Support</span>
              </a>
              <div className="dropdown-divider" />
              <a href="#!" className="dropdown-item">
                <i className="ni ni-user-run" />
                <span>Logout</span>
              </a>
            </DropdownMenu>
          </UncontrolledDropdown>
        </ul>
      </div>
    </div>
  </nav>
)
