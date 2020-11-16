//required packages
const readlineSync = require('readline-sync');
const chalk = require('chalk');
const Database = require("@replit/database")

//create a new database
const db = new Database()

//shortcut variables
var blue = chalk.bold.blue;
var red = chalk.bold.red;
var green = chalk.bold.green;
var yellow = chalk.bold.yellow;
var white = chalk.bold.white;

//declaring variables
var player_name = (readlineSync.question(chalk.bold.bgBlack("Hello there, what is your name: "))).toUpperCase();
console.log("");

//welcoming messages
console.log(chalk.bold.bgYellow("WELCOME TO THE KNOWLEDGE QUEST!!! " + player_name +"\n"));
console.log(chalk.bold.bgBlue("KNOW THE RULES, BEFORE YOU PLAY"))
console.log(chalk.bold.white("          1. Totally there are 10 questions."));
console.log(chalk.bold.white("          2. Choose the option among 'a' or 'b' or 'c' or 'd'."))

db.list().then(keys => {
	var firstTime = 0;
	keys.forEach(key => {
		if(key == player_name){
			firstTime = 1;
		}
	});
	if(keys.length == 0){
		db.set("maxValue",0).then(() => {
			var returnScore =  playQuiz();
validate(returnScore);
enterData(player_name, returnScore);
	});
}});

var returnScore =  playQuiz();
validate(returnScore);
enterData(player_name, returnScore);

//MARVEL QUIZ QUESTIONS PLAY
function playQuiz(){
var player_score=0;
console.log(chalk.bold.white("Cool, Let's us know how much you ")+chalk.bold.bgRed("MARVEL")+"\n");

console.log(red("Avenger ") + white("Let's go\n"));

const marvelQuiz = [
    {
      q: "Which of these is NOT the name of one of the 'Heroes Three' of Asgard (Thor's pals)?",
      a1: "Hogun",
      a2: "Bjorn",
      a3: "Fandral",
      a4: "Volstagg",
      crt: "b"
    },
    {
      q: "Which of these beings did the 'Science Bros' have NOTHING to do with their creation(Thor's pals)?",
      a1: "Destroyer",
      a2: "Hulk",
      a3: "Ultron",
      a4: "Vision",
      crt: "a"
    },
    {
      q: "Due to studio rights, the lineage of the Maximoff Twins has changed in Avengers: Age of Ultron. Who is their ORIGINAL father within the comics?",
      a1: "Dr.Doom",
      a2: "Thanos",
      a3: "Magneto",
      a4: "Norman OSbom",
      crt: "c"
    },
    {
      q: "Peggy Carter was a member of which military entity before helping found S.H.I.E.L.D?",
      a1: "British Secret Service",
      a2: "Strategic Scientific Reserve",
      a3: "Homefront Security Division",
      a4: "Spark crawdles",
      crt: "b"
    },
    {
      q: "What is the name of Thanos' servant and minion?",
      a1: "The Seer",
      a2: "The Other",
      a3: "Mouth of Thanos",
      a4: "The Seeker",
      crt: "b"

    },
    {
      q: "Which of these films happens first in Marvel Cinematic Continuity?",
      a1: "The Incredible Hulk",
      a2: "Iron Man 2",
      a3: "Thor",
      a4: "Spider Man",
      crt: "a"

    },
    {
      q: "Captain America's shield is made of:",
      a1: "Titanium",
      a2: "Zirconium",
      a3: "Adamantium",
      a4: "Vibranium",
      crt: "d"
    }
    , {
      q: "Who was assigned by Nick Fury to specifically monitor the cosmic cube, a.k.a Tesseract before Loki's arrival on Earth?",
      a1: "Agent Coulson",
      a2: "Black Window",
      a3: "Hawkeye",
      a4: "Captain America",
      crt: "c"
    },
    {
      q: "What is the name of Tony Stark's Robotic lab assistant?",
      a1: "Dum-E",
      a2: "Dim-Wit",
      a3: "Ding-bat",
      a4: "Dum-B",
      crt: "a"
    },
    {
      q: "Before being recruited by Black Widow, Bruce Banner was helping citizens in:",
      a1: "Belize, South America",
      a2: "Manila, PhillreadlineSync.questionines",
      a3: "Kolkata, India",
      a4: "Libronqe, North America",
      crt: "c"
    }
  ]

//START QUIZ
  for (let i = 0; i < marvelQuiz.length; i++) {
    console.log(`${i + 1}. ${yellow(marvelQuiz[i].q)}`);
    console.log(`          a: ${white(marvelQuiz[i].a1)}`);
    console.log(`          b: ${white(marvelQuiz[i].a2)}`);
    console.log(`          c: ${white(marvelQuiz[i].a3)}`);
    console.log(`          d: ${white(marvelQuiz[i].a4)}`);
    var thisAnswer = readlineSync.question("Answer: ");
	console.log("\n");
   if (thisAnswer.toLowerCase() == marvelQuiz[i].crt){ 
     player_score++;
   } 
   else{ 
     break;
   } 
   }
	return player_score;
}

function validate(returnScore){

if (returnScore== 10 ){
      console.log(chalk.bold.bgGreen("You are a TRUE MARVEL FAN, you scored FULL!! ZING ZING YOU ARE AMAZING")+"😍😍😍");
   }   
   else if(returnScore>5   && returnScore<10 ){
    console.log(`${chalk.bold.bgBlack("You are a good, you scored: ")} ${chalk.bold.bgGreen (returnScore)}`+ "😉😉😉");
   }
   else{ 
   console.log(`${chalk.bold.red("🤨🤨🤨, You are a not a true MARVEL fan, you scored: ")} ${chalk.bold.bgRed(returnScore)}`);
  }


}
  
function enterData(player_name, returnScore){
	
db.set(`${player_name}`, `${returnScore}`).then(() => {
db.get("maxValue").then(value => {
	if (value <= returnScore){
		db.set("maxValue", returnScore);
		console.log(`${blue("YOU SCORE IS THE HIGHEST - ")}${returnScore} 😮😮😮`)
	}
	else{
		db.get("maxValue").then(value =>{
			console.log(`${yellow("HIGHEST SCORE TILL NOW IS - ")}${value} 😉`)
		});
	}
});

});
}


db.list().then(keys => {
    console.log(keys);
});