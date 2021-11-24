export function sliderToggle() {
    const sliderWrapper = document.querySelector('slider-wrapper');
    const sliders = document.querySelectorAll('slider-slide');
    console.log(sliderWrapper);
    console.log(sliders);
    const sliderHandler = (sliders) => {
        for (const slider in sliders) {
            console.log(slider);
        }
    }
}