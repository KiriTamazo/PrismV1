AOS.init({
  offset: 100,
  easing: "linear",
  delay: 80,
  disable: "mobile",
});

$("#responsiveTabs").responsiveTabs({
  animation: "slide",
  startCollapsed: "tabs",
});
$("#responsiveTabsPricing").responsiveTabs({
  animation: "slide",
  startCollapsed: "tabs",
});

$(".slick-items").slick({
  dots: true,
  arrows: false,
  infinite: true,
  // centerMode: true,
  autoplay: true,
  speed: 300,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 3,
  adaptiveHeight: false,
  centerPadding: "0px",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// Get Date
let copy = document.getElementsByClassName("copy-right-text");
let currentDate = new Date();
let year = currentDate.getFullYear();
copy[0].innerHTML = `© Copy Right ${year} By LWHA - All Right Reserved`;

// Navbar
let screenHeight = $(window).height();
$(window).scroll(function () {
  let currentHeight = $(this).scrollTop();
  if (currentHeight >= screenHeight) {
    $(".navbar").addClass("scroll");
    $(".top").removeClass("hide");
  } else {
    $(".navbar").removeClass("scroll");
    $(".top").addClass("hide");
  }
});
// Fa-bar/X
console.log(screenHeight);
$(".navbar-toggler").click(function () {
  if ($(".navbar-toggler").attr("aria-expanded") === "true") {
    $(".nav-icon").addClass("fa-xmark");
  } else {
    $(".nav-icon").addClass("fa-bars");
  }
});

//Nav click Toggle Active Class
$(".nav-item-bar").click(function (e) {
  $(".nav-item-bar").removeClass("active");

  var $this = $(this);
  if (!$this.hasClass("active")) {
    $this.addClass("active");
  }
  //e.preventDefault();
});
$(".tab-item-1").click(function (e) {
  let $this = $(this).hasClass("r-tabs-state-active");
  if ($this) {
    $(this).children().addClass("active-tab");
    $(this).siblings().children().removeClass("active-tab");
  }
});
$(".tab-item-2").click(function (e) {
  let $this = $(this).hasClass("r-tabs-state-active");
  if ($this) {
    $(this).children().addClass("active-tab");
    $(this).siblings().children().removeClass("active-tab");
  }
});
// Scroll to Toggle Active
function setActive(current) {
  console.log($(`.nav-link[href="#${current}"]`));
  $(`.nav-link[href="#${current}"]`)
    .parent()
    .addClass("active")
    .siblings()
    .removeClass("active");
}

function navScroll() {
  let currentSection = $("section[id]");
  currentSection.waypoint(
    function (direction) {
      if (direction == "down") {
        setActive($(this.element).attr("id"));
      }
    },
    { offset: "250px" }
  );
  currentSection.waypoint(
    function (direction) {
      if (direction == "up") {
        setActive($(this.element).attr("id"));
      }
    },
    { offset: "-50px" }
  );
}
navScroll();
let darkMode = "dark";
let sun = "fa-sun";
let moon = "fa-moon";
let selectedTheme = localStorage.getItem("currentTheme");
let selectedIcon = localStorage.getItem("currentIcon");

if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  $("body").addClass(selectedTheme);
  $("#darkMode").addClass(selectedIcon);
}
$(".switch-mode").click(function (e) {
  console.log("here");
  e.preventDefault();
  $("body").toggleClass(darkMode);
  // Dark/Light icon Switch
  $("body").hasClass(darkMode)
    ? $("#darkMode").addClass(sun)
    : $("#darkMode").addClass(moon);

  localStorage.setItem("currentTheme", getCurrentTheme());
  localStorage.setItem("currentIcon", getCurrentIcon());
});

function getCurrentTheme() {
  return $("body").hasClass(darkMode) ? "dark" : "light";
}
function getCurrentIcon() {
  return $("body").hasClass(darkMode) ? sun : moon;
}
