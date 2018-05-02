
var photos = ["http://sweetdessertcafe.com/uploads/9/1/9/3/91939434/pancakes-sweet-dessert-cafe.jpg?284",
             "http://s1.1zoom.me/big0/253/344721-admin.jpg",
             "http://files.kitchenbowl.com/recipe/luDbDIvw03/chinese-sweet-soup-dessert.jpg",
             "http://del.h-cdn.co/assets/16/07/1455890695-chocolate-banana-donuts.jpg",
             "https://images-gmi-pmc.edge-generalmills.com/fb78ee4c-fda4-42c5-bc2b-a3ecf0096a29.jpg",
             "https://www.lifeloveandsugar.com/wp-content/uploads/2014/04/Perfect_Moist_Fluffy_Vanilla_Cupcakes8.jpg",
             "http://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/9/28/0/FNK_Waffled-Brownie-Sundae_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383787370815.jpeg",
             "https://images-gmi-pmc.edge-generalmills.com/986c471f-40ff-466d-850a-1c0f9295439f.jpg",
             "https://www.thecheesecakefactory.com/assets/images/Menu-Import/CCF_FreshStrawberryCheesecake.jpg",
             "http://farm8.staticflickr.com/7284/9076471099_40aafe6182_c.jpg",
             "https://i.ytimg.com/vi/OECPo018MUs/maxresdefault.jpg",
             "http://cachlambanhflan.net/wp-content/uploads/2017/03/nguyen-nhan-lam-banh-flan-bi-ro-va-cach-khac-phuc-nhu-the-nao.jpg",
"https://static1.squarespace.com/static/5536ab39e4b011692d3b000f/55396b6be4b02fb0125a0416/55398189e4b040d51046ae25/1430112920128/IMG_3277%282%29.jpg",
             "https://i.ytimg.com/vi/gEWrtGQ7qHk/maxresdefault.jpg",
             "http://www.tastehongkong.com/wp/2011/white-fungus-papaya-a.jpg",
             "https://media1.fdncms.com/sacurrent/imager/u/original/3034615/17156039_1843135842608739_5971395632376007995_n.jpg",
             "https://assets.epicurious.com/photos/57990894bd7fde737c83776e/master/pass/breakfast-crepes.jpg",
             "http://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/11/24/0/1G1C11_Creme-Brulee.jpg.rend.hgtvcom.406.305.suffix/1382538717232.jpeg", ];

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
    document.getElementById("imageContainer").innerHTML = "<img src='" + photos[dessert] + "' height='100px' alt='" + dessertList[dessert] + "'>";
    document.getElementById("textArea").innerHTML = "I know your true identity " + name + "! <br> You " + adjectiveList[adjective1] + ", " + adjectiveList[adjective2] + " " + dessertList[dessert] + "!";
    console.log("   - " + name + ", friend of " + adjectiveList[adjective1] + ", " + adjectiveList[adjective2] + " " + dessertList[dessert] + "!");  
  }
  else if(generator == "insult"){  
    document.getElementById("imageContainer").innerHTML = "<img src='" + photos[dessert] + "' height='100px' alt='" + dessertList[dessert] + "'>";
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
