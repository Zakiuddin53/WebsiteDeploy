import React from "react";

export default function Footer() {
  return (
    <footer className="zubuz-footer-section main-footer">
      <div className="container">
        <div className="zubuz-footer-top">
          <div className="row">
            <div className="col-xl-4 col-lg-12">
              <div className="zubuz-footer-textarea">
                <a href="">
                  <img src="assets/images/logo/logo-dark.png" alt="" />
                </a>
                <p>
                  We&apos;re your innovation partner, delivering cutting-edge
                  solutions that elevate your business to the next level.
                </p>
                <div className="zubuz-subscribe-one">
                  <form action="#">
                    <input type="email" placeholder="Email Address" />
                    <button
                      className="zubuz-default-btn zubuz-subscription-btn one"
                      id="zubuz-subscription-btn"
                      type="submit"
                    >
                      <span>Subscribe</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 mr-4">
              <div className="zubuz-footer-menu extar-margin">
                <div className="zubuz-footer-title ">
                  <p>Navigation</p>
                </div>
                <ul>

                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="/portfolio">Portfolio</a>
                  </li>

                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
        <div className="zubuz-footer-bottom">
          <div className="zubuz-social-icon order-md-2">
            <ul>
              <li>
                <a href="https://twitter.com/" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://facebook.com/" target="_blank">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="zubuz-copywright">
            <p> &copy;Copyright 2024, All Rights Reserved by Mthemeus</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
