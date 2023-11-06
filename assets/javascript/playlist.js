let followBtn = document.querySelector("#playlistMain .follow");

followBtn.addEventListener("click", () => {
  followBtn.classList.toggle("followActive");
});

let audioElements = document.querySelectorAll("#playlistMain .beat");

let audioList = [];

// Loop through the audio elements and extract information to create APlayer-compatible objects
audioElements.forEach((audioElement) => {
  let name = audioElement.getAttribute("name");
  let artist = audioElement.getAttribute("artist");
  let url = audioElement.getAttribute("track");
  let cover = audioElement.getAttribute("cover");

  // Create APlayer-compatible object and add it to the audioList array
  let audioObject = {
    name: name,
    artist: artist,
    url: url,
    cover: cover,
  };

  audioList.push(audioObject);
});

let ap = new APlayer({
  container: document.querySelector("#playlistMain #aplayer"),
  listFolded: false,
  listMaxHeight: 90,
  theme: "#a210f7",
  audio: audioList,
});

let myNumberElements = document.querySelectorAll(
  "#playlistMain .numberElement"
);

myNumberElements.forEach((numberElement) => {
  let number = parseInt(numberElement.textContent);

  let formattedNumber = number.toLocaleString();

  numberElement.textContent = formattedNumber;
});

let playlistInfoTab = document.querySelector("#playlistMain .info");
let playlistTracksTab = document.querySelector("#playlistMain .tracks");
let playlistTracks = document.querySelector("#playlistMain .right");
let playlist = document.querySelector("#playlistMain .left");

playlistInfoTab.addEventListener("click", () => {
  playlistInfoTab.classList.add("tabActive");
  playlistTracksTab.classList.remove("tabActive");
  playlist.style.display = "flex";
  playlistTracks.style.display = "none";
});
playlistTracksTab.addEventListener("click", () => {
  playlistTracksTab.classList.add("tabActive");
  playlistInfoTab.classList.remove("tabActive");
  playlistTracks.style.display = "flex";
  playlist.style.display = "none";
});

window.addEventListener("resize", () => {

  if (window.innerWidth >= 1360) {
    playlist.style.display = "flex";
    playlistTracks.style.display = "flex";
  } else if (
    window.innerWidth < 1360 &&
    playlist.style.display != "none" &&
    playlistTracks.style.display != "none"
  ) {
    playlistInfoTab.classList.add("tabActive");
    playlistTracksTab.classList.remove("tabActive");
    playlist.style.display = "flex";
    playlistTracks.style.display = "none";
  }
});

if (window.innerWidth < 1360) {
  playlistInfoTab.classList.add("tabActive");
  playlistTracksTab.classList.remove("tabActive");
  playlist.style.display = "flex";
  playlistTracks.style.display = "none";
}