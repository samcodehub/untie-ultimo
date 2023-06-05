$(document).ready(function () {
  // Captura el clic en los enlaces del menú
  $(".nav-menu-b a, .nav-menu-a a").click(function (e) {
    e.preventDefault(); // Evita que se realice la acción predeterminada del enlace

    // Oculta el overlay
    $("#overlay").fadeOut();
    // Obtiene el destino del enlace
    var target = $(this).attr("href");

    // Desplaza la ventana hacia la sección correspondiente
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      1000,
      function () {
        // Restaura los estilos de la barra de navegación
        overlay.style.display = "none";
        toggleButton.classList.remove("newPosition");
        logo.classList.remove("logo-color-change");
        navBar.classList.remove("navbar-color-change");
        navBar.classList.remove("nav-hover-change");
        hamburguerButton.classList.remove("hamburger-button-color-change");
        languageButtonsContainer.classList.remove(
          "language-button-container-change"
        );
        languageSpanButton.classList.remove(
          "language-button-span-color-change"
        );
        languageButtons.forEach((button) =>
          button.classList.remove("language-button-color-change")
        );
        document.getElementById("logo1").style.animation =
          "slide1 1s ease-in-out forwards";
        document.getElementById("logo2").style.animation =
          "slide3 1s ease-in-out forwards";
      }
    );
  });
});

// language

function redirectToSpanishIndex() {
  window.location.href = "ES/index.html";
}

let languageEs = document.querySelector(".language-es");
languageEs.addEventListener("click", redirectToSpanishIndex);

//EN

function redirectToEnglishIndex() {
  window.location.href = "../index.html";
}

let languageEn = document.querySelector(".language-en");
languageEn.addEventListener("click", redirectToEnglishIndex);

// paralax main - page

window.addEventListener("scroll", function () {
  const mainTitle = document.querySelector(".main-tittle-container");
  const speed = mainTitle.getAttribute("data-speed");
  const y = (window.pageYOffset * speed) / 50;
  mainTitle.style.transform = `translate3d(0, ${y}px, 0)`;
});

window.addEventListener("scroll", function () {
  const textBar = document.querySelector(".textbar");
  const speed = textBar.getAttribute("data-speed");
  const y = (window.pageYOffset * speed) / 45;
  textBar.style.transform = `translate3d(0, ${y}px, 0)`;
});

// paralax second - section

const carouselContainer1 = document.querySelector(".carousel");
const secondSection = document.querySelector(".second-section");
const secondSectionOffsetTop = secondSection.offsetTop;
const secondSectionHeight = secondSection.offsetHeight;
const carouselContainerHeight = carouselContainer1.offsetHeight;

window.addEventListener("scroll", function () {
  const scrollPosition = window.pageYOffset + window.innerHeight;

  // Verificar si la parte inferior del selector es visible en la pantalla
  if (scrollPosition > secondSectionOffsetTop + secondSectionHeight) {
    const speed = carouselContainer1.getAttribute("data-speed");
    const y =
      ((scrollPosition - (secondSectionOffsetTop + secondSectionHeight)) *
        speed) /
      100;
    carouselContainer1.style.transform = `translate3d(0, ${y}px, 0)`;
  }
});

// paralax wwd - page

const container1 = document.querySelector(".container-1");
const container1Parallax = document.querySelector(".container-1-parallax");
const container1OffsetTop = container1.offsetTop;
const container1Height = container1.offsetHeight;

window.addEventListener("scroll", function () {
  // Verificar si la parte inferior del selector es visible en la pantalla
  if (
    window.pageYOffset + window.innerHeight >
    container1OffsetTop + container1Height
  ) {
    const speed = container1Parallax.getAttribute("data-speed");
    const y = ((window.pageYOffset - container1OffsetTop) * speed) / 80;
    container1Parallax.style.transform = `translate3d(0, ${y}px, 0)`;
  }
});

const container2 = document.querySelector(".container-2");
const container2Parallax = document.querySelector(".container-2-parallax");
const container2OffsetTop = container2.offsetTop;
const container2Height = container2.offsetHeight;

