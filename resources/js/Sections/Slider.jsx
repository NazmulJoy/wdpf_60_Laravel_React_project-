import React from 'react'

export default function Slider() {
  return (
    <>
    <div className="rr-slider-1-area fix p-relative theme-bg-2 pt-90" data-background="assets/img/slider/slide-1.jpg">
      <div className="rr-slider-1-wrapper">
        <div className="rr-slider-1-wrap p-relative">
          <div className="rr-slider-1-height">
            <div className="container">
              <div className="rr-slider-1-shap-star">
                <img src="assets/img/slider/start-shap.png" alt="img" />
              </div>
              <div className="rr-slider-1-shap-plus">
                <img src="assets/img/slider/plus-shap.png" alt="img" />
              </div>
              <div className="rr-slider-1-shap-plus-2">
                <img src="assets/img/slider/subtitle-shape-3.png" alt="img" />
              </div>
              <div className="row align-items-center">
                <div className="col-xl-7 col-lg-7 col-md-6">
                  <div className="rr-slider-1-content z-index-1">
                    <div className="rr-slider-1-title-box">
                      <span className="rr-slider-1-subtitle wow rrfadeUp" data-wow-duration=".9s" data-wow-delay=".3s"><img src="assets/img/testimonial/section-icon.png" alt="img" /> BEST MEDICAL
                        DOCTOR!</span>
                      <h1 className="rr-slider-1-title pb-10 wow rrfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">We Provided Medical
                        &amp; Health Service.</h1>
                      <p className="pb-30 wow rrfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">Medical tailored it design, management &amp; support services
                        business agency elit, sed do eiusmod tempor.</p>
                    </div>
                    <div className="rr-slider-1-button-box d-flex align-items-center">
                      <a className="rr-btn-1 mr-30 wow rrfadeUp" data-wow-duration=".9s" data-wow-delay=".7s" href="contact.html"><span>Contact Us <i className="fa-sharp fa-solid fa-plus" /></span></a>
                      <a className="rr-btn-black wow rrfadeUp" data-wow-duration=".9s" data-wow-delay=".9s" href="service-details.html"><span>Read MOre <i className="fa-sharp fa-solid fa-plus" /></span></a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-6 wow fadeInRight" data-wow-duration=".9s" data-wow-delay=".5s">
                  <div className="rr-slider-1-img p-relative pt-50">
                    <div className="rr-slider-1-thumb z-index-2">
                      <img src="assets/img/slider/man-img.png" alt="img" />
                    </div>
                    <div className="rr-slider-1-shap z-index-1">
                      <img src="assets/img/slider/img-2.png" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
