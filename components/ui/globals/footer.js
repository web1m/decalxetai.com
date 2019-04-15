export default () => (
  <footer className="footer footer-dark bg-gradient-primary">
    <div className="container">
      <div className="row pt-md">
        <div className="col-lg-4 mb-5 mb-lg-0">
          <a href="../index.html">
            <img src="/static/img/white.png" alt="Footer logo" height="70" />
          </a>
          <p className="text-sm">
            A unique and beautiful collection of UI elements that are all
            flexible and modular. A complete and customizable solution to
            building the website of your dreams.
          </p>
        </div>

        <div className="col-lg-3 col-6 col-sm-6 mb-5 mb-lg-0 ml-auto">
          <h6 className="heading mb-3">Dịch vụ</h6>
          <ul className="list-unstyled text-small">
            <li>
              <a href="#">Dán ô tô cá nhân</a>
            </li>
            <li>
              <a href="#">Dán thùng xe tải</a>
            </li>
            <li>
              <a href="#">Dán xe bus / xe 46 chổ</a>
            </li>
            <li>
              <a href="#">Dán decal xe 16 chổ</a>
            </li>
            <li>
              <a href="#">In Hiflex / Decal</a>
            </li>
            <li>
              <a href="#">In namecard & Standee</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-sm-6 mb-5 mb-lg-0">
          <h6 className="heading mb-3">Về công ty</h6>
          <ul className="list-unstyled">
            <li>
              <a href="">Trang chủ</a>
            </li>
            <li>
              <a href="#">Giới thiệu</a>
            </li>
            <li>
              <a href="#">Báo giá</a>
            </li>
            <li>
              <a href="#">Góc tư vấn</a>
            </li>
            <li>
              <a href="#">Liên hệ</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row align-items-center justify-content-md-between py-4 mt-4 delimiter-top">
        <div className="col-md-6">
          <div className="copyright text-sm font-weight-bold text-center text-md-left">
            © 2018{' '}
            <a href="/" className="font-weight-bold" target="_blank">
              ZDecal
            </a>
            . All rights reserved.
          </div>
        </div>
        <div className="col-md-6">
          <ul className="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
            <li className="nav-item">
              <a className="nav-link" href="/" target="_blank">
                <i className="fab fa-dribbble" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/" target="_blank">
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" target="_blank">
                <i className="fab fa-github" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" target="_blank">
                <i className="fab fa-facebook" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)
