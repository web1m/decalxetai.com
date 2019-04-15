import Layout from '../components/ui/layout'
import Header from '../components/ui/globals/header'
import Footer from '../components/ui/globals/footer'

export default () => {
  return (
    <Layout>
      <Header />
      <section className="slice slice-lg pb-200 bg-secondary">
        <div className="container pt-lg">
          <div className="row row-grid justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="h2 mb-4">Báo giá dịch vụ thi công decal 2019</h2>
              <p className="lead lh-180 text-muted">
                Khách hàng lưu ý, bảng giá bên dưới chỉ mang tính chất tham
                thảo, giá thực tế phụ thuộc vào vị trí thi công và file thiết
                kế,…
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="slice slice-lg bg-secondary">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card shadow mt--200">
                <div className="card-body px-lg-5 py-lg-5">
                  <h4 className="mb-4">
                    Decal kính mờ ( không cắt sọc, Logo,…)
                  </h4>
                  <p>Giá trọn gói 110.000 – 135.000 VNĐ/m2</p>
                  <p>
                    Số lượng Dán Decal Kính mờ dưới 10m2 phụ thu thêm 200.000
                    VNĐ
                  </p>
                </div>
              </div>
              <div className="card shadow mt-5">
                <div className="card-body px-lg-5 py-lg-5">
                  <h4 className="mb-4">Decal mờ dán kính – cắt sọc</h4>
                  <p>
                    Cắt theo yêu cầu khổ cao 1,2m [ dài hơn phải nối decal ]
                    (decal kính + công dán + cắt máy decal)
                  </p>
                  <p>Giá 130.000 – 180.000 VNĐ/m2</p>
                  <p>
                    Số lượng Dán Decal Kính mờ dưới 10m2 phụ thu thêm 200.000
                    VNĐ
                  </p>
                </div>
              </div>
              <div className="card shadow mt-5">
                <div className="card-body px-lg-5 py-lg-5">
                  <h4 className="mb-4">Báo giá dán kính mờ văn phòng</h4>
                  <p>
                    Decal dán kính mờ, có màu trắng đục, phủ sần che mờ đơn
                    điệu, không có hoa văn trang trí, nên nó đặc biệt phù hợp
                    trong môi trường văn phòng làm việc của các công ty. Mang
                    lại một không gian hiện đại, sang trọng và chuyên nghiệp.
                  </p>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="text-center mt-md">
                <a
                  href="#"
                  className="btn btn-primary btn-circle btn-translate--hover px-4"
                >
                  {/* <span className="btn-inner--icon">
                      <i className="far fa-angle-right" />
                    </span> */}
                  <span className="btn-inner--text">Thi công ngay</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  )
}
