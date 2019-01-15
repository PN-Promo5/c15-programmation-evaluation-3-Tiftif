// EXERCICE 1 :
// 1.1/ Créez une fonction permettant d’afficher l’interface suivante

//variable
let ctn = document.createElement("div"); // creation conteneur
let ctn2 = document.createElement("div")
ctn2.style.display = "none"; // cacher ctn
let para = document.createElement("p");
let title = document.createElement("h1");
let btnThisWeek = document.createElement("input");


title.textContent = "Cinéma Le Dauphin"
para.textContent = "Une salle de cinéma grand confort, un restaurant et une sélection de vins de qualité.\
Des avant premières, des rencontres, des ciné-repas, des débats, des ateliers,\
des ciné-goûters, de 11h30 à 23h du mardi au dimanche (jusqu’à minuit le vendredi et le samedi)" // longue string

//appendChild
function pageHtml() {
  document.body.appendChild(ctn);
  document.body.appendChild(ctn2);
  ctn.appendChild(title)
  ctn.appendChild(para)
  ctn.appendChild(btnThisWeek)
}
pageHtml(); // call function
//btn
btnThisWeek.type = "button";
btnThisWeek.value = "Voir les films à l’affiche cette semaine";

// 1.2/ Créez un tableau à deux dimensions contenant les informations suivantes (ces informations sont
// liées aux films diffusés dans le cinéma) :


// CREATION DE LA TABLE DE FILMS
let arrayMovie = [
  ["Titre du film", "Réalisateur", "Nationalité", "Année", "Durée", "Version"],
  ["IN MY ROOM", "Ulrich Köhler", "Allemagne", "2019", "2h", "vf"],
  ["UN VIOLENT DÉSIR DE BONHEUR", "Clément Schneider", "France", "2018", "1h15", "vf"],
  ["WHAT YOU GONNA DO WHEN THE WORLD'S ON FIRE ?", "Roberto Minervini", "Etats-Unis/Italie", "2018", "1h06", "vostfr"],
  ["GRASS", "Hong Sang-Soo", "Corée du Sud ", "2018", "1h06", "vostfr"]
];


// fonction creation de tab html
function createArray(seq, booleen) {
  let i = 0; // indice
  let j; // indice 2eme tab
  let currentElt;
  let currentElt2;
  let table = document.createElement("table"); // creation dom html
  ctn2.appendChild(table);
  let thead = document.createElement("thead");
  table.appendChild(thead);
  let trHead = document.createElement("tr");
  thead.appendChild(trHead);
  let tbody = document.createElement("tbody");
  table.appendChild(tbody);
  let th;
  let tr;
  let td;

  // condition en tete indice 0
    let line1 = seq[0];

    //boucle recuperation indice
    while (i < line1.length) {
      currentElt = line1[i];
      th = document.createElement("th");
      th.textContent = currentElt;
      trHead.appendChild(th);
      i += 1;
      th.style.backgroundColor = "black";
      th.style.color = "white";
    }
    i = 1


  // boucle tab premiere dimensions
  while (i < seq.length) {
    currentElt = seq[i];
    tr = document.createElement("tr");
    tbody.appendChild(tr);
    i += 1;
    j = 0;

    // boucle tab deuxieme dimension
    while (j < currentElt.length) {
      currentElt2 = currentElt[j];
      td = document.createElement("td");
      td.textContent = currentElt2;
      tr.appendChild(td);
      j += 1;
    }
  }
  return table;
}


btnThisWeek.addEventListener("click", display, false); // methode d'action sur le "click" du btn

function display() { // afficher cacher ctn.
  ctn.style.display = "none";
  ctn2.style.display = "block";
}
createArray(arrayMovie, true);

// 2.2/ Créez une fonction prenant deux paramètres :
// - le tableau créé en 2.1
// - un nombre
// Cette fonction doit retourner un tableau de chaînes de caractères contenant le nom des substances
// dont la température d’ébullition en °C est inférieure au nombre passé en paramètre.



let arrayTemperature = [
  ["SUBSTANCES", "Température de fusion ou solidification en °C", "Température d’ébullition en °C"],
  ["acide acétique", "17", "118"],
  ["acide nitrique", "-41", "86"],
  ["alcool éthylique", "-114", "78"],
  ["aluminium", "660", "2450"]
];


function calculateTemp(array, number) {
  let i = 0;
  let arrayResult = [];
  let currentElement;
  while (i < array.length) {
    currentElement = array[i];
    if (currentElement[2] < number) { //selection colonne 3
      arrayResult.push(currentElement[0]); // ajout de la premiere colonne
    }
    i++;
  }
  return arrayResult;
}

calculateTemp(arrayTemperature, 123);
