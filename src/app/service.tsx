import React from 'react'
import Head from 'next/head'
import Script from "next/script";
import Image from 'next/image';

function Service() {
  return (

    <>


<header className="site-header site-header--menu-center zubuz-header-section dark-bg white-menu" id="sticky-menu">
<div className="container">
  <nav className="navbar site-navbar">
    {/* Brand Logo*/}
    <div className="brand-logo">
      <a href="index.html">
        <Image
          src="/assets/images/logo/logo-white.png"
          alt=""
          className="light-version-logo"
          width={150}
          height={186}
        />
      </a>
    </div>
    <div className="menu-block-wrapper">
      <div className="menu-overlay" />
      <nav className="menu-block" id="append-menu-header">
        <div className="mobile-menu-head">
          <div className="go-back">
            <i className="fa fa-angle-left" />
          </div>
          <div className="current-menu-title" />
          <div className="mobile-menu-close">×</div>
        </div>
        <ul className="site-menu-main">
          <li className="nav-item nav-item-has-children">
            <a href="#" className="nav-link-item drop-trigger">
              Demo <i className="fas fa-angle-down" />
            </a>
            <ul className="sub-menu" id="submenu-1">
              <li className="sub-menu--item">
                <a href="index.html">
                  <span className="menu-item-text">Finance App</span>
                </a>
              </li>
              <li className="sub-menu--item">
                <a href="index-02.html">
                  <span className="menu-item-text">CRM Platform</span>
                </a>
              </li>
              <li className="sub-menu--item">
                <a href="index-03.html">
                  <span className="menu-item-text">SaaS Startups</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="about-us.html" className="nav-link-item">
              About Us
            </a>
          </li>
          <li className="nav-item nav-item-has-children">
            <a href="#" className="nav-link-item drop-trigger">
              Pages <i className="fas fa-angle-down" />
            </a>
            <ul className="sub-menu" id="submenu-2">
              <li className="sub-menu--item">
                <a href="about-us.html">
                  <span className="menu-item-text">About Us</span>
                </a>
              </li>
              <li className="sub-menu--item">
                <a href="pricing.html">
                  <span className="menu-item-text">Pricing</span>
                </a>
              </li>
              <li className="sub-menu--item nav-item-has-children">
                <a href="#" data-menu-get="h3" className="drop-trigger">
                  blog <i className="fas fa-angle-down" />
                </a>
                <ul className="sub-menu shape-none" id="submenu-3">
                  <li className="sub-menu--item">
                    <a href="blog.html">
                      <span className="menu-item-text">Our Blog</span>
                    </a>
                  </li>
                  <li className="sub-menu--item">
                    <a href="blog-column-one.html">
                      <span className="menu-item-text">blog column one</span>
                    </a>
                  </li>
                  <li className="sub-menu--item">
                    <a href="blog-column-two.html">
                      <span className="menu-item-text">blog column two</span>
                    </a>
                  </li>
                  <li className="sub-menu--item">
                    <a href="single-blog.html">
                      <span className="menu-item-text">blog details</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sub-menu--item nav-item-has-children">
                <a href="#" data-menu-get="h3" className="drop-trigger">
                  Service
                  <i className="fas fa-angle-down" />
                </a>
                <ul className="sub-menu shape-none" id="submenu-4">
                  <li className="sub-menu--item">
                    <a href="service.html">
                      <span className="menu-item-text">service</span>
                    </a>
                  </li>
                  <li className="sub-menu--item">
                    <a href="single-service.html">
                      <span className="menu-item-text">service details</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sub-menu--item nav-item-has-children">
                <a href="#" data-menu-get="h3" className="drop-trigger">
                  Team
                  <i className="fas fa-angle-down" />
                </a>
                <ul className="sub-menu shape-none" id="submenu-5">
                  <li className="sub-menu--item">
                    <a href="team.html">
                      <span className="menu-item-text">team</span>
                    </a>
                  </li>
                  <li className="sub-menu--item">
                    <a href="single-team.html">
                      <span className="menu-item-text">team details</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sub-menu--item nav-item-has-children">
                <a href="#" data-menu-get="h3" className="drop-trigger">
                  Career
                  <i className="fas fa-angle-down" />
                </a>
                <ul className="sub-menu shape-none" id="submenu-6">
                  <li className="sub-menu--item">
                    <a href="career.html">
                      <span className="menu-item-text">Career</span>
                    </a>
                  </li>
                  <li className="sub-menu--item">
                    <a href="single-career.html">
                      <span className="menu-item-text">Career details</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sub-menu--item nav-item-has-children">
                <a href="#" data-menu-get="h3" className="drop-trigger">
                  Portfolio
                  <i className="fas fa-angle-down" />
                </a>
                <ul className="sub-menu shape-none" id="submenu-7">
                  <li className="sub-menu--item">
                    <a href="portfolio-grid.html">
                      <span className="menu-item-text">portfolio gird</span>
                    </a>
                  </li>
                  <li className="sub-menu--item">
                    <a href="portfolio-classic.html">
                      <span className="menu-item-text">portfolio classic</span>
                    </a>
                  </li>
                  <li className="sub-menu--item">
                    <a href="single-portfolio.html">
                      <span className="menu-item-text">Single Portfolio</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sub-menu--item nav-item-has-children">
                <a href="#" data-menu-get="h3" className="drop-trigger">
                  Utility
                  <i className="fas fa-angle-down" />
                </a>
                <ul className="sub-menu shape-none" id="submenu-8">
                  <li className="sub-menu--item">
                    <a href="faq.html">
                      <span className="menu-item-text">faq</span>
                    </a>
                  </li>
                  <li className="sub-menu--item">
                    <a href="errors-404.html">
                      <span className="menu-item-text">Error 404</span>
                    </a>
                  </li>
                  <li className="sub-menu--item">
                    <a href="integrations.html">
                      <span className="menu-item-text">integrations</span>
                    </a>
                  </li>
                  <li className="sub-menu--item">
                    <a href="testimonials.html">
                      <span className="menu-item-text">testimonials</span>
                    </a>
                  </li>
                  <li className="sub-menu--item">
                    <a href="coming-soon.html">
                      <span className="menu-item-text">Coming Soon</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sub-menu--item nav-item-has-children">
                <a href="#" data-menu-get="h3" className="drop-trigger">
                  Account
                  <i className="fas fa-angle-down" />
                </a>
                <ul className="sub-menu shape-none" id="submenu-9">
                  <li className="sub-menu--item">
                    <a href="sign-up.html">
                      <span className="menu-item-text">sign up</span>
                    </a>
                  </li>
                  <li className="sub-menu--item">
                    <a href="sign-in.html">
                      <span className="menu-item-text">sign in</span>
                    </a>
                  </li>
                  <li className="sub-menu--item">
                    <a href="reset-password.html">
                      <span className="menu-item-text">reset password</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="nav-item nav-item-has-children">
            <a href="#" className="nav-link-item drop-trigger">
              Blog <i className="fas fa-angle-down" />
            </a>
            <ul className="sub-menu" id="submenu-10">
              <li className="sub-menu--item">
                <a href="blog.html">
                  <span className="menu-item-text">Our Blog</span>
                </a>
              </li>
              <li className="sub-menu--item">
                <a href="blog-column-one.html">
                  <span className="menu-item-text">blog column one</span>
                </a>
              </li>
              <li className="sub-menu--item">
                <a href="blog-column-two.html">
                  <span className="menu-item-text">blog column two</span>
                </a>
              </li>
              <li className="sub-menu--item">
                <a href="single-blog.html">
                  <span className="menu-item-text">blog details</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="contact-us.html" className="nav-link-item">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
      <div className="zubuz-header-btn-wrap">
        <a className="zubuz-login-btn" href="sign-up.html">
          Login
        </a>
      </div>
      <a className="zubuz-default-btn zubuz-header-btn" href="contact-us.html">
        <span>Get Started</span>
      </a>
    </div>
    {/* mobile menu trigger */}
    <div className="mobile-menu-trigger light">
      <span />
    </div>
  </nav>
</div>

</header>
{/* <!--End landex-header-section --> */}

<div className="zubuz-breadcrumb">
  <div className="container">
    <h1 className="post__title">Our Services</h1>
    <nav className="breadcrumbs">
      <ul>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li aria-current="page"> Our Services</li>
      </ul>
    </nav>
  </div>
</div>

{/* <!-- End breadcrumb --> */}

<div className="section zubuz-section-padding3">
  <div className="container">
    <div className="zubuz-section-title zubuz-two-column-title">
      <div className="row">
        <div className="col-lg-7">
          <h2>Wide range of SaaS solutions</h2>
        </div>
        <div className="col-lg-5 d-flex align-items-center">
          <p>
            Discovered our all customized services and you can double, triple,
            or quadruple your income &amp; beat your competition with
            professional services!
          </p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xl-4 col-md-6">
        <div className="zubuz-iconbox-wrap-left iconbox-left-border">
          <div className="zubuz-iconbox-icon none-bg">
            <Image src="/assets/images/v3/icon1.png" 
            alt="" 
            width={150}
            height={186}
            />
          </div>
          <div className="zubuz-iconbox-data data-small">
            <span>Customer support</span>
            <p>Clients engagement platform that offers tools for ticketing.</p>
            <a className="zubuz-iconbox-btn" href="single-service.html">
              {" "}
              <span>Read more</span>{" "}
              <Image src="/assets/images/icon/arrow-right2.svg" alt=""
                        width={150}
                        height={186} 
              />
            </a>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-6">
        <div className="zubuz-iconbox-wrap-left iconbox-left-border">
          <div className="zubuz-iconbox-icon none-bg">
            <Image src="/assets/images/v3/icon2.png" alt="" 
                      width={150}
                      height={186}
            />
          </div>
          <div className="zubuz-iconbox-data data-small">
            <span>Project management</span>
            <p>A project and task management tool that helps plan, organize.</p>
            <a className="zubuz-iconbox-btn" href="single-service.html">
              {" "}
              <span>Read more</span>{" "}
              <Image src="/assets/images/icon/arrow-right2.svg" alt="" 
                        width={150}
                        height={186}/>
            </a>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-6">
        <div className="zubuz-iconbox-wrap-left iconbox-left-border">
          <div className="zubuz-iconbox-icon none-bg">
            <Image src="/assets/images/v3/icon3.png" alt=""
                      width={150}
                      height={186} />
          </div>
          <div className="zubuz-iconbox-data data-small">
            <span>Email marketing</span>
            <p>A widely used email marketing platform with some features.</p>
            <a className="zubuz-iconbox-btn" href="single-service.html">
              {" "}
              <span>Read more</span>{" "}
              <Image src="/assets/images/icon/arrow-right2.svg" alt="" 
                        width={150}
                        height={186}/>
            </a>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-6">
        <div className="zubuz-iconbox-wrap-left iconbox-left-border">
          <div className="zubuz-iconbox-icon none-bg">
            <Image src="/assets/images/v3/icon4.png" alt="" 
                      width={150}
                      height={186}
            />
          </div>
          <div className="zubuz-iconbox-data data-small">
            <span>Human resources</span>
            <p>An all-in-one HR, payroll, and benefits platform designed.</p>
            <a className="zubuz-iconbox-btn" href="single-service.html">
              {" "}
              <span>Read more</span>{" "}
              <Image src="/assets/images/icon/arrow-right2.svg" alt="" 
                        width={150}
                        height={186}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-6">
        <div className="zubuz-iconbox-wrap-left iconbox-left-border">
          <div className="zubuz-iconbox-icon none-bg">
            <Image src="/assets/images/v3/icon5.png" alt="" 
                      width={150}
                      height={186}/>
          </div>
          <div className="zubuz-iconbox-data data-small">
            <span>Accounting and finance</span>
            <p>
              Accounting software that helps with invoicing financial report.
            </p>
            <a className="zubuz-iconbox-btn" href="single-service.html">
              {" "}
              <span>Read more</span>{" "}
              <Image src="/assets/images/icon/arrow-right2.svg" alt="" 
                        width={150}
                        height={186}/>
            </a>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-6">
        <div className="zubuz-iconbox-wrap-left iconbox-left-border">
          <div className="zubuz-iconbox-icon none-bg">
            <Image src="/assets/images/v3/icon6.png" alt="" 
                      width={150}
                      height={186}/>
          </div>
          <div className="zubuz-iconbox-data data-small">
            <span>Cyber Security</span>
            <p>Security platform that provide protection from cyber threat.</p>
            <a className="zubuz-iconbox-btn" href="single-service.html">
              {" "}
              <span>Read more</span>{" "}
              <Image src="/assets/images/icon/arrow-right2.svg" alt=""
                        width={150}
                        height={186} />
            </a>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-6">
        <div className="zubuz-iconbox-wrap-left iconbox-left-border">
          <div className="zubuz-iconbox-icon none-bg">
            <Image src="/assets/images/v3/icon7.png" alt=""
                      width={150}
                      height={186} />
          </div>
          <div className="zubuz-iconbox-data data-small">
            <span>Security features</span>
            <p>Security is a crucial aspect of our app security measures.</p>
            <a className="zubuz-iconbox-btn" href="single-service.html">
              {" "}
              <span>Read more</span>{" "}
              <Image src="/assets/images/icon/arrow-right2.svg" alt="" 
                        width={150}
                        height={186}/>
            </a>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-6">
        <div className="zubuz-iconbox-wrap-left iconbox-left-border">
          <div className="zubuz-iconbox-icon none-bg">
            <Image src="/assets/images/v3/icon8.png" alt="" 
                      width={150}
                      height={186}/>
          </div>
          <div className="zubuz-iconbox-data data-small">
            <span>Integration support</span>
            <p>Ability to connect with other financial tools of accounting.</p>
            <a className="zubuz-iconbox-btn" href="single-service.html">
              {" "}
              <span>Read more</span>{" "}
              <Image src="/assets/images/icon/arrow-right2.svg" alt=""
                        width={150}
                        height={186} />
            </a>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-6">
        <div className="zubuz-iconbox-wrap-left iconbox-left-border">
          <div className="zubuz-iconbox-icon none-bg">
            <Image src="/assets/images/v3/icon9.png" alt=""
                      width={150}
                      height={186} />
          </div>
          <div className="zubuz-iconbox-data data-small">
            <span>Currency conversion</span>
            <p>Our finance app also offers all currency conversion tools.</p>
            <a className="zubuz-iconbox-btn" href="single-service.html">
              {" "}
              <span>Read more</span>{" "}
              <Image src="/assets/images/icon/arrow-right2.svg" alt="" 
                        width={150}
                        height={186}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* <!-- End Section --> */}

<div className="zubuz-divider"></div>
{/* <!-- end divider --> */}

<div className="section zubuz-section-padding3">
  <div className="container">
    <div className="zubuz-section-title center">
      <h2>Rational planning for rapid growth</h2>
    </div>
    <div className="pricing-btn">
      <div className="toggle-btn">
        <label>Monthly </label>
        <input
          className="form-check-input btn-toggle price-deck-trigger"
          type="checkbox"
          id="flexSwitchCheckDefault"
          data-pricing-trigger=""
          data-target="#table-price-value"
          defaultChecked={true}
        />
        <label>Annually</label>
      </div>
    </div>
    <div
      className="row zubuz-pricing-four-column"
      id="table-price-value"
      data-pricing-dynamic=""
      data-value-active="monthly"
    >
      <div className="col-xl-3 col-md-6">
        <div className="zubuz-pricing-wrap">
          <div className="zubuz-pricing-header">
            <h5>Free</h5>
          </div>
          <div className="zubuz-pricing-price">
            <h2>$</h2>
            <div
              className="zubuz-price dynamic-value"
              data-active={0}
              data-monthly={0}
              data-yearly={19}
            />
            <p
              className="dynamic-value"
              data-active="/Monthly"
              data-monthly="/monthly"
              data-yearly="/Yearly"
            />
          </div>
          <div className="zubuz-pricing-description">
            <p>This plan is typically limited in features and usage</p>
          </div>
          <div className="zubuz-pricing-body">
            <p>Free plan includes:</p>
            <ul>
              <li>
                <Image src="/assets/images/v3/check.png" alt="" 
                          width={150}
                          height={186}/>
                Basic features
              </li>
              <li>
                <Image src="/assets/images/v3/check.png" alt=""
                          width={150}
                          height={186} />
                Limited users &amp; usage
              </li>
              <li>
                <Image src="/assets/images/v3/check.png" alt="" 
                          width={150}
                          height={186}/>
                No customer support
              </li>
              <li>
                <Image src="/assets/images/v3/check.png" alt=""
                          width={150}
                          height={186} />
                30 day chat history
              </li>
              <li>
                <Image src="/assets/images/v3/check.png" alt="" 
                          width={150}
                          height={186}/>
                10 Integrations
              </li>
            </ul>
          </div>
          <a className="zubuz-pricing-btn" href="pricing.html">
            Try it for free
          </a>
        </div>
      </div>
      <div className="col-xl-3 col-md-6">
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
              data-active="/Monthly"
              data-monthly="/monthly"
              data-yearly="/Yearly"
            />
          </div>
          <div className="zubuz-pricing-description">
            <p>A simple and affordable plan only for small businesses</p>
          </div>
          <div className="zubuz-pricing-body">
            <p>Basic plan includes:</p>
            <ul>
              <li>
                <Image src="/assets/images/v3/check.png" alt="" 
                          width={150}
                          height={186}/>
                Core features
              </li>
              <li>
                <Image src="/assets/images/v3/check.png" alt=""
                          width={150}
                          height={186} />
                Increased limits
              </li>
              <li>
                <Image src="/assets/images/v3/check.png" alt=""
                          width={150}
                          height={186} />
                Priority support
              </li>
              <li>
                <Image src="/assets/images/v3/check.png" alt="" 
                          width={150}
                          height={186}/>
                Unlimited chat history
              </li>
              <li>
                <Image src="/assets/images/v3/check.png" alt=""
                          width={150}
                          height={186} />
                20 Integrations
              </li>
            </ul>
          </div>
          <a className="zubuz-pricing-btn" href="pricing.html">
            Try it for free
          </a>
        </div>
      </div>
      <div className="col-xl-3 col-md-6">
        <div className="zubuz-pricing-wrap active">
          <div className="zubuz-pricing-header">
            <h5>Standard</h5>
          </div>
          <div className="zubuz-pricing-price">
            <h2>$</h2>
            <div
              className="zubuz-price dynamic-value"
              data-active={29}
              data-monthly={29}
              data-yearly={59}
            />
            <p
              className="dynamic-value"
              data-active="/Monthly"
              data-monthly="/monthly"
              data-yearly="/Yearly"
            />
          </div>
          <div className="zubuz-pricing-description">
            <p>This plan is geared toward growing businesses</p>
          </div>
          <div className="zubuz-pricing-body">
            <p>Standard plan includes:</p>
            <ul>
              <li>
                <Image src="/assets/images/v3/check.png" alt="" 
                          width={150}
                          height={186}/>
                Expanded features
              </li>
              <li>
                <Image src="/assets/images/v3/check.png" alt="" 
                          width={150}
                          height={186}/>
                Increased users
              </li>
              <li>
                <Image src="/assets/images/v3/check.png" alt="" 
                          width={150}
                          height={186}/>
                Priority email support
              </li>
              <li>
                <Image src="/assets/images/v3/check.png" alt="" 
                          width={150}
                          height={186}/>
                Unlimited chat history
              </li>
              <li>
                <Image src="/assets/images/v3/check.png" alt="" 
                          width={150}
                          height={186}/>
                30 Integrations
              </li>
            </ul>
          </div>
          <a className="zubuz-pricing-btn active" href="pricing.html">
            Try it for free
          </a>
        </div>
      </div>
      <div className="col-xl-3 col-md-6">
        <div className="zubuz-pricing-wrap">
          <div className="zubuz-pricing-header">
            <h5>Enterprise</h5>
          </div>
          <div className="zubuz-pricing-price">
            <h2>$</h2>
            <div
              className="zubuz-price dynamic-value"
              data-active={59}
              data-monthly={59}
              data-yearly={99}
            />
            <p
              className="dynamic-value"
              data-active="/Monthly"
              data-monthly="/monthly"
              data-yearly="/Yearly"
            />
          </div>
          <div className="zubuz-pricing-description">
            <p>Tailored to the unique needs of large enterprises</p>
          </div>
          <div className="zubuz-pricing-body">
            <p>Enterprise plan includes:</p>
            <ul>
              <li>
                <Image src="/assets/images/v3/check.png" alt="" 
                          width={150}
                          height={186}/>
                Customized features
              </li>
              <li>
                <Image src="/assets/images/v3/check.png" alt="" 
                          width={150}
                          height={186}/>
                Scalability &amp; security{" "}
              </li>
              <li>
                <Image src="/assets/images/v3/check.png" alt=""
                          width={150}
                          height={186} />
                Account manager
              </li>
              <li>
                <Image src="/assets/images/v3/check.png" alt=""
                          width={150}
                          height={186} />
                Unlimited chat history
              </li>
              <li>
                <Image src="/assets/images/v3/check.png" alt="" 
                          width={150}
                          height={186}/>
                50 Integrations
              </li>
            </ul>
          </div>
          <a className="zubuz-pricing-btn" href="pricing.html">
            Try it for free
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

{/* <!-- End Section --> */}

<div className="section zubuz-section-padding bg-light">
  <div className="container">
    <div className="zubuz-section-title zubuz-two-column-title">
      <div className="row">
        <div className="col-lg-8">
          <h2>Integration with dozens of tools</h2>
        </div>
        <div className="col-lg-4 d-flex align-items-center">
          <div className="zubuz-title-btn">
            <a className="zubuz-default-btn pill" href="integrations.html">
              <span>Browse all integrations</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="zubuz-video-column">
      <div className="row">
        <div className="col-lg-6">
          <div className="zubuz-video-wrap">
            <Image src="/assets/images/v3/video-bg.png" alt="" 
                      width={150}
                      height={186}/>
            <a
              className="video-init zubuz-review-video"
              href="https://www.youtube.com/watch?v=SixdAQtWJQ8"
            >
              <Image src="/assets/images/v3/play-btn.png" alt="" 
                        width={150}
                        height={186}/>
            </a>
            <div className="waves wave-1">
              <a
                className="video-init zubuz-review-video"
                href="https://www.youtube.com/watch?v=SixdAQtWJQ8"
              ></a>
              <div className="waves wave-2">
                <a
                  className="video-init zubuz-review-video"
                  href="https://www.youtube.com/watch?v=SixdAQtWJQ8"
                ></a>
                <div className="waves wave-3">
                  <a
                    className="video-init zubuz-review-video"
                    href="https://www.youtube.com/watch?v=SixdAQtWJQ8"
                  ></a>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                <div className="zubuz-testimonial-content">
                  <ul>
                    <li>
                      <Image src="/assets/images/v3/star.png" alt="" 
                                width={150}
                                height={186}/>
                    </li>
                    <li>
                      <Image src="/assets/images/v3/star.png" alt="" 
                                width={150}
                                height={186}/>
                    </li>
                    <li>
                      <Image src="/assets/images/v3/star.png" alt="" 
                                width={150}
                                height={186}/>
                    </li>
                    <li>
                      <Image src="/assets/images/v3/star.png" alt="" 
                                width={150}
                                height={186}/>
                    </li>
                    <li>
                      <Image src="/assets/images/v3/star.png" alt=""
                                width={150}
                                height={186} />
                    </li>
                  </ul>
                  <p>
                  Our team&apos;s productivity grew up after implementing this
                  SaaS tool. The intuitive interface &amp; seamless
                  collaboration features made a significant impact on our
                  workflow. Game-changer for our company efficiency!
                  </p>
                  <div className="zubuz-testimonial-authors-wraps">
                    <div className="zubuz-testimonial-authors">
                      <p>Jonas Aly</p>
                      <span>Founder @ Sitemark</span>
                    </div>
                    <div className="zubuz-testimonial-author-logo">
                      <Image src="/assets/images/v2/b_v2_5.png" alt=""
                                width={150}
                                height={186} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* <!-- End Section --> */}





