const openNavBtn = document.querySelector(".burger");
const closeNavBtn = document.querySelector(".side-nav__close");
const sideNav = document.querySelector(".side-nav");
const logInForm = document.querySelector(".log-in");
const signUpForm = document.querySelector(".sign-up");
const logInBtn = document.querySelectorAll(".log-in-btn");
const signUpBtn = document.querySelectorAll(".sign-up-btn");
const logInCloseBtn = document.querySelector(".log-in__close");
const signUpCloseBtn = document.querySelector(".sign-up__close");

// FUNCTIONS

function closeForm() {
  logInForm.classList.remove("active-log-in");
  signUpForm.classList.remove("active-log-in");
  console.log(signUpForm);
}

// EVENT LEISTENERS

logInBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    logInForm.classList.add("active-log-in");
    sideNav.classList.remove("activeNav");
    signUpForm.classList.remove("active-log-in");
    openNavBtn.style.display = "flex";
  });
});
signUpBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    signUpForm.classList.add("active-log-in");
    sideNav.classList.remove("activeNav");
    logInForm.classList.remove("active-log-in");
    openNavBtn.style.display = "flex";
  });
});

logInCloseBtn.addEventListener("click", closeForm);
signUpCloseBtn.addEventListener("click", closeForm);

openNavBtn.addEventListener("click", () => {
  sideNav.classList.add("activeNav");
  openNavBtn.style.display = "none";
});

closeNavBtn.addEventListener("click", () => {
  sideNav.classList.remove("activeNav");
  openNavBtn.style.display = "flex";
});

// SCROLL INTERCEPTOR

window.onload = () => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  // PHONE PICTURE OBSERVER
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lazyImg = entry.target;
        lazyImg.style.animation = "slideIn .5s forwards ease-out";
        observer.unobserve(lazyImg);
      }
    });
  }, options);
  // NUMBERS OBSERVER
  const observerCounter = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        // TO ANIMATE COUNTER
        const counters = document.querySelectorAll(".numbers__counter");
        const speed1 = 80;
        const speed2 = 6;
        counters.forEach((counter) => {
          function updateCount() {
            let target1 = +counter.getAttribute("data-target1");
            let target2 = +counter.getAttribute("data-target2");

            let currentCount1 = +counter.children[0].innerText;
            let currentCount2 = +counter.children[1].innerText;

            const inc1 = Math.floor(target1 / speed2);
            const inc2 = Math.floor(target2 / speed1);

            if (currentCount1 < target1 || currentCount2 < target2) {
              counter.children[0].innerText = currentCount1 + inc1;
              counter.children[1].innerText = currentCount2 + inc2;
              setTimeout(updateCount, 1);
            } else {
              counter.children[0].innerText = target1;
              counter.children[1].innerText = target2;
            }
          }
          updateCount();
        });
        observerCounter.unobserve(counter);
      }
    });
  }, options);

  const iphone = document.querySelector(".app__iphone-img img");
  observer.observe(iphone);
  const numberItems = document.querySelector(".numbers__items");
  observerCounter.observe(numberItems);
};

// SLIDER

const slides = document.querySelectorAll(".slider__item");
const dots = document.querySelectorAll(".dot");

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    function slideUpd() {
      slides.forEach((slide) => {
        slide.classList.remove("slideFadeIn");
      });
      dots.forEach((dot) => {
        dot.classList.remove("activeDot");
      });
    }
    if (index === 0) {
      slideUpd();
      dots[0].classList.add("activeDot");
      slides[0].classList.add("slideFadeIn");
    } else if (index === 1) {
      slideUpd();
      dots[1].classList.add("activeDot");
      slides[1].classList.add("slideFadeIn");
    } else if (index === 2) {
      slideUpd();
      dots[2].classList.add("activeDot");
      slides[2].classList.add("slideFadeIn");
    }
  });
});

// RECIPIES

const cuisines = [
  {
    url: "italian",
    name: "Italian",
    num: 327,
  },
  {
    url: "sushi",
    name: "Sushi",
    num: 237,
  },
  {
    url: "indian",
    name: "Indian",
    num: 856,
  },
  {
    url: "mexican",
    name: "Mexican",
    num: 529,
  },
  {
    url: "french",
    name: "French",
    num: 27,
  },
  {
    url: "chinese",
    name: "Chinese",
    num: 143,
  },
  {
    url: "steakhouse",
    name: "Steakhouse",
    num: 174,
  },
  {
    url: "pizza",
    name: "Pizza",
    num: 327,
  },
  {
    url: "seafood",
    name: "Seafood",
    num: 131,
  },
  {
    url: "american",
    name: "American",
    num: 1437,
  },
];

const cuisineBoxes = document.querySelectorAll(".recipies__cuisine");

function sortIncrease() {
  cuisineBoxes.forEach((box, index) => {
    cuisines.sort(function (a, b) {
      if (a.num > b.num) {
        return 1;
      }
      if (a.num < b.num) {
        return -1;
      }
      return 0;
    });
    function showCuisine(url, name, number) {
      url = cuisines[index].url;
      name = cuisines[index].name;
      number = cuisines[index].num;
      box.children[0].innerText = `${number} recipies`;
      box.children[1].innerText = `${name}`;
      box.style.background = `url(./img/${url}.png) center no-repeat`;
      box.style.backgroundSize = "cover";
    }
    showCuisine();
  });
}
function sortDecrease() {
  cuisineBoxes.forEach((box, index) => {
    cuisines.sort(function (a, b) {
      if (a.num < b.num) {
        return 1;
      }
      if (a.num > b.num) {
        return -1;
      }
      return 0;
    });
    function showCuisine(url, name, number) {
      url = cuisines[index].url;
      name = cuisines[index].name;
      number = cuisines[index].num;
      box.children[0].innerText = `${number} recipies`;
      box.children[1].innerText = `${name}`;
      box.style.background = `url(./img/${url}.png) center no-repeat`;
      box.style.backgroundSize = "cover";
    }
    showCuisine();
  });
}

// ORGANIZE BY QUANTITY
const selector = document.querySelector("select");

function changeSelect(e) {
  const selectedName = e.target.value;
  switch (selectedName) {
    case "smallToBig":
      sortIncrease();
      break;
    case "bigToSmall":
      sortDecrease();
      break;
  }
}

sortIncrease();

selector.addEventListener("change", (e) => {
  changeSelect(e);
});

// AUTOMATIC COUNTER
