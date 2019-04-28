// Initialize Firebase
var config = {
  apiKey: "AIzaSyA5MrkMguxldjmishci0NwWbhs3CrMvvcg",
  authDomain: "nottynuts-4c797.firebaseapp.com",
  databaseURL: "https://nottynuts-4c797.firebaseio.com",
  projectId: "nottynuts-4c797",
  storageBucket: "nottynuts-4c797.appspot.com",
  messagingSenderId: "536623498374"
};

//Initialize main firebase app
firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Variables
var pageURL = window.location.protocol + "//" + window.location.host;
var pageLogin = "/login.html";
var pageMain = "/index.html";
var pageAdmin = "/admin.html";
console.log("pageURL is: " + pageURL);
console.log("pageLogin is: " + pageLogin);
console.log("pageMain is: " + pageMain);
console.log("pageAdmin is: " + pageAdmin);

// Function for Logging out
function callLogout() {
  firebase.auth().signOut().then(function () {
    console.log("User has been Signed Out!");
    window.location.replace(pageURL + pageLogin);
  }).catch(function (e) {
    console.log("Error signing out:", e);
  });
}
