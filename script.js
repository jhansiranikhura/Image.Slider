const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots-container');

let currentIndex = 0;
let interval;

slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

function updateSlide() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
}

function goToSlide(index) {
    currentIndex = index;
    updateSlide();
}

function autoSlide() {
    interval = setInterval(() => {
        nextSlide();
    }, 3000);
}

autoSlide();

document.querySelector('.slider-container').addEventListener('mouseover', () => clearInterval(interval));
document.querySelector('.slider-container').addEventListener('mouseout', autoSlide);

updateSlide();