window.addEventListener("scroll", function () {
  // Verificar si la parte inferior del selector es visible en la pantalla
  if (
    window.pageYOffset + window.innerHeight >
    container2OffsetTop + container2Height
  ) {
    const speed = container2Parallax.getAttribute("data-speed");
    const y = ((window.pageYOffset - container2OffsetTop) * speed) / 80;
    container2Parallax.style.transform = `translate3d(0, ${y}px, 0)`;
  }
});

const container3 = document.querySelector(".container-3");
const container3Parallax = document.querySelector(".container-3-parallax");
const container3OffsetTop = container3.offsetTop;
const container3Height = container3.offsetHeight;

window.addEventListener("scroll", function () {
  // Verificar si la parte inferior del selector es visible en la pantalla
  if (
    window.pageYOffset + window.innerHeight >
    container3OffsetTop + container3Height
  ) {
    const speed = container3Parallax.getAttribute("data-speed");
    const y = ((window.pageYOffset - container3OffsetTop) * speed) / 80;
    container3Parallax.style.transform = `translate3d(0, ${y}px, 0)`;
  }
});
const container4 = document.querySelector(".container-4");
const container4Parallax = document.querySelector(".container-4-parallax");
const container4OffsetTop = container4.offsetTop;
const container4Height = container4.offsetHeight;
window.addEventListener("scroll", function () {
  // Verificar si la parte inferior del selector es visible en la pantalla
  if (
    window.pageYOffset + window.innerHeight >
    container4OffsetTop + container4Height
  ) {
    const speed = container4Parallax.getAttribute("data-speed");
    const y = ((window.pageYOffset - container4OffsetTop) * speed) / 80;
    container4Parallax.style.transform = `translate3d(0, ${y}px, 0)`;
  }
});
const container5 = document.querySelector(".container-5");
const container5Parallax = document.querySelector(".container-5-parallax");
const container5OffsetTop = container5.offsetTop;
const container5Height = container5.offsetHeight;

window.addEventListener("scroll", function () {
  // Verificar si la parte inferior del selector es visible en la pantalla
  if (
    window.pageYOffset + window.innerHeight >
    container5OffsetTop + container5Height
  ) {
    const speed = container5Parallax.getAttribute("data-speed");
    const y = ((window.pageYOffset - container5OffsetTop) * speed) / 80;
    container5Parallax.style.transform = `translate3d(0, ${y}px, 0)`;
  }
});
const container6 = document.querySelector(".container-6");
const container6Parallax = document.querySelector(".container-6-parallax");
const container6OffsetTop = container6.offsetTop;
const container6Height = container6.offsetHeight;

window.addEventListener("scroll", function () {
  // Verificar si la parte inferior del selector es visible en la pantalla
  if (
    window.pageYOffset + window.innerHeight >
    container6OffsetTop + container6Height
  ) {
    const speed = container6Parallax.getAttribute("data-speed");
    const y = ((window.pageYOffset - container6OffsetTop) * speed) / 80;
    container6Parallax.style.transform = `translate3d(0, ${y}px, 0)`;
  }
});

// custom-mouse

document.addEventListener("mousemove", function (event) {
  var customMouse = document.getElementById("custom-mouse");

  // Verificar si el overlay está abierto
  var overlay = document.getElementById("overlay");
  if (overlay.style.display === "block") {
    // Reducir el tamaño del cursor cuando el overlay está abierto
    customMouse.style.width = "10px";
    customMouse.style.height = "10px";
  } else {
    // Restablecer el tamaño del cursor cuando el overlay está cerrado
    customMouse.style.width = "20px";
    customMouse.style.height = "20px";
  }

  var thirdSection = document.getElementById("third-section");
  var thirdSectionRect = thirdSection.getBoundingClientRect();
  var thirdSectionTop = thirdSectionRect.top;
  var thirdSectionBottom = thirdSectionRect.bottom;
  var thirdSectionLeft = thirdSectionRect.left;
  var thirdSectionRight = thirdSectionRect.right;

  if (overlay.style.display === "block") {
    // Estilos del cursor cuando el overlay está abierto
    customMouse.style.width = "15px";
    customMouse.style.height = "15px";
    customMouse.style.mixBlendMode = "exclusion";
  } else if (
    event.clientY >= thirdSectionTop &&
    event.clientY <= thirdSectionBottom &&
    event.clientX >= thirdSectionLeft &&
    event.clientX <= thirdSectionRight
  ) {
    // Estilos del cursor cuando está dentro de la sección "thirdSection"
    customMouse.style.width = "15px";
    customMouse.style.height = "15px";
    customMouse.style.backgroundColor = "red";
    customMouse.style.mixBlendMode = "normal";
  } else {
    // Estilos del cursor por defecto cuando está fuera de la sección "thirdSection"
    customMouse.style.width = "20px";
    customMouse.style.height = "20px";
    customMouse.style.backgroundColor = "";
    customMouse.style.mixBlendMode = "";
  }

  // Actualizar la posición del cursor
  customMouse.style.left = event.clientX - 10 + "px";
  customMouse.style.top = event.clientY - 10 + "px";
});

