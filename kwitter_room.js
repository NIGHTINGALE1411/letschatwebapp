
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBNypnEC148fsCLtfDUSG2kJGRS4_zO90E",
      authDomain: "kwitter-83a6d.firebaseapp.com",
      databaseURL: "https://kwitter-83a6d-default-rtdb.firebaseio.com",
      projectId: "kwitter-83a6d",
      storageBucket: "kwitter-83a6d.appspot.com",
      messagingSenderId: "491946604236",
      appId: "1:491946604236:web:90cdc47fa9265d239df469",
      measurementId: "G-297JZKJMTD"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
       row = "<div class = 'room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom{
      room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("roomname",room_name);
window.localStorage="kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
