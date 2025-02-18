
let divStart =  document.getElementById("div_start");
let btnStart = document.getElementById("btn_start");
let interval = document.getElementById("interval");
let aimTrainingDiv = document.getElementById("aimTraining");
let parametreDiv = document.getElementById("parametre")

let score = document.getElementById("score");
let timer = document.getElementById("timer");

let btn_deplacer = document.createElement("button");

let buttonLoadMenu = document.getElementById("loadMenu");
let buttonLoadAim = document.getElementById("loadAim");

let jeuStart = false;
let timerTime = 0.0;
let scoreScore = 0;
let dejacliquer = false;



// Detection du bouton de lancement du jeu
btnStart.addEventListener("click", () => {

    if (parseInt(interval.value) <= 5000 && parseInt(interval.value) >= 100) {

        btn_deplacer.className = "btn_click"; // Ajout a la class 'btn_click" pour qu'il recuperer les propriété css
        btn_deplacer.innerHTML = "Click";
        aimTrainingDiv.appendChild(btn_deplacer); // Ajout du bouton dans la div de jeu

        jeuStart = true; // Lancement du jeu

        setInterval(deplacementBtn, interval.value); // Lancement de l'interval entre chaque deplacement du bouton
        setInterval(theTimer, 100); // Lancement de l'interval pour un timer qui augmente de 0.1 chaque 100ms
        divStart.remove(); // Supression de la div start pour laisser place au jeu
        
    }

});



//Detection du click du bouton de jeu, augmentation du score a chaque click
btn_deplacer.addEventListener("click", () => {

    if (jeuStart) {
        if (!dejacliquer) {
            scoreScore += 1;
            score.innerHTML = scoreScore;
            dejacliquer = true;
        }
    }
    
});




buttonLoadMenu.addEventListener('click', () => {
    console.log("Changement de la page Login menu");
    
    AIM_TRAINING_API.loadPageMenu("AIM"); // Charge la page MENU depuis electron, le parametre permet de savoir de qui viens la demande
});

buttonLoadAim.addEventListener("click", () => {
    console.log("Chargement de la page AIM");
    
    AIM_TRAINING_API.loadPageAim("AIM"); // Charge la page AIM depuis electron, le parametre permet de savoir de qui viens la demande
})




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

        dejacliquer = false;

        console.log("Bouton deplacer");
    }
}


// Fonction de timer
function theTimer() {
    if (timerTime < 59.9) { // Test si le nombre de seconde est inferieur a 60 pour continuer
        timerTime += 0.1;
        timer.innerHTML = parseFloat(timerTime).toFixed(1); // Maximum un nombre apres la virgule
    }
    else {
        jeuStart = false; // Desactive le jeu
    }
}



