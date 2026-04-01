const audio = document.getElementById("audio");

function play() {
  audio.play();
}

function pause() {
  audio.pause();
}

function setVolume(value) {
  audio.volume = value;
}

/* Metadata */
setInterval(async () => {
  const res = await fetch("https://a13.asurahosting.com/api/nowplaying/vault_radio");
  const data = await res.json();

  document.getElementById("track").innerText =
    data.now_playing.song.artist + " - " + data.now_playing.song.title;
}, 5000);