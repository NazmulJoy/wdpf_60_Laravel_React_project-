import React from 'react'
import Footer from "@/Sections/Footer";
import Header from "@/Sections/Header";
import Popup from "@/Sections/Popup";
import { usePage } from '@inertiajs/react';


export default function Contact() {
  return (
    <>
    
      {/* back to top start */}
      <div className="back-to-top-wrapper">
        <button id="back_to_top" type="button" className="back-to-top-btn">
          <svg width={12} height={7} viewBox="0 0 12 7" fill="none">
            <path d="M11 6L6 1L1 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg> 
        </button>
      </div>
      {/* back to top end */}
      {/* search popup start */}
      <Popup></Popup>
      {/* search popup end */}
      {/* header top area start */}
     <Header></Header>
     <main>

<div>
  {/* breadcrumb area start */}
  <div className="breadcrumb__area breadcrumb__overlay breadcrumb__height fix p-relative" data-background="assets/img/breadcurmb/breadcurmb-1-10.jpg">
    <div className="breadcrumb-shap d-none d-xxl-block">
      <img src="assets/img/breadcurmb/img-2.png" alt="img" />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-xl-5 col-md-5">
          <div className="breadcrumb__content z-index">
            <div className="breadcrumb__section-title-box">
              <h3 className="breadcrumb__title">Contact</h3>
            </div>
            <div className="breadcrumb__list">
              <span><a href="index.html">Home</a></span>
              <span className="dvdr"><i>/</i></span>
              <span>Contact</span>
            </div>
          </div>
        </div>
        <div className="col-xl-7 col-md-7">
          <div className="breadcrumb-img z-index-3">
            <div className="breadcrumb-img mt-140">
              <img src="assets/img/breadcurmb/img.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* breadcrumb area end */}
  {/* contact info area start */}
  <section className="rr-contact-area pt-100 pb-100">
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-4 wow rrfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
          <div className="rr-contat-box-info">
            <div className="rr-contact-box-item d-flex align-items-center p-relative">
              <div className="rr-contact-box-icon mr-20">
                <span><i className="fa-solid fa-phone" /></span>
              </div>
              <div className="rr-contact-box-contat">
                <span>Call Now</span>
                <p><a href="tel:+09627387877">+6332500022</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 wow rrfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
          <div className="rr-contat-box-info">
            <div className="rr-contact-box-item d-flex align-items-center p-relative">
              <div className="rr-contact-box-icon mr-20">
                <span><i className="fa-solid fa-location-dot" /></span>
              </div>
              <div className="rr-contact-box-contat">
                <span>Address</span>
                <p><a href="htrrs://www.google.com/maps/@36.0758266,-79.4558848,17z">London Ratab 25</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 wow rrfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
          <div className="rr-contat-box-info">
            <div className="rr-contact-box-item d-flex align-items-center p-relative">
              <div className="rr-contact-box-icon mr-20">
                <span><i className="fa-sharp fa-solid fa-envelope" /></span>
              </div>
              <div className="rr-contact-box-contat">
                <span>Email Us</span>
                <p><a href="mailto:robiul@eobi.com">robiul@eobi.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* contact info area end */}
  {/* contact area start */}
  {/* brand area start */}
  <div className="rr-brand-area fix pt-80 pb-80">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="rr-brand-wrapper ">
            <div className="swiper-container rr-brand-active">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="rr-brand-item text-center">
                    <img src="assets/img/brand/brand-1-1.png" alt="img" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="rr-brand-item text-center">
                    <img src="assets/img/brand/brand-1-2.png" alt="img" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="rr-brand-item text-center">
                    <img src="assets/img/brand/brand-1-3.png" alt="img" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="rr-brand-item text-center">
                    <img src="assets/img/brand/brand-1-4.png" alt="img" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="rr-brand-item text-center">
                    <img src="assets/img/brand/brand-1-3.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* brand area end */}
  {/* cta area start */}
  <div className="rr-cta-area  rr-cta-bg  fix p-relative">
    <div className="container">
      <div className="row align-items-center rr-cta-wrap">
        <div className="col-xl-6 col-lg-6 col-md-6 wow rrfadeUp">
          <div className="rr-cta-left-box d-flex align-items-center">
            <div className="rr-cta-icon">
              <img src="assets/img/footer/email-icon.png" alt="img" />
            </div>
            <div className="rr-cta-content ml-20">
              <h4 className="rr-cta-title">Our Newslatter</h4>
              <span>We are dolor sit amet csectetur</span>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 wow rrfadeUp">
          <div className="rr-cta-right-box p-relative">
            <input type="text" placeholder="Email address" />
            <div className="rr-cta-button">
              <button className="black-bg rr-cta-btn"><span>Subscribe</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* cta area end */}
</div>



</main>
      <Footer></Footer>
    
    
       </>
  )
}
