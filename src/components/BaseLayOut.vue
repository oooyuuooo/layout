<template>
    <div class="o-scroll" id="js-scroll">
        <a
            href="#main-wrapper"
            id="backto-top"
            class="back-to-top"
            style="border-radius: 40px"
            ><i class="fa-solid fa-caret-up"></i
        ></a>
        <div id="main-wrapper" class="main-wrapper mr-4">
            <header>
                <nav class="main-menu">
                    <div class="container-fluid">
                        <div class="main-menu__block">
                            <div class="main-menu__left">
                                <div class="main-menu__logo">
                                    <a href="/">
                                        <img
                                            src="../sparkle/sparkle/SparkleLogoHorizontal.png"
                                            alt="FlyNow"
                                            style="width: 200px"
                                        />
                                    </a>
                                </div>

                                <div class="main-menu__nav">
                                    <ul class="main-menu__list">
                                        <li>
                                            <a href="/" class="active"
                                                >SparkleAir</a
                                            >
                                        </li>
                                        <!-- <li class="dropdown">
                                            <a href="javascript:void(0);"
                                                >預定行程</a
                                            >
                                            <ul class="sub-menu">
                                                <li>
                                                    <a href="/FlightSearch"
                                                        >搜尋航班</a
                                                    >
                                                </li>
                                                <li>
                                                    <a href="/Booking">購票</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="dropdown">
                                            <a href="javascript:void(0);"
                                                >準備啟程</a
                                            >
                                            <ul class="sub-menu">
                                                <li>
                                                    <a href="car-listing.html"
                                                        >Car Listing</a
                                                    >
                                                </li>
                                                <li>
                                                    <a href="car-booking.html"
                                                        >Car Booking</a
                                                    >
                                                </li>
                                                <li>
                                                    <a href="car-detail.html"
                                                        >Car Detail</a
                                                    >
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="dropdown">
                                            <a href="javascript:void(0);"
                                                >關於</a
                                            >
                                            <ul class="sub-menu">
                                                <li>
                                                    <a href="hotel-listing.html"
                                                        >Hotel Listing</a
                                                    >
                                                </li>
                                                <li>
                                                    <a href="hotel-booking.html"
                                                        >Hotel Booking</a
                                                    >
                                                </li>
                                                <li>
                                                    <a href="hotel-detail.html"
                                                        >Hotel Detail</a
                                                    >
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="tour-packages.html"
                                                >Tour Package</a
                                            >
                                        </li>
                                        <li class="dropdown">
                                            <a href="javascript:void(0);"
                                                >Pages</a
                                            >
                                            <ul class="sub-menu">
                                                <li>
                                                    <a href="about-us.html"
                                                        >About</a
                                                    >
                                                </li>
                                                <li>
                                                    <a href="\Contact"
                                                        >聯絡我們</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        href="privacy-policy.html"
                                                        >Privacy Policy</a
                                                    >
                                                </li>
                                                <li>
                                                    <a href="login.html"
                                                        >Login</a
                                                    >
                                                </li>
                                                <li>
                                                    <a href="sign-up.html"
                                                        >Signup</a
                                                    >
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="dropdown">
                                            <a href="javascript:void(0);"
                                                >最新消息</a
                                            >
                                            <ul>
                                                <li>
                                                    <a href="/Event"
                                                        >最近活動</a
                                                    >
                                                </li>
                                                <li>
                                                    <a href="/Detail"
                                                        >詳細頁面</a
                                                    >
                                                </li>
                                            </ul>
                                        </li> -->
                                        <li class="dropdown">
                                            <a href="javascript:void(0);"
                                                >公版</a
                                            >
                                            <ul>
                                                <li>
                                                    <a href="/">首頁</a>
                                                </li>
                                                <li>
                                                    <a href="/Event">List</a>
                                                </li>
                                                <li>
                                                    <a href="/Detail">Detail</a>
                                                </li>
                                                <li>
                                                    <a href="/Contact">聯絡</a>
                                                </li>
                                                <li>
                                                    <a href="/FlightSearch"
                                                        >航班搜尋</a
                                                    >
                                                </li>
                                                <li>
                                                    <a href="/Booking"
                                                        >訂票頁面+付款</a
                                                    >
                                                </li>
                                                <li>
                                                    <a href="/login">登入</a>
                                                </li>
                                                <li>
                                                    <a href="/sign-up">註冊</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="main-menu__right">
                                <a
                                    href="#"
                                    class="main-menu__search search-toggler d-xl-flex d-none"
                                >
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </a>
                                <div
                                    class="main-menu-signup__login d-xl-flex d-none"
                                >
                                    <RouterLink
                                        class="main-menu__login"
                                        to="/login"
                                        >登入</RouterLink
                                    >
                                    <div class="center_slach d-xl-flex d-none">
                                        /
                                    </div>
                                    <RouterLink
                                        class="main-menu__login"
                                        to="/sign-up"
                                        >註冊</RouterLink
                                    >
                                </div>
                                <a
                                    href="#"
                                    class="main-menu__toggler mobile-nav__toggler"
                                >
                                    <i class="fa-solid fa-bars"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
                <!-- Header Area end -->
            </header>
            <main class="wrapper">
                <RouterView></RouterView>
            </main>
            <footer
                class="footer bg-white p-40"
                data-sal="slide-down"
                data-sal-duration="800"
                data-sal-delay="100"
                data-sal-easing="ease-in-out"
            >
                <div class="container-fluid">
                    <div class="row">
                        <div
                            class="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-lg-0 mb-32"
                        >
                            <a href=""
                                ><img
                                    src="../sparkle/sparkle/SparkleLogoHorizontal.png"
                                    alt=""
                                    class="mb-16"
                                    style="width: 250px; margin-left: 50px"
                            /></a>
                            <p class="dark-gray mb-16">
                                Lorem ipsum dolor sit amet consectetur. Aliquet
                                vulputate augue penatibus in libero et id
                                aliquam. In ridiculus pretium est velit euismod.
                            </p>
                            <h6 class="lightest-black mb-8">
                                Subscribe to our special offers
                            </h6>
                            <form action="index.html" method="post">
                                <input
                                    type="email"
                                    class="form-control"
                                    placeholder="Email address"
                                    name="email"
                                />
                                <button type="submit" class="subscribe">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                        <div
                            class="col-xl-2 col-lg-2 col-md-6 col-6 mb-lg-0 mb-32"
                        >
                            <h4 class="light-black mb-24">Booking</h4>
                            <div class="our-links">
                                <ul class="unstyled">
                                    <li class="mb-16">
                                        <a
                                            href="flight-booking.html"
                                            class="light-black"
                                            >Book Flights</a
                                        >
                                    </li>
                                    <li class="mb-16">
                                        <a
                                            href="tour-packages.html"
                                            class="light-black"
                                            >Travel Services</a
                                        >
                                    </li>
                                    <li class="mb-16">
                                        <a
                                            href="car-booking.html"
                                            class="light-black"
                                            >Transportation</a
                                        >
                                    </li>
                                    <li class="mb-16">
                                        <a
                                            href="tour-packages.html"
                                            class="light-black"
                                            >Planning Your Trip</a
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            class="col-xl-2 col-lg-2 col-md-6 col-6 mb-lg-0 mb-32"
                        >
                            <h4 class="light-black mb-24">Useful Links</h4>
                            <div class="our-links">
                                <ul class="unstyled">
                                    <li class="mb-16">
                                        <a href="" class="light-black">Home</a>
                                    </li>
                                    <li class="mb-16">
                                        <a
                                            href="blog-listing.html"
                                            class="light-black"
                                            >Blogs</a
                                        >
                                    </li>
                                    <li class="mb-16">
                                        <a
                                            href="about-us.html"
                                            class="light-black"
                                            >About
                                        </a>
                                    </li>
                                    <li class="mb-16">
                                        <a
                                            href="contact.html"
                                            class="light-black"
                                            >Contact Us</a
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            class="col-xl-2 col-lg-2 col-md-6 col-6 mb-md-0 mb-32"
                        >
                            <h4 class="light-black mb-24">Manage</h4>
                            <div class="our-links">
                                <ul class="unstyled">
                                    <li class="mb-16">
                                        <a
                                            href="flight-booking.html"
                                            class="light-black"
                                            >Check-in</a
                                        >
                                    </li>
                                    <li class="mb-16">
                                        <a
                                            href="tour-packages.html"
                                            class="light-black"
                                            >Manage Your Booking</a
                                        >
                                    </li>
                                    <li class="mb-16">
                                        <a
                                            href="car-listing.html"
                                            class="light-black"
                                            >Chaurfeur Drive</a
                                        >
                                    </li>
                                    <li class="mb-16">
                                        <a
                                            href="flight-listing.html"
                                            class="light-black"
                                            >Flight Status</a
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <h4 class="light-black mb-16">Contact Us</h4>
                            <div class="follow-us">
                                <ul class="unstyled">
                                    <li class="mb-8">
                                        <img
                                            src="../moban7664/static/picture/location-bk.png"
                                            alt=""
                                        />&nbsp;&nbsp;123 Main Street, Anytown,
                                        USA.
                                    </li>
                                    <li class="mb-8 h-27 color-primary">
                                        <img
                                            src="../moban7664/static/picture/telephone.png"
                                            alt=""
                                        />&nbsp;&nbsp;+1 234 567 890
                                    </li>
                                    <li class="mb-24">
                                        <a href=""
                                            ><img
                                                src="../moban7664/static/picture/mail.png"
                                                alt=""
                                            />&nbsp;&nbsp;email@example.com</a
                                        >
                                    </li>
                                </ul>
                            </div>
                            <div class="social-link mb-32">
                                <h6 class="light-black mb-8">Follow Us!</h6>
                                <ul class="unstyled">
                                    <li>
                                        <a href="" class="active"
                                            ><img
                                                src="../moban7664/static/picture/instagram.png"
                                                alt=""
                                        /></a>
                                    </li>
                                    <li>
                                        <a href=""
                                            ><img
                                                src="../moban7664/static/picture/facebook.png"
                                                alt=""
                                        /></a>
                                    </li>
                                    <li>
                                        <a href=""
                                            ><img
                                                src="../moban7664/static/picture/linkedin.png"
                                                alt=""
                                        /></a>
                                    </li>
                                    <li>
                                        <a href=""
                                            ><img
                                                src="../moban7664/static/picture/twitter.png"
                                                alt=""
                                        /></a>
                                    </li>
                                </ul>
                            </div>
                            <p class="light-black">
                                Copyright &copy; 2024.Company name All rights
                                reserved.<a
                                    target="_blank"
                                    href="https://we-shop.net/"
                                    >Free Download</a
                                >
                            </p>
                        </div>
                    </div>
                </div>
                <!-- Footer Area End  -->
            </footer>
        </div>
        <!-- Mobile Menu Start -->
        <div class="mobile-nav__wrapper">
            <div class="mobile-nav__overlay mobile-nav__toggler"></div>
            <div class="mobile-nav__content">
                <span class="mobile-nav__close mobile-nav__toggler"></span>
                <div class="logo-box">
                    <a href="" aria-label="logo image"
                        ><img
                            src="../sparkle/sparkle/SparkleLogoHorizontal.png"
                            alt=""
                            class="invisible"
                    /></a>
                </div>
                <div class="mobile-nav__container"></div>
                <ul class="mobile-nav__contact list-unstyled">
                    <li>
                        <i class="fas fa-envelope"></i>
                        <a href="mailto:example@company.com"
                            >example@company.com</a
                        >
                    </li>
                    <li>
                        <i class="fa fa-phone-alt"></i>
                        <a href="tel:+12345678">+123 (4567) -890</a>
                    </li>
                </ul>
                <!-- <div class="mobile-nav__social">
    <a href="#"><i class="fab fa-twitter"></i></a>
    <a href="#"><i class="fab fa-facebook"></i></a>
    <a href="#"><i class="fab fa-instagram"></i></a>
  </div> -->
            </div>
        </div>
    </div>
    <!-- modal-popup area Start  -->
    <div class="search-popup">
        <div class="search-popup__overlay search-toggler"></div>
        <div class="search-popup__content">
            <form
                role="search"
                method="get"
                class="search-popup__form"
                action="index.html"
            >
                <input type="text" id="search" placeholder="Search Here..." />
                <button type="submit">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </div>
    </div>
    <!-- search-popup end-->
</template>

<script setup></script>
