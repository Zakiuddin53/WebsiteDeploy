import React from "react";
import Head from "next/head";
import Script from "next/script";
import Image from 'next/image';
import Link from 'next/link'
import RootLayout from "./layout";

function AboutPage() {
  return (
    <RootLayout params={{  locale: 'en'}}>


<div className="zubuz-breadcrumb">
  <div className="container">
    <h1 className="post__title">About Us</h1>
    <nav className="breadcrumbs">
      <ul>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li aria-current="page"> About Us</li>
      </ul>
    </nav>
  </div>
</div>
<>
  <div className="section zubuz-section-padding3">
    <div className="container">
      <div className="zubuz-section-title zubuz-two-column-title">
        <div className="row">
          <div className="col-lg-7">
            <h2>Our company&apos;s journey story</h2>
          </div>
          <div className="col-lg-5 d-flex align-items-center">
            <p>
              Born in 2010 out of a passion for innovation and a commitment to
              redefining industry standards. Our story is one of resilience and
              creativity.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4">
          <div className="zubuz-about-thumb">
            <Image src="/assets/images/about/about1.png" 
            alt=""
            className="light-version-logo"
            width={100}
            height={100}
             />
          </div>
          <div className="zubuz-about-thumb">
            <Image src="/assets/images/about/about1.png" 
            alt=""
            className="light-version-logo"
            width={150}
            height={186} 
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="zubuz-about-thumb">
            <Image src="/assets/images/about/about3.png" 
            alt=""
            className="light-version-logo"
            width={150}
            height={186} 
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="zubuz-about-thumb">
            <Image src="/assets/images/about/about4.png" 
            alt="" 
            className="light-version-logo"
            width={150}
            height={186}
            />
          </div>
          <div className="zubuz-about-thumb">
            <Image src="/assets/images/about/about5.png" 
            alt="" 
            className="light-version-logo"
            width={150}
            height={186}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Section */}
</>
<>
  <div className="section zubuz-section-padding5">
    <div id="zubuz-counter" />
    <div className="container">
      <div className="zubuz-counter-wrap2">
        <div className="zubuz-counter-data primary-color">
          <h2 className="zubuz-counter-number">
            <span data-percentage={15} className="zubuz-counter" />
            <em>+</em>
          </h2>
          <p>Years of experience</p>
        </div>
        <div className="zubuz-counter-data primary-color">
          <h2 className="zubuz-counter-number">
            <span data-percentage={2} className="zubuz-counter" />
            <em>K</em>
          </h2>
          <p>Monthly active user</p>
        </div>
        <div className="zubuz-counter-data primary-color">
          <h2 className="zubuz-counter-number">
            <span data-percentage={100} className="zubuz-counter" />
            <em>%</em>
          </h2>
          <p>Client satisfaction score</p>
        </div>
        <div className="zubuz-counter-data primary-color">
          <h2 className="zubuz-counter-number">
            <span data-percentage={30} className="zubuz-counter" />
            <em>K</em>
          </h2>
          <p>Successful project</p>
        </div>
      </div>
    </div>
  </div>
  {/* End section */}
</>
<>
  <div className="zubuz-divider" />
  {/* end divider */}
  <div className="section zubuz-section-padding2">
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <div className="zubuz-v3-thumb">
            <Image src="/assets/images/v3/thumb-v3-2.png" 
            alt="" 
            
            width={150}
            height={186}
            />
            <div className="zubuz-v3-card">
              <Image src="/assets/images/v3/card-v3-4.png" 
              alt=""
              width={150}
              height={186}
               />
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="zubuz-default-content m-left">
            <h2>Our core values drive our work</h2>
            <p>
              We&apos;re dedicated to simplifying complex processes, fostering
              collaboration, and propelling your success.
            </p>
            <div className="zubuz-extara-mt">
              <div className="zubuz-iconbox-wrap-left mw-100">
                <div className="zubuz-iconbox-icon none-bg">
                  <Image src="/assets/images/about/icon1.png" 
                  alt="" 
                  width={150}
                  height={186}
                  />
                </div>
                <div className="zubuz-iconbox-data data-small">
                  <span>Innovation &amp; Collaboration:</span>
                  <p>
                    We embrace creativity and continuous improvement, fostering
                    a culture of innovation. We believe in the power of
                    teamwork.
                  </p>
                </div>
              </div>
              <div className="zubuz-iconbox-wrap-left mw-100">
                <div className="zubuz-iconbox-icon none-bg">
                  <Image src="/assets/images/about/icon2.png" 
                  alt="" 
                  width={150}
                  height={186}
                  />
                </div>
                <div className="zubuz-iconbox-data data-small">
                  <span>Integrity &amp; Customer-Centricity:</span>
                  <p>
                    We are committed to delivering exceptional value. We uphold
                    the highest standards of honesty and ethics in everything we
                    do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End section */}
