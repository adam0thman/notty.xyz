
<script>
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
    
  // Disable deprecated features
  db.settings({
    timestampsInSnapshots: true
  });
    
  // Variables
  //var pageURL = window.location.protocol+"//"+window.location.host;
  //var pageURL = 'https://www.streamshop.io';
  var pageLogin = "/login.php";
  var pageMain = "/main.php?v=main";
  var pageAdmin = "/admin.php?v=admin";
    
  // Function for Logging out
  function callLogout() {
    firebase.auth().signOut().then(function() {
      window.location.replace(pageURL+pageMain);
    }).catch(function(error) {
      console.log(error);
    });
  }
</script>