document.addEventListener("mousedown", function () {
  var customMouse = document.getElementById("custom-mouse");
  customMouse.style.backgroundColor = "white";
});

document.addEventListener("mouseup", function () {
  var customMouse = document.getElementById("custom-mouse");
  customMouse.style.backgroundColor = "white";
});

// custom-zoom

document.addEventListener("mouseover", function (event) {
  var target = event.target;
  if (target.classList.contains("clickable")) {
    var customMouse = document.getElementById("custom-mouse");

    // Verificar si el overlay está abierto
    var overlay = document.getElementById("overlay");
    if (overlay.style.display === "block") {
      // Cambiar la escala del cursor cuando el overlay está abierto
      customMouse.style.transform = "scale(3.0)";
    } else {
      // Restablecer la escala del cursor cuando el overlay está cerrado
      customMouse.style.transform = "scale(2.0)";
    }
  }
});

document.addEventListener("mouseout", function (event) {
  var target = event.target;
  if (target.classList.contains("clickable")) {
    var customMouse = document.getElementById("custom-mouse");
    customMouse.style.transform = ""; // devuelve el tamaño del cursor personalizado a su valor original
  }
});

//nav bar scroll

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("nav");
  var overlay = document.getElementById("overlay");
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;

  if (
    scrolled > 0 &&
    overlay.style.display !== "block" &&
    !overlay.classList.contains("active")
  ) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }
});

// nav menu hover effect

const hoverTextList = document.querySelectorAll(".hover-effect");

hoverTextList.forEach((hoverText) => {
  const originalText = hoverText.textContent;

  hoverText.addEventListener("mouseenter", () => {
    hoverText.setAttribute("data-rearranged", "true");
    hoverText.textContent = reverseText(originalText);
    setTimeout(() => {
      hoverText.textContent = shuffleText(reverseText(originalText));
      setTimeout(() => {
        hoverText.textContent = reverseText(originalText);
        setTimeout(() => {
          hoverText.removeAttribute("data-rearranged");
          hoverText.textContent = originalText;
        }, 120);
      }, 120);
    }, 120);
  });
});

function reverseText(text) {
  const reversedText = text.split("").reverse().join("");
  return reversedText;
}

function shuffleText(text) {
  const shuffledText = text.split("").sort(() => Math.random() - 0.5).join("");
  return shuffledText;
}

// carousel

let slides = document.querySelectorAll(".image-slide");
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 4000);
let slidesCarousel = document.querySelector(".carousel-container-image-slide");

function nextSlide() {
  slides[currentSlide].style.opacity = 0;
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.opacity = 1;
}

// Función para cambiar la imagen del slide según la posición del cursor
function changeSlide(event) {
  // Obtener la posición horizontal del cursor dentro del contenedor
  const containerWidth = slidesCarousel.offsetWidth;
  const cursorX = event.clientX - slidesCarousel.getBoundingClientRect().left;

  // Calcular el índice del slide basado en la posición del cursor
  const totalSlides = slides.length;
  const slideIndex = Math.floor((cursorX / containerWidth) * totalSlides);

  // Cambiar al slide correspondiente
  slides[currentSlide].style.opacity = 0;
  currentSlide = slideIndex % totalSlides;
  slides[currentSlide].style.opacity = 1;
}

// Agregar evento "mousemove" al contenedor del carousel
slidesCarousel.addEventListener("mousemove", function (event) {
  changeSlide(event);
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 4000);
});

//togglebar

