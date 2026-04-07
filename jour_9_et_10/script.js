document.addEventListener('DOMContentLoaded', () => {

    const inputPrenom = document.getElementById('prenom');
    const inputNom = document.getElementById('nom');
    const inputEmail = document.getElementById('email');
    const inputAdresse = document.getElementById('adresse');
    const inputCodePostal = document.getElementById('code_postal');
    const inputPassword = document.getElementById('password');
    const inputConfirmPassword = document.getElementById('confirm_password'); 

    const msgErreurPrenom = document.getElementById('erreur_prenom');
    const msgErreurNom = document.getElementById('erreur_nom');
    const msgErreurEmail = document.getElementById('erreur_email');
    const msgErreurAdresse = document.getElementById('erreur_adresse');
    const msgErreurCodePostal = document.getElementById('erreur_codepostal');
    const msgErreurPassword = document.getElementById('erreur_password');
    const msgErreurConfirmPassword = document.getElementById('erreur_confirmpassword');

    const form = document.querySelector('form');


    function gererErreur(inputElement, erreurElement, estInvalide) {
        if (inputElement.value.length === 0) {
            erreurElement.classList.add('hidden');
            inputElement.classList.remove('border-red-500', 'border-green-500');
            return;
        }

        if (estInvalide) {
            erreurElement.classList.remove('hidden');
            inputElement.classList.add('border-red-500');
            inputElement.classList.remove('border-green-500');
        } else {
            erreurElement.classList.add('hidden');
            inputElement.classList.remove('border-red-500');
            inputElement.classList.add('border-green-500');
        }
    }



    inputPrenom.addEventListener('input', (e) => {
        const valeur = e.target.value;
        const estInvalide = valeur.length > 0 && valeur.length < 3;
        gererErreur(inputPrenom, msgErreurPrenom, estInvalide);
    });

    inputNom.addEventListener('input', (e) => {
        const valeur = e.target.value;
        const estInvalide = valeur.length > 0 && valeur.length < 3;
        gererErreur(inputNom, msgErreurNom, estInvalide);
    });

    inputEmail.addEventListener('input', (e) => {
        const valeur = e.target.value;
        const emailRegex = /^[a-zA-Z]+\.[a-zA-Z]+@laplateforme\.io$/;
        const estInvalide = valeur.length > 0 && !emailRegex.test(valeur);
        gererErreur(inputEmail, msgErreurEmail, estInvalide);
    });

    inputAdresse.addEventListener('input', (e) => {
        const valeur = e.target.value;
        const adresseRegex = /^\d{3,}/;
        const estInvalide = valeur.length > 0 && !adresseRegex.test(valeur);
        gererErreur(inputAdresse, msgErreurAdresse, estInvalide);
    });

    inputCodePostal.addEventListener('input', (e) => {
        const valeur = e.target.value;
        const cpRegex = /^\d{5}$/;
        const estInvalide = valeur.length > 0 && !cpRegex.test(valeur);
        gererErreur(inputCodePostal, msgErreurCodePostal, estInvalide);
    });

    inputPassword.addEventListener('input', (e) => {
        const valeur = e.target.value;
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
        const estInvalide = valeur.length > 0 && !regexPassword.test(valeur);
        gererErreur(inputPassword, msgErreurPassword, estInvalide);
        
        const confirmValeur = inputConfirmPassword.value;
        if (confirmValeur.length > 0) {
            const sontDifferents = valeur !== confirmValeur;
            gererErreur(inputConfirmPassword, msgErreurConfirmPassword, sontDifferents);
        }
    });

    inputConfirmPassword.addEventListener('input', (e) => {
        const valeur = e.target.value;
        const estInvalide = valeur.length > 0 && valeur !== inputPassword.value;
        gererErreur(inputConfirmPassword, msgErreurConfirmPassword, estInvalide);
    });

    form.addEventListener('submit', (e) => {
        const errors = document.querySelectorAll('.border-red-500');
        if (errors.length > 0) {
            e.preventDefault(); 
            alert("Veuillez corriger les erreurs avant de soumettre le formulaire.");
        }
        else{
            alert("Formulaire soumis avec succès !");
        }
        
    });
});