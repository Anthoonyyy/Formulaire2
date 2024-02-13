const formContainer = document.querySelector("#formContainer");

formContainer.addEventListener('submit', function(event) {
    event.preventDefault();});

    function checkAge() {
        var ageInput = document.getElementById('ageInput').value;
        var resultDiv = document.getElementById('result');
       
        if (ageInput >= 20) {
            resultDiv.textContent = "Vous avez 20 ans ou plus ! Redirection en cours...";
            resultDiv.style.color = "green";
            setTimeout(function () {
                window.location.href = "index.html";
            }, 1300);
        } else {
            resultDiv.textContent = "Vous n'avez pas l'âge requis.";
            resultDiv.style.color = "red";
        }

        resultDiv.style.display = "block";
    }

var prénom = document.getElementById("prenom").value;

function submitForm() {
    var resultDiv = document.getElementById('resultat');
    var password = document.getElementById('mdp').value;    // idem  ligne 7

    if (password.length >= 10 && /[A-Z]/.test(password) && /\d/.test(password) && /[!@#$%^&*(),.?":{}|<>'-+/]/.test(password)) {
        resultDiv.textContent = "Inscription réussie !";
        resultDiv.style.color = "green";
        setTimeout(function () {
            window.location.href = "https://2023.webdev-cf2m.be/Anthony/Siteprefo/"; 
        }, 3000);
    } else {
        resultDiv.textContent = "Veuillez remplir tous les critères du mot de passe.";
        resultDiv.style.color = "red";
    }
}
//Créer une alerte//
e=true;
function ShowHide() {
    if(e){
        document.getElementById("mdp").setAttribute("type","text");
        e=false;
    }
    
  }