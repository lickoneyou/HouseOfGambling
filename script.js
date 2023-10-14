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
        (el) => `
        <div class='slide'>
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
         (el) => `
         <div class='slide slideReverse'>
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
        (el) => `
        <div class='slide'>
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

// blog

const addPost = (numberOfPosts = 1) => {
  const post = `
  <div class='post'>
    <p class='message'>Payment methods: Skrill, Neteller, webmoney, Bank transfer</p>
    <p class='postDate'>10.02.2023</p>
  </div>`;
  return post.repeat(numberOfPosts);
};

const blogWrapper = document.querySelector(".blogWrapper");

blogWrapper.innerHTML += addPost(10);

blogWrapper
  .querySelectorAll(".post")
  .forEach((el, ind) =>
    ind === 0 ? (el.style.background = "#478BF9") : false
  );

blogWrapper.addEventListener("scroll", function () {
  const scroll = blogWrapper.scrollTop;
  blogWrapper.querySelectorAll(".post").forEach((el, ind) => {
    if (ind * 114 <= scroll) {
      el.style.background = "#478BF9";
    } else {
      el.style.background = "#1E1231";
    }
  });
});

// popUp

const popUpBtn = document.querySelector(".nav320");
const popUp = document.querySelector(".popUp");
const headerWrapper = document.querySelector(".headerWrapper");

const span1 = document.querySelector(".span1");
const span2 = document.querySelector(".span2");
const span3 = document.querySelector(".span3");

popUpBtn.addEventListener("click", function () {
  if (popUp.style.width == "100%") {
    span1.style.transform = "rotate(0)";
    span2.style.display = "block";
    span3.style.transform = "rotate(0)";
    popUp.style.width = "0";
    headerWrapper.style.position = "relative";
    headerWrapper.style.width = "auto";
    popUp.style.padding = "0";
  } else {
    span1.style.transform = "rotate(45deg) translate(26%, 0px)";
    span2.style.display = "none";
    span3.style.transform = "rotate(135deg) translate(-26%, 0px)";
    popUp.style.width = "100%";
    headerWrapper.style.position = "fixed";
    headerWrapper.style.width = "90vw";
    popUp.style.padding = "150px 10px 92px 10px";
  }
});
