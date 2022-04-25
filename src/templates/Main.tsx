/* eslint-disable tailwindcss/no-custom-classname */
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import { Footer } from './Footer';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const router = useRouter();
  return (
    <>
      <div className='w-full px-0'>
        {props.meta}

        <div className='container-fluid bg-dark d-none d-lg-block px-5'>
          <div className='row gx-0'>
            <div className='col-lg-8 text-lg-start mb-lg-0 mb-2 text-center'>
              <div
                className='d-inline-flex align-items-center'
                style={{ height: '45px' }}
              >
                <small className='me-3 text-light'>
                  <i className='fa fa-map-marker-alt me-2'></i>123 Street, New
                  York, USA
                </small>
                <small className='me-3 text-light'>
                  <i className='fa fa-phone-alt me-2'></i>+081 281 1002
                </small>
                <small className='text-light'>
                  <i className='fa fa-envelope-open me-2'></i>
                  noppadech.tu@gamail.com
                </small>
              </div>
            </div>
            <div className='col-lg-4 text-lg-end text-center'>
              <div
                className='d-inline-flex align-items-center'
                style={{ height: '45px' }}
              >
                <a
                  className='btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2'
                  href=''
                >
                  <i className='fab fa-twitter fw-normal'></i>
                </a>
                <a
                  className='btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2'
                  href=''
                >
                  <i className='fab fa-facebook-f fw-normal'></i>
                </a>
                <a
                  className='btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2'
                  href=''
                >
                  <i className='fab fa-linkedin-in fw-normal'></i>
                </a>
                <a
                  className='btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2'
                  href=''
                >
                  <i className='fab fa-instagram fw-normal'></i>
                </a>
                <a
                  className='btn btn-sm btn-outline-light btn-sm-square rounded-circle'
                  href=''
                >
                  <i className='fab fa-youtube fw-normal'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Navbar & Carousel Start --> */}
        <div className='container-fluid position-relative p-0'>
          <nav className='navbar navbar-expand-lg navbar-dark py-lg-0 px-5 py-3'>
            <a href='index.html' className='navbar-brand p-0'>
              <h1 className='m-0'>
                <i className='fa fa-user-tie me-2'></i>สตาร์ทอัพ
              </h1>
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarCollapse'
            >
              <span className='fa fa-bars'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarCollapse'>
              <div className='navbar-nav ms-auto py-0'>
                <a href='index.html' className='nav-item nav-link active'>
                  หน้าแรก
                </a>
                <a href='about.html' className='nav-item nav-link'>
                  เกี่ยวกับ
                </a>
                <a href='service.html' className='nav-item nav-link'>
                  บริการ
                </a>
                <div className='nav-item dropdown'>
                  <a
                    href='#'
                    className='nav-link dropdown-toggle'
                    data-bs-toggle='dropdown'
                  >
                    Blog
                  </a>
                  <div className='dropdown-menu m-0'>
                    <a href='blog.html' className='dropdown-item'>
                      Blog Grid
                    </a>
                    <a href='detail.html' className='dropdown-item'>
                      Blog Detail
                    </a>
                  </div>
                </div>
                <div className='nav-item dropdown'>
                  <a
                    href='#'
                    className='nav-link dropdown-toggle'
                    data-bs-toggle='dropdown'
                  >
                    Pages
                  </a>
                  <div className='dropdown-menu m-0'>
                    <a href='price.html' className='dropdown-item'>
                      Pricing Plan
                    </a>
                    <a href='feature.html' className='dropdown-item'>
                      Our features
                    </a>
                    <a href='team.html' className='dropdown-item'>
                      Team Members
                    </a>
                    <a href='testimonial.html' className='dropdown-item'>
                      Testimonial
                    </a>
                    <a href='quote.html' className='dropdown-item'>
                      Free Quote
                    </a>
                  </div>
                </div>
                <a href='contact.html' className='nav-item nav-link'>
                  Contact
                </a>
              </div>
              <button
                type='button'
                className='btn text-primary ms-3'
                data-bs-toggle='modal'
                data-bs-target='#searchModal'
              >
                <i className='fa fa-search'></i>
              </button>
              <a
                href='https://htmlcodex.com/startup-company-website-template'
                className='btn btn-primary ms-3 py-2 px-4'
              >
                Download Pro Version
              </a>
            </div>
          </nav>

          <div
            id='header-carousel'
            className='carousel slide carousel-fade'
            data-bs-ride='carousel'
          >
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <img
                  className='w-100'
                  src={`${router.basePath}/img/carousel-1.jpg`}
                  alt='Nextjs starter banner'
                />
                <div className='carousel-caption d-flex flex-column align-items-center justify-content-center'>
                  <div className='p-3' style={{ width: '900px;' }}>
                    <h5 className='text-uppercase animated slideInDown mb-3 text-white'>
                      Creative & Innovative
                    </h5>
                    <h1 className='display-1 mb-md-4 animated zoomIn text-white'>
                      Creative & Innovative Digital Solution
                    </h1>
                    <a
                      href='quote.html'
                      className='btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft'
                    >
                      Free Quote
                    </a>
                    <a
                      href=''
                      className='btn btn-outline-light py-md-3 px-md-5 animated slideInRight'
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div className='carousel-item'>
                <img
                  className='w-100'
                  src={`${router.basePath}/img/carousel-2.jpg`}
                  alt='Image'
                />
                <div className='carousel-caption d-flex flex-column align-items-center justify-content-center'>
                  <div className='p-3' style={{ width: '900px;' }}>
                    <h5 className='text-uppercase animated slideInDown mb-3 text-white'>
                      Creative & Innovative
                    </h5>
                    <h1 className='display-1 mb-md-4 animated zoomIn text-white'>
                      Creative & Innovative Digital Solution
                    </h1>
                    <a
                      href='quote.html'
                      className='btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft'
                    >
                      Free Quote
                    </a>
                    <a
                      href=''
                      className='btn btn-outline-light py-md-3 px-md-5 animated slideInRight'
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <button
              className='carousel-control-prev'
              type='button'
              data-bs-target='#header-carousel'
              data-bs-slide='prev'
            >
              <span
                className='carousel-control-prev-icon'
                aria-hidden='true'
              ></span>
              <span className='visually-hidden'>Previous</span>
            </button>
            <button
              className='carousel-control-next'
              type='button'
              data-bs-target='#header-carousel'
              data-bs-slide='next'
            >
              <span
                className='carousel-control-next-icon'
                aria-hidden='true'
              ></span>
              <span className='visually-hidden'>Next</span>
            </button>
          </div>
        </div>
        {/* <!-- Navbar & Carousel End --> */}

        {/* <div className='mx-auto max-w-screen-md'>
      <div className='border-b border-gray-300'>
        <div className='pt-16 pb-8'>
          <div className='text-3xl font-bold text-gray-900'>
            {AppConfig.title}
          </div>
          <div className='text-xl'>{AppConfig.description}</div>
        </div>
        <div>
          <ul className='flex flex-wrap text-xl'>
            <li className='mr-6'>
              <Link href='/'>
                <a className='border-none text-gray-700 hover:text-gray-900'>
                  Home
                </a>
              </Link>
            </li>
            <li className='mr-6'>
              <Link href='/about/'>
                <a className='border-none text-gray-700 hover:text-gray-900'>
                  About
                </a>
              </Link>
            </li>
            <li className='mr-6'>
              <a
                className='border-none text-gray-700 hover:text-gray-900'
                href='https://github.com/ixartz/Next-js-Boilerplate'
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
*/}
        <div className='content'>{props.children}</div>
        <Footer />
        {/* <div className='border-t border-gray-300 py-8 text-center text-sm'>
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
        <span role='img' aria-label='Love'>
          ♥
        </span>{' '}
        by <a href='https://creativedesignsguru.com'>CreativeDesignsGuru</a>
        {/*
         * PLEASE READ THIS SECTION
         * We'll really appreciate if you could have a link to our website
         * The link doesn't need to appear on every pages, one link on one page is enough.
         * Thank you for your support it'll mean a lot for us.
         */}
        {/* </div> */}
      </div>
    </>
  );
};

export { Main };