<footer className="zubuz-footer-section main-footer">
  <div className="container">
    <div className="zubuz-footer-top">
      <div className="row">
        <div className="col-xl-4 col-lg-12">
          <div className="zubuz-footer-textarea">
            <a href="">
              <Image src="/assets/images/logo/logo-dark.png" alt="" 
                        width={150}
                        height={186}/>
            </a>
            <p>
              We&apos;re your innovation partner, delivering cutting-edge solutions
              that elevate your business to the next level.
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
    <div className="zubuz-footer-bottom">
      <div className="zubuz-social-icon order-md-2">
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
            <a href="https://www.instagram.com/" target="_blank">
              <i className="fab fa-instagram" />
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
      <div className="zubuz-copywright">
        <p> ©Copyright 2024, All Rights Reserved by Mthemeus</p>
      </div>
    </div>
  </div>
</footer>





<Script src="assets/js/jquery-3.6.0.min.js"></Script>
  <Script src="assets/js/bootstrap.bundle.min.js"></Script>
  <Script src="assets/js/menu/menu.js"></Script>
  <Script src="assets/js/isotope.pkgd.min.js"></Script>
  <Script src="assets/js/jquery.magnific-popup.min.js"></Script>
  <Script src="assets/js/slick.js"></Script>
  <Script src="assets/js/countdown.js"></Script>
  <Script src="assets/js/wow.min.js"></Script>
  <Script src="assets/js/faq.js"></Script>
  <Script src="assets/js/app.js"></Script>

    </>


 

  )
}

export default Service