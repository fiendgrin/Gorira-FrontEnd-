const ap = new APlayer({
  container: document.querySelector("#trackMain #aplayer"),
  theme: "#a210f7",
  audio: [
    {
      name: document.querySelector("#trackMain #aplayer").getAttribute("title"),
      artist: document
        .querySelector("#trackMain #aplayer")
        .getAttribute("name"),
      url: document.querySelector("#trackMain #aplayer").getAttribute("mp3"),
      cover: document
        .querySelector("#trackMain #aplayer")
        .getAttribute("cover"),
    },
  ],
});

let thePrice = document.querySelector("#trackMain .thePrice");
let radios = document.querySelectorAll("#trackMain .licenses .radio");

radios.forEach((r) => {
  if (r.firstElementChild.checked) {
    thePrice.textContent = r.getAttribute("price");
  }
  r.addEventListener("click", () => {
    if (r.firstElementChild.checked) {
      thePrice.textContent = r.getAttribute("price");
    }
  });
});
