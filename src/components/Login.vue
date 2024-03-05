<template>
<div class="o-scroll" id="js-scroll">
    <!-- Back To Top Start -->
    <a href="#main-wrapper" id="backto-top" class="back-to-top"><i class="fas fa-angle-up"></i></a>
    <!-- Main Wrapper Start -->
    <div id="main-wrapper" class="main-wrapper overflow-hidden">

        <!-- Main Content Start -->
        <div class="page-content m-0">

        <!-- Signup Form Start -->
        <section class="signup bg-white">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-4 col-lg-6 col-md-7 mb-lg-0 mb-48">
                    <div class="form-block">
                        <a href="/Index" class="color-primary h6 mb-30"><i class="fa-solid fa-circle-left"></i>&nbsp;&nbsp;回主頁面</a>
                        <h2 class="mb-30 light-black">會員登入</h2>
                            <div class="google mb-24">
                                <h6 class="color-white"><a href="" class="link-btn mb-24 mb-sm-0"> 使用 Google 登入&nbsp;<img src="../moban7664/static/picture/google-icon.png" alt=""></a></h6>
                            </div>
                            <div class="facebook mb-30">
                                <h6 class="color-white"><a href="" class="link-btn"> 使用 Facebook 登入&nbsp;<img src="../moban7664/static/picture/facebook-icon.png" alt=""></a></h6>
                            </div>
                        <h5 class="or mb-8">或</h5>
                        <h6 class="mb-24 text-center">使用 Email 登入</h6>
                        <form method="post" action="login.html" class="form-group contact-form">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="mb-24">
                                        <input type="email" class="form-control" id="signup-mail" name="email" required="" placeholder="電子郵件">
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="mb-24">
                                        <input type="password" class="form-control" id="create-password" name="password" required="" placeholder="密碼">
                                    </div>
                                </div>
                                <div class="d-flex justify-content-end">
                                    <button type="submit" class="cus-btn small-pad mb-24">登入</button>
                                    <!-- Alert Message -->
                                    <div id="message" class="alert-msg"></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
        </section>
        <!-- Signup Form End -->

        </div>
        <!-- Main Content End -->
        
    </div>


    <!-- Mobile Menu Start -->
    <div class="mobile-nav__wrapper">
        <div class="mobile-nav__overlay mobile-nav__toggler"></div>
        <div class="mobile-nav__content">
            <span class="mobile-nav__close mobile-nav__toggler"></span>
            <div class="logo-box">
                <a href="/Index" aria-label="logo image"><img src="../moban7664/static/picture/logo.png" alt="" class="invisible"></a>
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
</div>
    <!-- Mobile Menu End -->
</template>
<script setup>

</script>