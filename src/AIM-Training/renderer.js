
let divStart =  document.getElementById("div_start");
let btnStart = document.getElementById("btn_start");
let interval = document.getElementById("interval");
let aimTrainingDiv = document.getElementById("aimTraining");
let parametreDiv = document.getElementById("parametre")

let score = document.getElementById("score");
let timer = document.getElementById("timer");

let btn_deplacer = document.createElement("button");

let jeuStart = false;


// Detection du bouton de lancement du jeu
btnStart.addEventListener("click", () => {

    btn_deplacer.className = "btn_click"; // Ajout a la class 'btn_click" pour qu'il recuperer les propriété css
    btn_deplacer.innerHTML = "Click";
    aimTrainingDiv.appendChild(btn_deplacer); // Ajout du bouton dans la div de jeu

    jeuStart = true; // Lancement du jeu

    setInterval(deplacementBtn, interval.value); // Lancement de l'interval entre chaque teleportation du bouton
    divStart.remove(); // Supression de la div start pour laisser place au jeu

});


//Detection du click du bouton de jeu, augmentation du score a chaque click
btn_deplacer.addEventListener("click", () => {

    score.innerHTML = parseInt(score.innerHTML) + 1
    
});


// Fonction de deplacement du bouton
function deplacementBtn(){

    // Reagarde si le jeu et lancer
    if (jeuStart) {

        btn_deplacer.style.position = "absolute"; // Mise a la position absolute du bouton pour pouvoir le deplacer
        const rectDivAim = aimTrainingDiv.getBoundingClientRect(); // Recuperation des propriété comme la position ou la taille du la div 'aimTraining'

        console.log(`MaxPosDivY : ${rectDivAim.height}`);
        
        

        let randomX = Math.random() * window.innerWidth - 20; // Random de la position x du bouton
        let randomY = Math.floor(Math.random() * (rectDivAim.height - rectDivAim.y + 1)) + rectDivAim.y + 20; // Random de la position y du bouton, il doit apparaitre dans la div

        console.log(`RandomX : ${randomX}, RandomY = ${randomY}`);
                


        btn_deplacer.style.left = randomX + "px"; // Set de la position X
        btn_deplacer.style.top = randomY + "px"; // Set de la position Y

        // Test pour arreter le jeu a 60s
        if (timer.innerHTML === "60") {
            jeuStart = false;
        }


        console.log("Bouton deplacer");
    }
}




