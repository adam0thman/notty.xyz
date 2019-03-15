// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDGsek6bhfTV0UvMQO3ZkfLI27rh5Db0DI",
    authDomain: "imhere-5e2dc.firebaseapp.com",
    databaseURL: "https://imhere-5e2dc.firebaseio.com",
    projectId: "imhere-5e2dc",
    storageBucket: "imhere-5e2dc.appspot.com",
    messagingSenderId: "932669852417"
  };
  
  //Initialize main firebase app
  firebase.initializeApp(config);
  
  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();
    
  // Variables
  var pageURL = window.location.protocol+"//"+window.location.host;
  var pageLogin = "/login.html";
  var pageMain = "/main.html";
  var pageAdmin = "/admin.html";
  console.log("pageURL is: "+pageURL);
  console.log("pageLogin is: "+pageLogin);
  console.log("pageMain is: "+pageMain);
  console.log("pageAdmin is: "+pageAdmin);

  // Function for Logging out
  function callLogout() {
    firebase.auth().signOut().then(function() {
      window.location.replace(pageURL+pageMain);
    }).catch(function(error) {
      console.log(error);
    });
  }
