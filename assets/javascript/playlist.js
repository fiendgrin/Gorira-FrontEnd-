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
