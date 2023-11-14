let songs = [
  {song: "escroto", artist: "lamo", duration: 10, genre: "si"}
];

window.onload = initialize;

function initialize(){
  const SONG_FORM = document.getElementById("song-form");
  SONG_FORM.addEventListener("submit", validateSongForm);

}

function validateSongForm(event){
  let songForm = event.target;

  let song = songForm["song"].value;

  if(!song || song == ""){
    event.preventDefault();
    document.getElementById("error-song-required").style.display = "block";
    console.log("* error: cancion obligatoria");
  }
  else{
    document.getElementById("error-song-required").style.display = "none";
  }

  let artist = songForm["artist"].value;
  if(!artist || artist == ""){
    event.preventDefault();
    document.getElementById("error-artist-required").style.display = "block";
    console.log("* error: artista obligatorio");
  }
  else{
    document.getElementById("error-artist-required").style.display = "none";
  }

  let duration = songForm["duration"].value;
  if(!duration || duration == ""){
    event.preventDefault();
    document.getElementById("error-duration-required").style.display = "block";
    console.log("* error: duracion obligatoria");
  }
  else{
    document.getElementById("error-duration-required").style.display = "none";
  }

  let genre = songForm["genre"].value;
  if(!genre || genre == ""){
    event.preventDefault();
    document.getElementById("error-genre-required").style.display = "block";
    console.log("* error: genre obligatorio");
  }
  else{
    document.getElementById("error-genre-required").style.display = "none";
  }
  showSongs();
}

function addSong(event){
  event.preventDefault();

  const SONG = event.target.song.value;
  const ARTIST = event.target.artist.value;
  const GENRE = event.target.genre.value;
  const DURATION = event.target.duration.value;

  songs.push({
    song: SONG,
    artist: ARTIST,
    genre: GENRE,
    duration: DURATION
  })

  showSongs();
}

function showSongs(){
  const SONG_LIST = document.getElementById("song-list"); 

  SONG_LIST.innerHTML = "";

  for(let i = 0; i < songs.length; i++){
    SONG_LIST.innerHTML += `<li>${songs[i].genre} - ${songs[i].song} - ${songs[i].artist} - ${songs[i].duration} <button onclick="deleteSong(${i})">DELETE</button></li>`;
  }
}

function deleteSong(songId){
  songs.splice(songId, 1);

  showSongs();
}

initialize();