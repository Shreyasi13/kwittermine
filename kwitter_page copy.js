//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDDeuOGoRqwKOxScqRtEZetN3uRiUNFfu8",
      authDomain: "switter-9890d.firebaseapp.com",
      databaseURL: "https://switter-9890d-default-rtdb.firebaseio.com",
      projectId: "switter-9890d",
      storageBucket: "switter-9890d.appspot.com",
      messagingSenderId: "172382089527",
      appId: "1:172382089527:web:d596da135a0a7f2022aab2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name"); 
    room_name = localStorage.getItem("room_name");
    function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value',function(snapshot) 
{ document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
childData = childSnapshot.val(); 
if(childKey != "purpose") {
 firebase_message_id = childKey;
 message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
