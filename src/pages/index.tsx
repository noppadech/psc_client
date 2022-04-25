/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable tailwindcss/no-custom-classname */
// import { useRouter } from 'next/router';

import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const Index = () => {
  // const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title={AppConfig.title}
          description='Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework.'
        />
      }
    >
      {/* <!-- Full Screen Search Start --> */}
      <div className='modal fade' id='searchModal' tabIndex={-1}>
        <div className='modal-dialog modal-fullscreen'>
          <div
            className='modal-content'
            style={{ background: 'rgba(9, 30, 62, .7);' }}
          >
            <div className='modal-header border-0'>
              <button
                type='button'
                className='btn btn-close bg-white'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body d-flex align-items-center justify-content-center'>
              <div className='input-group' style={{ maxWidth: '600px;' }}>
                <input
                  type='text'
                  className='form-control border-primary bg-transparent p-3'
                  placeholder='Type search keyword'
                ></input>
                <button className='btn btn-primary px-4'>
                  <i className='bi bi-search'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Full Screen Search End --> */}

      {/* <!-- Facts Start --> */}
      <div className='container-fluid facts pt-lg-0 py-5'>
        <div className='pt-lg-0 container py-5'>
          <div className='row gx-0'>
            <div className='col-lg-4 wow zoomIn' data-wow-delay='0.1s'>
              <div
                className='bg-primary d-flex align-items-center justify-content-center p-4 shadow'
                style={{ height: '150px;' }}
              >
                <div
                  className='d-flex align-items-center justify-content-center mb-2 rounded bg-white'
                  style={{ width: '60px;', height: '60px;' }}
                >
                  <i className='fa fa-users text-primary'></i>
                </div>
                <div className='ps-4'>
                  <h5 className='mb-0 text-white'>Happy Clients</h5>
                  <h1 className='mb-0 text-white' data-toggle='counter-up'>
                    12345
                  </h1>
                </div>
              </div>
            </div>
            <div className='col-lg-4 wow zoomIn' data-wow-delay='0.3s'>
              <div
                className='bg-light d-flex align-items-center justify-content-center p-4 shadow'
                style={{ height: '150px;' }}
              >
                <div
                  className='bg-primary d-flex align-items-center justify-content-center mb-2 rounded'
                  style={{ width: '60px;', height: '60px;' }}
                >
                  <i className='fa fa-check text-white'></i>
                </div>
                <div className='ps-4'>
                  <h5 className='text-primary mb-0'>Projects Done</h5>
                  <h1 className='mb-0' data-toggle='counter-up'>
                    12345
                  </h1>
                </div>
              </div>
            </div>
            <div className='col-lg-4 wow zoomIn' data-wow-delay='0.6s'>
              <div
                className='bg-primary d-flex align-items-center justify-content-center p-4 shadow'
                style={{ height: '150px;' }}
              >
                <div
                  className='d-flex align-items-center justify-content-center mb-2 rounded bg-white'
                  style={{ width: '60px;', height: '60px;' }}
                >
                  <i className='fa fa-award text-primary'></i>
                </div>
                <div className='ps-4'>
                  <h5 className='mb-0 text-white'>Win Awards</h5>
                  <h1 className='mb-0 text-white' data-toggle='counter-up'>
                    12345
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Facts Start --> */}

      {/* // <!-- About Start --> */}
      <div className='container-fluid wow fadeInUp py-5' data-wow-delay='0.1s'>
        <div className='container py-5'>
          <div className='row g-5'>
            <div className='col-lg-7'>
              <div className='section-title position-relative mb-5 pb-3'>
                <h5 className='fw-bold text-primary text-uppercase'>
                  About Us
                </h5>
                <h1 className='mb-0'>
                  The Best IT Solution With 10 Years of Experience
                </h1>
              </div>
              <p className='mb-4'>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum
                et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo
                justo et tempor eirmod magna dolore erat amet
              </p>
              <div className='row g-0 mb-3'>
                <div className='col-sm-6 wow zoomIn' data-wow-delay='0.2s'>
                  <h5 className='mb-3'>
                    <i className='fa fa-check text-primary me-3'></i>Award
                    Winning
                  </h5>
                  <h5 className='mb-3'>
                    <i className='fa fa-check text-primary me-3'></i>
                    Professional Staff
                  </h5>
                </div>
                <div className='col-sm-6 wow zoomIn' data-wow-delay='0.4s'>
                  <h5 className='mb-3'>
                    <i className='fa fa-check text-primary me-3'></i>24/7
                    Support
                  </h5>
                  <h5 className='mb-3'>
                    <i className='fa fa-check text-primary me-3'></i>Fair Prices
                  </h5>
                </div>
              </div>
              <div
                className='d-flex align-items-center wow fadeIn mb-4'
                data-wow-delay='0.6s'
              >
                <div
                  className='bg-primary d-flex align-items-center justify-content-center rounded'
                  style={{ width: '60px;', height: '60px;' }}
                >
                  <i className='fa fa-phone-alt text-white'></i>
                </div>
                <div className='ps-4'>
                  <h5 className='mb-2'>Call to ask any question</h5>
                  <h4 className='text-primary mb-0'>+012 345 6789</h4>
                </div>
              </div>
              <a
                href='quote.html'
                className='btn btn-primary wow zoomIn mt-3 py-3 px-5'
                data-wow-delay='0.9s'
              >
                Request A Quote
              </a>
            </div>
            <div className='col-lg-5' style={{ height: '500px;' }}>
              <div className='position-relative h-100'>
                <img
                  className='position-absolute w-100 h-100 wow zoomIn rounded object-cover'
                  data-wow-delay='0.9s'
                  src='img/about.jpg'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* <!-- Features Start --> */}
      <div className='container-fluid wow fadeInUp py-5' data-wow-delay='0.1s'>
        <div className='container py-5'>
          <div
            className='section-title position-relative mx-auto mb-5 pb-3 text-center '
            style={{ maxWidth: '600px;' }}
          >
            <h5 className='fw-bold text-primary text-uppercase'>
              Why Choose Us
            </h5>
            <h1 className='mb-0'>
              We Are Here to Grow Your Business Exponentially
            </h1>
          </div>
          <div className='row g-5'>
            <div className='col-lg-4'>
              <div className='row g-5'>
                <div className='col-12 wow zoomIn' data-wow-delay='0.2s'>
                  <div
                    className='bg-primary d-flex align-items-center justify-content-center mb-3 rounded'
                    style={{ width: '60px;', height: '60px;' }}
                  >
                    <i className='fa fa-cubes text-white'></i>
                  </div>
                  <h4>Best In Industry</h4>
                  <p className='mb-0'>
                    Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et
                    diam dolor
                  </p>
                </div>
                <div className='col-12 wow zoomIn' data-wow-delay='0.6s'>
                  <div
                    className='bg-primary d-flex align-items-center justify-content-center mb-3 rounded'
                    style={{ width: '60px;', height: '60px;' }}
                  >
                    <i className='fa fa-award text-white'></i>
                  </div>
                  <h4>Award Winning</h4>
                  <p className='mb-0'>
                    Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et
                    diam dolor
                  </p>
                </div>
              </div>
            </div>
            <div
              className='col-lg-4  wow zoomIn'
              data-wow-delay='0.9s'
              style={{ minHeight: '350px;' }}
            >
              <div className='position-relative h-100'>
                <img
                  className='position-absolute w-100 h-100 wow zoomIn rounded object-cover'
                  data-wow-delay='0.1s'
                  src='img/feature.jpg'
                />
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='row g-5'>
                <div className='col-12 wow zoomIn' data-wow-delay='0.4s'>
                  <div
                    className='bg-primary d-flex align-items-center justify-content-center mb-3 rounded'
                    style={{ width: '60px;', height: '60px;' }}
                  >
                    <i className='fa fa-users-cog text-white'></i>
                  </div>
                  <h4>Professional Staff</h4>
                  <p className='mb-0'>
                    Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et
                    diam dolor
                  </p>
                </div>
                <div className='col-12 wow zoomIn' data-wow-delay='0.8s'>
                  <div
                    className='bg-primary d-flex align-items-center justify-content-center mb-3 rounded'
                    style={{ width: '60px;', height: '60px;' }}
                  >
                    <i className='fa fa-phone-alt text-white'></i>
                  </div>
                  <h4>24/7 Support</h4>
                  <p className='mb-0'>
                    Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et
                    diam dolor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Features Start --> */}

      {/* <!-- Service Start --> */}
      <div className='container-fluid wow fadeInUp py-5' data-wow-delay='0.1s'>
        <div className='container py-5'>
          <div
            className='section-title position-relative mx-auto mb-5 pb-3 text-center'
            style={{ maxWidth: '600px;' }}
          >
            <h5 className='fw-bold text-primary text-uppercase'>
              Our Services
            </h5>
            <h1 className='mb-0'>
              Custom IT Solutions for Your Successful Business
            </h1>
          </div>
          <div className='row g-5'>
            <div className='col-lg-4 col-md-6 wow zoomIn' data-wow-delay='0.3s'>
              <div className='service-item bg-light d-flex flex-column align-items-center justify-content-center rounded text-center'>
                <div className='service-icon'>
                  <i className='fa fa-shield-alt text-white'></i>
                </div>
                <h4 className='mb-3'>Cyber Security</h4>
                <p className='m-0'>
                  Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
                  ipsum dolore sed
                </p>
                <a className='btn btn-lg btn-primary rounded' href=''>
                  <i className='bi bi-arrow-right'></i>
                </a>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 wow zoomIn' data-wow-delay='0.6s'>
              <div className='service-item bg-light d-flex flex-column align-items-center justify-content-center rounded text-center'>
                <div className='service-icon'>
                  <i className='fa fa-chart-pie text-white'></i>
                </div>
                <h4 className='mb-3'>Data Analytics</h4>
                <p className='m-0'>
                  Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
                  ipsum dolore sed
                </p>
                <a className='btn btn-lg btn-primary rounded' href=''>
                  <i className='bi bi-arrow-right'></i>
                </a>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 wow zoomIn' data-wow-delay='0.9s'>
              <div className='service-item bg-light d-flex flex-column align-items-center justify-content-center rounded text-center'>
                <div className='service-icon'>
                  <i className='fa fa-code text-white'></i>
                </div>
                <h4 className='mb-3'>Web Development</h4>
                <p className='m-0'>
                  Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
                  ipsum dolore sed
                </p>
                <a className='btn btn-lg btn-primary rounded' href=''>
                  <i className='bi bi-arrow-right'></i>
                </a>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 wow zoomIn' data-wow-delay='0.3s'>
              <div className='service-item bg-light d-flex flex-column align-items-center justify-content-center rounded text-center'>
                <div className='service-icon'>
                  <i className='fab fa-android text-white'></i>
                </div>
                <h4 className='mb-3'>Apps Development</h4>
                <p className='m-0'>
                  Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
                  ipsum dolore sed
                </p>
                <a className='btn btn-lg btn-primary rounded' href=''>
                  <i className='bi bi-arrow-right'></i>
                </a>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 wow zoomIn' data-wow-delay='0.6s'>
              <div className='service-item bg-light d-flex flex-column align-items-center justify-content-center rounded text-center'>
                <div className='service-icon'>
                  <i className='fa fa-search text-white'></i>
                </div>
                <h4 className='mb-3'>SEO Optimization</h4>
                <p className='m-0'>
                  Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
                  ipsum dolore sed
                </p>
                <a className='btn btn-lg btn-primary rounded' href=''>
                  <i className='bi bi-arrow-right'></i>
                </a>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 wow zoomIn' data-wow-delay='0.9s'>
              <div className='position-relative bg-primary h-100 d-flex flex-column align-items-center justify-content-center rounded p-5 text-center'>
                <h3 className='mb-3 text-white'>Call Us For Quote</h3>
                <p className='mb-3 text-white'>
                  Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor
                  est magna stet eirmod
                </p>
                <h2 className='mb-0 text-white'>+012 345 6789</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service End --> */}

      {/* <!-- Pricing Plan Start --> */}
      <div className='container-fluid wow fadeInUp py-5' data-wow-delay='0.1s'>
        <div className='container py-5'>
          <div
            className='section-title position-relative mx-auto mb-5 pb-3 text-center'
            style={{ maxWidth: '600px;' }}
          >
            <h5 className='fw-bold text-primary text-uppercase'>
              Pricing Plans
            </h5>
            <h1 className='mb-0'>
              We are Offering Competitive Prices for Our Clients
            </h1>
          </div>
          <div className='row g-0'>
            <div className='col-lg-4 wow slideInUp' data-wow-delay='0.6s'>
              <div className='bg-light rounded'>
                <div className='border-bottom mb-4 py-4 px-5'>
                  <h4 className='text-primary mb-1'>Basic Plan</h4>
                  <small className='text-uppercase'>
                    For Small Size Business
                  </small>
                </div>
                <div className='p-5 pt-0'>
                  <h1 className='display-5 mb-3'>
                    <small
                      className='align-top'
                      style={{ fontSize: '22px;', lineHeight: '45px;' }}
                    >
                      $
                    </small>
                    49.00
                    <small
                      className='align-bottom'
                      style={{ fontSize: '16px;', lineHeight: '40px;' }}
                    >
                      / Month
                    </small>
                  </h1>
                  <div className='d-flex justify-content-between mb-3'>
                    <span>HTML5 & CSS3</span>
                    <i className='fa fa-check text-primary pt-1'></i>
                  </div>
                  <div className='d-flex justify-content-between mb-3'>
                    <span>Bootstrap v5</span>
                    <i className='fa fa-check text-primary pt-1'></i>
                  </div>
                  <div className='d-flex justify-content-between mb-3'>
                    <span>Responsive Layout</span>
                    <i className='fa fa-times text-danger pt-1'></i>
                  </div>
                  <div className='d-flex justify-content-between mb-2'>
                    <span>Cross-browser Support</span>
                    <i className='fa fa-times text-danger pt-1'></i>
                  </div>
                  <a href='' className='btn btn-primary mt-4 py-2 px-4'>
                    Order Now
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 wow slideInUp' data-wow-delay='0.3s'>
              <div
                className='position-relative rounded bg-white shadow'
                style={{ zIndex: 1 }}
              >
                <div className='border-bottom mb-4 py-4 px-5'>
                  <h4 className='text-primary mb-1'>Standard Plan</h4>
                  <small className='text-uppercase'>
                    For Medium Size Business
                  </small>
                </div>
                <div className='p-5 pt-0'>
                  <h1 className='display-5 mb-3'>
                    <small
                      className='align-top'
                      style={{ fontSize: '22px;', lineHeight: '45px;' }}
                    >
                      $
                    </small>
                    99.00
                    <small
                      className='align-bottom'
                      style={{ fontSize: '16px;', lineHeight: '40px;' }}
                    >
                      / Month
                    </small>
                  </h1>
                  <div className='d-flex justify-content-between mb-3'>
                    <span>HTML5 & CSS3</span>
                    <i className='fa fa-check text-primary pt-1'></i>
                  </div>
                  <div className='d-flex justify-content-between mb-3'>
                    <span>Bootstrap v5</span>
                    <i className='fa fa-check text-primary pt-1'></i>
                  </div>
                  <div className='d-flex justify-content-between mb-3'>
                    <span>Responsive Layout</span>
                    <i className='fa fa-check text-primary pt-1'></i>
                  </div>
                  <div className='d-flex justify-content-between mb-2'>
                    <span>Cross-browser Support</span>
                    <i className='fa fa-times text-danger pt-1'></i>
                  </div>
                  <a href='' className='btn btn-primary mt-4 py-2 px-4'>
                    Order Now
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 wow slideInUp' data-wow-delay='0.9s'>
              <div className='bg-light rounded'>
                <div className='border-bottom mb-4 py-4 px-5'>
                  <h4 className='text-primary mb-1'>Advanced Plan</h4>
                  <small className='text-uppercase'>
                    For Large Size Business
                  </small>
                </div>
                <div className='p-5 pt-0'>
                  <h1 className='display-5 mb-3'>
                    <small
                      className='align-top'
                      style={{ fontSize: '22px;', lineHeight: '45px;' }}
                    >
                      $
                    </small>
                    149.00
                    <small
                      className='align-bottom'
                      style={{ fontSize: '16px;', lineHeight: '40px;' }}
                    >
                      / Month
                    </small>
                  </h1>
                  <div className='d-flex justify-content-between mb-3'>
                    <span>HTML5 & CSS3</span>
                    <i className='fa fa-check text-primary pt-1'></i>
                  </div>
                  <div className='d-flex justify-content-between mb-3'>
                    <span>Bootstrap v5</span>
                    <i className='fa fa-check text-primary pt-1'></i>
                  </div>
                  <div className='d-flex justify-content-between mb-3'>
                    <span>Responsive Layout</span>
                    <i className='fa fa-check text-primary pt-1'></i>
                  </div>
                  <div className='d-flex justify-content-between mb-2'>
                    <span>Cross-browser Support</span>
                    <i className='fa fa-check text-primary pt-1'></i>
                  </div>
                  <a href='' className='btn btn-primary mt-4 py-2 px-4'>
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Pricing Plan End --> */}

      {/* <!-- Quote Start --> */}
      <div className='container-fluid wow fadeInUp py-5' data-wow-delay='0.1s'>
        <div className='container py-5'>
          <div className='row g-5'>
            <div className='col-lg-7'>
              <div className='section-title position-relative mb-5 pb-3'>
                <h5 className='fw-bold text-primary text-uppercase'>
                  Request A Quote
                </h5>
                <h1 className='mb-0'>
                  Need A Free Quote? Please Feel Free to Contact Us
                </h1>
              </div>
              <div className='row gx-3'>
                <div className='col-sm-6 wow zoomIn' data-wow-delay='0.2s'>
                  <h5 className='mb-4'>
                    <i className='fa fa-reply text-primary me-3'></i>Reply
                    within 24 hours
                  </h5>
                </div>
                <div className='col-sm-6 wow zoomIn' data-wow-delay='0.4s'>
                  <h5 className='mb-4'>
                    <i className='fa fa-phone-alt text-primary me-3'></i>24 hrs
                    telephone support
                  </h5>
                </div>
              </div>
              <p className='mb-4'>
                Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd
                ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo
                rebum sea invidunt voluptua. Eos vero eos vero ea et dolore
                eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores
                magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus
                sed.
              </p>
              <div
                className='d-flex align-items-center wow zoomIn mt-2'
                data-wow-delay='0.6s'
              >
                <div
                  className='bg-primary d-flex align-items-center justify-content-center rounded'
                  style={{ width: '60px;', height: '60px;' }}
                >
                  <i className='fa fa-phone-alt text-white'></i>
                </div>
                <div className='ps-4'>
                  <h5 className='mb-2'>Call to ask any question</h5>
                  <h4 className='text-primary mb-0'>+012 345 6789</h4>
                </div>
              </div>
            </div>
            <div className='col-lg-5'>
              <div
                className='bg-primary h-100 d-flex align-items-center wow zoomIn rounded p-5'
                data-wow-delay='0.9s'
              >
                <form>
                  <div className='row g-3'>
                    <div className='col-xl-12'>
                      <input
                        type='text'
                        className='form-control bg-light border-0'
                        placeholder='Your Name'
                        style={{ height: '55px;' }}
                      />
                    </div>
                    <div className='col-12'>
                      <input
                        type='email'
                        className='form-control bg-light border-0'
                        placeholder='Your Email'
                        style={{ height: '55px;' }}
                      />
                    </div>
                    <div className='col-12'>
                      <select
                        className='form-select bg-light border-0'
                        style={{ height: '55px;' }}
                      >
                        <option selected>Select A Service</option>
                        <option value='1'>Service 1</option>
                        <option value='2'>Service 2</option>
                        <option value='3'>Service 3</option>
                      </select>
                    </div>
                    <div className='col-12'>
                      <textarea
                        className='form-control bg-light border-0'
                        rows={3}
                        placeholder='Message'
                      ></textarea>
                    </div>
                    <div className='col-12'>
                      <button className='btn btn-dark w-100 py-3' type='submit'>
                        Request A Quote
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Quote End --> */}

      {/* <a href='https://github.com/ixartz/Next-js-Boilerplate'>
        <img
          src={`${router.basePath}/assets/images/nextjs-starter-banner.png`}
          alt='Nextjs starter banner'
        />
      </a>
      <h1 className='text-2xl font-bold'>
        Boilerplate code for your Nextjs project with Tailwind CSS
      </h1>
      <p>
        <span role='img' aria-label='rocket'>
          🚀
        </span>{' '}
        Next.js Boilerplate is a starter code for your Next js project by
        putting developer experience first .{' '}
        <span role='img' aria-label='zap'>
          ⚡️
        </span>{' '}
        Made with Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged,
        VSCode, Netlify, PostCSS, Tailwind CSS.
      </p>
      <h2 className='text-lg font-semibold'>Next js Boilerplate Features</h2>
      <p>Developer experience first:</p>
      <ul>
        <li>
          <span role='img' aria-label='fire'>
            🔥
          </span>{' '}
          <a href='https://nextjs.org' rel='nofollow'>
            Next.js
          </a>{' '}
          for Static Site Generator
        </li>
        <li>
          <span role='img' aria-label='art'>
            🎨
          </span>{' '}
          Integrate with{' '}
          <a href='https://tailwindcss.com' rel='nofollow'>
            Tailwind CSS
          </a>
        </li>
        <li>
          <span role='img' aria-label='nail_care'>
            💅
          </span>{' '}
          PostCSS for processing Tailwind CSS
        </li>
        <li>
          <span role='img' aria-label='tada'>
            🎉
          </span>{' '}
          Type checking Typescript
        </li>
        <li>
          <span role='img' aria-label='pencil2'>
            ✏️
          </span>{' '}
          Linter with{' '}
          <a href='https://eslint.org' rel='nofollow'>
            ESLint
          </a>
        </li>
        <li>
          <span role='img' aria-label='hammer_and_wrench'>
            🛠
          </span>{' '}
          Code Formatter with{' '}
          <a href='https://prettier.io' rel='nofollow'>
            Prettier
          </a>
        </li>
        <li>
          <span role='img' aria-label='fox_face'>
            🦊
          </span>{' '}
          Husky for Git Hooks
        </li>
        <li>
          <span role='img' aria-label='no_entry_sign'>
            🚫
          </span>{' '}
          Lint-staged for running linters on Git staged files
        </li>
        <li>
          <span role='img' aria-label='no_entry_sign'>
            🗂
          </span>{' '}
          VSCode configuration: Debug, Settings, Tasks and extension for
          PostCSS, ESLint, Prettier, TypeScript
        </li>
        <li>
          <span role='img' aria-label='robot'>
            🤖
          </span>{' '}
          SEO metadata, JSON-LD and Open Graph tags with Next SEO
        </li>
        <li>
          <span role='img' aria-label='robot'>
            ⚙️
          </span>{' '}
          <a
            href='https://www.npmjs.com/package/@next/bundle-analyzer'
            rel='nofollow'
          >
            Bundler Analyzer
          </a>
        </li>
        <li>
          <span role='img' aria-label='rainbow'>
            🌈
          </span>{' '}
          Include a FREE minimalist theme
        </li>
        <li>
          <span role='img' aria-label='hundred'>
            💯
          </span>{' '}
          Maximize lighthouse score
        </li>
      </ul>
      <p>Built-in feature from Next.js:</p>
      <ul>
        <li>
          <span role='img' aria-label='coffee'>
            ☕
          </span>{' '}
          Minify HTML &amp; CSS
        </li>
        <li>
          <span role='img' aria-label='dash'>
            💨
          </span>{' '}
          Live reload
        </li>
        <li>
          <span role='img' aria-label='white_check_mark'>
            ✅
          </span>{' '}
          Cache busting
        </li>
      </ul>
      <h2 className='text-lg font-semibold'>Our Stater code Philosophy</h2>
      <ul>
        <li>Minimal code</li>
        <li>SEO-friendly</li>
        <li>
          <span role='img' aria-label='rocket'>
            🚀
          </span>{' '}
          Production-ready
        </li>
      </ul>
      <p>
        Check our GitHub project for more information about{' '}
        <a href='https://github.com/ixartz/Next-js-Boilerplate'>
          Nextjs Boilerplate
        </a>
        . You can also browse our{' '}
        <a href='https://creativedesignsguru.com/category/nextjs/'>
          Premium NextJS Templates
        </a>{' '}
        on our website to support this project.
      </p> */}
    </Main>
  );
};

export default Index;
