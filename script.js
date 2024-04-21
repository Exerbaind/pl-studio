window.onload = function() { 
    const page = document.querySelector('body');
    page.classList.remove('body-hider');
};

const sliderWrpper = document.getElementById('students-slider-wrapper');
const sliderItems = [...document.querySelectorAll('.students-slider-item')];
const sliderBack = document.querySelector('.students-slider-back-btn');
const sliderNext = document.querySelector('.students-slider-next-btn');

let sliderTransformValue = 0;

function handleNext () {
    if (sliderTransformValue > -((sliderItems.length - 1) * 100)) {
        sliderTransformValue = sliderTransformValue - 100;
        sliderWrpper.style.transform = `translateX(${sliderTransformValue}%)`;
    } else {
        sliderTransformValue = 0;
        sliderWrpper.style.transform = `translateX(${sliderTransformValue}%)`;
    }
}

function handleBack () {
    if (sliderTransformValue < 0) {
        sliderTransformValue = sliderTransformValue + 100;
        sliderWrpper.style.transform = `translateX(${sliderTransformValue}%)`;
    } else {
        sliderTransformValue = (sliderItems.length - 1) * 100 * -1;
        sliderWrpper.style.transform = `translateX(${sliderTransformValue}%)`;
    }
}

sliderBack.addEventListener('click', handleBack);
sliderNext.addEventListener('click', handleNext);
