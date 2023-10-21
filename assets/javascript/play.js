let playBtns = document.querySelectorAll(".myCard .play");
let pauseBtns = document.querySelectorAll(".myCard .pause");
let audios = document.querySelectorAll(".myCard .audio");
let ap;
let playingAudio;
// playBtns.forEach((pb) => {
//   pb.addEventListener("click", (e) => {
//     let song = pb.parentElement.lastElementChild;
//     playBtns.forEach((play) => {
//       if (play != pb) {
//         play.style.display = "inline-block";
//       }
//     });
//     pauseBtns.forEach((pause) => {
//       if (pause != pb.nextElementSibling) {
//         pause.style.display = "none";
//       }
//     });
//     audios.forEach((a) => {
//       if (a != song) {
//         a.pause();
//         a.currentTime = 0;
//       }
//     });
//     pb.style.display = "none";
//     pb.nextElementSibling.style.display = "inline-block";
//     song.play();

//   });
// });

// pauseBtns.forEach((pb) => {
//   pb.addEventListener("click", (e) => {
//     pb.style.display = "none";
//     pb.previousElementSibling.style.display = "inline-block";
//     let song = pb.parentElement.lastElementChild;
//     song.pause();
//   });
// });

playBtns.forEach((pb) => {
  pb.addEventListener("click", (e) => {
    let cover =
      pb.nextElementSibling.nextElementSibling.firstElementChild.getAttribute(
        "src"
      );
    let name =
      pb.parentElement.children[3].lastElementChild.previousElementSibling
        .firstElementChild.textContent;
    let song = pb.parentElement.lastElementChild;
    let url = song.firstElementChild.getAttribute("src");
    let artist =
      pb.parentElement.children[3].lastElementChild.firstElementChild
        .textContent;
    //==============================================
    //APPLAYER============!!!!
    ap = new APlayer({
      container: document.getElementById("aplayer"),
      preload: 'auto',
      fixed: true,
      theme: '#8c01cf',
      audio: [
        {
          name: name,
          artist: artist,
          url: url,
          cover: cover,
        },
      ],
    });
    ap.play();
    document.getElementById("aplayer").classList.remove('aplayer-narrow');
    document.getElementById("aplayer").classList.remove('aplayer-arrow');
    document.querySelector(".aplayer-miniswitcher").remove();

    //APPLAYER============!!!!
    playBtns.forEach((play) => {
      if (play != pb) {
        play.style.display = "inline-block";
      }
    });
    pauseBtns.forEach((pause) => {
      if (pause != pb.nextElementSibling) {
        pause.style.display = "none";
      }
    });
    pb.style.display = "none";
    pb.nextElementSibling.style.display = "inline-block";
    //==============================================
    ap.on("pause", function () {
      pb.style.display = "inline-block";
      pb.nextElementSibling.style.display = "none";
    });
    ap.on("play", function () {
      pb.style.display = "none";
      pb.nextElementSibling.style.display = "inline-block";
    });
  });
});

pauseBtns.forEach((pb) => {
  pb.addEventListener("click", (e) => {
    let song = pb.parentElement.lastElementChild;
    //==============================================
    pb.style.display = "none";
    pb.previousElementSibling.style.display = "inline-block";
    //==============================================
    ap.pause();
  });
});
