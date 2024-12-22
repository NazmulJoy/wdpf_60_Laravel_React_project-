import { usePage } from "@inertiajs/react";
import React from 'react';
import Footer from "@/Sections/Footer";
import Header from "@/Sections/Header";
import Popup from "@/Sections/Popup";




export default function Home() {
  const{doctors,specialists} = usePage().props;
  const spname = (id) =>{
    const sptype = specialists.find(type=> type.id === id);
    return sptype ? sptype.name : 'Unknown';
  }
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
    {/* slider area start */}
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
    {/* slider area end */}
    {/* contact area start */}
    <section className="rr-contact-area fix " data-bg-color="#21313f">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8  col-md-12 col-12 wow rrfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
            <div className="rr-contact-1-form mb-50 mr-30">
              <div className="rr-contact-1-form-box text-center mt-70">
                <form>
                  <div className="row">
                    <div className=" col-md-4 col-12">
                      <div className="rr-form-input-box rr-contact-1-border pb-30">
                        <select style={{display: 'none'}}>
                          <option>Specifically?</option>
                          <option>Medicine</option>
                          <option>Economical Choice</option>
                          <option>Team Of Support</option>
                          <option>Test Laboratory</option>
                        </select>
                        <div className="nice-select" tabIndex={0}><span className="current">Specifically?</span>
                          <ul className="list">
                            <li data-value="Your Inquiry about" className="option selected focus">
                              Specifically?
                            </li>
                            <li data-value="01 Year" className="option">Medicine &amp; Health</li>
                            <li data-value="02 Year" className="option">Economical Choice</li>
                            <li data-value="03 Year" className="option">Team Of Support</li>
                            <li data-value="04 Year" className="option">Test Laboratory</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className=" col-md-4 col-12">
                      <div className="rr-form-input-box rr-contact-1-border pb-30">
                        <select style={{display: 'none'}}>
                          <option>Your Doctor?</option>
                          <option>Medicine &amp; Health</option>
                          <option>Economical Choice</option>
                          <option>Team Of Support</option>
                          <option>Test Laboratory</option>
                        </select>
                        <div className="nice-select" tabIndex={0}><span className="current">Your Doctor?</span>
                          <ul className="list">
                            <li data-value="Your Inquiry about" className="option selected focus">Your Doctor?
                            </li>
                            <li data-value="01 Year" className="option">Medicine &amp; Health</li>
                            <li data-value="02 Year" className="option">Economical Choice</li>
                            <li data-value="03 Year" className="option">Team Of Support</li>
                            <li data-value="04 Year" className="option">Test Laboratory</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className=" col-md-4 col-12">
                      <div className="rr-form-input-box rr-contact-1-border pb-30">
                        <select style={{display: 'none'}}>
                          <option>Disease?</option>
                          <option>Medicine &amp; Health</option>
                          <option>Economical Choice</option>
                          <option>Team Of Support</option>
                          <option>Test Laboratory</option>
                        </select>
                        <div className="nice-select" tabIndex={0}><span className="current">Disease?</span>
                          <ul className="list">
                            <li data-value="Your Inquiry about" className="option selected focus">Disease?
                            </li>
                            <li data-value="01 Year" className="option">Medicine &amp; Health</li>
                            <li data-value="02 Year" className="option">Economical Choice</li>
                            <li data-value="03 Year" className="option">Team Of Support</li>
                            <li data-value="04 Year" className="option">Test Laboratory</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-4 col-12 mb-30">
                      <div className="rr-form-input-box rr-contact-1-border">
                        <input type="text" placeholder="Your Name*" />
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-4 col-12 mb-30">
                      <div className="rr-form-input-box rr-contact-1-border">
                        <input type="email" placeholder="E-mail" />
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-4 col-12 mb-30">
                      <div className="rr-form-input-box rr-contact-1-border">
                        <input type="text" placeholder="Date*" />
                      </div>
                    </div>
                  </div>
                </form>
                <button className="rr-btn rr-form-theme-bg " type="submit"><span>SEND REQUEST</span></button>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-12 wow rrfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
            <div className="rr-contact-1-wapp">
              <div className="rr-contact-1-item d-flex align-items-center">
                <div className="rr-contact-1-icon mr-20">
                  <span><i className="fa-solid fa-envelope" /></span>
                </div>
                <div className="rr-contact-1-info">
                  <h4>Email Us</h4>
                  <span> <a href="mailto:robiul@eobi.com">robiul@eobi.com</a></span>
                </div>
              </div>
              <div className="rr-contact-1-item d-flex align-items-center">
                <div className="rr-contact-1-icon mr-20">
                  <span><i className="fa-solid fa-location-dot" /></span>
                </div>
                <div className="rr-contact-1-info">
                  <h4>Address</h4>
                  <span><a href="htrrs://www.google.com/maps/@36.0758266,-79.4558848,17z">London Ratab 25</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* contact area end */}
    {/* features area start */}
    <section className="rr-features-area pt-90 pb-70 fix">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 wow rrfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
            <div className="rr-features-title-box text-center mb-45">
              <span className="rr-section-subtitle p-relative"><img src="assets/img/testimonial/section-icon.png" alt="img" /> Our features Us <img src="assets/img/testimonial/section-icon.png" alt="img" /></span>
              <h4 className="rr-section-title">Experts in Every Aspect Service</h4>
            </div>
          </div>
        </div>
        <div className="row">
        {doctors.map(({id,name, specialist_id,email,photo,status})=>(
            
         
          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <div className="rr-features-item p-relative wow rrfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
              <div className="rr-features-thumb p-relative">
                <img src="assets/img/feature/bg-img.png" alt="img" />
                <span>{id}</span>
              </div>
              <div className="rr-features-icon">
                <img src={photo} alt="img" />
              </div>
              <div className="rr-features-content text-center">
                <h3 className="rr-features-title"><a href="service-details.html">{name}</a></h3>
                <p>{email}</p>
                <p>{spname(specialist_id)}</p>
                <a className="rr-features-btn" href="service-details.html"><span>See
                    More <i className="fa-solid fa-angle-right" /></span></a>
              </div>
            </div>
          </div>
           ))}
        </div>
      </div>
    </section>
    {/* features area end */}
  </main>
  <Footer></Footer>


   </>
  )
}