const toggleButton = document.getElementById("toggleButton");
const navBar = document.querySelector("nav");
const overlay = document.getElementById("overlay");
const hamburguerButton = document.querySelector(".hamburger-button");
const languageButtons = document.querySelectorAll(".language-button");
const logo = document.getElementById("logo-container");
const languageButtonsContainer = document.querySelector(
  ".language-button-container"
);
const languageSpanButton = document.querySelector(".language-button-span");

toggleButton.addEventListener("click", function () {
  overlay.style.display = overlay.style.display === "block" ? "none" : "block";
  toggleButton.classList.toggle("newPosition");
  logo.classList.toggle("logo-color-change");
  navBar.classList.toggle("navbar-color-change");
  navBar.classList.toggle("nav-hover-change");
  hamburguerButton.classList.toggle("hamburger-button-color-change");
  languageButtonsContainer.classList.toggle("language-button-container-change");
  languageSpanButton.classList.toggle("language-button-span-color-change");
  languageButtons.forEach((button) =>
    button.classList.toggle("language-button-color-change")
  );
  if (overlay.style.display === "block") {
    navBar.classList.remove("scroll");
  }

  // logo animation

  const isOverlayDisplayed = overlay.style.display === "block";

  if (isOverlayDisplayed) {
    document.getElementById("logo1").style.animation =
      "slide1 1s ease-in-out forwards";
    document.getElementById("logo2").style.animation =
      "slide2 1s ease-in-out forwards";
  } else {
    document.getElementById("logo1").style.animation =
      "slide1 1s ease-in-out forwards";
    document.getElementById("logo2").style.animation =
      "slide3 1s ease-in-out forwards";
  }
});

document.getElementById("overlay").addEventListener("click", function () {
  if (!event.target.closest("#nav-content"))
    window.location.href = "index.html"; //
});

//restore styles

// carousel-about-container

var carousel = document.querySelector(".carousel");
var images = carousel.getElementsByTagName("img");
var indicatorsContainer = document.querySelector(".indicators");
var carouselContainer = document.querySelector(".carousel-container");
var currentIndex = 0;
var colors = ["#a42f33", "#262626", "#214733", "#912a5b"];

function showImage(index) {
  if (index < 0) {
    index = images.length - 1;
  } else if (index >= images.length) {
    index = 0;
  }
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  images[index].style.display = "block";
  currentIndex = index;
  updateIndicators();
  changeCarouselContainerBackground();
}

function prevImage() {
  showImage(currentIndex - 1);
}

function nextImage() {
  showImage(currentIndex + 1);
}

