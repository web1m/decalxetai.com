import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

export default class Header extends React.Component {
  state = {
    isOpen: false
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <>
        <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary navbar-sticky sticky shadow-lg">
          <div className="container">
            <NavbarBrand href="/">Webdecal </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Trang chủ</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/gioi-thieu">Giới thiệu</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Dịch vụ
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Dán ô tô cá nhân</DropdownItem>
                    <DropdownItem>Dán thùng xe tải</DropdownItem>
                    <DropdownItem>Dán xe bus / xe 46 chổ</DropdownItem>
                    <DropdownItem>Dán decal xe 16 chổ</DropdownItem>
                    <DropdownItem>In Hiflex / Decal</DropdownItem>
                    <DropdownItem>In namecard & Standee</DropdownItem>
                    <DropdownItem divider />
                    {/* <DropdownItem>Cắt Decal vi tính</DropdownItem> */}
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="/bao-gia">Báo giá</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/blog">Góc tư vấn</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/lien-he">Liên hệ 0931 780 080</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </>
    )
  }
}
