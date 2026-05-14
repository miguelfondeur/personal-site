'use strict';

//Resources: Color

//Change
document.addEventListener('change', e => {
    let blendSelect = e.target.closest('#active-blend-mode');

    if (blendSelect) {
        // Your logic here
        document.documentElement.style.setProperty('--active-blend-mode', blendSelect.value);
    }
});

//Click
document.addEventListener('click', e => {
    let whiteButton = e.target.closest('.swatch-button[data-category="white"]');
    let blackButton = e.target.closest('.swatch-button[data-category="black"]');
    let colorButton = e.target.closest('.swatch-button[data-category="color"]');

    //White
    if(whiteButton) {
        document.documentElement.style.setProperty('--active-white', whiteButton.dataset.color);
        document.querySelector('#active-white h4').innerText = whiteButton.dataset.name;
        document.querySelector('#active-white p').innerText = whiteButton.dataset.desc;
        document.querySelector('#active-white .period-text').innerText = whiteButton.dataset.period;
    }
    //Black
    if(blackButton) {
        document.documentElement.style.setProperty('--active-black', blackButton.dataset.color);
        document.querySelector('#active-black h4').innerText = blackButton.dataset.name;
        document.querySelector('#active-black p').innerText = blackButton.dataset.desc;
        document.querySelector('#active-black .period-text').innerText = blackButton.dataset.period;
    }
    //Color
    if(colorButton) {
        document.documentElement.style.setProperty('--active-color', colorButton.getAttribute('title'));
        document.querySelector('#active-color h4').innerText = colorButton.dataset.name;
        document.querySelector('#active-color p').innerText = colorButton.dataset.desc;
        document.querySelector('#active-color .period-text').innerText = colorButton.dataset.period;
    }
});