function updateIndicators() {
  var indicators = Array.from(
    indicatorsContainer.getElementsByClassName("indicator")
  );
  indicators.forEach(function (indicator, index) {
    if (index === currentIndex) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}

function changeCarouselContainerBackground() {
  carouselContainer.style.backgroundColor = colors[currentIndex];
}

carousel.addEventListener("click", function (event) {
  var target = event.target;
  if (target.classList.contains("next")) {
    nextImage();
  } else if (!target.classList.contains("prev")) {
    var rect = this.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var width = rect.width;
    if (x < width / 2) {
      prevImage();
    } else {
      nextImage();
    }
  }
});

function createIndicators() {
  for (var i = 0; i < images.length; i++) {
    var indicator = document.createElement("div");
    indicator.classList.add("indicator");
    indicator.addEventListener("click", function () {
      var index = Array.from(
        indicatorsContainer.getElementsByClassName("indicator")
      ).indexOf(this);
      showImage(index);
    });
    indicatorsContainer.appendChild(indicator);
  }
}

createIndicators();
updateIndicators();
changeCarouselContainerBackground();

//talents

$(document).ready(function() {
  $(".button1").click(function(event) {
    event.stopPropagation();
    var card = $(this).closest(".card");
    card.find("img").show();
    card.find("p").hide();
    card.find(".button1, .button2").removeClass("active");
    $(this).addClass("active");
  });

  $(".button2").click(function(event) {
    event.stopPropagation();
    var card = $(this).closest(".card");
    card.find("p").show();
    card.find("img").hide();
    card.find(".button1, .button2").removeClass("active");
    $(this).addClass("active");
  });

  // Mostrar la foto asociada al botón 1 y ocultar el texto asociado al botón 2 por defecto
  $(".button1").each(function() {
    var card = $(this).closest(".card");
    card.find("img").show();
    card.find("p").hide();
    card.find(".button1").addClass("active");
  });
});

//overlay-menu

// Obtener el overlay y el cuerpo de la página
const body = document.body;

// Inicializar variable para llevar el seguimiento del estado del overlay
let overlayActive = false;

// Función para agregar la clase que desactiva el scroll
function disableScroll() {
  body.classList.add("overlay-open");
}

// Función para quitar la clase que desactiva el scroll
function enableScroll() {
  body.classList.remove("overlay-open");
}

// Función para alternar el estado del overlay
function toggleOverlay() {
  if (overlayActive) {
    enableScroll();
    overlay.style.display = "none";
    overlayActive = false;
  } else {
    disableScroll();
    overlay.style.display = "block";
    overlayActive = true;
  }
}

// Agregar evento al hacer clic en una opción del menú
document.querySelectorAll("#nav-content a").forEach((a) => {
  a.addEventListener("click", function () {
    enableScroll();
    toggleOverlay();
  });
});

// Agregar evento al hacer clic en el botón de cerrar el overlay
overlay.addEventListener("click", function (e) {
  if (e.target.class === "nav-menu") {
    toggleOverlay();
  }
});

// Agregar evento al hacer clic en el botón de toggle
document.getElementById("toggleButton").addEventListener("click", function () {
  toggleOverlay();
});

// talent

// Obtén una referencia a todos los botones de letras
// const letterButtons = document.getElementsByClassName("letter-button");
// let activeButton = null;

// for (let i = 0; i < letterButtons.length; i++) {
//   const button = letterButtons[i];
//   const letter = button.textContent.trim().toUpperCase();
//   button.addEventListener("click", function () {
//     // Quita el subrayado del botón activo previo, si existe
//     if (activeButton) {
//       activeButton.classList.remove("active");
//     }

//     // Aplica el subrayado al botón seleccionado
//     button.classList.add("active");
//     activeButton = button;

//     filterCardsByLetter(letter);
//   });
// }

// function filterCardsByLetter(letter) {
//   const cards = document.getElementsByClassName("card");
//   for (let i = 0; i < cards.length; i++) {
//     const card = cards[i];
//     const cardLetter = card.getAttribute("data-letter");
//     if (cardLetter === letter || letter === "") {
//       card.style.display = "block"; // Muestra la tarjeta
//     } else {
//       card.style.display = "none"; // Oculta la tarjeta
//     }
//   }
// }

// team

const teamCards = document.querySelectorAll(".team-card");

teamCards.forEach(function (card) {
  const botonMostrar = card.querySelector(".team-button");
  const contenidoOculto = card.querySelector(".contenido-oculto");
  const flecha = card.querySelector(".arrow1");
  const cardHeader = card.querySelector(".card-header");
  const cardTittleSize = card.querySelector(".card-tittle-size-lastname");

  let contenidoVisible = false;

  botonMostrar.addEventListener("click", function () {
    if (contenidoVisible) {
      contenidoOculto.style.display = "none";
      flecha.classList.remove("rotate");
      flecha.classList.add("reverse-arrow");
      cardHeader.classList.remove("content-visible");
      cardTittleSize.classList.add("slide-reverse"); // Agregar clase de animación
      cardTittleSize.classList.remove("slide-animation"); // Eliminar clase de animación opuesta
      contenidoVisible = false;
    } else {
      contenidoOculto.style.display = "flex";
      flecha.classList.remove("reverse-arrow");
      flecha.classList.add("rotate");
      cardHeader.classList.add("content-visible");
      cardTittleSize.classList.remove("slide-reverse"); // Eliminar clase de animación opuesta
      cardTittleSize.classList.add("slide-animation"); // Agregar clase de animación
      contenidoVisible = true;
    }
  });
});

// what-we-do

const upArrow = document.getElementById("up");
const downArrow = document.getElementById("down");
const overlay1 = document.querySelector(".overlay1");

upArrow.addEventListener("click", function () {});

downArrow.addEventListener("click", function () {});

function scrollDown() {
  window.scrollBy({
    top: window.innerHeight,
    behavior: "smooth",
  });
}

function scrollUp() {
  window.scrollBy({
    top: -window.innerHeight,
    behavior: "smooth",
  });
}
