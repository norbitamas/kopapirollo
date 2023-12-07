

// gép és a user eredménye 0ról indul.
let userPoint = 0;
let compPoint = 0;

//tömb létrehozása kő papir ollo
function play(userChoice){
  let choices = ["rock", "paper","scissors"];
  //véletlenszerűen dönti el a gép hogy mit ad ki, a math.floor egy függvény ami automatikusan dönti el melyiket válassza, és mivel 3 tömb van ezért 3x szorozzuk meg
  let randomIndex = Math.floor(Math.random() * 3);
  let computerChoise = choices [randomIndex];

  if(userChoice == "rock"){
      document.getElementById("bko").style.border =" red solid 3px";
      document.getElementById("bpapir").style.border =" red solid 0px";
      document.getElementById("bollo").style.border =" red solid 0px";
  } else if (userChoice == "paper"){
    document.getElementById("bpapir").style.border =" red solid 3px";
    document.getElementById("bollo").style.border =" red solid 0px";
    document.getElementById("bko").style.border =" red solid 0px";
  } else {
    document.getElementById("bollo").style.border =" red solid 3px";
    document.getElementById("bko").style.border =" red solid 0px";
    document.getElementById("bpapir").style.border =" red solid 0px";
  }

// eredményt irja ki amit a user és a gép adott meg
  let result = getResult(userChoice, computerChoise);
  //itt hozzácsatuljuk a htmlhez a választ eredményt
  document.getElementById("result").innerHTML = result;

  //itt fogja váltogatni a randomszerű gép által döntött képeket a html oldalon
  if(computerChoise == "rock"){
    document.getElementById("gepvalasztkep").src = "ko.png";
  } else if (computerChoise == "paper"){
    document.getElementById("gepvalasztkep").src = "papir.png";
  } else {
    document.getElementById("gepvalasztkep").src = "ollo.png";
  }

  // itt irja ki és számolja ki hány pontot nyert
  document.getElementById("tePontod").innerHTML = userPoint;
  document.getElementById("gepPont").innerHTML = compPoint;
}

function getResult(user, computer){
  if (user === computer){
    return "Döntetlen!"
  } else if (
    // === egyenlőség jel egyenlő a választással  && jelenti az ÉS , || jelenti a vagy szot
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user == "scissors" && computer === "paper")
  ) {
    // itt számolja a user pontjait a ++ jelenti a +1 pontot
    userPoint++;
    return "Te nyertél";
  } else {
    // itt számolja a gép pontjait ++ jelenti a +1 pontot
    compPoint++;
    return "Gép nyert";
  }
}