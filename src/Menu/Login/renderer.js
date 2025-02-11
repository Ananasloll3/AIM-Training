
let inputEmailInput = document.getElementById("emailInput");
let inputPasswordInput = document.getElementById("passwordInput");

let buttonLoadMenu = document.getElementById("loadMenu");
let buttonLoadAim = document.getElementById("loadAim");

let imgLogin = document.getElementById("imgLogin");
let imgPass = document.getElementById("imgPass");



const onFocusEmail = () => {
    inputEmailInput.value = "";
    inputEmailInput.removeEventListener('focus', onFocusEmail);
};

const onFocusPass = () => {
    inputPasswordInput.value = "";
    inputPasswordInput.removeEventListener('focus', onFocusPass);
};



buttonLoadMenu.addEventListener('click', () => {
    console.log("Changement de la page menu");
    
    AIM_TRAINING_API.loadPageMenu("AIM"); // Charge la page MENU depuis electron, le parametre permet de savoir de qui viens la demande
});

buttonLoadAim.addEventListener("click", () => {
    console.log("Chargement de la page AIM");
    
    AIM_TRAINING_API.loadPageAim("AIM"); // Charge la page AIM depuis electron, le parametre permet de savoir de qui viens la demande
})


imgLogin.addEventListener("click",  () => {
    inputEmailInput.focus();
});

imgPass.addEventListener("click", () => {
    inputPasswordInput.focus();
});



inputEmailInput.addEventListener('focus', onFocusEmail);
inputPasswordInput.addEventListener('focus', onFocusPass);