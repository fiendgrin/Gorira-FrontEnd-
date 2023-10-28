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

sort.addEventListener("click", () => {
  sortHolder.classList.toggle("active");
});
