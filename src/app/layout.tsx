import Script from "next/script";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/aos.css";
import "../../public/assets/css/magnific-popup.css";
import "../../public/assets/css/animate.css";
import "../../public/assets/css/fontawesome.css";
import "../../public/assets/css/main.css";
import "../../public/assets/css/app.min.css";
import "../../public/assets/css/slick.css";

export default function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { children, params } = props;
  const locale = params.locale || 'en';
  return (
    <html lang={props.params.locale}>
      <body className="light">
        <div className="zubuz-preloader-wrap">
          <div className="zubuz-preloader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        {props.children}
      </body>
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="assets/images/favicon.ico" type="image/x-icon" />

        <link
          rel="shortcut icon"
          href="assets/images/favicon.ico"
          type="image/x-icon"
        />
      </head>

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
    </html>
  );
}
