
var photos = ["Pancake.jpg",
              "Cake.jpg",
              "Soup.jpg",
              "Donut.jpg",
              "Pie.jpg",
              "Cupcake.jpg",
              "Sundae.jpeg",
              "Churros.jpg",
              "Cheesecake.jpg",
              "Yogurt.jpg",
              "Cassava.jpg",
              "Flan.jpg",
              "Shaved Ice.jpg",
              "Bun.jpg",
              "Fungus.jpg",
              "Pan Dulce.jpg",
              "Crepe.jpg",
              "Creme Brulee.jpeg", ];

var dessertList = ["pancake",
                   "cake",
                   "soup",
                   "donut",
                   "pie",
                   "cupcake",
                   "sundae",
                   "churros",
                   "cheesecake",
                   "yogurt",
                   "cassava",
                   "flan",
                   "shaved ice",
                   "bun",
                   "fungus",
                   "pan dulce",
                   "crepe",
                   "creme brulee", ];

var adjectiveList = ["lip-smacking",
                     "sweet",
                     "scrumptious",
                     "mouth-watering",
                     "adorable", 
                     "little",
                     "dazzling",
                     "electrifying",
                     "soul-warming",
                     "adventurous",
                     "delightful",
                     "savory",
                     "sparkling",
                     "star-crossed",
                     "vivacious",
                     "proud",
                     "exubrant",
                     "chubby",
                     "colossal",
                     "fluffy",
                     "ambitious",
                     "silly",
                     "brilliant",
                     "considerate",
                     "deep",
                     "passionate",
                     "timid",
                     "sassy",
                     "jolly",
                     "quirky",
                     "mind-slapping",
                     "God-blessing",
                     "optimistic",
                     "goofy",
                     "heart-filling",
                     "pioneering",
                     "mind-blowimg",
                     "melodic", ];

var dessert = "";
var adjective1 = "";
var adjective2 = "";
var dessertCheck = [];
var adjectiveCheck = [];
var name = "Hello";
var random = 0;
var runOrNot = true;
var divNumber = 1;
var generator = "compliment";

function complimentTime(){
  
  name = document.getElementById("userInput").value;
  nameRefiner();
    
  decideDessert();
  decideAdjective1();
  decideAdjective2();
  if(generator == "compliment"){  
    document.getElementById("imageContainer").innerHTML = "<img src='Images/Food/" + photos[dessert] + "' height='100px' alt='" + dessertList[dessert] + "'>";
    document.getElementById("textArea").innerHTML = "I know your true identity " + name + "! <br> You " + adjectiveList[adjective1] + ", " + adjectiveList[adjective2] + " " + dessertList[dessert] + "!";
    console.log("   - " + name + ", friend of " + adjectiveList[adjective1] + ", " + adjectiveList[adjective2] + " " + dessertList[dessert] + "!");  
  }
  else if(generator == "insult"){  
    document.getElementById("imageContainer").innerHTML = "<img src='Images/Food/" + photos[dessert] + "' height='100px' alt='" + dessertList[dessert] + "'>";
    document.getElementById("textArea").innerHTML = "I know your true identity " + name + "! <br> Enemy of defenseless " + adjectiveList[adjective1] + ", " + adjectiveList[adjective2] + " " + dessertList[dessert] + "s!";
    console.log("   - " + name + ", enemy of " + adjectiveList[adjective1] + ", " + adjectiveList[adjective2] + " " + dessertList[dessert] + "!");  
  }
}

function nameRefiner(){
  name = name.toLowerCase();
  name = name.charAt(0).toUpperCase() + name.slice(1);  
    
  if(name == ""){
    name = "Unidentified computer user";  
  }
  if(name == " "){
    name = "Spacebar Man";  
  }
  if(name == "  "){
    name = "Spacebar Man";  
  }
  if(name == "   "){
    name = "Spacebar Man";  
  }  
}

function decideDessert(){
  runOrNot = true;
  random = Math.floor(Math.random() * dessertList.length)  
  dessert = dessertList[random];
  for(var i=0; i<dessertCheck.length; i++){
    if(dessertCheck[i] == undefined){}  
    else if(dessert == dessertCheck[i]){
      runOrNot = false;     
    }
    else{}  
  }
  if(runOrNot == true){  
    dessertCheck.push(dessert);
    dessert = random;
    if(dessertCheck.length > 5){
      dessertCheck.shift();      
    }
  }
  else{decideDessert();}
}

function decideAdjective1(){
  runOrNot = true;
  random = Math.floor(Math.random() * adjectiveList.length)  
  adjective1 = adjectiveList[random];
  for(var i=0; i<adjectiveCheck.length; i++){
    if(adjectiveCheck[i] == undefined){}  
    else if(adjective1 == adjectiveCheck[i]){
      runOrNot = false;  
    }
    else{}  
  }
  if(runOrNot == true){  
    adjectiveCheck.push(adjective1); 
    adjective1 = random;
    if(adjectiveCheck.length > 10){
      adjectiveCheck.shift();  
    }
  }
  else{decideAdjective1();}  
}

function decideAdjective2(){
  runOrNot = true;
  random = Math.floor(Math.random() * adjectiveList.length)  
  adjective2 = adjectiveList[random];
  for(var i=0; i<adjectiveCheck.length; i++){
    if(adjectiveCheck[i] == undefined){}  
    else if(adjective2 == adjectiveCheck[i]){
      runOrNot = false;  
    }
    else{}  
  }
  if(runOrNot == true){  
    adjectiveCheck.push(adjective2); 
    adjective2 = random;
    if(adjectiveCheck.length > 10){
      adjectiveCheck.shift();  
    }
  }
  else{decideAdjective2();}  
}

document.addEventListener('keypress', callFunction)

function callFunction(event){
 if(event.key == "Enter"){ complimentTime(); }   
}

function inputResetter(){
  document.getElementById("userInput").value = "";  
}

document.getElementById("copyright").addEventListener('mouseenter', textChanger);
document.getElementById("copyright").addEventListener('mouseleave', textChanger);
function textChanger(){
  if(divNumber == 1){
    document.getElementById("copyright").innerHTML = "Secret Menu = Ctrl + Shift + J";
    divNumber += 1;  
  }
  else if(divNumber == 2){
    document.getElementById("copyright").innerHTML = "Made by Khai Sam *Copyrighted 2017";
    divNumber -= 1;  
  }  
}

document.getElementById("copyright").addEventListener('click', textAlteration);
function textAlteration(){
  if(generator == "compliment"){
    generator = "insult";  
  }
  else if(generator == "insult"){
    generator = "compliment";  
  }
}

console.log("Welcome to the History Zone:");
