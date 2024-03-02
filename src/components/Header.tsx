import Link from "next/link";

export function Header() {
  return (
    <header
      className="site-header site-header--menu-center zubuz-header-section"
      id="sticky-menu"
    >
      <div className="container">
        <nav className="navbar site-navbar">
          <div className="brand-logo">
            <a href="index.html">
              <img
                src="assets/images/logo/logo-dark.png"
                alt=""
                className="light-version-logo"
              />
            </a>
          </div>
          <div className="menu-block-wrapper">
            <div className="menu-overlay"></div>
            <nav className="menu-block" id="append-menu-header">
              <div className="mobile-menu-head">
                <div className="go-back">
                  <i className="fa fa-angle-left"></i>
                </div>
                <div className="current-menu-title"></div>
                <div className="mobile-menu-close">&times;</div>
              </div>
              <ul className="site-menu-main">
                <li className="nav-item">
                  <a href="/" className="nav-link-item">
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <Link href="/portfolio" className="nav-link-item">
                    Portfolio
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/contact" className="nav-link-item">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="mobile-menu-trigger light">
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
}
