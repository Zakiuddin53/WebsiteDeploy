import React from "react";
import Head from "next/head";
import Script from "next/script";

function indextwo() {
  return (
    <>
      <Head>
        <title>Zubuz || Responsive HTML 5 Template</title>
        <link rel="stylesheet" href="assets/css/app.min.css" />
      </Head>
      <div className="section zubuz-section-padding2">
        <div id="zubuz-counter" />
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="zubuz-v2-thumb thumb-mr">
                <img src="assets/images/v2/thumb-v2-1.png" alt="" />
                <div className="zubuz-v2-thumb-shape">
                  <img src="assets/images/v2/shape3-v2.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="zubuz-default-content">
                <h2>Enables improved customer service</h2>
                <p>
                  CRM software enables better customer service by tracking all
                  customer inquiries, issues, &amp; support requests. Support
                  teams can respond more effectively and promptly, leading to
                  higher customer satisfaction.
                </p>
                <div className="zubuz-extara-mt">
                  <div className="zubuz-counter-wrap">
                    <div className="zubuz-counter-data">
                      <h2 className="zubuz-counter-number">
                        <span data-percentage={99} className="zubuz-counter" />%
                      </h2>
                      <p>Customer satisfaction</p>
                    </div>
                    <div className="zubuz-counter-data">
                      <h2 className="zubuz-counter-number">
                        <span data-percentage="3.5" className="zubuz-counter" />
                        X
                      </h2>
                      <p>Close deals faster</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section zubuz-section-padding5">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 order-lg-2">
              <div className="zubuz-v2-thumb thumb-ml">
                <img src="assets/images/v2/thumb-v2-2.png" alt="" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="zubuz-default-content">
                <h2>A single platform to manage leads</h2>
                <p>
                  Our software is designed to meet your specific needs. Offers
                  sales automation, marketing tools, and comprehensive
                  analytics.
                </p>
                <div className="zubuz-extara-mt">
                  <div className="zubuz-iconbox-wrap-left">
                    <div className="zubuz-iconbox-icon none-bg">
                      <img src="assets/images/v2/check.png" alt="" />
                    </div>
                    <div className="zubuz-iconbox-data">
                      <span>Team management</span>
                      <p>
                        Our chat or video calls for quick communication with
                        your sales team. Organize daily planning meetings.
                      </p>
                    </div>
                  </div>
                  <div className="zubuz-iconbox-wrap-left">
                    <div className="zubuz-iconbox-icon none-bg">
                      <img src="assets/images/v2/check.png" alt="" />
                    </div>
                    <div className="zubuz-iconbox-data">
                      <span>Online marketing</span>
                      <p>
                        Run marketing campaigns within our CRM tools such as
                        email marketing, ad targeting and more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section zubuz-section-padding3 bg-light position-relative">
        <div className="container">
          <div className="zubuz-section-title center">
            <h2>Rational planning for rapid growth</h2>
          </div>
          <div className="pricing-btn">
            <label>Billed monthly</label>
            <div className="toggle-btn">
              <input
                className="form-check-input btn-toggle price-deck-trigger"
                type="checkbox"
                id="flexSwitchCheckDefault"
                data-pricing-trigger=""
                data-target="#table-price-value"
                defaultChecked={true}
              />
            </div>
            <label>Billed annually</label>
          </div>
          <div
            className="row"
            id="table-price-value"
            data-pricing-dynamic=""
            data-value-active="monthly"
          >
            <div className="col-xl-4 col-md-6">
              <div className="zubuz-pricing-wrap">
                <div className="zubuz-pricing-header">
                  <h5>Basic</h5>
                </div>
                <div className="zubuz-pricing-price">
                  <h2>$</h2>
                  <div
                    className="zubuz-price dynamic-value"
                    data-active={19}
                    data-monthly={19}
                    data-yearly={39}
                  />
                  <p
                    className="dynamic-value"
                    data-active="USD/Billed monthly"
                    data-monthly="USD/Billed monthly"
                    data-yearly="USD/Billed Yearly"
                  />
                </div>
                <div className="zubuz-pricing-deScription">
                  <p>Works perfect for small teams</p>
                </div>
                <div className="zubuz-pricing-body">
                  <ul>
                    <li>
                      <img src="assets/images/v2/check2.png" alt="" />
                      Live chat widget for website
                    </li>
                    <li>
                      <img src="assets/images/v2/check2.png" alt="" />
                      All basic CRM features
                    </li>
                    <li>
                      <img src="assets/images/v2/check2.png" alt="" />
                      Up to 5,000 contacts
                    </li>
                    <li>
                      <img src="assets/images/v2/check2.png" alt="" />
                      Flow base chatbot
                    </li>
                    <li>
                      <img src="assets/images/v2/check2.png" alt="" />
                      24/7 Email Support
                    </li>
                  </ul>
                </div>
                <a className="zubuz-pricing-btn" href="pricing.html">
                  Select the plan
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="zubuz-pricing-wrap active">
                <div className="zubuz-pricing-header">
                  <h5>Standard</h5>
                </div>
                <div className="zubuz-pricing-price">
                  <h2>$</h2>
                  <div
                    className="zubuz-price dynamic-value"
                    data-active={49}
                    data-monthly={49}
                    data-yearly={69}
                  />
                  <p
                    className="dynamic-value"
                    data-active="USD/Billed monthly"
                    data-monthly="USD/Billed monthly"
                    data-yearly="USD/Billed Yearly"
                  />
                </div>
                <div className="zubuz-pricing-deScription">
                  <p>Great for small and medium teams</p>
                </div>
                <div className="zubuz-pricing-body">
                  <ul>
                    <li>
                      <img src="assets/images/v2/check2.png" alt="" />
                      All multimedia channels
                    </li>
                    <li>
                      <img src="assets/images/v2/check2.png" alt="" />
                      All advanced CRM features
                    </li>
                    <li>
                      <img src="assets/images/v2/check2.png" alt="" />
                      Up to 15,000 contacts
                    </li>
                    <li>
                      <img src="assets/images/v2/check2.png" alt="" />
                      Flow + AI base chatbot
                    </li>
                    <li>
                      <img src="assets/images/v2/check2.png" alt="" />
                      24/7 Support (Live, Email, Chat)
                    </li>
                  </ul>
                </div>
                <a className="zubuz-pricing-btn active" href="pricing.html">
                  Select the plan
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="zubuz-pricing-wrap">
                <div className="zubuz-pricing-header">
                  <h5>Enterprise</h5>
                </div>
                <div className="zubuz-pricing-price">
                  <h2>$</h2>
                  <div
                    className="zubuz-price dynamic-value"
                    data-active={89}
                    data-monthly={89}
                    data-yearly={99}
                  />
                  <p
                    className="dynamic-value"
                    data-active="USD/Billed monthly"
                    data-monthly="USD/Billed monthly"
                    data-yearly="USD/Billed Yearly"
                  />
                </div>
                <div className="zubuz-pricing-deScription">
                  <p>Great for large teams</p>
                </div>
                <div className="zubuz-pricing-body">
                  <ul>
                    <li>
                      <img src="assets/images/v2/check2.png" alt="" />
                      All multimedia channels
                    </li>
                    <li>
                      <img src="assets/images/v2/check2.png" alt="" />
                      All enterprise CRM features
                    </li>
                    <li>
                      <img src="assets/images/v2/check2.png" alt="" />
                      Up to 25,000 contacts
                    </li>
                    <li>
                      <img src="assets/images/v2/check2.png" alt="" />
                      Flow + AI base chatbot
                    </li>
                    <li>
                      <img src="assets/images/v2/check2.png" alt="" />
                      24/7 Support (Live, Email, Chat)
                    </li>
                  </ul>
                </div>
                <a className="zubuz-pricing-btn" href="pricing.html">
                  Select the plan
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="zubuz-pricing-shape">
          <img src="assets/images/v2/shape4-v2.png" alt="" />
        </div>
      </div>
      <div className="section zubuz-section-padding">
        <div className="container">
          <div className="zubuz-section-title zubuz-two-column-title">
            <div className="row">
              <div className="col-lg-8">
                <h2>Integration with dozens of tools</h2>
              </div>
              <div className="col-lg-4 d-flex align-items-center">
                <div className="zubuz-title-btn">
                  <a
                    className="zubuz-default-btn pill"
                    href="integrations.html"
                  >
                    <span>Browse all integrations</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="zubuz-tools-wrap">
            <div className="zubuz-tools-item">
              <img src="assets/images/v2/tools/tools1.png" alt="" />
            </div>
            <div className="zubuz-tools-item">
              <img src="assets/images/v2/tools/tools2.png" alt="" />
            </div>
            <div className="zubuz-tools-item">
              <img src="assets/images/v2/tools/tools3.png" alt="" />
            </div>
            <div className="zubuz-tools-item">
              <img src="assets/images/v2/tools/tools4.png" alt="" />
            </div>
            <div className="zubuz-tools-item">
              <img src="assets/images/v2/tools/tools5.png" alt="" />
            </div>
            <div className="zubuz-tools-item">
              <img src="assets/images/v2/tools/tools6.png" alt="" />
            </div>
            <div className="zubuz-tools-item">
              <img src="assets/images/v2/tools/tools7.png" alt="" />
            </div>
            <div className="zubuz-tools-item">
              <img src="assets/images/v2/tools/tools8.png" alt="" />
            </div>
            <div className="zubuz-tools-item">
              <img src="assets/images/v2/tools/tools9.png" alt="" />
            </div>
            <div className="zubuz-tools-item">
              <img src="assets/images/v2/tools/tools10.png" alt="" />
            </div>
            <div className="zubuz-tools-item">
              <img src="assets/images/v2/tools/tools11.png" alt="" />
            </div>
            <div className="zubuz-tools-item">
              <img src="assets/images/v2/tools/tools12.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="zubuz-cta-section2">
        <div className="container">
          <div
            className="zubuz-cta-wrap"
            style={{ backgroundImage: "url(assets/images/v2/cta-bg.png)" }}
          >
            <div className="zubuz-cta-content">
              <h2>Start managing your money now!</h2>
              <div className="zubuz-subscribe-two">
                <form action="#">
                  <input type="email" placeholder="Enter your e-mail address" />
                  <button
                    className="zubuz-default-btn zubuz-subScription-btn two"
                    id="zubuz-subScription-btn"
                    type="submit"
                  >
                    <span>Get started</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="zubuz-footer-section">
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
                  <div className="zubuz-social-icon social-box">
                    <ul>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://facebook.com/" target="_blank">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="fab fa-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/" target="_blank">
                          <i className="fab fa-github" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4">
                <div className="zubuz-footer-menu extar-margin">
                  <div className="zubuz-footer-title">
                    <p>Navigation</p>
                  </div>
                  <ul>
                    <li>
                      <a href="">Demos</a>
                    </li>
                    <li>
                      <a href="">About Us</a>
                    </li>
                    <li>
                      <a href="">Services</a>
                    </li>
                    <li>
                      <a href="">Pages</a>
                    </li>
                    <li>
                      <a href="">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-md-4">
                <div className="zubuz-footer-menu">
                  <div className="zubuz-footer-title">
                    <p>Utility pages</p>
                  </div>
                  <ul>
                    <li>
                      <a href="">Instructions</a>
                    </li>
                    <li>
                      <a href="">Style guide</a>
                    </li>
                    <li>
                      <a href="">Licenses</a>
                    </li>
                    <li>
                      <a href="">404 Not found</a>
                    </li>
                    <li>
                      <a href="">Password protected</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-4">
                <div className="zubuz-footer-menu extar-margin">
                  <div className="zubuz-footer-title">
                    <p>Resources</p>
                  </div>
                  <ul>
                    <li>
                      <a href="">Support</a>
                    </li>
                    <li>
                      <a href="">Privacy policy</a>
                    </li>
                    <li>
                      <a href="">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="">Strategic finance</a>
                    </li>
                    <li>
                      <a href="">Video guide</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="zubuz-footer-bottom center">
            <div className="zubuz-copywright">
              <p> ©Copyright 2024, All Rights Reserved by Mthemeus</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default indextwo;
