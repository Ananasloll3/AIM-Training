
let divStart =  document.getElementById("div_start");
let btnStart = document.getElementById("btn_start");
let interval = document.getElementById("interval");
let aimTrainingDiv = document.getElementById("aimTraining");
let parametreDiv = document.getElementById("parametre")

let score = document.getElementById("score");
let timer = document.getElementById("timer");

let btn_deplacer = document.createElement("button");

let jeuStart = false;


btnStart.addEventListener("click", () => {

    btn_deplacer.className = "btn_click";
    btn_deplacer.innerHTML = "Click";
    aimTrainingDiv.appendChild(btn_deplacer);

    jeuStart = true;

    setInterval(deplacementBtn, interval.value);
    divStart.remove();

});


btn_deplacer.addEventListener("click", () => {

    score.innerHTML = parseInt(score.innerHTML) + 1
    
});


function deplacementBtn(){

    if (jeuStart) {

        btn_deplacer.style.position = "absolute";
        const rectDivParametre = parametreDiv.getBoundingClientRect();
        const rectDivAim = aimTrainingDiv.getBoundingClientRect();        

        console.log(`MaxPosDivY : ${rectDivAim.height}`);
        
        

        let randomX = Math.random() * window.innerWidth - 20;
        let randomY = Math.floor(Math.random() * (rectDivAim.height - rectDivAim.y + 1)) + rectDivAim.y + 20;

        console.log(`RandomX : ${randomX}, RandomY = ${randomY}`);
                


        btn_deplacer.style.left = randomX + "px";
        btn_deplacer.style.top = randomY + "px";

        if (timer.innerHTML === "60") {
            jeuStart = false;
        }


        console.log("Bouton deplacer");
    }
}




