
//ADD YOUR FIREBASE LINKS HERE

const config=  {
      apiKey: "AIzaSyBkdo40DtkIIi65IcxLCGZO7AEZLilXTEg",
      authDomain: "kwitter-ef3dd.firebaseapp.com",
      projectId: "kwitter-ef3dd",
      storageBucket: "kwitter-ef3dd.appspot.com",
      messagingSenderId: "806877076781",
      appId: "1:806877076781:web:519180a698b6808a1fc7a4"
};
//initialize firebase

firebase.initializeApp(config);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
