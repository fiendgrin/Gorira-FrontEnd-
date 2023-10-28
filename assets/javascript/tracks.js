let tops = document.querySelectorAll("#tracksMain .filter .top");
let bottoms = document.querySelectorAll("#tracksMain .filter .bottom");

tops.forEach((top) => {
  top.addEventListener("click", () => {
    top.nextElementSibling.classList.toggle("active");
    top.firstElementChild.nextElementSibling.classList.toggle("active");
  });
});

let numberInputs = document.querySelectorAll(".numberInput");
numberInputs.forEach((numberInput) => {
  numberInput.addEventListener("input", function () {
    let inputValue = numberInput.value.replace(/\D/g, "");
    if (inputValue > 9999) {
      numberInput.value = inputValue.substring(0, 4);
    } else {
      numberInput.value = inputValue;
    }
  });
});

let sort = document.querySelector("#tracksMain .sort");
let sortHolder = document.querySelector("#tracksMain .sortHolder");
let left = document.querySelector("#tracksMain .left");
let openFilters = document.querySelector("#tracksMain .openFilters");

sort.addEventListener("click", (e) => {
  e.stopPropagation();
  sortHolder.classList.toggle("active");
  if (window.innerWidth < 768) {
    left.classList.remove("active");
  }
});

sortHolder.addEventListener("click", (e) => {
  e.stopPropagation();
});

window.addEventListener("click", (e) => {
  sortHolder.classList.remove("active");
});

// let allInputs = document.querySelectorAll("input");

// allInputs.forEach((i) => {
//   i.addEventListener("change", () => {
//     console.log(i.value);
//     console.log(i.checked);
//   });
// });

if (window.innerWidth < 768) {
  openFilters.addEventListener("click", (e) => {
    e.stopPropagation();
    left.classList.toggle("active");
    sortHolder.classList.remove("active");
  });
  left.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  window.addEventListener("click", (e) => {
    left.classList.remove("active");
    sortHolder.classList.remove("active");
  });
}
