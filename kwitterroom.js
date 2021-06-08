// Your web app's Firebase configuration
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
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addroom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page copy.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
  