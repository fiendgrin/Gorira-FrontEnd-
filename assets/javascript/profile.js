let numberElements = document.querySelectorAll("#profileMain .numberElement");

numberElements.forEach((numberElement) => {
  let number = parseInt(numberElement.textContent);

  let formattedNumber = number.toLocaleString();

  numberElement.textContent = formattedNumber;
});

let reportContent = document.querySelector("#profileMain .reportContent");
let reportHolder = document.querySelector("#profileMain .reportHolder");

reportHolder.addEventListener("click", () => {
  if (reportContent.style.display != "flex") {
    reportContent.style.display = "flex";
  } else {
    reportContent.style.display = "none";
  }
});

let followBtn = document.querySelector("#profileMain .follow");

followBtn.addEventListener("click", () => {
  followBtn.classList.toggle("followActive")
});
