

// validate section
function validateForm() {
    const firstName = document.getElementById("grid-first-name").value.trim();
    const lastName = document.getElementById("grid-last-name").value.trim();
    const email = document.getElementById("grid-email").value.trim();
    const message = document.getElementById("grid-message").value.trim();
  
    const firstNameError = document.getElementById("firstNameError");
    const lastNameError = document.getElementById("lastNameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
  
    let isValid = true;
    firstNameError.classList.add("hidden");
    lastNameError.classList.add("hidden");
    emailError.classList.add("hidden");
    messageError.classList.add("hidden");
  
    if (firstName === "") {
        firstNameError.classList.remove("hidden");
        isValid = false;
    }
  
    if (lastName == "") {
        lastNameError.classList.remove("hidden");
        isValid = false;
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.classList.remove("hidden");
        isValid = false;
    }
  
    if (message == "") {
        messageError.classList.remove("hidden");
        isValid = false;
    }
  
    
    return isValid;
  }
  
  
  
  //slider section
  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }
  
  document.addEventListener('DOMContentLoaded', function () { const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('animate-reveal'); } else { entry.target.classList.remove('animate-reveal'); } }); }); document.querySelectorAll('.reveal-on-scroll').forEach(element => { observer.observe(element); }); });