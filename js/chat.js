// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, onValue, push, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCz1wYw2wOMfMiKubmAJhxEY6Hriz3_tuY",
  authDomain: "proyectoentrega3-68c8e.firebaseapp.com",
  databaseURL: "https://proyectoentrega3-68c8e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "proyectoentrega3-68c8e",
  storageBucket: "proyectoentrega3-68c8e.appspot.com",
  messagingSenderId: "724609322804",
  appId: "1:724609322804:web:90464395871b19c0b01f61"
};

// Initialize Firebase
initializeApp(FIREBASE_CONFIG);

function initialize() {
  const FORM_MESSAGE = document.getElementById("form-message");
FORM_MESSAGE.addEventListener("submit", addMessage);
  showMessages();
}

function showMessages() {
  const MESSAGES_REF = ref(getDatabase(), "message/");

  onValue(MESSAGES_REF, showAllMessages);
}

function showAllMessages(snapshot) {
  const VALUES = snapshot.val();

  const SENT_MESSAGES = document.getElementById("sent-messages");
  SENT_MESSAGES.innerHTML="";

  for (let value in VALUES) {
    const SENDER = VALUES[value].emisor;
    const VALUE = VALUES[value].text;
    
    
    SENT_MESSAGES.innerHTML += `<p>${SENDER}: ${VALUE}</p>`
  }
}

function addMessage(e) {
  e.preventDefault();
  
  const MESSAGE_SENDER = e.target["message-sender"].value;
  const MESSAGE_TEXT = e.target["message-text"].value;

  const MESSAGES_REF = ref(getDatabase(), "message/");
  const NEW_MESSAGE = {
    emisor: MESSAGE_SENDER,
    text: MESSAGE_TEXT
  }
  push(MESSAGES_REF, NEW_MESSAGE);
}

initialize();