
const sliderLine = document.querySelector('.slider-line');
const images = document.querySelectorAll('.slider .slider-line img');

let i = 0;
let width;

const init = () => {
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

const rollSlider = () => sliderLine.style.transform = 'translate(-' + i * width + 'px)';

init();
window.addEventListener('resize', init);

document.querySelector('.slider-next').addEventListener('click', () => {
    i++;
    if (i >= images.length) i = 0;
    rollSlider();
});

document.querySelector('.slider-prev').addEventListener('click',  () => {
    i--;
    if (i < 0) i = images.length - 1;
    rollSlider();
});
