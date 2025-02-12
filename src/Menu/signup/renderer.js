
let buttonLoadMenu = document.getElementById("loadMenu");
let buttonLoadAim = document.getElementById("loadAim");


buttonLoadMenu.addEventListener('click', () => {
    console.log("Changement de la page menu Login");
    
    AIM_TRAINING_API.loadPageMenu("Signup"); // Charge la page MENU depuis electron, le parametre permet de savoir de qui viens la demande
});

buttonLoadAim.addEventListener("click", () => {
    console.log("Chargement de la page AIM");
    
    AIM_TRAINING_API.loadPageAim("Signup"); // Charge la page AIM depuis electron, le parametre permet de savoir de qui viens la demande
})