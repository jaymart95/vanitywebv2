// tippy.js
tippy("[data-tippy-content]");

// aos.js
AOS.init({
  duration: 700,
  once: true
});

// navbar burger
document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});

$(document).ready(function() {
  $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
  });
});

// navbar on scroll
$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 700) {
      $("nav").addClass("nav-w");
      $(".navbar-menu").addClass("nav-w");
      $(".navbar-item").addClass("nav-dark");
      $(".navbar-link").addClass("nav-dark");
      $(".navbar-burger").removeClass("has-text-white");
      $(".navbar-burger").addClass("has-text-dark");
    } else {
      $("nav").removeClass("nav-w");
      $(".navbar-menu").removeClass("nav-w");
      $(".navbar-item").removeClass("nav-dark");
      $(".navbar-link").removeClass("nav-dark");
      $(".navbar-burger").removeClass("has-text-dark");
      $(".navbar-burger").addClass("has-text-white");
    }
  });
});

// back to top
var btn = $("#backtotop");

$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// copyright year
document.getElementById("cp-year").innerHTML = new Date().getFullYear();

// Premium page functions
function showPopup(plan) {
  document.getElementById("popup").style.display = "block";
  // Store the selected plan
  document.getElementById("popup").setAttribute("data-plan", plan);
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function checkForm() {
  const option1 = document.getElementById("option1").checked;
  const option2 = document.getElementById("option2").checked;
  const guildID = document.getElementById("guildID").value.trim();
  const purchaseButton = document.getElementById("purchaseButton");
  
  if (option1 && option2 && guildID) {
    purchaseButton.disabled = false;
  } else {
    purchaseButton.disabled = true;
  }
}

function submitForm() {
  const plan = document.getElementById("popup").getAttribute("data-plan");
  const guildID = document.getElementById("guildID").value;
  const token = document.getElementById("token").value;
  
  // Here you would typically make an API call to process the purchase
  alert(`Processing ${plan} plan purchase for server ID: ${guildID}`);
  closePopup();
}
