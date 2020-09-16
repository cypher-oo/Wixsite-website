 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAnRYPbPHo53dgRx4Sfym93kG43b-5KG68",
    authDomain: "form-f1241.firebaseapp.com",
    databaseURL: "https://form-f1241.firebaseio.com",
    projectId: "form-f1241",
    storageBucket: "form-f1241.appspot.com",
    messagingSenderId: "48055513074",
    appId: "1:48055513074:web:01f5384cf2c8786c17856b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 const auth = firebase.auth();
 
 function signup(){
	  
	   var email = document.getElementById("email");
	   var password = document.getElementById("password");
	   
	   const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
	   promise.catch(e => alert(e.message));
	   
	   alert("Signed In");
		
 }
	   