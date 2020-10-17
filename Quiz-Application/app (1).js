window.onload = function() {
	show(0);
}


// QUESTIONS

let questions = [
{
	id: 1,
	questions: "What is the full form of RAM ?",
	answer: "Random Access Memory",
	options: [
	"Random Access Memory",
	"Randomely Access Memory",
	"Run Accept Memory",
	"None of these"
    ]
},

{
    id: 2,
	questions: "What is the full form of CPU ?",
	answer: "Central Processing Unit",
	options: [
	"Central Program Unit",
	"Central Preload Unit",
	"Central Processing Unit",
	"None of these"
    ]
},	

{
    id: 3,
	questions: "What is the full form of E-mail ?",
	answer: "Electronic Mail",
	options: [
	"Electronic Mail",
	"Electric Mail",
	"Engine Mail",
	"None of these"
    ]
}
];
	
function submitForm(e) {
    e.preventDefault();
    var name = document.forms["welcome_form"]["name"].value;
   
   // store player name
   sessionStorage.setItem("name", name);
   
   
   location.href="quiz.html";
   
}

let question_count = 0;

function next() {
	question_count++;
	show(question_count);
}

function show(count) {
	let question = document.getElementById("questions").value;
	
	 question.innerHTML = "<h2>{questions[count].questions}</h2>"
   
}
     	  
