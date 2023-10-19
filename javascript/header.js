let chevronAcc = document.querySelector(".chevronAcc");
let accountContent = document.querySelector(".accountContent");
let accountHolder = document.querySelector(".accountHolder");

let chevronBasket = document.querySelector(".chevronBasket");
let basketContent = document.querySelector(".basketContent");
let basketHolder = document.querySelector(".basketHolder");

accountHolder.addEventListener("click", (e) => {
  e.stopPropagation();
  chevronBasket.style.transform = "";
  basketContent.classList.remove("active");
  if (chevronAcc.style.transform == "rotate(-180deg)") {
    chevronAcc.style.transform = "";
    accountContent.classList.remove("active");
  } else {
    chevronAcc.style.transform = "rotate(-180deg)";
    accountContent.classList.add("active");
  }
});

basketHolder.addEventListener("click", (e) => {
  e.stopPropagation();
  chevronAcc.style.transform = "";
  accountContent.classList.remove("active");
  if (chevronBasket.style.transform == "rotate(-180deg)") {
    chevronBasket.style.transform = "";
    basketContent.classList.remove("active");
  } else {
    chevronBasket.style.transform = "rotate(-180deg)";
    basketContent.classList.add("active");
  }
});

window.addEventListener("click", () => {
  accountContent.classList.remove("active");
  basketContent.classList.remove("active");
  chevronBasket.style.transform = "";
  chevronAcc.style.transform = "";
});
