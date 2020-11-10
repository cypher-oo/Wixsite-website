function submitForm(e) {
    e.preventDefault();
    var name = document.forms["welcome_form"]["name"].value;
   
   // store player name
   sessionStorage.setItem("name", name);
   
   
   location.href=" quiz.html";
   
}