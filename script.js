const slides = document.querySelectorAll('.tool-slide');
const progressDots = document.querySelectorAll('.progress-dot');
let currentSlide = 0;
        
function showSlide(index) {
    // Hide all the slides
    slides.forEach(slide => slide.classList.remove('active'));
    progressDots.forEach(dot => dot.classList.remove('active'));            
    // Show the current slide
    slides[index].classList.add('active');
    progressDots[index].classList.add('active');
}
        
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}
        
// Auto-advance slides every 4 seconds
setInterval(nextSlide, 4000);

// Click on progress dots to navigate
progressDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});