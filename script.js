document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    let slides = document.querySelectorAll('.slideshow');

    function startSlideshow() {
        setInterval(() => {
            slides[currentSlide].classList.add('w3-hide');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.remove('w3-hide');
        }, 3000);
    }

    // Asigură-te că funcția poate fi apelată
    window.startSlideshow = startSlideshow;
});
