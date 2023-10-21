let playBtns = document.querySelectorAll(".myCard .play");
let pauseBtns = document.querySelectorAll(".myCard .pause");
let audios = document.querySelectorAll(".myCard .audio");



playBtns.forEach((pb) => {
  pb.addEventListener("click", (e) => {
    let song = pb.parentElement.lastElementChild;
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
    audios.forEach((a) => {
      if (a != song) {
        a.pause();
        a.currentTime = 0;
      }
    });
    pb.style.display = "none";
    pb.nextElementSibling.style.display = "inline-block";
    song.play();

  });
});

pauseBtns.forEach((pb) => {
  pb.addEventListener("click", (e) => {
    pb.style.display = "none";
    pb.previousElementSibling.style.display = "inline-block";
    let song = pb.parentElement.lastElementChild;
    song.pause();
  });
});

