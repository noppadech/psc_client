/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-sync-scripts */
import Document, { Head, Html, Main, NextScript } from 'next/document';

import { AppConfig } from '@/utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          {/* <!-- Google Web Fonts --> */}
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100;300;500;700;800&display=swap'
            rel='stylesheet'
          />

          <link
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css'
            rel='stylesheet'
          />
          <link
            href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css'
            rel='stylesheet'
          />
          <link
            rel='stylesheet'
            href='https://cdn.jsdelivr.net/npm/owl.carousel@2.3.4/dist/assets/owl.carousel.min.css'
          />
          <link
            rel='stylesheet'
            href='https://cdn.jsdelivr.net/npm/animate.css@3.7.2/animate.min.css'
          />
          <link
            rel='stylesheet'
            href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
          />
          <link rel='stylesheet' href='css/main.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <script src='https://code.jquery.com/jquery-3.4.1.min.js'></script>
        <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'></script>
        <script src='https://cdn.jsdelivr.net/npm/wowjs@1.1.3/dist/wow.min.js'></script>
        <script src='https://cdn.jsdelivr.net/npm/jquery.easing@1.4.1/jquery.easing.min.js'></script>
        <script src='https://cdn.jsdelivr.net/npm/waypoints@4.0.1/lib/jquery.waypoints.min.js'></script>
        <script src='https://cdn.jsdelivr.net/npm/counterup@1.0.2/jquery.counterup.min.js'></script>
        <script src='https://cdn.jsdelivr.net/npm/owl.carousel@2.3.4/dist/owl.carousel.min.js'></script>
        <script src='js/main.js'></script>
      </Html>
    );
  }
}

export default MyDocument;
