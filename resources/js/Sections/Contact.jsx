import React from 'react'

export default function Contact() {
  return (
    <>
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
    </>
  )
}
