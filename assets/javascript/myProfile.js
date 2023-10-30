let myInfoTab = document.querySelector("#myProfileMain .info");
let myTracksTab = document.querySelector("#myProfileMain .tracks");
let myProfileTracks = document.querySelector("#myProfileMain .right");
let myProfile = document.querySelector("#myProfileMain .left");

myInfoTab.addEventListener("click", () => {
  myInfoTab.classList.add("tabActive");
  myTracksTab.classList.remove("tabActive");
  myProfile.style.display = "flex";
  myProfileTracks.style.display = "none";
});
myTracksTab.addEventListener("click", () => {
  myTracksTab.classList.add("tabActive");
  myInfoTab.classList.remove("tabActive");
  myProfileTracks.style.display = "flex";
  myProfile.style.display = "none";
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1360) {
    myProfile.style.display = "flex";
    myProfileTracks.style.display = "flex";
  } else if (
    window.innerWidth < 1360 &&
    myProfile.style.display == "flex" &&
    myProfileTracks.style.display == "flex"
  ) {
    myInfoTab.classList.add("tabActive");
    myTracksTab.classList.remove("tabActive");
    myProfile.style.display = "flex";
    myProfileTracks.style.display = "none";
  }
});


if (window.innerWidth >= 1360) {
  myProfile.style.display = "flex";
  myProfileTracks.style.display = "flex";
} else if (
  window.innerWidth < 1360 
) {
  myInfoTab.classList.add("tabActive");
  myTracksTab.classList.remove("tabActive");
  myProfile.style.display = "flex";
  myProfileTracks.style.display = "none";
}

let myNumberElements = document.querySelectorAll("#myProfileMain .numberElement");

myNumberElements.forEach((numberElement) => {
  let number = parseInt(numberElement.textContent);

  let formattedNumber = number.toLocaleString();

  numberElement.textContent = formattedNumber;
});