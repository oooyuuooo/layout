<template>
    <!-- Title-Banner Start -->
    <div class="title-banner">
        <div class="container-fluid">
            <div class="row">
                <div class="banner-area">
                    <img
                        src="../src/moban7664/static/picture/vacation.png"
                        alt=""
                        class="left-image"
                    />
                    <div class="content-box">
                        <h1 class="fw-700 lightest-black">
                            聯絡 <br class="title-break" />
                            我們
                        </h1>
                    </div>
                    <img
                        src="../src/moban7664/static/picture/plane-2.png"
                        alt=""
                        class="right-image"
                    />
                </div>
            </div>
        </div>
    </div>
    <!-- Title-Banner End -->

    <!-- Main Content Start -->
    <div class="page-content m-0">
        <!-- Contact Us Form Start -->
        <div class="contact-us p-60">
            <div class="container-fluid">
                <div class="row">
                    <div
                        class="col-lg-8 offset-lg-2"
                        data-sal="slide-right"
                        data-sal-duration="800"
                        data-sal-delay="100"
                        data-sal-easing="ease-in-out"
                    >
                        <form
                            action="contact.html"
                            method="post"
                            class="contact-form"
                        >
                            <div class="row">
                                <div class="col-sm-6 mb-24">
                                    <input
                                        type="text"
                                        name="name"
                                        class="form-control"
                                        id="f-name"
                                        placeholder="Name"
                                        required="true"
                                    />
                                </div>
                                <div class="col-sm-6 mb-24">
                                    <input
                                        type="email"
                                        name="email"
                                        class="form-control"
                                        id="mail"
                                        placeholder="Email"
                                        required="true"
                                    />
                                </div>
                                <div class="col-sm-6 mb-24">
                                    <input
                                        type="tel"
                                        name="phone"
                                        class="form-control"
                                        id="p_number"
                                        placeholder="Mobile Number"
                                        required="true"
                                    />
                                </div>
                                <div class="col-sm-6 mb-24">
                                    <input
                                        type="text"
                                        name="subject"
                                        class="form-control"
                                        id="subj"
                                        placeholder="Subject"
                                        required="true"
                                    />
                                </div>
                                <div class="col-sm-12 mb-24">
                                    <textarea
                                        name="message"
                                        class="form-control"
                                        id="comment"
                                        cols="30"
                                        rows="10"
                                        placeholder="Message"
                                        required="true"
                                    ></textarea>
                                </div>
                            </div>
                            <div class="d-flex justify-content-end">
                                <button type="submit" class="cus-btn">
                                    Send Message
                                </button>
                                <!-- Alert Message -->
                                <div id="message" class="alert-msg"></div>
                            </div>
                        </form>
                    </div>
                </div>
                <iframe
                    src="embed-1m181m121m31d1701097.96134105162d151.920697629026173d-33.6193918869432052m31f02f03f03m21i10242i7684f13.13m31m21s0x6b129838f39a743f3A0x3017d681632a8502sSydney20NSW2C20Australia5e03m21sen2s4v17014074347115m21sen2s.html"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    data-sal="slide-left"
                    data-sal-duration="800"
                    data-sal-delay="100"
                    data-sal-easing="ease-in-out"
                ></iframe>
            </div>
        </div>
        <!-- Contact Us Form End -->
    </div>
    <!-- Main Content End -->

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
                <button type="submit"><i class="fal fa-search"></i></button>
            </form>
        </div>
    </div>
    <!-- search-popup end-->

    <!-- Mobile Menu Start -->
    <div class="mobile-nav__wrapper">
        <div class="mobile-nav__overlay mobile-nav__toggler"></div>
        <div class="mobile-nav__content">
            <span class="mobile-nav__close mobile-nav__toggler"></span>
            <div class="logo-box">
                <a href="index.html" aria-label="logo image"
                    ><img
                        src="../src/moban7664/static/picture/logo.png"
                        alt=""
                        class="invisible"
                /></a>
            </div>
            <div class="mobile-nav__container"></div>
            <ul class="mobile-nav__contact list-unstyled">
                <li>
                    <i class="fas fa-envelope"></i>
                    <a href="mailto:example@company.com">example@company.com</a>
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
    <!-- Mobile Menu End -->
    <!-- modal-popup area start  -->
    <div class="modal fade" id="videoModal" role="dialog" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="top_bar">
                    <h4 class="modal-title">Classical Optical Glasses</h4>
                    <button
                        type="button"
                        class="close"
                        id="closeVideoModalButton"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true"
                            ><i class="fas fa-times"></i> <b>Close</b></span
                        >
                    </button>
                </div>
                <div class="modal-body">
                    <p>可隨意放東西</p>
                </div>
            </div>
        </div>
    </div>
    <!-- modal-popup area end  -->
</template>