</>
<>
  <div className="section zubuz-section-padding3 dark-bg">
    <div className="container">
      <div className="zubuz-section-title light zubuz-two-column-title">
        <div className="row">
          <div className="col-lg-6">
            <h2>We’ve a team of creatives</h2>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div className="zubuz-title-btn">
              <a className="zubuz-default-btn pill" href="team.html">
                <span>Join Our Team</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-4 col-md-6">
          <div className="zubuz-team-wrap">
            <div className="zubuz-team-thumb">
              <Image src="/assets/images/team/team1.png" 
              alt="" 
              width={150}
              height={186}
              />
              <div className="zubuz-team-data">
                <a href="">
                  <h4>Mr. Abraham Maslow</h4>
                </a>
                <p>CEO &amp; Founder</p>
                <div className="zubuz-social-icon social-box small-box position">
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6">
          <div className="zubuz-team-wrap">
            <div className="zubuz-team-thumb">
              <Image src="/assets/images/team/team6.png" 
              alt="" 
              width={150}
              height={186}
              />
              <div className="zubuz-team-data">
                <a href="">
                  <h4>William Robert</h4>
                </a>
                <p>VP of Marketing</p>
                <div className="zubuz-social-icon social-box small-box position">
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6">
          <div className="zubuz-team-wrap">
            <div className="zubuz-team-thumb">
              <Image src="/assets/images/team/team5.png" 
              alt="" 
              width={150}
              height={186}
              />
              <div className="zubuz-team-data">
                <a href="">
                  <h4>Henry Fayol</h4>
                </a>
                <p>WP Developer</p>
                <div className="zubuz-social-icon social-box small-box position">
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Section */}
  <div className="section zubuz-section-padding2">
    <div className="container">
      <div className="zubuz-section-title center">
        <h2>Find all the answers to your confusion</h2>
      </div>
      <div
        className="zubuz-accordion-wrap zubuz-accordion-wrap2"
        id="zubuz-accordion"
      >
        <div className="zubuz-accordion-item open">
          <div className="zubuz-accordion-header">
            <p>Q: What makes your SaaS solution stand out from competitors?</p>
            <div className="zubuz-active-icon">
              <Image src="/assets/images/v3/plus.png" 
              alt="" 
              width={100}
              height={100}
              />
            </div>
            <div className="zubuz-inactive-icon">
              <Image src="/assets/images/v3/minus.png" 
              alt="" 
              width={150}
              height={186}
              />
            </div>
          </div>
          <div className="zubuz-accordion-body">
            <p>
              {" "}
              Our SaaS platform distinguishes itself through a combination of
              user-friendly design, robust feature set, and a commitment to
              constant innovation. We prioritize customer feedback to ensure we
              stay ahead of the curve and meet evolving business needs.
            </p>
          </div>
        </div>
        <div className="zubuz-accordion-item">
          <div className="zubuz-accordion-header">
            <p>Q: How secure is the data stored on your platform?</p>
            <div className="zubuz-active-icon">
              <Image src="/assets/images/v3/plus.png" alt=""
                          width={150}
                          height={186}
              
              />
            </div>
            <div className="zubuz-inactive-icon">
              <Image src="/assets/images/v3/minus.png" 
              alt="" 
              width={150}
              height={186}
              />
            </div>
          </div>
          <div className="zubuz-accordion-body">
            <p>
              Security is our top priority. We employ state-of-the-art
              encryption, regular security audits, and compliance with industry
              standards to safeguard your data. Our commitment is to provide a
              secure environment for your valuable information.
            </p>
          </div>
        </div>
        <div className="zubuz-accordion-item">
          <div className="zubuz-accordion-header">
            <p>Q: Can your SaaS solution integrate with other tools we use?</p>
            <div className="zubuz-active-icon">
              <Image src="/assets/images/v3/plus.png" 
              alt="" 
              width={150}
              height={186}
              />
            </div>
            <div className="zubuz-inactive-icon">
              <Image src="/assets/images/v3/minus.png" alt=""
                          width={150}
                          height={186}
                           />
            </div>
          </div>
          <div className="zubuz-accordion-body">
            <p>
              Absolutely. We understand the importance of seamless integration.
              Our SaaS solution is designed to work harmoniously with a variety
              of popular tools and platforms, ensuring a smooth workflow and
              reducing any disruptions to your current processes.
            </p>
          </div>
        </div>
        <div className="zubuz-accordion-item">
          <div className="zubuz-accordion-header">
            <p>Q: What kind of customer support can we expect?</p>
            <div className="zubuz-active-icon">
              <Image src="/assets/images/v3/plus.png" alt="" 
                          width={150}
                          height={186}
              />
            </div>
            <div className="zubuz-inactive-icon">
              <Image src="/assets/images/v3/minus.png" alt="" 
                          width={150}
                          height={186}
              />
            </div>
          </div>
          <div className="zubuz-accordion-body">
            <p>
              Our customer support team is dedicated to your success. You can
              expect prompt responses, helpful resources, and, if needed,
              personalized assistance. We believe in building long-lasting
              relationships with our users, and exceptional support.
            </p>
          </div>
        </div>
        <div className="zubuz-accordion-item">
          <div className="zubuz-accordion-header">
            <p>
              Q: How does your pricing model work, and is there flexibility as
              our business grows?
            </p>
            <div className="zubuz-active-icon plus">
              <Image src="/assets/images/v3/plus.png" alt="" 
                          width={150}
                          height={186}/>
            </div>
            <div className="zubuz-inactive-icon">
              <Image src="/assets/images/v3/minus.png" alt=""
                          width={150}
                          height={186} />
            </div>
          </div>
          <div className="zubuz-accordion-body">
            <p>
              We offer a range of flexible pricing plans to accommodate
              businesses of all sizes. Whether you&apos;re a startup or an
              enterprise, our pricing scales with your needs. You can choose
              from monthly or annual billing.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Section */}
</>
<>

  {/* scripts */}
</>



    </RootLayout>

    

  );
}

export default AboutPage;
