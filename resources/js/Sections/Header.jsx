import React from 'react'

export default function Header() {
  return (
    <>
     <div className="rr-header-1-top rr-header-1-shap d-none d-xl-block grey-bg p-relative">
    <div className="container custom-container-1 z-index-3">
      <div className="rr-header-1-before">
        <div className="row align-items-center">
          <div className="col-xxl-5 col-xl-6 col-lg-6">
            <div className="rr-header-1-top-info text-end">
              <ul className="d-flex align-items-center">
                <li>
                  <a href="mailto:support@gmail.com "><span><i className="fa-solid fa-envelope" /></span>
                    support@gmail.com </a>
                </li>
                <li className="ml-50">
                  <b><span><i className="fa-solid fa-clock" /></span>Sun - Fri :6.00am -
                    02.00pm</b>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3  col-lg-1 d-none d-xxl-block">
            <div className="rr-header-1-top-btn-text">
              <span>We are open hours staff!
              </span>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-6 col-lg-5">
            <div className="rr-header-2-top-info d-flex align-items-center justify-content-end text-end">
              <div className="rr-header-2-lang rr-header-lang-main d-none d-md-block ml-60">
                <select style={{display: 'none'}}>
                  <option>English</option>
                  <option>Bangla</option>
                  <option>French</option>
                </select>
                <div className="nice-select" tabIndex={0}><span className="current"><img src="assets/img/header/avata.png" alt="img" /> English</span>
                  <ul className="list z-index-2">
                    <li data-value="English" className="option selected focus">English</li>
                    <li data-value="Bangla" className="option">Bangla</li>
                    <li data-value="French" className="option">French</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* header top area end */}
  {/* header main area start */}
  <section className="rr-header-1-main d-none d-xl-block">
    <div className="container custom-container-1">
      <div className="row align-items-center">
        <div className="col-xl-4">
          <div className="rr-header-main-social d-flex align-items-center">
            <h4 className="rr-header-1-title">Follow Social:</h4>
            <div className="rr-header-1-social ml-20">
              <a href="#"><i className="fa-brands fa-facebook-f" /></a>
              <a href="#"><i className="fa-brands fa-instagram" /></a>
              <a href="#"><i className="fa-brands fa-pinterest-p" /></a>
              <a href="#"><i className="fa-brands fa-twitter" /></a>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="rr-herader-1-logo text-center">
            <a href="index.html"><img src="assets/img/logo/logo-black.png" alt="img" /></a>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="rr-header-1-contat d-flex align-items-center justify-content-end">
            <div className="rr-header-1-contat-icon p-relative">
              <span><i className="fa-solid fa-phone" /></span>
            </div>
            <div className="rr-header-1-contat-text ml-20">
              <h4>Appointment Call</h4>
              <b><a href="tel:+99584554">24/7 – quick and easy</a></b>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* header main area end */}
  <header className="rr-header-height z-index-3">
    {/* header area start */}
    <div id="header-sticky" className="rr-header-area">
      <div className="container custom-container-1 rr-header-bg">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-7 col-md-6 col-6">
            <div className="rr-header-1-logo d-xl-none">
              <img src="assets/img/logo/logo-black.png" alt="img" />
            </div>
            <div className="rr-header-main-menu rr-header-menu ml-30  d-none d-xl-block">
              <nav className="rr-main-menu-content">
                <ul>
                  <li className="has-dropdown">
                    <a href="index.html">Home</a>
                    <div className="rr-submenu submenu has-homemenu">
                      <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-xl-4">
                        <div className="col homemenu">
                          <div className="homemenu-thumb mb-15">
                            <img src="assets/img/menu/home-1.jpg" alt="img" />
                            <div className="homemenu-btn">
                              <a className="rr-menu-btn" href="index.html">Home 01</a>
                            </div>
                          </div>
                          <div className="homemenu-content text-center">
                            <h4 className="homemenu-title">
                              <a href="index.html">Home 01</a>
                            </h4>
                          </div>
                        </div>
                        <div className="col homemenu">
                          <div className="homemenu-thumb mb-15">
                            <img src="assets/img/menu/home-2.jpg" alt="img" />
                            <div className="homemenu-btn">
                              <a className="rr-menu-btn" href="index-2.html">Home 02</a>
                            </div>
                          </div>
                          <div className="homemenu-content text-center">
                            <h4 className="homemenu-title">
                              <a href="index-2.html">Home 02</a>
                            </h4>
                          </div>
                        </div>
                        <div className="col homemenu">
                          <div className="homemenu-thumb mb-15">
                            <img src="assets/img/menu/home-3.jpg" alt="img" />
                            <div className="homemenu-btn">
                              <a className="rr-menu-btn" href="index-3.html">Home 03</a>
                            </div>
                          </div>
                          <div className="homemenu-content text-center">
                            <h4 className="homemenu-title">
                              <a href="index-3.html">Home 03</a>
                            </h4>
                          </div>
                        </div>
                        <div className="col homemenu">
                          <div className="homemenu-thumb mb-15">
                            <img src="assets/img/menu/home-4.jpg" alt="img" />
                            <div className="homemenu-btn">
                              <a className="rr-menu-btn" href="index-4.html">Home 04</a>
                            </div>
                          </div>
                          <div className="homemenu-content text-center">
                            <h4 className="homemenu-title">
                              <a href="index-3.html">Home 04</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li><a href="about.html">about us</a></li>
                  <li className="has-dropdown">
                    <a href="service-details.html">Service</a>
                    <ul className="submenu rr-submenu">
                      <li><a href="service-details.html">Service</a></li>
                      <li><a href="service-details.html">Service Details</a></li>
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <a href="#">Pages</a>
                    <ul className="submenu rr-submenu">
                      <li><a href="team.html">team</a></li>
                      <li><a href="team-details.html">team details</a></li>
                      <li><a href="pricing.html">pricing </a></li>
                      <li><a href="project.html">project</a></li>
                      <li><a href="project-details.html">project-details</a></li>
                      <li><a href="doctors.html">doctors</a></li>
                      <li><a href="doctor-details.html">doctors-details</a></li>
                      <li><a href="404.html">error</a></li>
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <a href="blog.html">Blog</a>
                    <ul className="submenu rr-submenu">
                      <li><a href="blog.html">Blog Grid</a></li>
                      <li><a href="blog-sidebar.html">Blog Standard</a></li>
                      <li><a href="blog-details.html">Blog Details</a></li>
                    </ul>
                  </li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-6 col-6">
            <div className="rr-header-right d-flex align-items-center justify-content-end">
              <div className="rr-header-icon d-none rr-header-2-search d-xl-block">
                <button className="search-open-btn"><i className="fa-solid fa-magnifying-glass" /></button>
              </div>
              <div className="rr-header-1-contat d-none d-md-block ml-30">
                <a className="rr-btn-border" href="contact.html"><span>Make Appointment <i className="fa-sharp fa-solid fa-plus" /></span></a>
              </div>
              <div className="rr-header-bar d-xl-none">
                <button className="rr-menu-bar"><i className="fa-solid fa-bars" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* header area end */}
  </header>
    </>
  )
}
