let offset = 0;
const sliderLine = document.querySelector("[slider-line]");
let sliderWidth = document.querySelector(".galery__photo").offsetWidth;

document.querySelector("[scroll-left]").addEventListener('click', function q () {
    offset += sliderWidth + 20;
    if (offset > (sliderWidth + 20)*2) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});
document.querySelector("[scroll-right]").addEventListener('click', function q () {
    offset -= sliderWidth + 20;

    if (offset < 0) {
        offset = (sliderWidth + 20) * 2;
    }
    sliderLine.style.left = -offset + 'px';
});

