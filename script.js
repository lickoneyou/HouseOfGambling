// toggle lang

document.querySelector(".lang").addEventListener("click", function () {
  this.querySelector(".langEn").classList.toggle("active");
});

// slider

const slider1 = [
  "./assets/carousel/1/1.png",
  "./assets/carousel/1/2.png",
  "./assets/carousel/1/3.png",
  "./assets/carousel/1/4.png",
  "./assets/carousel/1/5.png",
  "./assets/carousel/1/6.png",
  "./assets/carousel/1/7.png",
  "./assets/carousel/1/8.png",
  "./assets/carousel/1/1.png",
  "./assets/carousel/1/2.png",
  "./assets/carousel/1/3.png",
  "./assets/carousel/1/4.png",
  "./assets/carousel/1/5.png",
  "./assets/carousel/1/6.png",
  "./assets/carousel/1/7.png",
  "./assets/carousel/1/8.png",
];

const slider2 = [
  "./assets/carousel/2/1.png",
  "./assets/carousel/2/2.png",
  "./assets/carousel/2/3.png",
  "./assets/carousel/2/4.png",
  "./assets/carousel/2/5.png",
  "./assets/carousel/2/6.png",
  "./assets/carousel/2/7.png",
  "./assets/carousel/2/8.png",
  "./assets/carousel/2/1.png",
  "./assets/carousel/2/2.png",
  "./assets/carousel/2/3.png",
  "./assets/carousel/2/4.png",
  "./assets/carousel/2/5.png",
  "./assets/carousel/2/6.png",
  "./assets/carousel/2/7.png",
  "./assets/carousel/2/8.png",
];

const slider3 = [
  "./assets/carousel/3/1.png",
  "./assets/carousel/3/2.png",
  "./assets/carousel/3/3.png",
  "./assets/carousel/3/4.png",
  "./assets/carousel/3/5.png",
  "./assets/carousel/3/6.png",
  "./assets/carousel/3/7.png",
  "./assets/carousel/3/8.png",
  "./assets/carousel/3/1.png",
  "./assets/carousel/3/2.png",
  "./assets/carousel/3/3.png",
  "./assets/carousel/3/4.png",
  "./assets/carousel/3/5.png",
  "./assets/carousel/3/6.png",
  "./assets/carousel/3/7.png",
  "./assets/carousel/3/8.png",
];

function createSlider(slider1, slider2, slider3) {
  const res = `
<div class="slider">
<div class="slide-track">
${slider1
  .map(
    (el) => `<div class='slide'>
    <img src=${el} alt='slidePic'/>
</div>`
  )
  .join("")}
</div>
</div>
<div class="slider sliderReverse">
<div class="slide-track slide-trackReverse">
${slider2
  .map(
    (el) => `<div class='slide slideReverse'>
    <img src=${el} alt='slidePic'/>
</div>`
  )
  .join("")}
</div>
</div>
<div class="slider">
<div class="slide-track">
${slider3
  .map(
    (el) => `<div class='slide'>
    <img src=${el} alt='slidePic'/>
</div>`
  )
  .join("")}
</div>
</div>
`;
  return res;
}

const slidersWrapper = document.querySelector(".slidersWrapper");
slidersWrapper.innerHTML = createSlider(slider1, slider2, slider3);
