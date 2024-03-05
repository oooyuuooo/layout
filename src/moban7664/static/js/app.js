// Template Name: FlyNow
// Template URL: https://techpedia.co.uk/template/flyNow
// Description: FlyNow - Flight Booking Html Template
// Version: 1.0.0

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  var Init = {
    _window: window,
    _document: document,
    _body: document.body,
    _html: document.documentElement,

    i: function (e) {
      Init.s();
      Init.methods();
    },

    s: function () {
      this._window = window;
      this._document = document;
      this._body = document.body;
      this._html = document.documentElement;
    },
    
    methods: function () {
      Init.w();
      Init.BackToTop();
      Init.preloader();
      Init.hamburgerMenu();
      Init.tilt();
      Init.availableTags();
      Init.header();
      Init.searchToggle();
      Init.billingAddress();
      Init.quantityHandle();
      Init.passengerBox();
      Init.roomBox();
      Init.achivementCountdown();
      Init.counterActivate();
      Init.timepicker();
      Init.filterToggle();
      // Init.redirectNextPage();
      Init.wizardInit();
      Init.initializeSlick();
      Init.formValidation();
      Init.contactForm();
      Init.jsSlider();
      Init.videoPlay();
      // Init.wizardStepValidator();
      Init.VideoPlayer();
      Init.salInit();
      // Init.backToLogin();
    },

    w: function () {
      this._window.addEventListener("load", Init.l);
      this._window.addEventListener("scroll", Init.res);
    },
    

    // Back To Top
    BackToTop: function () {
      var btn = document.getElementById("backto-top");
      if (btn) {
        this._window.addEventListener("scroll", function () {
          if (window.pageYOffset > 300) {
            btn.classList.add("show");
          } else {
            btn.classList.remove("show");
          }
        });
    
        btn.addEventListener("click", function (e) {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        });
      }
    },

    // Preloader
    preloader: function () {
      setTimeout(function () {
        $("#preloader").hide("slow");
      }, 2000);
    },

    // Ham Burger Menu
    hamburgerMenu: function () {
      if (document.querySelectorAll(".hamburger-menu").length) {
        document.querySelectorAll(".hamburger-menu").forEach(function (menu) {
          menu.addEventListener("click", function () {
            document.querySelectorAll(".bar").forEach(function (bar) {
              bar.classList.toggle("animate");
            });
            document.querySelector(".mobile-navar").classList.toggle("active");
          });
        });

        document.querySelectorAll(".has-children").forEach(function (child) {
          child.addEventListener("click", function () {
            child.children[0].nextElementSibling.style.transition = "all 0.5s ease";
            child.children[0].nextElementSibling.classList.toggle("open");
            child.children[1].classList.toggle("open");
          });
        });
      }
    },

    // Tilt
    tilt: function () {
      let educateTiltElm = $(".flynow-tilt");
      if (educateTiltElm.length) {
        educateTiltElm.each(function () {
          let self = $(this);
          let options = self.data("tilt-options");
          let educateTilt = self.tilt(
            "object" === typeof options ? options : JSON.parse(options)
          );
        });
      }
    },

    // Header
    header: function () {
      function dynamicCurrentMenuClass(selector) {
        let FileName = window.location.href.split("/").reverse()[0];

        selector.find("li").each(function () {
          let anchor = $(this).find("a");
          if ($(anchor).attr("href") == FileName) {
            $(this).addClass("current");
          }
        });
        selector.children("li").each(function () {
          if ($(this).find(".current").length) {
            $(this).addClass("current");
          }
        });
        if ("" == FileName) {
          selector.find("li").eq(0).addClass("current");
        }
      }

      if ($(".main-menu__list").length) {
        let mainNavUL = $(".main-menu__list");
        dynamicCurrentMenuClass(mainNavUL);
      }

      if ($(".main-menu__nav").length && $(".mobile-nav__container").length) {
        let navContent = document.querySelector(".main-menu__nav").innerHTML;
        let mobileNavContainer = document.querySelector(".mobile-nav__container");
        mobileNavContainer.innerHTML = navContent;
      }
      if ($(".sticky-header__content").length) {
        let navContent = document.querySelector(".main-menu").innerHTML;
        let mobileNavContainer = document.querySelector(".sticky-header__content");
        mobileNavContainer.innerHTML = navContent;
      }

      if ($(".mobile-nav__container .main-menu__list").length) {
        let dropdownAnchor = $(
          ".mobile-nav__container .main-menu__list .dropdown > a"
        );
        dropdownAnchor.each(function () {
          let self = $(this);
          let toggleBtn = document.createElement("BUTTON");
          toggleBtn.setAttribute("aria-label", "dropdown toggler");
          toggleBtn.innerHTML = "<i class='fa-solid fa-angle-down'></i>";
          self.append(function () {
            return toggleBtn;
          });
          self.find("button").on("click", function (e) {
            e.preventDefault();
            let self = $(this);
            self.toggleClass("expanded");
            self.parent().toggleClass("expanded");
            self.parent().parent().children("ul").slideToggle();
          });
        });
      }

      if ($(".mobile-nav__toggler").length) {
        $(".mobile-nav__toggler").on("click", function (e) {
          e.preventDefault();
          $(".mobile-nav__wrapper").toggleClass("expanded");
          $("body").toggleClass("locked");
        });
      }

      $(window).on("scroll", function () {
        if ($(".stricked-menu").length) {
          var headerScrollPos = 130;
          var stricky = $(".stricked-menu");
          if ($(window).scrollTop() > headerScrollPos) {
            stricky.addClass("stricky-fixed");
          } else if ($(this).scrollTop() <= headerScrollPos) {
            stricky.removeClass("stricky-fixed");
          }
        }
      });
    },
  
    // Search Toggle
    searchToggle: function () {
      if ($(".search-toggler").length) {
        $(".search-toggler").on("click", function (e) {
          e.preventDefault();
          $(".search-popup").toggleClass("active");
          $(".mobile-nav__wrapper").removeClass("expanded");
          $("body").toggleClass("locked");
        });
      }
    },

    billingAddress: function () {
      if (document.querySelectorAll(".input-control").length) {
        document.querySelectorAll(".input-control").forEach(function (inputControl) {
          inputControl.addEventListener("change", function () {
            if (inputControl.checked) {
              document.querySelector(".v-2").style.display = "none";
            } else {
              document.querySelector(".v-2").style.display = "block";
            }
          });
        });
      }
    },

    passengerBox: function () {
      if($('.pessenger-box').length){
      var $div = $('.pessenger-box');

  
      $(document).on('click', function(event) {
        var isClickInsideDiv = $div.is(event.target) || $div.has(event.target).length > 0;
        var isClickInsideButton = $(event.target).is('.seat-booking');
  
        if (!isClickInsideDiv && !isClickInsideButton) {
          $div.hide('slow');
        }
      });

        $('.seat-booking').on('click',function(){
          $('.pessenger-box').show('slow');
        })

        $('.increment').on('click',function(){
          var adult = +$('#adult').val();
          var child = +$('#child').val();
          var infant = +$('#infant').val();
          
          var total = adult+child+infant;

          $('.total-pasenger').text(total)
        })
        $('.decrement').on('click',function(){
          var adult = +$('#adult').val();
          var child = +$('#child').val();
          var infant = +$('#infant').val();
          
          var total = adult+child+infant;

          $('.total-pasenger').text(total)
        })
        $('.radio-button').on('click',function(){
          var $this = $(this).val();
          $('.pasenger-class').text($this);
        })
      }

    },

    roomBox: function () {
      var $div = $('.room-box');

  
      // Event listener to hide the div when clicking outside it
      $(document).on('click', function(event) {
        var isClickInsideDiv = $div.is(event.target) || $div.has(event.target).length > 0;
        var isClickInsideButton = $(event.target).is('.room-booking');
  
        if (!isClickInsideDiv && !isClickInsideButton) {
          $div.hide('slow');
        }
      });
      if($('.room-box').length){
        $('.room-booking').on('click',function(){
          $('.room-box').show('slow');
        })
        $('.increment').on('click',function(){
          var adult = +$('#adult').val();
          var child = +$('#child').val();
          var infant = +$('#infant').val();
          
          var total = adult+child+infant;

          $('.total-pasenger').text(total)
        })
        $('.decrement').on('click',function(){
          var adult = +$('#adult').val();
          var child = +$('#child').val();
          var infant = +$('#infant').val();
          
          var total = adult+child+infant;

          $('.total-pasenger').text(total)
        })
        $('.radio-button').on('click',function(){
          var $this = $(this).val();
          $('.pasenger-class').text($this);
        })
      }

    },

    jsSlider: function () {
      if ($(".js-slider").length) {
        $(".js-slider").ionRangeSlider({
          skin: "big",
          type: "double",
          grid: false,
          min: 0,
          max: 999,
          from: 0,
          to: 999,
          // postfix: '$',
          hide_min_max: true,
          hide_from_to: true,
        });
      }
    },

    quantityHandle: function () {
      $(".decrement").on("click", function () {
        var qtyInput = $(this).closest(".quantity-wrap").children(".number");
        var qtyVal = parseInt(qtyInput.val());
        if (qtyVal > 0) {
          qtyInput.val(qtyVal - 1);
        }
      });
      $(".increment").on("click", function () {
        var qtyInput = $(this).closest(".quantity-wrap").children(".number");
        var qtyVal = parseInt(qtyInput.val());
        qtyInput.val(parseInt(qtyVal + 1));
      });
    },

    initializeSlick: function (e) {
      if ($(".flight-card-slider").length) {
        $(".flight-card-slider").slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          autoplaySpeed: 4000,
          arrows: true,
          dots: false,
          autoplay: true,
          centerPadding: "0",
          cssEase: "linear",
          responsive: [
            {
              breakpoint: 1599,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 1099,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 675,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 399,
              settings: {
                arrows: false,
                slidesToShow: 1,
              },
            },
          ],
        });
      }
      if ($(".hotel-image-slider").length) {
        $(".hotel-image-slider").slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          autoplay: true,
          autoplaySpeed: 4000,
          responsive: [
            
          ],
        });
      }
      if ($(".testimonial-slider").length) {
        $(".testimonial-slider").slick({
          infinite: true,
          autoplay: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          autoplaySpeed: 4000,
          responsive: [
            {
              breakpoint: 767,
              settings: {
                arrows: false,
                slidesToShow: 1,
              },
            },
          ],
        });
      }
    },

    wizardInit: function () {
      if (document.getElementById("form-wizard")) {
        // Uncomment the line below if you have a wizard library like 'smartWizard' integrated.
        // document.getElementById("form-wizard").smartWizard();
      }
    },

    salInit: function () {
      sal({
        threshold: 0.1,
        once: true,
      });
    },

    counterActivate:function() {
      $(".counter-count .count").each(function () {
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: $(this).text()
            },
            {
              duration: 2000,
              easing: "swing",
              step: function (now) {
                $(this).text(Math.ceil(now), 3);
              }
            }
          );
      });
    },

    animateCounter: function (counter) {
      counter.Counter = 0;
      var duration = 2000;
      var start = performance.now();

      function step(timestamp) {
        var progress = timestamp - start;
        counter.innerHTML = Math.ceil(progress / duration * counter.Counter);

        if (progress < duration) {
          requestAnimationFrame(step);
        }
      }

      requestAnimationFrame(step);
    },

    

    achivementCountdown:function() {
      var section = document.querySelector(".counter-section");
      var hasEntered = false;
      if (!section) return;
  
      var initAnimate = window.scrollY + window.innerHeight >= section.offsetTop;
      if (initAnimate && !hasEntered) {
        hasEntered = true;
        this.counterActivate();
      }
  
      window.addEventListener("scroll", (e) => {
        var shouldAnimate =
          window.scrollY + window.innerHeight >= section.offsetTop;
  
        if (shouldAnimate && !hasEntered) {
          hasEntered = true;
          this.counterActivate();
        }
      });
    },

    animateNumbers: function () {
      var numbers = document.querySelectorAll(".counter-box .number");
      numbers.forEach(function (number) {
        var start = 0;
        var end = parseInt(number.dataset.maxValue);
        var duration = 2000;
        var range = end - start;
        var current = start;
        var stepTime = Math.abs(Math.floor(duration / range));
        var increment = end > start ? 1 : -1;

        var timer = setInterval(function () {
          current += increment;
          number.textContent = current;
          if (current == end) {
            clearInterval(timer);
          }
        }, stepTime);
      });
    },

    availableTags: function(){
      if($('.slector-wrapper').length){
        var availableTags = [
          "New York City",
          "Los Angeles",
          "Toronto ",
          "Paris",
          "London ",
          "Rome ",
          "Berlin",
          "Tokyo ",
          "Beijing ",
          "Mumbai ",
          "Dubai ",
          "Rio de Janeiro",
          "Sydney",
          "Melbourne",
          "Karachi ",
          "Lahore",
          "Islamabad",
          "Brisbane",
          "Cape Town ",
          "Marrakech ",
          "Delhi ",
          "Sharjah"
        ];
        $( ".auto-input" ).autocomplete({
          source: availableTags
        });
      }
      if($('.slector-wrapper').length){
        var availableTags = [
          "The Ritz-Carlton, Paris",
          "Burj Al Arab Jumeirah",
          "The Plaza Hotel ",
          "The Savoy",
          "Hotel de Glace ",
          "Marina Bay Sands ",
          "Atlantis The Palm",
          "The Waldorf Astoria ",
          "The Peninsula ",
          "Four Seasons Hotel George V  ",
          "Mandarin Oriental ",
          "Emirates Palace",
          "Hotel del Coronado",
          "The Beverly Hills Hotel",
          "Adlon Kempinski ",
          "The Langham",
          "The Shard - Shangri-La ",
          "The Breakers",
          "The Burj Khalifa - Armani Hotel ",
          "Hotel Okura ",
        ];
        $( ".auto-input-hotel" ).autocomplete({
          source: availableTags
        });
      }
      if($('.slector-wrapper').length){
        var availableTags = [
          "Beverly Hills - Los Angeles, USA",
          "Notting Hill - London, UK",
          "Harlem - New York City, USA ",
          "Shibuya - Tokyo, Japan",
          "Montmartre - Paris, France ",
          "Copacabana - Rio de Janeiro, Brazil",
          "Sydney's Rocks - Sydney, Australia",
          "Manhattan - New York City, USA",
          "Pudong - Shanghai, China",
          "Santa Monica - Los Angeles, USA",
          "Gion - Kyoto, Japan ",
          "Venice Beach - Los Angeles, USA",
          "The Rocks - Sydney, Australia",
          "Greenwich Village - New York City, USA",
          "Old Montreal - Montreal, Canada",
        ];
        $( ".auto-input-location" ).autocomplete({
          source: availableTags
        });
      }
      if($('.slector-wrapper').length){
        var availableTags = [
          "USD - $",
          "Euro - €",
          "Pound Sterling - £ ",
          "Yen - ¥",
          "Franc - ₣ ",
          "Dinar - د. ك",
          "Dirham Symbol - د. إ",
          "Rupee Symbol - ₹",
        ];
        $( ".auto-input-currency" ).autocomplete({
          source: availableTags
        });
      }
    },

    timepicker:function(){
      $(document).ready(function () {
        $('.timepicker').timepicker({
            timeFormat: 'h:mm p',
            interval: 60,
            minTime: '10',
            maxTime: '6:00pm',
            defaultTime: '11',
            startTime: '10:00',
            dynamic: false,
            dropdown: true,
            scrollbar: false
        });
    });

    },

    filterToggle: function () {
      if (document.querySelector(".filter-toggler")) {
        document.querySelector(".filter-toggler").addEventListener("click", function () {
          document.querySelector(".filter-sidebar").classList.toggle("active");
        });
      }

      if (document.querySelector(".filter-close")) {
        document.querySelector(".filter-close").addEventListener("click", function () {
          document.querySelector(".filter-sidebar").classList.remove("active");
        });
      }
    },

    redirectNextPage: function () {
      if (document.querySelector(".redirect-trigger")) {
        document.querySelector(".redirect-trigger").addEventListener("click", function () {
          window.location.href = "your-next-page.html";
        });
      }
    },

    formValidation: function () {
      if (document.getElementById("contact-form")) {
        var form = document.getElementById("contact-form");
        var validator = new FormValidator("contact-form", [
          {
            name: "name",
            rules: "required",
          },
          {
            name: "email",
            rules: "required|valid_email",
          },
          {
            name: "subject",
            rules: "required",
          },
          {
            name: "message",
            rules: "required",
          },
        ]);
        form.addEventListener("submit", function (e) {
          var validation = validator.checkData(e);
          if (validation) {
            // Form submission logic here
            e.preventDefault();
          }
        });
      }
    },

    contactForm: function () {
      if (document.getElementById("contact-form")) {
        var form = document.getElementById("contact-form");
        var validator = new FormValidator("contact-form", [
          {
            name: "name",
            rules: "required",
          },
          {
            name: "email",
            rules: "required|valid_email",
          },
          {
            name: "subject",
            rules: "required",
          },
          {
            name: "message",
            rules: "required",
          },
        ]);
        form.addEventListener("submit", function (e) {
          var validation = validator.checkData(e);
          if (validation) {
            // Form submission logic here
            e.preventDefault();
          }
        });
      }
    },
    videoPlay:function(){
      $('#videoModal').on('hidden.bs.modal', function () {
        $('#videoModal video').get(0).pause();
      });
      $("#closeVideoModalButton").click(function() {
        $("#videoModal").modal("hide");
      });
    },
    VideoPlayer: function () {
      if (document.getElementById("background-video")) {
        var player = new Plyr("#background-video", {
          quality: {
            default: 576,
            options: [432, 576, 720, 1080],
          },
        });
      }

      if (document.getElementById("background-video-2")) {
        var player = new Plyr("#background-video-2", {
          quality: {
            default: 576,
            options: [432, 576, 720, 1080],
          },
        });
      }
    },
  };

  Init.i();
});

