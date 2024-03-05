<template>
    <!-- Title-Banner Start -->
    <div class="title-banner mb-20">
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
                            Flight <br class="title-break" />
                            Booking
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
        <!-- Flight-Booking Start -->
        <section
            class="flight-booking"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="100"
            data-sal-easing="ease-in-out"
        >
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-8">
                        <div class="booking-form">
                            <form
                                action="flight-booking.html"
                                id="flight-form"
                                method="post"
                                role="form"
                                class="contact-form form-wizard"
                            >
                                <div class="form-wizard-header">
                                    <ul
                                        class="nav list-unstyled form-wizard-steps clearfix"
                                    >
                                        <li class="nav-item activated">
                                            <button class="nav-link">
                                                <span class="number">1</span
                                                ><i
                                                    class="fa-regular fa-circle-check"
                                                    style="font-size: 20px"
                                                ></i>
                                            </button>
                                            <h5 class="color-black">
                                                Your Selection
                                            </h5>
                                        </li>
                                        <li class="nav-item active">
                                            <button class="nav-link">
                                                <span class="number">2</span
                                                ><i
                                                    class="fa-regular fa-circle-check"
                                                    style="font-size: 20px"
                                                ></i>
                                            </button>
                                            <h5 class="color-black">
                                                Your Details
                                            </h5>
                                        </li>
                                        <li class="nav-item">
                                            <button class="nav-link">
                                                <span class="number">3</span
                                                ><i
                                                    class="fa-regular fa-circle-check"
                                                    style="font-size: 20px"
                                                ></i>
                                            </button>
                                            <h5 class="color-black">
                                                Final Step
                                            </h5>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    class="wizard-content overflow-visible mb-24"
                                >
                                    <fieldset
                                        id="step-2"
                                        class="tab-pane show wizard-fieldset p-0"
                                    >
                                        <div id="wizardValidator">
                                            <div class="detail-form mb-32">
                                                <h4 class="black p-0 mb-40">
                                                    Enter Your Details
                                                </h4>
                                                <div class="row">
                                                    <div class="col-sm-3 mb-40">
                                                        <div
                                                            class="gender-select"
                                                        >
                                                            <div class="select">
                                                                <select
                                                                    name="gender"
                                                                    id="gender"
                                                                    class="wizard-required"
                                                                >
                                                                    <option
                                                                        selected
                                                                        disabled
                                                                    >
                                                                        Gender
                                                                    </option>
                                                                    <option
                                                                        value="male"
                                                                    >
                                                                        Male
                                                                    </option>
                                                                    <option
                                                                        value="female"
                                                                    >
                                                                        Female
                                                                    </option>
                                                                    <option
                                                                        value="other"
                                                                    >
                                                                        Other
                                                                    </option>
                                                                </select>
                                                            </div>
                                                            <div
                                                                class="wizard-form-error"
                                                            ></div>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-5 mb-40">
                                                        <input
                                                            type="text"
                                                            class="form-control wizard-required"
                                                            id="first-name"
                                                            name="first-name"
                                                            placeholder="First Name"
                                                        />
                                                        <div
                                                            class="wizard-form-error"
                                                        ></div>
                                                    </div>
                                                    <div class="col-sm-4 mb-40">
                                                        <input
                                                            type="text"
                                                            class="form-control wizard-required"
                                                            id="last-name"
                                                            name="last-name"
                                                            placeholder="Last Name"
                                                        />
                                                        <div
                                                            class="wizard-form-error"
                                                        ></div>
                                                    </div>
                                                    <div class="col-sm-6 mb-40">
                                                        <input
                                                            type="email"
                                                            class="form-control wizard-required"
                                                            id="email"
                                                            name="email"
                                                            placeholder="Email"
                                                        />
                                                        <div
                                                            class="wizard-form-error"
                                                        ></div>
                                                    </div>
                                                    <div class="col-sm-6 mb-40">
                                                        <div
                                                            class="gender-select"
                                                        >
                                                            <div class="select">
                                                                <select
                                                                    name="nationality"
                                                                    id="nationality"
                                                                    class="wizard-required"
                                                                >
                                                                    <option
                                                                        selected
                                                                        disabled
                                                                    >
                                                                        Nationality
                                                                    </option>
                                                                    <option
                                                                        value="american"
                                                                    >
                                                                        American
                                                                    </option>
                                                                    <option
                                                                        value="britian"
                                                                    >
                                                                        Britian
                                                                    </option>
                                                                    <option
                                                                        value="indian"
                                                                    >
                                                                        Indian
                                                                    </option>
                                                                    <option
                                                                        value="canadian"
                                                                    >
                                                                        Canadian
                                                                    </option>
                                                                    <option
                                                                        value="pakistani"
                                                                    >
                                                                        Pakistani
                                                                    </option>
                                                                </select>
                                                                <div
                                                                    class="wizard-form-error"
                                                                ></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6 mb-40">
                                                        <input
                                                            type="tel"
                                                            class="form-control wizard-required"
                                                            id="phone"
                                                            name="phone"
                                                            placeholder="Your Number"
                                                        />
                                                        <div
                                                            class="wizard-form-error"
                                                        ></div>
                                                    </div>
                                                    <div class="col-sm-6 mb-40">
                                                        <div
                                                            class="input-date-picker"
                                                        >
                                                            <input
                                                                type="text"
                                                                class="sel-input date_from form-control wizard-required"
                                                                id="flightDep"
                                                                placeholder="Date of Birth"
                                                            />
                                                            <div
                                                                class="wizard-form-error"
                                                            ></div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="col-sm-6 mb-sm-0 mb-40"
                                                    >
                                                        <input
                                                            type="number"
                                                            class="form-control wizard-required"
                                                            id="post_code"
                                                            name="code"
                                                            placeholder="Postal Code"
                                                        />
                                                        <div
                                                            class="wizard-form-error"
                                                        ></div>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <input
                                                            type="number"
                                                            class="form-control wizard-required"
                                                            id="f_number"
                                                            name="f_number"
                                                            placeholder="Flight Number"
                                                        />
                                                        <div
                                                            class="wizard-form-error"
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="detail-form term_conditions mb-32"
                                            >
                                                <h4 class="black p-0 mb-8">
                                                    Save your details!
                                                </h4>
                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <p
                                                            class="dark-gray mb-24 fw-400"
                                                        >
                                                            Use your contact
                                                            details to create an
                                                            account and speed up
                                                            future bookings.(We
                                                            won't save your
                                                            payment
                                                            information.)
                                                        </p>
                                                        <div
                                                            class="filter-checkbox mb-24"
                                                        >
                                                            <input
                                                                type="checkbox"
                                                                id="save"
                                                                class="wizard-required"
                                                            />
                                                            <label
                                                                for="save"
                                                                class="dark-gray fw-400"
                                                                >Save my detail
                                                                so i can book
                                                                faster next
                                                                time.</label
                                                            >
                                                        </div>
                                                        <p
                                                            class="dark-gray fw-400"
                                                        >
                                                            By signing in or
                                                            creating an account,
                                                            you agree with our
                                                            <a
                                                                href="privacy-policy.html"
                                                                class="color-primary"
                                                            >
                                                                Terms &
                                                                conditions</a
                                                            >
                                                        </p>
                                                        <div
                                                            class="wizard-form-error"
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="detail-form extra-item p-24 mb-32"
                                            >
                                                <h4 class="black p-0 mb-24">
                                                    Extras
                                                </h4>
                                                <div class="col-sm-12 mb-24">
                                                    <div class="select-1">
                                                        <select
                                                            name="format"
                                                            id="format"
                                                            class="wizard-required"
                                                        >
                                                            <option
                                                                selected
                                                                disabled
                                                            >
                                                                Select Meal Type
                                                            </option>
                                                            <option
                                                                value="fast"
                                                            >
                                                                Fast Food
                                                            </option>
                                                            <option
                                                                value="vegetarian"
                                                            >
                                                                Vegetarian
                                                            </option>
                                                            <option value="non">
                                                                Non-Veg
                                                            </option>
                                                        </select>
                                                        <div
                                                            class="wizard-form-error"
                                                        ></div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-12">
                                                    <div class="select-2">
                                                        <select
                                                            name="format-2"
                                                            id="format-2"
                                                            class="wizard-required"
                                                        >
                                                            <option
                                                                selected
                                                                disabled
                                                            >
                                                                Request
                                                                Wheelchair
                                                            </option>
                                                            <option value="yes">
                                                                Yes
                                                            </option>
                                                            <option value="no">
                                                                No
                                                            </option>
                                                        </select>
                                                        <div
                                                            class="wizard-form-error"
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex gap-24">
                                            <a
                                                href="javascript:;"
                                                class="form-wizard-next-btn cus-btn w-100"
                                            >
                                                Next
                                            </a>
                                        </div>
                                    </fieldset>
                                    <fieldset
                                        id="step-3"
                                        class="tab-pane wizard-fieldset p-0"
                                    >
                                        <!-- <form action="flight-booking.html" method="post" class="contact-form"> -->
                                        <div class="detail-form mb-32">
                                            <h4 class="black p-0 mb-24">
                                                When would you like to pay?
                                            </h4>
                                            <div class="custom-control">
                                                <div class="radio-button mb-24">
                                                    <input
                                                        type="radio"
                                                        name="payment"
                                                        class="custom-control-input input-control"
                                                        id="later"
                                                    />
                                                    <!-- <div class="wizard-form-error"></div> -->
                                                    <label
                                                        class="custom-control-label paynow color-black"
                                                        for="later"
                                                        >Pay Later</label
                                                    >
                                                    <p class="dark-gray pl-36">
                                                        Lorem ipsum dolor sit
                                                        amet consectetur. Orci
                                                        elementum egestas
                                                        blandit a. Elementum
                                                        blandit sit egestas
                                                        urna.
                                                    </p>
                                                </div>
                                                <div class="radio-button">
                                                    <input
                                                        type="radio"
                                                        name="payment"
                                                        class="custom-control-input input-control"
                                                        id="now"
                                                    />
                                                    <!-- <div class="wizard-form-error"></div> -->
                                                    <label
                                                        class="custom-control-label paynow color-black"
                                                        for="now"
                                                        >Pay Now</label
                                                    >
                                                    <p class="dark-gray pl-36">
                                                        Lorem ipsum dolor sit
                                                        amet consectetur. Orci
                                                        elementum egestas
                                                        blandit a. Elementum
                                                        blandit sit egestas
                                                        urna.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="detail-form v-2">
                                            <h4 class="black p-0 mb-24">
                                                How would you like to pay?
                                            </h4>
                                            <div class="content-block mb-32">
                                                <div
                                                    class="radio-tile-group sidebar d-block"
                                                >
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <div
                                                                class="input-container"
                                                            >
                                                                <input
                                                                    id="payment"
                                                                    class="radio-button wizard-required"
                                                                    type="radio"
                                                                    name="radio"
                                                                    value="payment"
                                                                />
                                                                <div
                                                                    class="wizard-form-error"
                                                                ></div>
                                                                <div
                                                                    class="radio-tile wizard-page"
                                                                >
                                                                    <label
                                                                        for="payment"
                                                                        class="radio-tile-label wizard-label"
                                                                        ><i
                                                                            class="fal fa-credit-card-front"
                                                                        ></i
                                                                        >&nbsp;&nbsp;New
                                                                        Card</label
                                                                    >
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <div
                                                                class="input-container"
                                                            >
                                                                <input
                                                                    id="g-pay"
                                                                    class="radio-button wizard-required"
                                                                    type="radio"
                                                                    name="radio"
                                                                    value="g-pay"
                                                                />
                                                                <div
                                                                    class="wizard-form-error"
                                                                ></div>
                                                                <div
                                                                    class="radio-tile wizard-page"
                                                                >
                                                                    <label
                                                                        for="g-pay"
                                                                        class="radio-tile-label wizard-label"
                                                                        ><img
                                                                            src="../src/moban7664/static/picture/google.png"
                                                                            alt=""
                                                                        />&nbsp;&nbsp;Google
                                                                        Pay</label
                                                                    >
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h4 class="black p-0 mb-24">
                                                Account Holder Details
                                            </h4>
                                            <div class="row">
                                                <div class="col-sm-6 mb-24">
                                                    <input
                                                        type="text"
                                                        class="form-control wizard-required"
                                                        name="name"
                                                        id="holder-name"
                                                        placeholder="Card Holder's Name"
                                                    />
                                                    <div
                                                        class="wizard-form-error"
                                                    ></div>
                                                </div>
                                                <div class="col-sm-6 mb-24">
                                                    <input
                                                        type="text"
                                                        class="form-control wizard-required"
                                                        name="number"
                                                        id="card-name"
                                                        placeholder="Card Number"
                                                    />
                                                    <div
                                                        class="wizard-form-error"
                                                    ></div>
                                                </div>
                                                <div class="col-sm-6 mb-24">
                                                    <!-- <input type="text" class="form-control " name="date" id="exp-date" placeholder="Expiry Date"> -->
                                                    <div
                                                        class="wizard-form-error"
                                                    ></div>
                                                    <div
                                                        class="input-date-picker"
                                                    >
                                                        <input
                                                            type="text"
                                                            class="sel-input date_from form-control wizard-required"
                                                            name="date"
                                                            id="exp-date"
                                                            placeholder="Expiry Date"
                                                        />
                                                        <div
                                                            class="wizard-form-error"
                                                        ></div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6 mb-24">
                                                    <input
                                                        type="text"
                                                        class="form-control wizard-required"
                                                        name="cvc"
                                                        id="cVc"
                                                        placeholder="CVC"
                                                    />
                                                    <div
                                                        class="wizard-form-error"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- </form> -->
                                        <div class="d-flex gap-24 mt-24">
                                            <a
                                                href="javascript:;"
                                                class="form-wizard-previous-btn cus-btn btn-sec w-100"
                                            >
                                                Back
                                            </a>
                                            <a
                                                href=""
                                                class="form-wizard-next-btn cus-btn w-100"
                                            >
                                                Submit
                                            </a>
                                        </div>
                                    </fieldset>
                                </div>
                                <!-- <h6><a href="#step-2" class="cus-btn float-end btn"><span class="icon"><img src="assets/media/icons/orange-cart.png" alt=""></span>Continue</a></h6> -->
                                <!-- <div class="sw-toolbar-elm toolbar toolbar-bottom" role="toolbar">
                                    <button class="btn sw-btn-prev sw-btn" type="button">Continue</button>
                                    <button class="btn sw-btn-next sw-btn" type="button">Continue</button>
                                </div> -->
                            </form>
                        </div>
                    </div>
                    <div class="col-xl-4 mb-lg-0 mb-32">
                        <div class="flight-booking-detail light-shadow mb-32">
                            <div class="flight-title">
                                <h4 class="color-white">Your Booking Detail</h4>
                            </div>
                            <div class="box bg-white p-24">
                                <div class="flight-detail mb-32">
                                    <div class="flight-departure">
                                        <h5 class="color-black">12:00</h5>
                                        <h5 class="dark-gray text-end">DUB</h5>
                                    </div>
                                    <div
                                        class="d-inline-flex align-items-center gap-8"
                                    >
                                        <span class="">From</span>
                                        <div class="from-to text-center">
                                            <h5 class="dark-gray">0h 50m</h5>
                                            <img
                                                src="../src/moban7664/static/picture/route-plan.png"
                                                alt=""
                                            />
                                            <h6 class="color-black">1 Stop</h6>
                                        </div>
                                        <span class="">To</span>
                                    </div>
                                    <div class="flight-departure">
                                        <h5 class="color-black">12:50</h5>
                                        <h5 class="dark-gray">SHJ</h5>
                                    </div>
                                </div>
                                <div
                                    class="d-flex justify-content-around mb-32"
                                >
                                    <div class="flight-departure">
                                        <h6 class="dark-gray">Departure</h6>
                                        <h5 class="color-black">
                                            14 Aug, 2023
                                        </h5>
                                    </div>
                                    <div class="vr-line"></div>
                                    <div class="flight-departure">
                                        <h6 class="dark-gray">Arrival</h6>
                                        <h5 class="color-black">
                                            14 Aug, 2023
                                        </h5>
                                    </div>
                                </div>
                                <hr class="bg-medium-gray mb-32" />
                                <div class="text">
                                    <h6 class="color-medium-gray">Tpm Line</h6>
                                    <h6 class="color-medium-gray">
                                        Operated by Feel Dubai Airlines
                                    </h6>
                                    <h6 class="color-medium-gray">
                                        Economy | Flight FK234 | Aircraft BOEING
                                        777-90
                                    </h6>
                                    <h6 class="color-medium-gray">
                                        Adult(s): 25KG luggage free
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="flight-booking-detail light-shadow">
                            <div class="flight-title">
                                <h4 class="color-white">Price Summary</h4>
                            </div>
                            <div class="box bg-white p-24">
                                <div
                                    class="d-flex align-items-center justify-content-between mb-24"
                                >
                                    <div>
                                        <h5 class="color-black">Adult x 1</h5>
                                        <p class="dark-gray">
                                            Lorem ipsum dolor sit amet
                                            consectetur.
                                        </p>
                                    </div>
                                    <h5 class="color-black">$540</h5>
                                </div>
                                <div
                                    class="d-flex align-items-center justify-content-between mb-24"
                                >
                                    <div>
                                        <h5 class="color-black">
                                            Room Service
                                        </h5>
                                        <p class="dark-gray">
                                            Lorem ipsum dolor sit amet
                                            consectetur.
                                        </p>
                                    </div>
                                    <h5 class="color-black">$50</h5>
                                </div>
                                <div
                                    class="d-flex align-items-center justify-content-between mb-24"
                                >
                                    <div>
                                        <h5 class="color-black">Gym Fee</h5>
                                        <p class="dark-gray">
                                            Lorem ipsum dolor sit amet
                                            consectetur.
                                        </p>
                                    </div>
                                    <h5 class="color-black">$30</h5>
                                </div>
                                <div
                                    class="d-flex align-items-center justify-content-between mb-24"
                                >
                                    <div>
                                        <h5 class="color-black">
                                            Service Charges
                                        </h5>
                                        <p class="dark-gray">
                                            Lorem ipsum dolor sit amet
                                            consectetur.
                                        </p>
                                    </div>
                                    <h5 class="color-black">$20</h5>
                                </div>
                                <div
                                    class="d-flex align-items-center justify-content-between mb-24"
                                >
                                    <div>
                                        <h5 class="color-black">Sub Total</h5>
                                        <p class="dark-gray">
                                            Lorem ipsum dolor sit amet
                                            consectetur.
                                        </p>
                                    </div>
                                    <h5 class="color-black">$640</h5>
                                </div>
                                <hr class="bg-medium-gray mb-24" />
                                <div
                                    class="d-flex align-items-center justify-content-between mb-24"
                                >
                                    <div>
                                        <h4 class="color-black">
                                            Deal / Discount
                                        </h4>
                                    </div>
                                    <h4 class="color-black">$40</h4>
                                </div>
                                <div
                                    class="d-flex align-items-center justify-content-between"
                                >
                                    <div>
                                        <h4 class="color-black">Total</h4>
                                    </div>
                                    <h4 class="color-black">$600</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Flight-Booking End -->
    </div>
    <!-- Main Content End -->
</template>
<script setup></script>
