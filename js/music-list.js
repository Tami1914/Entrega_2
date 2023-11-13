let songs = [
];

function initialize(){
  const SONG_FORM = document.getElementById("song-form");
  SONG_FORM.addEventListener("submit", addSong);

  showSongs();
}

function addSong(event){
  event.preventDefault();

  const SONG = event.target.song.value;
  const ARTIST = event.target.artist.value;

  songs.push({
    song: SONG,
    artist: ARTIST
  })

  showSongs();
}

function showSongs(){
  const SONG_LIST = document.getElementById("song-list"); 

  SONG_LIST.innerHTML = "";

  for(let i = 0; i < songs.length; i++){
    SONG_LIST.innerHTML += `<li>${songs[i].song} - ${songs[i].artist} <button onclick="deleteSong(${i})">DELETE</button></li>`;
  }
}

function deleteSong(songId){
  songs.splice(songId, 1);

  showSongs();
}

initialize();