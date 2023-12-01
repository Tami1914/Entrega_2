let songs = [
  
];

window.onload = initialize;

function initialize() {
  const SONG_FORM = document.getElementById("song-form");
  SONG_FORM.addEventListener("submit", addSong);

}

function addSong(event) {
  event.preventDefault();

  const SONG = event.target.song.value;
  const ARTIST = event.target.artist.value;
  const GENRE = event.target.genre.value;
  const DURATION = event.target.duration.value;
  let isValid = true;

  if (!SONG || SONG == "") {
    event.preventDefault();
    document.getElementById("error-song-required").style.display = "block";
    console.log("* error: cancion obligatoria");
    isValid = false;
  }
  else {
    document.getElementById("error-song-required").style.display = "none";
  }

  if (!ARTIST || ARTIST == "") {
    event.preventDefault();
    document.getElementById("error-artist-required").style.display = "block";
    console.log("* error: artista obligatorio");
    isValid = false;
  }
  else {
    document.getElementById("error-artist-required").style.display = "none";
  }

  if (!DURATION || DURATION == "") {
    event.preventDefault();
    document.getElementById("error-duration-required").style.display = "block";
    console.log("* error: duracion obligatoria");
    isValid = false;
  }
  else {
    document.getElementById("error-duration-required").style.display = "none";
  }

  if (!GENRE || GENRE == "") {
    event.preventDefault();
    document.getElementById("error-genre-required").style.display = "block";
    console.log("* error: genre obligatorio");
    isValid = false;
  }
  else {
    document.getElementById("error-genre-required").style.display = "none";
  }

  if (isValid) {
    songs.push({
      song: SONG,
      artist: ARTIST,
      genre: GENRE,
      duration: DURATION
    })

    const STRINGIFIED_SONGS = JSON.stringify(songs);
    localStorage.setItem('songs',STRINGIFIED_SONGS);
    const SONGS_FROM_STORAGE = localStorage.getItem('songs');

    showSongs();
  }
}

function showSongs() {
  const SONG_LIST = document.getElementById("song-list");

  SONG_LIST.innerHTML = "";

  for (let i = 0; i < songs.length; i++) {
    SONG_LIST.innerHTML += `<li>${songs[i].genre} - ${songs[i].song} - ${songs[i].artist} - ${songs[i].duration} <button onclick="deleteSong(${i})" class="btn btn-primary">DELETE</button><button onclick="updateSong(${i})" class="btn btn-primary">UPDATE</button></li>`;
  }
}

function deleteSong(songId) {
  songs.splice(songId, 1);

  showSongs();
}

function editSong(index){
  const THIS_SONG = songs[index];
  SONG 
}

/* function editSong(i){
  document.querySelector('.update-form').style.display = "block";
  let obj = data.find(rec => rec.i === i);
  document.getElementById("update-song").value = songs.SONG;
  document.getElementById("update-artist").value = songs.ARTIST;
  document.getElementById("update-duration").value = songs.DURATION;
  document.getElementById("update-genre").value = songs.GENRE;
} */

initialize();