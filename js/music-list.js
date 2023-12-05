/* let songs = [
  
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


initialize(); */





function ValidateForm() {
  let song = document.getElementById('song').value;
  let artist = document.getElementById('artist').value;
  let duration = document.getElementById('duration').value;
  let genre = document.getElementById('genre').value;

  if (song == "") {
    alert('El campo cancion es requerida')
    return false;
  }
  if (artist == "") {
    alert('El campo artist es requerido')
    return false;
  }
  if (duration == "") {
    alert('El campo duration es requerido')
    return false;
  }
  if (genre == "") {
    alert('El campo genre es requerido')
    return false;
  }

  return true;
}

function ReadData() {

  let listPeople;

  if (localStorage.getItem('listPeople') == null) {
    listPeople = [];
  }
  else {
    listPeople = JSON.parse(localStorage.getItem('listPeople'));
  }

  var html = "";

  listPeople.forEach(function (element, index) {
    html += "<tr>";
    html += "<td>" + element.song + "</td>";
    html += "<td>" + element.artist + "</td>";
    html += "<td>" + element.duration + "</td>";
    html += "<td>" + element.genre + "</td>";
    html += '<td><button onclick="deleteData(' + index + ')" class="btn btn-danger">Elimiar Dato</button><button onclick="editData(' + index + ')" class="btn btn-warning">Editar Dato</button>';
    html += "</tr>";
  });

  document.querySelector('#table-data').innerHTML = html;
}

document.onload = ReadData();

function AddData() {
  if (ValidateForm() == true) {
    let song = document.getElementById('song').value;
    let artist = document.getElementById('artist').value;
    let duration = document.getElementById('duration').value;
    let genre = document.getElementById('genre').value;

    var listPeople;

    if (localStorage.getItem('listPeople') == null) {
      listPeople = [];
    }
    else {
      listPeople = JSON.parse(localStorage.getItem('listPeople'));
    }

    listPeople.push({
      song: song,
      artist: artist,
      duration: duration,
      genre: genre
    });

    localStorage.setItem('listPeople', JSON.stringify(listPeople));

    ReadData();

    document.getElementById('song').value = "";
    document.getElementById('artist').value = "";
    document.getElementById('duration').value = "";
    document.getElementById('genre').value = "";
  }
}

function deleteData(index) {

  let listPeople;

  if (localStorage.getItem('listPeople') == null) {
    listPeople = [];
  }
  else {
    listPeople = JSON.parse(localStorage.getItem('listPeople'));
  }

  listPeople.splice(index, 1);
  localStorage.setItem('listPeople', JSON.stringify(listPeople));

  ReadData();
}

function editData(index) {
  document.getElementById('btn-add').style.display = 'none';
  document.getElementById('btn-update').style.display = 'block';

  let listPeople;

  if (localStorage.getItem('listPeople') == null) {
    listPeople = [];
  }
  else {
    listPeople = JSON.parse(localStorage.getItem('listPeople'));
  }

  document.getElementById('song').value = listPeople[index].song;
  document.getElementById('artist').value = listPeople[index].artist;
  document.getElementById('duration').value = listPeople[index].duration;
  document.getElementById('genre').value = listPeople[index].genre;

  document.querySelector('#btn-update').onclick = function () {
    if (ValidateForm() == true) {
      listPeople[index].song = document.getElementById('song').value;
      listPeople[index].artist = document.getElementById('artist').value;
      listPeople[index].duration = document.getElementById('duration').value;
      listPeople[index].genre = document.getElementById('genre').value;

      localStorage.setItem('listPeople', JSON.stringify(listPeople));
      ReadData();

      document.getElementById('song').value = "";
      document.getElementById('artist').value = "";
      document.getElementById('duration').value = "";
      document.getElementById('genre').value = "";

      document.getElementById('btn-add').style.display = 'block';
      document.getElementById('btn-update').style.display = 'none';
    }
  };
}


