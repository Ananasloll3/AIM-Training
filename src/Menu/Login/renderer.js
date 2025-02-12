
let inputEmailInput = document.getElementById("emailInput");
let inputPasswordInput = document.getElementById("passwordInput");

let buttonLoadMenu = document.getElementById("loadMenu");
let buttonLoadAim = document.getElementById("loadAim");

let imgLogin = document.getElementById("imgLogin");
let imgPass = document.getElementById("imgPass");

let buttonInscription = document.getElementById("inscription");


const onFocusEmail = () => {
    inputEmailInput.value = "";
    inputEmailInput.removeEventListener('focus', onFocusEmail);
};

const onFocusPass = () => {
    inputPasswordInput.value = "";
    inputPasswordInput.removeEventListener('focus', onFocusPass);
};



buttonLoadMenu.addEventListener('click', () => {
    console.log("Changement de la page Login menu");
    
    AIM_TRAINING_API.loadPageMenu("Login"); // Charge la page MENU depuis electron, le parametre permet de savoir de qui viens la demande
});

buttonLoadAim.addEventListener("click", () => {
    console.log("Chargement de la page AIM");
    
    AIM_TRAINING_API.loadPageAim("Login"); // Charge la page AIM depuis electron, le parametre permet de savoir de qui viens la demande
})

buttonInscription.addEventListener("click", () => {
    console.log("Chargement de la page Signup");

    AIM_TRAINING_API.loadPageSignup("Login"); // Charge la page Signup depuis electron, le parametre permet de savoir de qui viens la demande
});



imgLogin.addEventListener("click",  () => {
    inputEmailInput.focus();
});

imgPass.addEventListener("click", () => {
    inputPasswordInput.focus();
});



inputEmailInput.addEventListener('focus', onFocusEmail);
inputPasswordInput.addEventListener('focus', onFocusPass);


