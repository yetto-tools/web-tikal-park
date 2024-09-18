import VideoPopup from "@/components/elements/VideoPopup";
import SwiperGroup3Slider from "@/components/slider/SwiperGroup3Slider";
import SwiperGroupPaymentSlider from "@/components/slider/SwiperGroupPaymentSlider";
import { swiperGroupAnimate } from "@/util/swiperOption";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import DefaultLayout from "../../components/layout/DefaultLayout";
export default function About() {
  return (
    <>
      <DefaultLayout headerStyle={1} footerStyle={1}>
        <div>
          <section className="box-section box-breadcrumb background-100">
            <div className="container">
              <ul className="breadcrumbs">
                <li>
                  {" "}
                  <Link to="/">Parque Tikal</Link>
                  <span className="arrow-right">
                    <svg
                      width={7}
                      height={12}
                      viewBox="0 0 7 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 11L6 6L1 1"
                        stroke=""
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </span>
                </li>
                <li>
                  {" "}
                  <span className="text-breadcrumb">About Us</span>
                </li>
              </ul>
            </div>
          </section>
          <section className="section-box box-about-1 background-body">
            <div className="container">
              <div className="row align-items-end">
                <div className="col-lg-7 wow fadeInUp">
                  {" "}
                  <span className="btn btn-brand-secondary">
                    {" "}
                    <img
                      className="mr-10"
                      src="/assets/imgs/page/homepage9/real.svg"
                      alt="Travile"
                    />
                    Resort Real Estate
                  </span>
                  <h1 className="neutral-1000 mt-15 mb-15">
                    Welcome<span>to Travila </span>Travel{" "}
                    <span>booking system</span>
                  </h1>
                  <p className="text-xl-medium neutral-500">
                    Make it easier for everyone to experience the world
                  </p>
                </div>
                <div className="col-lg-5">
                  <div className="box-icon-flight">
                    <img
                      src="/assets/imgs/page/pages/flight.png"
                      alt="Travile"
                    />
                    <h6 className="neutral-1000">
                      Our mission is to create memories that last a lifetime for
                      every traveler who chooses us.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-box box-about-video background-body">
            <div className="container">
              <div className="box-image-video mb-0">
                {" "}
                <img
                  className="bdrd-16"
                  src="/assets/imgs/page/pages/banner.png"
                  alt="Travilla"
                />
                <VideoPopup vdocls="btn-play-video popup-youtube" />
              </div>
            </div>
          </section>
          <section className="section-box box-why-book-travila-5 background-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 mb-30">
                  <span className="btn btn-brand-secondary background-0 wow fadeInUp">
                    {" "}
                    <img
                      className="mr-10"
                      src="/assets/imgs/page/homepage4/earth.svg"
                      alt="Travile"
                    />
                    Why book at Travila ?
                  </span>
                  <h2 className="mt-15 mb-15 neutral-1000 wow fadeInUp">
                    Embracing Adventure Since 2003
                  </h2>
                  <p className="text-xl-medium neutral-1000 mb-30 wow fadeInUp">
                    Choose one style or create a package, your passports with
                    adventures together.
                  </p>
                  <div className="list-numbers wow fadeInUp">
                    <div className="item-number">
                      <h3 className="neutral-1000">45+</h3>
                      <p className="text-lg-bold neutral-500">
                        Global Branches
                      </p>
                    </div>
                    <div className="item-number">
                      <h3 className="neutral-1000">29K</h3>
                      <p className="text-lg-bold neutral-500">
                        Destinations Collaboration
                      </p>
                    </div>
                    <div className="item-number">
                      <h3 className="neutral-1000">20+</h3>
                      <p className="text-lg-bold neutral-500">
                        Years Experience
                      </p>
                    </div>
                    <div className="item-number">
                      <h3 className="neutral-1000">168K</h3>
                      <p className="text-lg-bold neutral-500">
                        Happy Customers
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-30">
                  <div className="row">
                    <div className="col-lg-6 col-sm-6 pt-30">
                      <div className="card-why card-why-2 background-1 wow fadeInUp">
                        <div className="card-image">
                          {" "}
                          <img
                            src="/assets/imgs/page/homepage6/experience.png"
                            alt="Travila"
                          />
                        </div>
                        <div className="card-info">
                          <h6 className="text-xl-bold neutral-1000">
                            300,000+ Experiences
                          </h6>
                          <p className="text-lg-medium neutral-500">
                            Make memories around the world.
                          </p>
                        </div>
                      </div>
                      <div className="card-why card-why-2 background-3 wow fadeInUp">
                        <div className="card-image">
                          <svg
                            width={48}
                            height={46}
                            viewBox="0 0 48 46"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_21_10174)">
                              <mask
                                id="mask0_21_10174"
                                style={{ maskType: "luminance" }}
                                maskUnits="userSpaceOnUse"
                                x={0}
                                y={0}
                                width={48}
                                height={46}
                              >
                                <path
                                  d="M44.819 32.7853C42.7514 37.691 38.9274 41.3068 33.347 43.6326C27.7666 45.9585 22.5864 45.6066 17.8064 42.5772C13.0264 39.5478 8.40207 35.932 3.93332 31.7298C-0.535422 27.5277 -0.980074 22.9347 2.59937 17.9507C6.17881 12.9668 10.8032 8.35425 16.4725 4.11303C22.1418 -0.128193 28.8227 -1.01748 36.5151 1.44516C44.2076 3.90781 48.0316 8.52038 47.9871 15.2829C47.9427 22.0454 46.8866 27.8795 44.819 32.7853Z"
                                  fill="white"
                                />
                              </mask>
                              <g mask="url(#mask0_21_10174)">
                                <path
                                  d="M44.819 32.7853C42.7514 37.691 38.9274 41.3068 33.347 43.6326C27.7666 45.9585 22.5864 45.6066 17.8064 42.5772C13.0264 39.5478 8.40207 35.932 3.93332 31.7298C-0.535422 27.5277 -0.980074 22.9347 2.59937 17.9507C6.17881 12.9668 10.8032 8.35425 16.4725 4.11303C22.1418 -0.128193 28.8227 -1.01748 36.5151 1.44516C44.2076 3.90781 48.0316 8.52038 47.9871 15.2829C47.9427 22.0454 46.8866 27.8795 44.819 32.7853Z"
                                  fill="#E4F9F9"
                                />
                              </g>
                            </g>
                            <path
                              d="M35.5625 21.75V7.9375C35.5625 7.41975 35.1428 7 34.625 7H13.375C12.8572 7 12.4375 7.41975 12.4375 7.9375V21.75C12.4375 21.9986 12.5363 22.2371 12.7121 22.4129L13.2992 23L12.7121 23.5871C12.5363 23.7629 12.4375 24.0014 12.4375 24.25V38.0625C12.4375 38.5803 12.8572 39 13.375 39H34.625C35.1428 39 35.5625 38.5803 35.5625 38.0625V24.25C35.5625 24.0014 35.4637 23.7629 35.2879 23.5871L34.7008 23L35.2879 22.4129C35.4637 22.2371 35.5625 21.9986 35.5625 21.75ZM33.6875 21.3617L32.7121 22.3371C32.346 22.7032 32.346 23.2968 32.7121 23.6629L33.6875 24.6383V37.125H14.3125V24.6383L15.2879 23.6629C15.654 23.2967 15.654 22.7032 15.2879 22.3371L14.3125 21.3617V8.875H33.6875V21.3617Z"
                              fill="black"
                            />
                            <path
                              d="M17.7672 17.1101L19.2459 18.4214C19.5478 18.6891 19.9872 18.7336 20.3367 18.5318L24.7735 15.9702L24.5962 18.7197C24.5629 19.2364 24.9548 19.6822 25.4715 19.7156C25.9882 19.749 26.434 19.3571 26.4674 18.8404L26.7252 14.8435L30.0795 12.9069C30.5279 12.648 30.6815 12.0746 30.4226 11.6262C30.1637 11.1778 29.5903 11.0242 29.142 11.2831L25.7877 13.2197L22.1973 11.4446C21.7332 11.2151 21.171 11.4053 20.9414 11.8694C20.7119 12.3336 20.9022 12.8959 21.3663 13.1254L23.836 14.3466L19.9843 16.5703L19.0112 15.7073C18.6238 15.3639 18.0313 15.3994 17.6877 15.7867C17.3442 16.1741 17.3798 16.7666 17.7672 17.1101Z"
                              fill="black"
                            />
                            <path
                              d="M17.125 27.75H30.875C31.3928 27.75 31.8125 27.3303 31.8125 26.8125C31.8125 26.2947 31.3928 25.875 30.875 25.875H17.125C16.6072 25.875 16.1875 26.2947 16.1875 26.8125C16.1875 27.3303 16.6072 27.75 17.125 27.75Z"
                              fill="black"
                            />
                            <path
                              d="M17.125 31.5H24C24.5178 31.5 24.9375 31.0803 24.9375 30.5625C24.9375 30.0447 24.5178 29.625 24 29.625H17.125C16.6072 29.625 16.1875 30.0447 16.1875 30.5625C16.1875 31.0803 16.6072 31.5 17.125 31.5Z"
                              fill="black"
                            />
                            <path
                              d="M17.125 35.25H24C24.5178 35.25 24.9375 34.8303 24.9375 34.3125C24.9375 33.7947 24.5178 33.375 24 33.375H17.125C16.6072 33.375 16.1875 33.7947 16.1875 34.3125C16.1875 34.8303 16.6072 35.25 17.125 35.25Z"
                              fill="black"
                            />
                            <path
                              d="M18.375 23.9375H19.625C20.1428 23.9375 20.5625 23.5178 20.5625 23C20.5625 22.4822 20.1428 22.0625 19.625 22.0625H18.375C17.8572 22.0625 17.4375 22.4822 17.4375 23C17.4375 23.5178 17.8572 23.9375 18.375 23.9375Z"
                              fill="black"
                            />
                            <path
                              d="M24.625 22.0625H23.375C22.8572 22.0625 22.4375 22.4822 22.4375 23C22.4375 23.5178 22.8572 23.9375 23.375 23.9375H24.625C25.1428 23.9375 25.5625 23.5178 25.5625 23C25.5625 22.4822 25.1428 22.0625 24.625 22.0625Z"
                              fill="black"
                            />
                            <path
                              d="M29.625 22.0625H28.375C27.8572 22.0625 27.4375 22.4822 27.4375 23C27.4375 23.5178 27.8572 23.9375 28.375 23.9375H29.625C30.1428 23.9375 30.5625 23.5178 30.5625 23C30.5625 22.4822 30.1428 22.0625 29.625 22.0625Z"
                              fill="black"
                            />
                            <path
                              d="M29 29.625C27.4492 29.625 26.1875 30.8867 26.1875 32.4375C26.1875 33.9883 27.4492 35.25 29 35.25C30.5508 35.25 31.8125 33.9883 31.8125 32.4375C31.8125 30.8867 30.5508 29.625 29 29.625ZM29 33.375C28.4831 33.375 28.0625 32.9544 28.0625 32.4375C28.0625 31.9206 28.4831 31.5 29 31.5C29.5169 31.5 29.9375 31.9206 29.9375 32.4375C29.9375 32.9544 29.5169 33.375 29 33.375Z"
                              fill="black"
                            />
                            <defs>
                              <clipPath id="clip0_21_10174">
                                <rect
                                  width={48}
                                  height="45.2958"
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="card-info">
                          <h6 className="text-xl-bold neutral-1000">
                            Reserve now, Pay later
                          </h6>
                          <p className="text-lg-medium neutral-500">
                            Book your spot first, pay later.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="card-why card-why-2 background-2 wow fadeInUp">
                        <div className="card-image">
                          <svg
                            width={48}
                            height={46}
                            viewBox="0 0 48 46"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_21_16353)">
                              <mask
                                id="mask0_21_16353"
                                style={{ maskType: "luminance" }}
                                maskUnits="userSpaceOnUse"
                                x={0}
                                y={0}
                                width={48}
                                height={46}
                              >
                                <path
                                  d="M44.819 32.7853C42.7514 37.691 38.9274 41.3068 33.347 43.6326C27.7666 45.9585 22.5864 45.6066 17.8064 42.5772C13.0264 39.5478 8.40207 35.932 3.93332 31.7298C-0.535422 27.5277 -0.980074 22.9347 2.59937 17.9507C6.17881 12.9668 10.8032 8.35425 16.4725 4.11303C22.1418 -0.128193 28.8227 -1.01748 36.5151 1.44516C44.2076 3.90781 48.0316 8.52038 47.9871 15.2829C47.9427 22.0454 46.8866 27.8795 44.819 32.7853Z"
                                  fill="white"
                                />
                              </mask>
                              <g mask="url(#mask0_21_16353)">
                                <path
                                  d="M44.819 32.7853C42.7514 37.691 38.9274 41.3068 33.347 43.6326C27.7666 45.9585 22.5864 45.6066 17.8064 42.5772C13.0264 39.5478 8.40207 35.932 3.93332 31.7298C-0.535422 27.5277 -0.980074 22.9347 2.59937 17.9507C6.17881 12.9668 10.8032 8.35425 16.4725 4.11303C22.1418 -0.128193 28.8227 -1.01748 36.5151 1.44516C44.2076 3.90781 48.0316 8.52038 47.9871 15.2829C47.9427 22.0454 46.8866 27.8795 44.819 32.7853Z"
                                  fill="#E3F0FF"
                                />
                              </g>
                            </g>
                            <path
                              d="M29.6484 14.5312H26.8203V8.875H27.7656C28.2834 8.875 28.7031 8.45525 28.7031 7.9375C28.7031 7.41975 28.2834 7 27.7656 7H20.2344C19.7166 7 19.2969 7.41975 19.2969 7.9375C19.2969 8.45525 19.7166 8.875 20.2344 8.875H21.1797V14.5312H18.3516C16.7964 14.5312 15.5312 15.7964 15.5312 17.3516V32.4141C15.5312 33.7144 16.4161 34.8114 17.615 35.1362C17.4859 35.4592 17.4141 35.8111 17.4141 36.1797C17.4141 37.7348 18.6793 39 20.2344 39C21.7895 39 23.0547 37.7348 23.0547 36.1797C23.0547 35.8482 22.9968 35.5301 22.8912 35.2344H25.1087C25.0032 35.5301 24.9452 35.8482 24.9452 36.1797C24.9452 37.7348 26.2104 39 27.7656 39C29.3207 39 30.5859 37.7348 30.5859 36.1797C30.5859 35.8111 30.5141 35.4592 30.3849 35.1362C31.5839 34.8114 32.4687 33.7144 32.4687 32.4141V17.3516C32.4687 15.7964 31.2036 14.5312 29.6484 14.5312ZM23.0547 8.875H24.9453V14.5312H23.0547V8.875ZM21.1797 36.1797C21.1797 36.7009 20.7556 37.125 20.2344 37.125C19.7131 37.125 19.2891 36.7009 19.2891 36.1797C19.2891 35.6584 19.7131 35.2344 20.2344 35.2344C20.7556 35.2344 21.1797 35.6584 21.1797 36.1797ZM27.7656 37.125C27.2444 37.125 26.8203 36.7009 26.8203 36.1797C26.8203 35.6584 27.2444 35.2344 27.7656 35.2344C28.2869 35.2344 28.7109 35.6584 28.7109 36.1797C28.7109 36.7009 28.2869 37.125 27.7656 37.125ZM30.5938 32.4141C30.5938 32.9353 30.1697 33.3594 29.6484 33.3594H18.3516C17.8303 33.3594 17.4062 32.9353 17.4062 32.4141V17.3516C17.4062 16.8303 17.8303 16.4062 18.3516 16.4062H29.6484C30.1697 16.4062 30.5938 16.8303 30.5938 17.3516V32.4141Z"
                              fill="black"
                            />
                            <path
                              d="M20.2344 18.2969C19.7166 18.2969 19.2969 18.7166 19.2969 19.2344V30.5312C19.2969 31.049 19.7166 31.4688 20.2344 31.4688C20.7521 31.4688 21.1719 31.049 21.1719 30.5312V19.2344C21.1719 18.7166 20.7521 18.2969 20.2344 18.2969Z"
                              fill="black"
                            />
                            <path
                              d="M24 18.2969C23.4822 18.2969 23.0625 18.7166 23.0625 19.2344V30.5312C23.0625 31.049 23.4822 31.4688 24 31.4688C24.5178 31.4688 24.9375 31.049 24.9375 30.5312V19.2344C24.9375 18.7166 24.5178 18.2969 24 18.2969Z"
                              fill="black"
                            />
                            <path
                              d="M27.7656 18.2969C27.2479 18.2969 26.8281 18.7166 26.8281 19.2344V30.5312C26.8281 31.049 27.2479 31.4688 27.7656 31.4688C28.2834 31.4688 28.7031 31.049 28.7031 30.5312V19.2344C28.7031 18.7166 28.2834 18.2969 27.7656 18.2969Z"
                              fill="black"
                            />
                            <defs>
                              <clipPath id="clip0_21_16353">
                                <rect
                                  width={48}
                                  height="45.2958"
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="card-info">
                          <h6 className="text-xl-bold neutral-1000">
                            Trusted Reviews
                          </h6>
                          <p className="text-lg-medium neutral-500">
                            4.8 stars from 160,000+ Trustpilot reviews.
                          </p>
                        </div>
                      </div>
                      <div className="card-why card-why-2 background-4 wow fadeInUp">
                        <div className="card-image">
                          <svg
                            width={48}
                            height={46}
                            viewBox="0 0 48 46"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_21_15576)">
                              <mask
                                id="mask0_21_15576"
                                style={{ maskType: "luminance" }}
                                maskUnits="userSpaceOnUse"
                                x={0}
                                y={0}
                                width={48}
                                height={46}
                              >
                                <path
                                  d="M44.819 32.7853C42.7514 37.691 38.9274 41.3068 33.347 43.6326C27.7666 45.9585 22.5864 45.6066 17.8064 42.5772C13.0264 39.5478 8.40207 35.932 3.93332 31.7298C-0.535422 27.5277 -0.980074 22.9347 2.59937 17.9507C6.17881 12.9668 10.8032 8.35425 16.4725 4.11303C22.1418 -0.128193 28.8227 -1.01748 36.5151 1.44516C44.2076 3.90781 48.0316 8.52038 47.9871 15.2829C47.9427 22.0454 46.8866 27.8795 44.819 32.7853Z"
                                  fill="white"
                                />
                              </mask>
                              <g mask="url(#mask0_21_15576)">
                                <path
                                  d="M44.819 32.7853C42.7514 37.691 38.9274 41.3068 33.347 43.6326C27.7666 45.9585 22.5864 45.6066 17.8064 42.5772C13.0264 39.5478 8.40207 35.932 3.93332 31.7298C-0.535422 27.5277 -0.980074 22.9347 2.59937 17.9507C6.17881 12.9668 10.8032 8.35425 16.4725 4.11303C22.1418 -0.128193 28.8227 -1.01748 36.5151 1.44516C44.2076 3.90781 48.0316 8.52038 47.9871 15.2829C47.9427 22.0454 46.8866 27.8795 44.819 32.7853Z"
                                  fill="#F6F3FC"
                                />
                              </g>
                            </g>
                            <g clipPath="url(#clip1_21_15576)">
                              <path
                                d="M23.9999 7C17.3643 7 11.9658 12.3984 11.9658 19.034V26.966C11.9658 33.6015 17.3643 38.9999 23.9999 38.9999C30.6354 38.9999 36.0339 33.6015 36.0339 26.966V19.034C36.0339 12.3984 30.6354 7 23.9999 7ZM34.1581 26.966C34.1581 32.5672 29.6011 37.1242 23.9999 37.1242C18.3986 37.1242 13.8416 32.5672 13.8416 26.966V19.034C13.8416 13.4328 18.3986 8.87578 23.9999 8.87578C29.6011 8.87578 34.1581 13.4328 34.1581 19.034V26.966Z"
                                fill="black"
                              />
                              <path
                                d="M32.2822 19.034C32.2822 14.4671 28.5667 10.7516 23.9997 10.7516C19.4328 10.7516 15.7173 14.4671 15.7173 19.034V26.966C15.7173 31.5329 19.4328 35.2484 23.9997 35.2484C27.358 35.2484 30.2558 33.2392 31.5545 30.3598C31.5552 30.3582 31.5558 30.3567 31.5566 30.3551C32.0226 29.32 32.2823 28.1728 32.2823 26.966V24.712C32.2823 24.7067 32.2823 24.7015 32.2823 24.6962V19.034H32.2822ZM24.1923 25.9264C24.1973 24.9977 24.9545 24.2436 25.8843 24.2436C26.7104 24.2436 27.429 24.8577 27.5559 25.6719C27.6144 26.0474 27.8936 26.3504 28.2631 26.4394C28.6322 26.5283 29.0191 26.3856 29.242 26.0779C29.5172 25.6981 29.9405 25.4781 30.4064 25.4706V26.9661C30.4064 27.6968 30.2831 28.3992 30.0567 29.054H23.1368C22.5445 29.054 22.0626 28.5721 22.0626 27.9798C22.0626 27.3875 22.5445 26.9056 23.1368 26.9056H23.2552C23.5058 26.9056 23.746 26.8053 23.9222 26.6271C24.0983 26.4489 24.1959 26.2076 24.193 25.957C24.1929 25.9473 24.1926 25.9374 24.1923 25.9264ZM23.9997 12.6274C27.4052 12.6274 30.1982 15.2982 30.3949 18.6552H17.6046C17.8013 15.2982 20.5943 12.6274 23.9997 12.6274ZM23.9997 33.3727C20.4671 33.3727 17.5931 30.4987 17.5931 26.9661V20.531H30.4064V23.5949C29.865 23.5989 29.3385 23.735 28.8701 23.9827C28.6891 23.7063 28.4694 23.4541 28.2157 23.2349C27.5684 22.6758 26.7405 22.3679 25.8843 22.3679C24.1975 22.3679 22.7802 23.5446 22.4105 25.1203C21.134 25.4448 20.1868 26.6038 20.1868 27.9799C20.1868 29.6065 21.5102 30.9298 23.1368 30.9298H29.0295C27.8553 32.4166 26.0371 33.3727 23.9997 33.3727Z"
                                fill="black"
                              />
                              <path
                                d="M22.935 16.7794H25.0647C25.5826 16.7794 26.0026 16.3595 26.0026 15.8415C26.0026 15.3236 25.5826 14.9036 25.0647 14.9036H22.935C22.417 14.9036 21.9971 15.3236 21.9971 15.8415C21.9971 16.3595 22.417 16.7794 22.935 16.7794Z"
                                fill="black"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_21_15576">
                                <rect
                                  width={48}
                                  height="45.2958"
                                  fill="white"
                                />
                              </clipPath>
                              <clipPath id="clip1_21_15576">
                                <rect
                                  width={32}
                                  height={32}
                                  fill="white"
                                  transform="translate(8 7)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="card-info">
                          <h6 className="text-xl-bold neutral-1000">
                            Security Assurance
                          </h6>
                          <p className="text-lg-medium neutral-500">
                            Data security through encryption{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-box block-meet background-body">
            <div className="container">
              <div className="row align-items-end">
                <div className="col-lg-6 mb-30 wow fadeInUp">
                  <div className="box-author-testimonials button-brand-2 wow fadeInUp">
                    {" "}
                    <img
                      src="/assets/imgs/page/homepage1/testimonial.png"
                      alt="Travila"
                    />
                    <img
                      src="/assets/imgs/page/homepage1/testimonial2.png"
                      alt="Travila"
                    />
                    <img
                      src="/assets/imgs/page/homepage1/testimonial3.png"
                      alt="Travila"
                    />
                    Our Team
                  </div>
                  <h2 className="mt-8 mb-10 neutral-1000">Meet our Agents</h2>
                  <p className="text-xl-medium neutral-500">
                    Meet our exceptional team of agents, each dedicated to
                    making your property journey seamless and successful
                  </p>
                </div>
                <div className="col-md-6 position-relative text-start text-lg-end mb-30 wow fadeInUp">
                  <div className="box-need-help text-start d-inline-block">
                    <p className="need-help neutral-1000 text-lg-bold mb-5">
                      ¿Necesita ayuda? Llámanos
                    </p>
                    <br />
                    <Link
                      className="heading-6 neutral-1000 phone-support"
                      to="tel:+50259793030"
                    >
                      (+502) 5979-3030
                    </Link>
                  </div>
                </div>
              </div>
              <div className="box-meet-team mt-35">
                <div className="row">
                  <div className="col-lg-4 col-md-6 wow fadeInUp">
                    <div className="card-team card-team-2">
                      <div className="card-image">
                        {" "}
                        <img
                          src="/assets/imgs/page/pages/team6.png"
                          alt="Travila"
                        />
                      </div>
                      <div className="card-info">
                        <h6 className="neutral-1000">Cody Fisher</h6>
                        <p className="text-sm-medium neutral-500">
                          Founder and Principal Broker
                        </p>
                        <p className="text-xs-medium neutral-1000">
                          With over 15 years of real estate experience, John
                          leads the Travila team with passion and expertise. His
                          commitment to client satisfaction and market knowledge
                          sets the standard for our exceptional service.
                        </p>
                        <div className="card-team-bottom">
                          <div className="card-socials">
                            {" "}
                            <Link className="link-social background-100" to="#">
                              <svg
                                width={15}
                                height={15}
                                viewBox="0 0 15 15"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M10.1567 1.53906H5.35411C3.26803 1.53906 2.02441 2.78268 2.02441 4.86876V9.66558C2.02441 11.7574 3.26803 13.001 5.35411 13.001H10.1509C12.237 13.001 13.4806 11.7574 13.4806 9.67131V4.86876C13.4864 2.78268 12.2427 1.53906 10.1567 1.53906ZM7.75539 9.49365C6.52896 9.49365 5.53177 8.49646 5.53177 7.27003C5.53177 6.04361 6.52896 5.04642 7.75539 5.04642C8.98181 5.04642 9.979 6.04361 9.979 7.27003C9.979 8.49646 8.98181 9.49365 7.75539 9.49365ZM11.1481 4.33578C11.1195 4.40455 11.0793 4.46759 11.0278 4.5249C10.9705 4.57648 10.9074 4.61659 10.8386 4.64525C10.7699 4.6739 10.6954 4.6911 10.6209 4.6911C10.4661 4.6911 10.3229 4.63379 10.214 4.5249C10.1624 4.46759 10.1223 4.40455 10.0936 4.33578C10.065 4.267 10.0478 4.1925 10.0478 4.118C10.0478 4.0435 10.065 3.96899 10.0936 3.90022C10.1223 3.82572 10.1624 3.76841 10.214 3.7111C10.3458 3.57929 10.5464 3.51625 10.7298 3.55636C10.7699 3.5621 10.8043 3.57356 10.8386 3.59075C10.873 3.60221 10.9074 3.61941 10.9418 3.64233C10.9705 3.65952 10.9991 3.68818 11.0278 3.7111C11.0793 3.76841 11.1195 3.82572 11.1481 3.90022C11.1768 3.96899 11.194 4.0435 11.194 4.118C11.194 4.1925 11.1768 4.267 11.1481 4.33578Z" />
                              </svg>
                            </Link>
                            <Link className="link-social background-100" to="#">
                              <svg
                                width={15}
                                height={15}
                                viewBox="0 0 15 15"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M13.4971 9.67131C13.4971 11.7574 12.2535 13.001 10.1674 13.001H9.48542C9.17022 13.001 8.91232 12.7431 8.91232 12.4279V9.12114C8.91232 8.96641 9.0384 8.8346 9.19313 8.8346L10.2018 8.8174C10.282 8.81167 10.3508 8.75436 10.368 8.67413L10.5686 7.57951C10.5858 7.47635 10.5055 7.37892 10.3966 7.37892L9.17594 7.39612C9.01547 7.39612 8.8894 7.27004 8.88367 7.1153L8.86074 5.71121C8.86074 5.61951 8.93524 5.53929 9.03267 5.53929L10.4081 5.51636C10.5055 5.51636 10.58 5.44186 10.58 5.34444L10.5571 3.96899C10.5571 3.87156 10.4826 3.79707 10.3852 3.79707L8.83782 3.82C7.88648 3.83719 7.13 4.61659 7.14719 5.56793L7.17584 7.14395C7.18157 7.30442 7.05549 7.43051 6.89503 7.43624L6.2073 7.44769C6.10988 7.44769 6.03538 7.52219 6.03538 7.61961L6.05257 8.70851C6.05257 8.80594 6.12707 8.88043 6.22449 8.88043L6.91222 8.86898C7.07269 8.86898 7.19875 8.99506 7.20449 9.14979L7.25606 12.4165C7.26179 12.7374 7.0039 13.001 6.68297 13.001H5.36485C3.27878 13.001 2.03516 11.7574 2.03516 9.66558V4.86876C2.03516 2.78268 3.27878 1.53906 5.36485 1.53906H10.1674C12.2535 1.53906 13.4971 2.78268 13.4971 4.86876V9.67131Z" />
                              </svg>
                            </Link>
                            <Link className="link-social background-100" to="#">
                              <svg
                                width={14}
                                height={15}
                                viewBox="0 0 14 15"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M8.05461 6.2166L13.0649 0.392578H11.8776L7.52719 5.44949L4.05253 0.392578H0.0449219L5.29929 8.03953L0.0449219 14.1469H1.23226L5.8264 8.80664L9.4959 14.1469H13.5035L8.05431 6.2166H8.05461ZM6.42838 8.1069L5.89601 7.34544L1.66007 1.28638H3.48376L6.9022 6.17623L7.43458 6.9377L11.8782 13.2937H10.0545L6.42838 8.10719V8.1069Z" />
                              </svg>
                            </Link>
                            <Link className="link-social background-100" to="#">
                              <svg
                                width={14}
                                height={11}
                                viewBox="0 0 14 11"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M5.66557 7.52752L9.17195 5.50071L5.66557 3.4739V7.52752ZM13.4755 2.23754C13.5634 2.55508 13.6242 2.98071 13.6647 3.52119C13.712 4.06167 13.7323 4.52784 13.7323 4.9332L13.7728 5.50071C13.7728 6.98028 13.6647 8.068 13.4755 8.76387C13.3066 9.37191 12.9148 9.76376 12.3067 9.93266C11.9892 10.0205 11.4082 10.0813 10.5164 10.1218C9.63812 10.1691 8.83415 10.1894 8.09098 10.1894L7.01678 10.2299C4.186 10.2299 2.42267 10.1218 1.7268 9.93266C1.11876 9.76376 0.726909 9.37191 0.558008 8.76387C0.470179 8.44634 0.409375 8.02071 0.368839 7.48023C0.321547 6.93974 0.301278 6.47358 0.301278 6.06821L0.260742 5.50071C0.260742 4.02114 0.368839 2.93342 0.558008 2.23754C0.726909 1.6295 1.11876 1.23765 1.7268 1.06875C2.04434 0.980921 2.62535 0.920117 3.51715 0.879581C4.39543 0.832289 5.1994 0.812021 5.94257 0.812021L7.01678 0.771484C9.84755 0.771484 11.6109 0.879581 12.3067 1.06875C12.9148 1.23765 13.3066 1.6295 13.4755 2.23754Z" />
                              </svg>
                            </Link>
                          </div>
                          <div className="card-button">
                            {" "}
                            <Link to="/contact">
                              <svg
                                width={8}
                                height={8}
                                viewBox="0 0 8 8"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.08848 6.97917L7.08848 1.20442L1.31373 1.20442M7.08848 1.20442L1.31373 6.97917"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 wow fadeInUp">
                    <div className="card-team card-team-2">
                      <div className="card-image">
                        {" "}
                        <img
                          src="/assets/imgs/page/pages/team.png"
                          alt="Travila"
                        />
                      </div>
                      <div className="card-info">
                        <h6 className="neutral-1000">Darrell Steward</h6>
                        <p className="text-sm-medium neutral-500">
                          Founder and Principal Broker
                        </p>
                        <p className="text-xs-medium neutral-1000">
                          With over 15 years of real estate experience, John
                          leads the Travila team with passion and expertise. His
                          commitment to client satisfaction and market knowledge
                          sets the standard for our exceptional service.
                        </p>
                        <div className="card-team-bottom">
                          <div className="card-socials">
                            {" "}
                            <Link className="link-social background-100" to="#">
                              <svg
                                width={15}
                                height={15}
                                viewBox="0 0 15 15"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M10.1567 1.53906H5.35411C3.26803 1.53906 2.02441 2.78268 2.02441 4.86876V9.66558C2.02441 11.7574 3.26803 13.001 5.35411 13.001H10.1509C12.237 13.001 13.4806 11.7574 13.4806 9.67131V4.86876C13.4864 2.78268 12.2427 1.53906 10.1567 1.53906ZM7.75539 9.49365C6.52896 9.49365 5.53177 8.49646 5.53177 7.27003C5.53177 6.04361 6.52896 5.04642 7.75539 5.04642C8.98181 5.04642 9.979 6.04361 9.979 7.27003C9.979 8.49646 8.98181 9.49365 7.75539 9.49365ZM11.1481 4.33578C11.1195 4.40455 11.0793 4.46759 11.0278 4.5249C10.9705 4.57648 10.9074 4.61659 10.8386 4.64525C10.7699 4.6739 10.6954 4.6911 10.6209 4.6911C10.4661 4.6911 10.3229 4.63379 10.214 4.5249C10.1624 4.46759 10.1223 4.40455 10.0936 4.33578C10.065 4.267 10.0478 4.1925 10.0478 4.118C10.0478 4.0435 10.065 3.96899 10.0936 3.90022C10.1223 3.82572 10.1624 3.76841 10.214 3.7111C10.3458 3.57929 10.5464 3.51625 10.7298 3.55636C10.7699 3.5621 10.8043 3.57356 10.8386 3.59075C10.873 3.60221 10.9074 3.61941 10.9418 3.64233C10.9705 3.65952 10.9991 3.68818 11.0278 3.7111C11.0793 3.76841 11.1195 3.82572 11.1481 3.90022C11.1768 3.96899 11.194 4.0435 11.194 4.118C11.194 4.1925 11.1768 4.267 11.1481 4.33578Z" />
                              </svg>
                            </Link>
                            <Link className="link-social background-100" to="#">
                              <svg
                                width={15}
                                height={15}
                                viewBox="0 0 15 15"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M13.4971 9.67131C13.4971 11.7574 12.2535 13.001 10.1674 13.001H9.48542C9.17022 13.001 8.91232 12.7431 8.91232 12.4279V9.12114C8.91232 8.96641 9.0384 8.8346 9.19313 8.8346L10.2018 8.8174C10.282 8.81167 10.3508 8.75436 10.368 8.67413L10.5686 7.57951C10.5858 7.47635 10.5055 7.37892 10.3966 7.37892L9.17594 7.39612C9.01547 7.39612 8.8894 7.27004 8.88367 7.1153L8.86074 5.71121C8.86074 5.61951 8.93524 5.53929 9.03267 5.53929L10.4081 5.51636C10.5055 5.51636 10.58 5.44186 10.58 5.34444L10.5571 3.96899C10.5571 3.87156 10.4826 3.79707 10.3852 3.79707L8.83782 3.82C7.88648 3.83719 7.13 4.61659 7.14719 5.56793L7.17584 7.14395C7.18157 7.30442 7.05549 7.43051 6.89503 7.43624L6.2073 7.44769C6.10988 7.44769 6.03538 7.52219 6.03538 7.61961L6.05257 8.70851C6.05257 8.80594 6.12707 8.88043 6.22449 8.88043L6.91222 8.86898C7.07269 8.86898 7.19875 8.99506 7.20449 9.14979L7.25606 12.4165C7.26179 12.7374 7.0039 13.001 6.68297 13.001H5.36485C3.27878 13.001 2.03516 11.7574 2.03516 9.66558V4.86876C2.03516 2.78268 3.27878 1.53906 5.36485 1.53906H10.1674C12.2535 1.53906 13.4971 2.78268 13.4971 4.86876V9.67131Z" />
                              </svg>
                            </Link>
                            <Link className="link-social background-100" to="#">
                              <svg
                                width={14}
                                height={15}
                                viewBox="0 0 14 15"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M8.05461 6.2166L13.0649 0.392578H11.8776L7.52719 5.44949L4.05253 0.392578H0.0449219L5.29929 8.03953L0.0449219 14.1469H1.23226L5.8264 8.80664L9.4959 14.1469H13.5035L8.05431 6.2166H8.05461ZM6.42838 8.1069L5.89601 7.34544L1.66007 1.28638H3.48376L6.9022 6.17623L7.43458 6.9377L11.8782 13.2937H10.0545L6.42838 8.10719V8.1069Z" />
                              </svg>
                            </Link>
                            <Link className="link-social background-100" to="#">
                              <svg
                                width={14}
                                height={11}
                                viewBox="0 0 14 11"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M5.66557 7.52752L9.17195 5.50071L5.66557 3.4739V7.52752ZM13.4755 2.23754C13.5634 2.55508 13.6242 2.98071 13.6647 3.52119C13.712 4.06167 13.7323 4.52784 13.7323 4.9332L13.7728 5.50071C13.7728 6.98028 13.6647 8.068 13.4755 8.76387C13.3066 9.37191 12.9148 9.76376 12.3067 9.93266C11.9892 10.0205 11.4082 10.0813 10.5164 10.1218C9.63812 10.1691 8.83415 10.1894 8.09098 10.1894L7.01678 10.2299C4.186 10.2299 2.42267 10.1218 1.7268 9.93266C1.11876 9.76376 0.726909 9.37191 0.558008 8.76387C0.470179 8.44634 0.409375 8.02071 0.368839 7.48023C0.321547 6.93974 0.301278 6.47358 0.301278 6.06821L0.260742 5.50071C0.260742 4.02114 0.368839 2.93342 0.558008 2.23754C0.726909 1.6295 1.11876 1.23765 1.7268 1.06875C2.04434 0.980921 2.62535 0.920117 3.51715 0.879581C4.39543 0.832289 5.1994 0.812021 5.94257 0.812021L7.01678 0.771484C9.84755 0.771484 11.6109 0.879581 12.3067 1.06875C12.9148 1.23765 13.3066 1.6295 13.4755 2.23754Z" />
                              </svg>
                            </Link>
                          </div>
                          <div className="card-button">
                            {" "}
                            <Link to="/contact">
                              <svg
                                width={8}
                                height={8}
                                viewBox="0 0 8 8"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.08848 6.97917L7.08848 1.20442L1.31373 1.20442M7.08848 1.20442L1.31373 6.97917"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 wow fadeInUp">
                    <div className="card-team card-team-2">
                      <div className="card-image">
                        {" "}
                        <img
                          src="/assets/imgs/page/pages/team2.png"
                          alt="Travila"
                        />
                      </div>
                      <div className="card-info">
                        <h6 className="neutral-1000">Ronald Richards</h6>
                        <p className="text-sm-medium neutral-500">
                          Founder and Principal Broker
                        </p>
                        <p className="text-xs-medium neutral-1000">
                          With over 15 years of real estate experience, John
                          leads the Travila team with passion and expertise. His
                          commitment to client satisfaction and market knowledge
                          sets the standard for our exceptional service.
                        </p>
                        <div className="card-team-bottom">
                          <div className="card-socials">
                            {" "}
                            <Link className="link-social background-100" to="#">
                              <svg
                                width={15}
                                height={15}
                                viewBox="0 0 15 15"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M10.1567 1.53906H5.35411C3.26803 1.53906 2.02441 2.78268 2.02441 4.86876V9.66558C2.02441 11.7574 3.26803 13.001 5.35411 13.001H10.1509C12.237 13.001 13.4806 11.7574 13.4806 9.67131V4.86876C13.4864 2.78268 12.2427 1.53906 10.1567 1.53906ZM7.75539 9.49365C6.52896 9.49365 5.53177 8.49646 5.53177 7.27003C5.53177 6.04361 6.52896 5.04642 7.75539 5.04642C8.98181 5.04642 9.979 6.04361 9.979 7.27003C9.979 8.49646 8.98181 9.49365 7.75539 9.49365ZM11.1481 4.33578C11.1195 4.40455 11.0793 4.46759 11.0278 4.5249C10.9705 4.57648 10.9074 4.61659 10.8386 4.64525C10.7699 4.6739 10.6954 4.6911 10.6209 4.6911C10.4661 4.6911 10.3229 4.63379 10.214 4.5249C10.1624 4.46759 10.1223 4.40455 10.0936 4.33578C10.065 4.267 10.0478 4.1925 10.0478 4.118C10.0478 4.0435 10.065 3.96899 10.0936 3.90022C10.1223 3.82572 10.1624 3.76841 10.214 3.7111C10.3458 3.57929 10.5464 3.51625 10.7298 3.55636C10.7699 3.5621 10.8043 3.57356 10.8386 3.59075C10.873 3.60221 10.9074 3.61941 10.9418 3.64233C10.9705 3.65952 10.9991 3.68818 11.0278 3.7111C11.0793 3.76841 11.1195 3.82572 11.1481 3.90022C11.1768 3.96899 11.194 4.0435 11.194 4.118C11.194 4.1925 11.1768 4.267 11.1481 4.33578Z" />
                              </svg>
                            </Link>
                            <Link className="link-social background-100" to="#">
                              <svg
                                width={15}
                                height={15}
                                viewBox="0 0 15 15"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M13.4971 9.67131C13.4971 11.7574 12.2535 13.001 10.1674 13.001H9.48542C9.17022 13.001 8.91232 12.7431 8.91232 12.4279V9.12114C8.91232 8.96641 9.0384 8.8346 9.19313 8.8346L10.2018 8.8174C10.282 8.81167 10.3508 8.75436 10.368 8.67413L10.5686 7.57951C10.5858 7.47635 10.5055 7.37892 10.3966 7.37892L9.17594 7.39612C9.01547 7.39612 8.8894 7.27004 8.88367 7.1153L8.86074 5.71121C8.86074 5.61951 8.93524 5.53929 9.03267 5.53929L10.4081 5.51636C10.5055 5.51636 10.58 5.44186 10.58 5.34444L10.5571 3.96899C10.5571 3.87156 10.4826 3.79707 10.3852 3.79707L8.83782 3.82C7.88648 3.83719 7.13 4.61659 7.14719 5.56793L7.17584 7.14395C7.18157 7.30442 7.05549 7.43051 6.89503 7.43624L6.2073 7.44769C6.10988 7.44769 6.03538 7.52219 6.03538 7.61961L6.05257 8.70851C6.05257 8.80594 6.12707 8.88043 6.22449 8.88043L6.91222 8.86898C7.07269 8.86898 7.19875 8.99506 7.20449 9.14979L7.25606 12.4165C7.26179 12.7374 7.0039 13.001 6.68297 13.001H5.36485C3.27878 13.001 2.03516 11.7574 2.03516 9.66558V4.86876C2.03516 2.78268 3.27878 1.53906 5.36485 1.53906H10.1674C12.2535 1.53906 13.4971 2.78268 13.4971 4.86876V9.67131Z" />
                              </svg>
                            </Link>
                            <Link className="link-social background-100" to="#">
                              <svg
                                width={14}
                                height={15}
                                viewBox="0 0 14 15"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M8.05461 6.2166L13.0649 0.392578H11.8776L7.52719 5.44949L4.05253 0.392578H0.0449219L5.29929 8.03953L0.0449219 14.1469H1.23226L5.8264 8.80664L9.4959 14.1469H13.5035L8.05431 6.2166H8.05461ZM6.42838 8.1069L5.89601 7.34544L1.66007 1.28638H3.48376L6.9022 6.17623L7.43458 6.9377L11.8782 13.2937H10.0545L6.42838 8.10719V8.1069Z" />
                              </svg>
                            </Link>
                            <Link className="link-social background-100" to="#">
                              <svg
                                width={14}
                                height={11}
                                viewBox="0 0 14 11"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M5.66557 7.52752L9.17195 5.50071L5.66557 3.4739V7.52752ZM13.4755 2.23754C13.5634 2.55508 13.6242 2.98071 13.6647 3.52119C13.712 4.06167 13.7323 4.52784 13.7323 4.9332L13.7728 5.50071C13.7728 6.98028 13.6647 8.068 13.4755 8.76387C13.3066 9.37191 12.9148 9.76376 12.3067 9.93266C11.9892 10.0205 11.4082 10.0813 10.5164 10.1218C9.63812 10.1691 8.83415 10.1894 8.09098 10.1894L7.01678 10.2299C4.186 10.2299 2.42267 10.1218 1.7268 9.93266C1.11876 9.76376 0.726909 9.37191 0.558008 8.76387C0.470179 8.44634 0.409375 8.02071 0.368839 7.48023C0.321547 6.93974 0.301278 6.47358 0.301278 6.06821L0.260742 5.50071C0.260742 4.02114 0.368839 2.93342 0.558008 2.23754C0.726909 1.6295 1.11876 1.23765 1.7268 1.06875C2.04434 0.980921 2.62535 0.920117 3.51715 0.879581C4.39543 0.832289 5.1994 0.812021 5.94257 0.812021L7.01678 0.771484C9.84755 0.771484 11.6109 0.879581 12.3067 1.06875C12.9148 1.23765 13.3066 1.6295 13.4755 2.23754Z" />
                              </svg>
                            </Link>
                          </div>
                          <div className="card-button">
                            {" "}
                            <Link to="/contact">
                              <svg
                                width={8}
                                height={8}
                                viewBox="0 0 8 8"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.08848 6.97917L7.08848 1.20442L1.31373 1.20442M7.08848 1.20442L1.31373 6.97917"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 wow fadeInUp">
                    <div className="card-team card-team-2">
                      <div className="card-image">
                        {" "}
                        <img
                          src="/assets/imgs/page/pages/team3.png"
                          alt="Travila"
                        />
                      </div>
                      <div className="card-info">
                        <h6 className="neutral-1000">Jerome Bell</h6>
                        <p className="text-sm-medium neutral-500">
                          Founder and Principal Broker
                        </p>
                        <p className="text-xs-medium neutral-1000">
                          With over 15 years of real estate experience, John
                          leads the Travila team with passion and expertise. His
                          commitment to client satisfaction and market knowledge
                          sets the standard for our exceptional service.
                        </p>
                        <div className="card-team-bottom">
                          <div className="card-socials">
                            {" "}
                            <Link className="link-social background-100" to="#">
                              <svg
                                width={15}
                                height={15}
                                viewBox="0 0 15 15"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M10.1567 1.53906H5.35411C3.26803 1.53906 2.02441 2.78268 2.02441 4.86876V9.66558C2.02441 11.7574 3.26803 13.001 5.35411 13.001H10.1509C12.237 13.001 13.4806 11.7574 13.4806 9.67131V4.86876C13.4864 2.78268 12.2427 1.53906 10.1567 1.53906ZM7.75539 9.49365C6.52896 9.49365 5.53177 8.49646 5.53177 7.27003C5.53177 6.04361 6.52896 5.04642 7.75539 5.04642C8.98181 5.04642 9.979 6.04361 9.979 7.27003C9.979 8.49646 8.98181 9.49365 7.75539 9.49365ZM11.1481 4.33578C11.1195 4.40455 11.0793 4.46759 11.0278 4.5249C10.9705 4.57648 10.9074 4.61659 10.8386 4.64525C10.7699 4.6739 10.6954 4.6911 10.6209 4.6911C10.4661 4.6911 10.3229 4.63379 10.214 4.5249C10.1624 4.46759 10.1223 4.40455 10.0936 4.33578C10.065 4.267 10.0478 4.1925 10.0478 4.118C10.0478 4.0435 10.065 3.96899 10.0936 3.90022C10.1223 3.82572 10.1624 3.76841 10.214 3.7111C10.3458 3.57929 10.5464 3.51625 10.7298 3.55636C10.7699 3.5621 10.8043 3.57356 10.8386 3.59075C10.873 3.60221 10.9074 3.61941 10.9418 3.64233C10.9705 3.65952 10.9991 3.68818 11.0278 3.7111C11.0793 3.76841 11.1195 3.82572 11.1481 3.90022C11.1768 3.96899 11.194 4.0435 11.194 4.118C11.194 4.1925 11.1768 4.267 11.1481 4.33578Z" />
                              </svg>
                            </Link>
                            <Link className="link-social background-100" to="#">
                              <svg
                                width={15}
                                height={15}
                                viewBox="0 0 15 15"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M13.4971 9.67131C13.4971 11.7574 12.2535 13.001 10.1674 13.001H9.48542C9.17022 13.001 8.91232 12.7431 8.91232 12.4279V9.12114C8.91232 8.96641 9.0384 8.8346 9.19313 8.8346L10.2018 8.8174C10.282 8.81167 10.3508 8.75436 10.368 8.67413L10.5686 7.57951C10.5858 7.47635 10.5055 7.37892 10.3966 7.37892L9.17594 7.39612C9.01547 7.39612 8.8894 7.27004 8.88367 7.1153L8.86074 5.71121C8.86074 5.61951 8.93524 5.53929 9.03267 5.53929L10.4081 5.51636C10.5055 5.51636 10.58 5.44186 10.58 5.34444L10.5571 3.96899C10.5571 3.87156 10.4826 3.79707 10.3852 3.79707L8.83782 3.82C7.88648 3.83719 7.13 4.61659 7.14719 5.56793L7.17584 7.14395C7.18157 7.30442 7.05549 7.43051 6.89503 7.43624L6.2073 7.44769C6.10988 7.44769 6.03538 7.52219 6.03538 7.61961L6.05257 8.70851C6.05257 8.80594 6.12707 8.88043 6.22449 8.88043L6.91222 8.86898C7.07269 8.86898 7.19875 8.99506 7.20449 9.14979L7.25606 12.4165C7.26179 12.7374 7.0039 13.001 6.68297 13.001H5.36485C3.27878 13.001 2.03516 11.7574 2.03516 9.66558V4.86876C2.03516 2.78268 3.27878 1.53906 5.36485 1.53906H10.1674C12.2535 1.53906 13.4971 2.78268 13.4971 4.86876V9.67131Z" />
                              </svg>
                            </Link>
                            <Link className="link-social background-100" to="#">
                              <svg
                                width={14}
                                height={15}
                                viewBox="0 0 14 15"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M8.05461 6.2166L13.0649 0.392578H11.8776L7.52719 5.44949L4.05253 0.392578H0.0449219L5.29929 8.03953L0.0449219 14.1469H1.23226L5.8264 8.80664L9.4959 14.1469H13.5035L8.05431 6.2166H8.05461ZM6.42838 8.1069L5.89601 7.34544L1.66007 1.28638H3.48376L6.9022 6.17623L7.43458 6.9377L11.8782 13.2937H10.0545L6.42838 8.10719V8.1069Z" />
                              </svg>
                            </Link>
                            <Link className="link-social background-100" to="#">
                              <svg
                                width={14}
                                height={11}
                                viewBox="0 0 14 11"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M5.66557 7.52752L9.17195 5.50071L5.66557 3.4739V7.52752ZM13.4755 2.23754C13.5634 2.55508 13.6242 2.98071 13.6647 3.52119C13.712 4.06167 13.7323 4.52784 13.7323 4.9332L13.7728 5.50071C13.7728 6.98028 13.6647 8.068 13.4755 8.76387C13.3066 9.37191 12.9148 9.76376 12.3067 9.93266C11.9892 10.0205 11.4082 10.0813 10.5164 10.1218C9.63812 10.1691 8.83415 10.1894 8.09098 10.1894L7.01678 10.2299C4.186 10.2299 2.42267 10.1218 1.7268 9.93266C1.11876 9.76376 0.726909 9.37191 0.558008 8.76387C0.470179 8.44634 0.409375 8.02071 0.368839 7.48023C0.321547 6.93974 0.301278 6.47358 0.301278 6.06821L0.260742 5.50071C0.260742 4.02114 0.368839 2.93342 0.558008 2.23754C0.726909 1.6295 1.11876 1.23765 1.7268 1.06875C2.04434 0.980921 2.62535 0.920117 3.51715 0.879581C4.39543 0.832289 5.1994 0.812021 5.94257 0.812021L7.01678 0.771484C9.84755 0.771484 11.6109 0.879581 12.3067 1.06875C12.9148 1.23765 13.3066 1.6295 13.4755 2.23754Z" />
                              </svg>
                            </Link>
                          </div>
                          <div className="card-button">
                            {" "}
                            <Link to="/contact">
                              <svg
                                width={8}
                                height={8}
                                viewBox="0 0 8 8"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.08848 6.97917L7.08848 1.20442L1.31373 1.20442M7.08848 1.20442L1.31373 6.97917"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 wow fadeInUp">
                    <div className="card-team card-team-2">
                      <div className="card-image">
                        {" "}
                        <img
                          src="/assets/imgs/page/pages/team4.png"
                          alt="Travila"
                        />
                      </div>
                      <div className="card-info">
                        <h6 className="neutral-1000">Jenny Wilson</h6>
                        <p className="text-sm-medium neutral-500">
                          Founder and Principal Broker
                        </p>
                        <p className="text-xs-medium neutral-1000">
                          With over 15 years of real estate experience, John
                          leads the Travila team with passion and expertise. His
                          commitment to client satisfaction and market knowledge
                          sets the standard for our exceptional service.
                        </p>
                        <div className="card-team-bottom">
                          <div className="card-socials">
                            {" "}
                            <Link className="link-social background-100" to="#">
                              <svg
                                width={15}
                                height={15}
                                viewBox="0 0 15 15"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M10.1567 1.53906H5.35411C3.26803 1.53906 2.02441 2.78268 2.02441 4.86876V9.66558C2.02441 11.7574 3.26803 13.001 5.35411 13.001H10.1509C12.237 13.001 13.4806 11.7574 13.4806 9.67131V4.86876C13.4864 2.78268 12.2427 1.53906 10.1567 1.53906ZM7.75539 9.49365C6.52896 9.49365 5.53177 8.49646 5.53177 7.27003C5.53177 6.04361 6.52896 5.04642 7.75539 5.04642C8.98181 5.04642 9.979 6.04361 9.979 7.27003C9.979 8.49646 8.98181 9.49365 7.75539 9.49365ZM11.1481 4.33578C11.1195 4.40455 11.0793 4.46759 11.0278 4.5249C10.9705 4.57648 10.9074 4.61659 10.8386 4.64525C10.7699 4.6739 10.6954 4.6911 10.6209 4.6911C10.4661 4.6911 10.3229 4.63379 10.214 4.5249C10.1624 4.46759 10.1223 4.40455 10.0936 4.33578C10.065 4.267 10.0478 4.1925 10.0478 4.118C10.0478 4.0435 10.065 3.96899 10.0936 3.90022C10.1223 3.82572 10.1624 3.76841 10.214 3.7111C10.3458 3.57929 10.5464 3.51625 10.7298 3.55636C10.7699 3.5621 10.8043 3.57356 10.8386 3.59075C10.873 3.60221 10.9074 3.61941 10.9418 3.64233C10.9705 3.65952 10.9991 3.68818 11.0278 3.7111C11.0793 3.76841 11.1195 3.82572 11.1481 3.90022C11.1768 3.96899 11.194 4.0435 11.194 4.118C11.194 4.1925 11.1768 4.267 11.1481 4.33578Z" />
                              </svg>
                            </Link>
                            <Link className="link-social background-100" to="#">
                              <svg
                                width={15}
                                height={15}
                                viewBox="0 0 15 15"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M13.4971 9.67131C13.4971 11.7574 12.2535 13.001 10.1674 13.001H9.48542C9.17022 13.001 8.91232 12.7431 8.91232 12.4279V9.12114C8.91232 8.96641 9.0384 8.8346 9.19313 8.8346L10.2018 8.8174C10.282 8.81167 10.3508 8.75436 10.368 8.67413L10.5686 7.57951C10.5858 7.47635 10.5055 7.37892 10.3966 7.37892L9.17594 7.39612C9.01547 7.39612 8.8894 7.27004 8.88367 7.1153L8.86074 5.71121C8.86074 5.61951 8.93524 5.53929 9.03267 5.53929L10.4081 5.51636C10.5055 5.51636 10.58 5.44186 10.58 5.34444L10.5571 3.96899C10.5571 3.87156 10.4826 3.79707 10.3852 3.79707L8.83782 3.82C7.88648 3.83719 7.13 4.61659 7.14719 5.56793L7.17584 7.14395C7.18157 7.30442 7.05549 7.43051 6.89503 7.43624L6.2073 7.44769C6.10988 7.44769 6.03538 7.52219 6.03538 7.61961L6.05257 8.70851C6.05257 8.80594 6.12707 8.88043 6.22449 8.88043L6.91222 8.86898C7.07269 8.86898 7.19875 8.99506 7.20449 9.14979L7.25606 12.4165C7.26179 12.7374 7.0039 13.001 6.68297 13.001H5.36485C3.27878 13.001 2.03516 11.7574 2.03516 9.66558V4.86876C2.03516 2.78268 3.27878 1.53906 5.36485 1.53906H10.1674C12.2535 1.53906 13.4971 2.78268 13.4971 4.86876V9.67131Z" />
                              </svg>
                            </Link>
                            <Link className="link-social background-100" to="#">
                              <svg
                                width={14}
                                height={15}
                                viewBox="0 0 14 15"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M8.05461 6.2166L13.0649 0.392578H11.8776L7.52719 5.44949L4.05253 0.392578H0.0449219L5.29929 8.03953L0.0449219 14.1469H1.23226L5.8264 8.80664L9.4959 14.1469H13.5035L8.05431 6.2166H8.05461ZM6.42838 8.1069L5.89601 7.34544L1.66007 1.28638H3.48376L6.9022 6.17623L7.43458 6.9377L11.8782 13.2937H10.0545L6.42838 8.10719V8.1069Z" />
                              </svg>
                            </Link>
                            <Link className="link-social background-100" to="#">
                              <svg
                                width={14}
                                height={11}
                                viewBox="0 0 14 11"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M5.66557 7.52752L9.17195 5.50071L5.66557 3.4739V7.52752ZM13.4755 2.23754C13.5634 2.55508 13.6242 2.98071 13.6647 3.52119C13.712 4.06167 13.7323 4.52784 13.7323 4.9332L13.7728 5.50071C13.7728 6.98028 13.6647 8.068 13.4755 8.76387C13.3066 9.37191 12.9148 9.76376 12.3067 9.93266C11.9892 10.0205 11.4082 10.0813 10.5164 10.1218C9.63812 10.1691 8.83415 10.1894 8.09098 10.1894L7.01678 10.2299C4.186 10.2299 2.42267 10.1218 1.7268 9.93266C1.11876 9.76376 0.726909 9.37191 0.558008 8.76387C0.470179 8.44634 0.409375 8.02071 0.368839 7.48023C0.321547 6.93974 0.301278 6.47358 0.301278 6.06821L0.260742 5.50071C0.260742 4.02114 0.368839 2.93342 0.558008 2.23754C0.726909 1.6295 1.11876 1.23765 1.7268 1.06875C2.04434 0.980921 2.62535 0.920117 3.51715 0.879581C4.39543 0.832289 5.1994 0.812021 5.94257 0.812021L7.01678 0.771484C9.84755 0.771484 11.6109 0.879581 12.3067 1.06875C12.9148 1.23765 13.3066 1.6295 13.4755 2.23754Z" />
                              </svg>
                            </Link>
                          </div>
                          <div className="card-button">
                            {" "}
                            <Link to="/contact">
                              <svg
                                width={8}
                                height={8}
                                viewBox="0 0 8 8"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.08848 6.97917L7.08848 1.20442L1.31373 1.20442M7.08848 1.20442L1.31373 6.97917"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 wow fadeInUp">
                    <div className="card-team card-team-2">
                      <div className="card-image">
                        {" "}
                        <img
                          src="/assets/imgs/page/pages/team5.png"
                          alt="Travila"
                        />
                      </div>
                      <div className="card-info">
                        <h6 className="neutral-1000">Floyd Miles</h6>
                        <p className="text-sm-medium neutral-500">
                          Founder and Principal Broker
                        </p>
                        <p className="text-xs-medium neutral-1000">
                          With over 15 years of real estate experience, John
                          leads the Travila team with passion and expertise. His
                          commitment to client satisfaction and market knowledge
                          sets the standard for our exceptional service.
                        </p>
                        <div className="card-team-bottom">
                          <div className="card-socials">
                            {" "}
                            <Link className="link-social background-100" to="#">
                              <svg
                                width={15}
                                height={15}
                                viewBox="0 0 15 15"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M10.1567 1.53906H5.35411C3.26803 1.53906 2.02441 2.78268 2.02441 4.86876V9.66558C2.02441 11.7574 3.26803 13.001 5.35411 13.001H10.1509C12.237 13.001 13.4806 11.7574 13.4806 9.67131V4.86876C13.4864 2.78268 12.2427 1.53906 10.1567 1.53906ZM7.75539 9.49365C6.52896 9.49365 5.53177 8.49646 5.53177 7.27003C5.53177 6.04361 6.52896 5.04642 7.75539 5.04642C8.98181 5.04642 9.979 6.04361 9.979 7.27003C9.979 8.49646 8.98181 9.49365 7.75539 9.49365ZM11.1481 4.33578C11.1195 4.40455 11.0793 4.46759 11.0278 4.5249C10.9705 4.57648 10.9074 4.61659 10.8386 4.64525C10.7699 4.6739 10.6954 4.6911 10.6209 4.6911C10.4661 4.6911 10.3229 4.63379 10.214 4.5249C10.1624 4.46759 10.1223 4.40455 10.0936 4.33578C10.065 4.267 10.0478 4.1925 10.0478 4.118C10.0478 4.0435 10.065 3.96899 10.0936 3.90022C10.1223 3.82572 10.1624 3.76841 10.214 3.7111C10.3458 3.57929 10.5464 3.51625 10.7298 3.55636C10.7699 3.5621 10.8043 3.57356 10.8386 3.59075C10.873 3.60221 10.9074 3.61941 10.9418 3.64233C10.9705 3.65952 10.9991 3.68818 11.0278 3.7111C11.0793 3.76841 11.1195 3.82572 11.1481 3.90022C11.1768 3.96899 11.194 4.0435 11.194 4.118C11.194 4.1925 11.1768 4.267 11.1481 4.33578Z" />
                              </svg>
                            </Link>
                            <Link className="link-social background-100" to="#">
                              <svg
                                width={15}
                                height={15}
                                viewBox="0 0 15 15"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M13.4971 9.67131C13.4971 11.7574 12.2535 13.001 10.1674 13.001H9.48542C9.17022 13.001 8.91232 12.7431 8.91232 12.4279V9.12114C8.91232 8.96641 9.0384 8.8346 9.19313 8.8346L10.2018 8.8174C10.282 8.81167 10.3508 8.75436 10.368 8.67413L10.5686 7.57951C10.5858 7.47635 10.5055 7.37892 10.3966 7.37892L9.17594 7.39612C9.01547 7.39612 8.8894 7.27004 8.88367 7.1153L8.86074 5.71121C8.86074 5.61951 8.93524 5.53929 9.03267 5.53929L10.4081 5.51636C10.5055 5.51636 10.58 5.44186 10.58 5.34444L10.5571 3.96899C10.5571 3.87156 10.4826 3.79707 10.3852 3.79707L8.83782 3.82C7.88648 3.83719 7.13 4.61659 7.14719 5.56793L7.17584 7.14395C7.18157 7.30442 7.05549 7.43051 6.89503 7.43624L6.2073 7.44769C6.10988 7.44769 6.03538 7.52219 6.03538 7.61961L6.05257 8.70851C6.05257 8.80594 6.12707 8.88043 6.22449 8.88043L6.91222 8.86898C7.07269 8.86898 7.19875 8.99506 7.20449 9.14979L7.25606 12.4165C7.26179 12.7374 7.0039 13.001 6.68297 13.001H5.36485C3.27878 13.001 2.03516 11.7574 2.03516 9.66558V4.86876C2.03516 2.78268 3.27878 1.53906 5.36485 1.53906H10.1674C12.2535 1.53906 13.4971 2.78268 13.4971 4.86876V9.67131Z" />
                              </svg>
                            </Link>
                            <Link className="link-social background-100" to="#">
                              <svg
                                width={14}
                                height={15}
                                viewBox="0 0 14 15"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M8.05461 6.2166L13.0649 0.392578H11.8776L7.52719 5.44949L4.05253 0.392578H0.0449219L5.29929 8.03953L0.0449219 14.1469H1.23226L5.8264 8.80664L9.4959 14.1469H13.5035L8.05431 6.2166H8.05461ZM6.42838 8.1069L5.89601 7.34544L1.66007 1.28638H3.48376L6.9022 6.17623L7.43458 6.9377L11.8782 13.2937H10.0545L6.42838 8.10719V8.1069Z" />
                              </svg>
                            </Link>
                            <Link className="link-social background-100" to="#">
                              <svg
                                width={14}
                                height={11}
                                viewBox="0 0 14 11"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M5.66557 7.52752L9.17195 5.50071L5.66557 3.4739V7.52752ZM13.4755 2.23754C13.5634 2.55508 13.6242 2.98071 13.6647 3.52119C13.712 4.06167 13.7323 4.52784 13.7323 4.9332L13.7728 5.50071C13.7728 6.98028 13.6647 8.068 13.4755 8.76387C13.3066 9.37191 12.9148 9.76376 12.3067 9.93266C11.9892 10.0205 11.4082 10.0813 10.5164 10.1218C9.63812 10.1691 8.83415 10.1894 8.09098 10.1894L7.01678 10.2299C4.186 10.2299 2.42267 10.1218 1.7268 9.93266C1.11876 9.76376 0.726909 9.37191 0.558008 8.76387C0.470179 8.44634 0.409375 8.02071 0.368839 7.48023C0.321547 6.93974 0.301278 6.47358 0.301278 6.06821L0.260742 5.50071C0.260742 4.02114 0.368839 2.93342 0.558008 2.23754C0.726909 1.6295 1.11876 1.23765 1.7268 1.06875C2.04434 0.980921 2.62535 0.920117 3.51715 0.879581C4.39543 0.832289 5.1994 0.812021 5.94257 0.812021L7.01678 0.771484C9.84755 0.771484 11.6109 0.879581 12.3067 1.06875C12.9148 1.23765 13.3066 1.6295 13.4755 2.23754Z" />
                              </svg>
                            </Link>
                          </div>
                          <div className="card-button">
                            {" "}
                            <Link to="/contact">
                              <svg
                                width={8}
                                height={8}
                                viewBox="0 0 8 8"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.08848 6.97917L7.08848 1.20442L1.31373 1.20442M7.08848 1.20442L1.31373 6.97917"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-box box-payments background-1">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="row">
                    <div className="col-md-7 mb-30">
                      <img
                        className="bdrd8 w-100"
                        src="/assets/imgs/page/homepage1/pay1.png"
                        alt="Travila"
                      />
                    </div>
                    <div className="col-md-5 mb-30">
                      <img
                        className="bdrd8 w-100 mb-15"
                        src="/assets/imgs/page/homepage1/pay2.png"
                        alt="Travila"
                      />
                      <img
                        className="bdrd8 w-100"
                        src="/assets/imgs/page/homepage1/pay3.png"
                        alt="Travila"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 mb-30">
                  <div className="box-left-payment">
                    <span className="btn btn-tag btn-brand-secondary">
                      Easy payment
                    </span>
                    <h2 className="title-why mb-25 mt-10 neutral-1000">
                      Discover Dream Destinations with Ease
                    </h2>
                    <p className="text-xl-medium neutral-500 mb-35">
                      Discover how you can offset your adventure's carbon
                      emissions and support the sustainable initiatives
                      practiced by our operators worldwide.
                    </p>
                    <div className="payment-method">
                      <div className="box-swiper mt-30">
                        <div className="swiper-container swiper-group-payment">
                          <SwiperGroupPaymentSlider />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-box box-testimonials-2 background-body">
            <div className="container">
              <div className="box-author-testimonials">
                {" "}
                <img
                  src="/assets/imgs/page/homepage1/testimonial.png"
                  alt="Travila"
                />
                <img
                  src="/assets/imgs/page/homepage1/testimonial2.png"
                  alt="Travila"
                />
                <img
                  src="/assets/imgs/page/homepage1/testimonial3.png"
                  alt="Travila"
                />
                Testimonials
              </div>
              <h2 className="mt-8 mb-25 neutral-1000">
                Don't take our word for it
              </h2>
            </div>
            <div className="block-testimonials">
              <div className="container-testimonials">
                <div className="container-slider">
                  <div className="box-swiper mt-30">
                    <div className="swiper-container swiper-group-animate swiper-group-journey">
                      <Swiper {...swiperGroupAnimate}>
                        <SwiperSlide>
                          <div className="card-testimonial background-card">
                            <div className="card-info">
                              <p className="text-xl-bold card-title neutral-1000">
                                The best booking system
                              </p>
                              <p className="neutral-500">
                                I've been using the hotel booking system for
                                several years now, and it's become my go-to
                                platform for planning my trips. The interface is
                                user-friendly, and I appreciate the detailed
                                information and real-time availability of
                                hotels.
                              </p>
                            </div>
                            <div className="card-top">
                              <div className="card-author">
                                <div className="card-image">
                                  {" "}
                                  <img
                                    src="/assets/imgs/page/homepage1/author.png"
                                    alt="Travila"
                                  />
                                </div>
                                <div className="card-info">
                                  <p className="text-lg-bold neutral-1000">
                                    Sara Mohamed
                                  </p>
                                  <p className="text-sm neutral-1000">
                                    Jakatar
                                  </p>
                                </div>
                              </div>
                              <div className="card-rate">
                                {" "}
                                <img
                                  src="/assets/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                                <img
                                  src="/assets/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                                <img
                                  src="/assets/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                                <img
                                  src="/assets/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                                <img
                                  src="/assets/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="card-testimonial background-card">
                            <div className="card-info">
                              <p className="text-xl-bold card-title neutral-1000">
                                The best booking system
                              </p>
                              <p className="neutral-500">
                                I've been using the hotel booking system for
                                several years now, and it's become my go-to
                                platform for planning my trips. The interface is
                                user-friendly, and I appreciate the detailed
                                information and real-time availability of
                                hotels.
                              </p>
                            </div>
                            <div className="card-top">
                              <div className="card-author">
                                <div className="card-image">
                                  {" "}
                                  <img
                                    src="/assets/imgs/page/homepage1/author2.png"
                                    alt="Travila"
                                  />
                                </div>
                                <div className="card-info">
                                  <p className="text-lg-bold neutral-1000">
                                    Atend John
                                  </p>
                                  <p className="text-sm neutral-1000">
                                    Califonia
                                  </p>
                                </div>
                              </div>
                              <div className="card-rate">
                                {" "}
                                <img
                                  src="/assets/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                                <img
                                  src="/assets/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                                <img
                                  src="/assets/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                                <img
                                  src="/assets/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                                <img
                                  src="/assets/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="card-testimonial background-card">
                            <div className="card-info">
                              <p className="text-xl-bold card-title neutral-1000">
                                The best booking system
                              </p>
                              <p className="neutral-500">
                                I've been using the hotel booking system for
                                several years now, and it's become my go-to
                                platform for planning my trips. The interface is
                                user-friendly, and I appreciate the detailed
                                information and real-time availability of
                                hotels.
                              </p>
                            </div>
                            <div className="card-top">
                              <div className="card-author">
                                <div className="card-image">
                                  {" "}
                                  <img
                                    src="/assets/imgs/page/homepage1/author.png"
                                    alt="Travila"
                                  />
                                </div>
                                <div className="card-info">
                                  <p className="text-lg-bold neutral-1000">
                                    Sara Mohamed
                                  </p>
                                  <p className="text-sm neutral-1000">
                                    Jakatar
                                  </p>
                                </div>
                              </div>
                              <div className="card-rate">
                                {" "}
                                <img
                                  src="/assets/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                                <img
                                  src="/assets/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                                <img
                                  src="/assets/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                                <img
                                  src="/assets/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                                <img
                                  src="/assets/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="card-testimonial background-card">
                            <div className="card-info">
                              <p className="text-xl-bold card-title neutral-1000">
                                The best booking system
                              </p>
                              <p className="neutral-500">
                                I've been using the hotel booking system for
                                several years now, and it's become my go-to
                                platform for planning my trips. The interface is
                                user-friendly, and I appreciate the detailed
                                information and real-time availability of
                                hotels.
                              </p>
                            </div>
                            <div className="card-top">
                              <div className="card-author">
                                <div className="card-image">
                                  {" "}
                                  <img
                                    src="/assets/imgs/page/homepage1/author2.png"
                                    alt="Travila"
                                  />
                                </div>
                                <div className="card-info">
                                  <p className="text-lg-bold neutral-1000">
                                    Sara Mohamed
                                  </p>
                                  <p className="text-sm neutral-1000">
                                    Jakatar
                                  </p>
                                </div>
                              </div>
                              <div className="card-rate">
                                {" "}
                                <img
                                  src="/assets/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                                <img
                                  src="/assets/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                                <img
                                  src="/assets/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                                <img
                                  src="/assets/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                                <img
                                  src="/assets/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="box-button-slider box-button-slider-team text-end">
                <div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-animate">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-animate">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                    </path>
                  </svg>
                </div>
              </div>
            </div>
          </section>
          <section className="section-box box-news background-body">
            <div className="container">
              <div className="row align-items-end">
                <div className="col-md-6 mb-30 wow fadeInLeft">
                  <h2 className="neutral-1000">News, Tips Guides</h2>
                  <p className="text-xl-medium neutral-500">
                    Favorite destinations based on customer reviews
                  </p>
                </div>
                <div className="col-md-6 mb-30 wow fadeInRight">
                  <div className="d-flex justify-content-center justify-content-md-end">
                    <Link className="btn btn-black-lg" to="#">
                      View More
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 15L15 8L8 1M15 8L1 8"
                          stroke=""
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="box-list-news wow fadeInUp">
                <div className="box-swiper mt-30">
                  <div className="swiper-container swiper-group-3">
                    <SwiperGroup3Slider />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-box box-media background-body">
            <div className="container-media wow fadeInUp">
              {" "}
              <img src="/assets/imgs/page/homepage5/media.png" alt="Travila" />
              <img src="/assets/imgs/page/homepage5/media2.png" alt="Travila" />
              <img src="/assets/imgs/page/homepage5/media3.png" alt="Travila" />
              <img src="/assets/imgs/page/homepage5/media4.png" alt="Travila" />
              <img src="/assets/imgs/page/homepage5/media5.png" alt="Travila" />
              <img src="/assets/imgs/page/homepage5/media6.png" alt="Travila" />
              <img src="/assets/imgs/page/homepage5/media7.png" alt="Travila" />
            </div>
          </section>
        </div>
      </DefaultLayout>
    </>
  );
}
