import React from 'react'

export default function Footer() {
  return (
    <>
     <footer>
    <div className="rr-footer-main p-relative fix" data-background="assets/img/footer/footer-bg.jpg">
      {/* footer area start */}
      <div className="rr-footer-area pt-125 p-relative fix">
        <div className="rr-footer-right-shap d-none d-xl-block">
          <img src="assets/img/footer/footer-shap.png" alt="img" />
        </div>
        <div className="container">
          <div className="rr-footer-border">
            <div className="row">
              <div className="col-xl-4 col-lg-3 col-md-6 col-sm-6 mb-50 wow rrfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                <div className="rr-footer-widget footer-cols-1">
                  <div className="rr-footer-logo pb-35">
                    <a href="index.html"><img src="assets/img/logo/logo-white.png" alt="img" /></a>
                  </div>
                  <div className="rr-footer-widget-content-list mb-25">
                    <div className="rr-footer-widget-content-list-item">
                      <i className="fa-sharp fa-solid fa-clock" /> <a href="#">Open Hours of Government:<br />
                        Mon - Fri: 8.00 am. - 6.00 pm.</a>
                    </div>
                    <div className="rr-footer-widget-content-list-item">
                      <i className="fa-solid fa-location-dot" /> <a href="#"> 13/A, Miranda Halim City .</a>
                    </div>
                    <div className="rr-footer-widget-content-list-item">
                      <i className="fa-sharp fa-solid fa-phone" /><a href="tel:09969569535">099 695 695 35</a>
                    </div>
                  </div>
                  <div className="rr-footer-social">
                    <a href="#"><i className="fa-brands fa-facebook-f" /></a>
                    <a href="#"><i className="fa-brands fa-pinterest-p" /></a>
                    <a href="#"><i className="fa-brands fa-twitter" /></a>
                    <a href="#"><i className="fa-brands fa-instagram" /></a>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 mb-50 wow rrfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                <div className="rr-footer-widget footer-cols-2">
                  <h4 className="rr-footer-title">Service</h4>
                  <div className="rr-footer-list ">
                    <ul>
                      <li><a href="service-details.html">Why choose us</a></li>
                      <li><a href="service-details.html"> Our solutions</a></li>
                      <li><a href="service-details.html">Partners</a></li>
                      <li><a href="service-details.html">Core values</a></li>
                      <li><a href="service-details.html">Our projects</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 mb-50 wow rrfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                <div className="rr-footer-widget footer-cols-3">
                  <h4 className="rr-footer-title">Quick Link</h4>
                  <div className="rr-footer-list">
                    <ul>
                      <li><a href="service-details.html">Residents</a></li>
                      <li><a href="service-details.html">Medical</a></li>
                      <li><a href="service-details.html">Online Service</a></li>
                      <li><a href="service-details.html">Visiting</a></li>
                      <li><a href="service-details.html">Employment</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-3 col-md-6 col-sm-6 mb-50 wow rrfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                <div className="rr-footer-widget footer-cols-4">
                  <h4 className="rr-footer-title">Opening Schedule</h4>
                  <div className="rr-footer-contact">
                    <ul>
                      <li><span>Sunday ---------- 08.00 - 10.00</span></li>
                      <li><span>Monday ---------- 08.00 - 10.00</span></li>
                      <li><span>Tuesday ---------- 08.00 - 10.00</span></li>
                      <li><span>Wednesday ------- 08.00 - 10.00</span></li>
                      <li><span>Tuesday ---------- 08.00 - 10.00</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer area end */}
      {/* copy-right area start */}
      <div className="rr-copyright-area p-relative">
        <div className="container rr-copyright-broder rr-copyright-space">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6 col-12 wow rrfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
              <div className="rr-copyright-left text-center text-md-start">
                <p>Copyright © 2024 <a href="#"> Mekina, </a> All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12 wow rrfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
              <div className="rr-copyright-right text-center text-md-end">
                <a href="about.html">About Us </a>
                <a href="service-details.html">Events</a>
                <a href="blog.html">News</a>
                <a href="service-details.html">Portfolio</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* copy-right area end */}
    </div>
  </footer>
    </>
  )
}
