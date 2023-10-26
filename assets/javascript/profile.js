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
  followBtn.classList.toggle("followActive");
});

let infoTab = document.querySelector("#profileMain .info");
let tracksTab = document.querySelector("#profileMain .tracks");
let profileTracks = document.querySelector("#profileMain .right");
let profile = document.querySelector("#profileMain .left");

infoTab.addEventListener("click", () => {
  infoTab.classList.add("tabActive");
  tracksTab.classList.remove("tabActive");
  profile.style.display = "flex";
  profileTracks.style.display = "none";
});
tracksTab.addEventListener("click", () => {
  tracksTab.classList.add("tabActive");
  infoTab.classList.remove("tabActive");
  profileTracks.style.display = "flex";
  profile.style.display = "none";
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1360) {
    profile.style.display = "flex";
    profileTracks.style.display = "flex";
  } else if (
    window.innerWidth < 1360 &&
    profile.style.display == "flex" &&
    profileTracks.style.display == "flex"
  ) {
    infoTab.classList.add("tabActive");
    tracksTab.classList.remove("tabActive");
    profile.style.display = "flex";
    profileTracks.style.display = "none";
  }
});
