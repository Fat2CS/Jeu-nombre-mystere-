let nouveau = document.getElementById("NewGame");

const SOLUTION = document.getElementById("solution");
const PROPOSER = document.getElementById("proposer");
// console.log(nouveau);

// nouveau
const min = Math.ceil(1);
const max = Math.floor(100);
let numEssai = 1;
let nombreMistere = null;

nouveau.addEventListener("click", () => {
  nombreMistere = Math.floor(Math.random(1) * (max - min)) + 1;
  numEssai = 1;
  // pour initialiser les inputs
  document.getElementById("proposition").value = "";
  document.getElementById("essai").value = numEssai;
  document.getElementById("message").value = "";
  document.getElementById("réponses").value = "";
});

// *******

const solution = document.getElementById("Solution");

solution.addEventListener("click", () => {
  document.getElementById("réponses").value = nombreMistere;
});

// *******************************

PROPOSER.addEventListener("click", () => {
  if (numEssai <= 7) {
    if (numEssai == 7) {
      numEssai--;
      document.getElementById("essai").value = numEssai;
      alert("c'est perdu");
    }
    numEssai++;
    document.getElementById("essai").value = numEssai;
    let proposition = document.getElementById("proposition").value;
    if (proposition < nombreMistere) {
      document.getElementById("message").value = "trop petit";
    } else if (proposition > nombreMistere) {
      document.getElementById("message").value = "trop grand";
    } else {
      document.getElementById("message").value = "gagné";
    }
  }
});


//**************************//