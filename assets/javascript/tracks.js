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
  if (window.innerWidth <= 768) {
    left.style.display = "none";
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

openFilters.addEventListener("click", (e) => {
  if (window.innerWidth <= 768) {
    e.stopPropagation();
    if (left.style.display != "none") {
      left.style.display = "none";
    } else {
      left.style.display = "flex";
    }
    sortHolder.classList.remove("active");
  }
});
left.addEventListener("click", (e) => {
  if (window.innerWidth <= 768) {
    e.stopPropagation();
  }
});

window.addEventListener("click", (e) => {
  if (window.innerWidth <= 768) {
    left.style.display = "none";

    sortHolder.classList.remove("active");
  }
});

window.addEventListener("resize", (e) => {
  if (window.innerWidth > 768) {
    left.style.display = "flex";
  } else if (window.innerWidth <= 768 && left.style.display != "none") {
    left.style.display = "none";
  }
});

let plays = document.querySelectorAll("#tracksMain .myCard .play");
let pauses = document.querySelectorAll("#tracksMain .myCard .pause");
let ap = null;

plays.forEach((play) => {
  play.addEventListener("click", () => {
    //pause or new handle
    if (
      ap != null &&
      ap.audio.getAttribute("src") == play.getAttribute("track")
    ) {
      ap.play();
    } else {
      pauses.forEach((pause) => {
        pause.style.display = "none";
        pause.previousElementSibling.style.display = "inline-block";
      });
      ap = new APlayer({
        container: document.querySelector("#tracksMain #aplayer"),
        autoplay: false,
        loop: "all",
        preload: "auto",
        volume: 0.7,
        mutex: true,
        listFolded: true,
        fixed: true,
        theme:"#a210f7",
        audio: [
          {
            name: play.getAttribute("name"),
            artist: play.getAttribute("artist"),
            url: play.getAttribute("track"),
            cover: play.getAttribute("cover"),
          },
        ],
      });
      document
        .querySelector("#tracksMain #aplayer")
        .classList.remove("aplayer-narrow");
      document
        .querySelector("#tracksMain #aplayer")
        .classList.remove("aplayer-arrow");
      document.querySelector(".aplayer-miniswitcher").remove();
      let next = document.querySelector("#aplayer .aplayer-icon-forward");
      let prev = document.querySelector("#aplayer .aplayer-icon-back");
      document.querySelector("#aplayer .aplayer-icon-play").remove();
      next.remove();
      prev.remove();
      document.querySelector("#aplayer .aplayer-music").style.width = "100%";
      ap.play();
    }

    // pause play btn display handel
    play.style.display = "none";
    play.nextElementSibling.style.display = "inline-block";
    ap.on("pause", function () {
      if (ap.audio.paused) {
        play.style.display = "inline-block";
        play.nextElementSibling.style.display = "none";
      }
    });
    ap.on("play", function () {
      if (!ap.audio.paused) {
        play.style.display = "none";
        play.nextElementSibling.style.display = "inline-block";
      }
    });
  });
});

pauses.forEach((pause) => {
  pause.addEventListener("click", () => {
    ap.pause();
    pause.previousElementSibling.style.display = "inline-block";
    pause.style.display = "none";
  });
});
