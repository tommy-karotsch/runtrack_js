document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (!form) return; // S'arrête si aucun formulaire n'est trouvé

    // --- FONCTION UTILITAIRE ---
    function gererErreur(inputElement, erreurElement, estInvalide) {
        if (!inputElement || !erreurElement) return;

        if (inputElement.value.length === 0) {
            erreurElement.classList.add('hidden');
            inputElement.classList.remove('border-red-500', 'border-blue-500');
            return;
        }

        if (estInvalide) {
            erreurElement.classList.remove('hidden');
            inputElement.classList.add('border-red-500');
            inputElement.classList.remove('border-blue-500');
        } else {
            erreurElement.classList.add('hidden');
            inputElement.classList.remove('border-red-500');
            inputElement.classList.add('border-blue-500');
        }
    }

    // --- CONFIGURATION DES VALIDATIONS ---
    const validations = [
        {
            input: document.getElementById('prenom'),
            erreur: document.getElementById('erreur_prenom'),
            validation: (val) => val.length < 3
        },
        {
            input: document.getElementById('nom'),
            erreur: document.getElementById('erreur_nom'),
            validation: (val) => val.length < 3
        },
        {
            input: document.getElementById('email'),
            erreur: document.getElementById('erreur_email'),
            validation: (val) => !/^[a-zA-Z]+\.[a-zA-Z]+@laplateforme\.io$/.test(val)
        },
        {
            input: document.getElementById('adresse'),
            erreur: document.getElementById('erreur_adresse'),
            validation: (val) => !/^\d{3,}/.test(val)
        },
        {
            input: document.getElementById('code_postal'),
            erreur: document.getElementById('erreur_codepostal'),
            validation: (val) => !/^\d{5}$/.test(val)
        },
        {
            input: document.getElementById('password'),
            erreur: document.getElementById('erreur_password'),
            validation: (val) => !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/.test(val)
        },
        {
            input: document.getElementById('confirm_password'),
            erreur: document.getElementById('erreur_confirmpassword'),
            validation: (val) => val !== document.getElementById('password')?.value
        }
    ];

    // --- APPLICATION DES ÉCOUTEURS ---
    validations.forEach(item => {
        if (item.input) {
            item.input.addEventListener('input', () => {
                const estInvalide = item.validation(item.input.value);
                gererErreur(item.input, item.erreur, estInvalide);

                // Si on modifie le champ password, on re-valide la confirmation
                if (item.input.id === 'password') {
                    const confirmInput = document.getElementById('confirm_password');
                    if (confirmInput) {
                        const confirmEstInvalide = confirmInput.value !== item.input.value;
                        gererErreur(confirmInput, document.getElementById('erreur_confirmpassword'), confirmEstInvalide);
                    }
                }
            });
        }
    });

    // --- VALIDATION À LA SOUMISSION ---
    form.addEventListener('submit', (e) => {
        // Exécute toutes les validations une dernière fois avant de soumettre
        let formulaireEstValide = true;
        validations.forEach(item => {
            if (item.input) {
                const estInvalide = item.validation(item.input.value);
                gererErreur(item.input, item.erreur, estInvalide);
                if (estInvalide && item.input.value.length > 0) {
                    formulaireEstValide = false;
                }
            }
        });

        if (!formulaireEstValide) {
            e.preventDefault();
            alert("Veuillez corriger les erreurs avant de soumettre le formulaire.");
        } else {
            // Optionnel: Affiche le succès uniquement si le formulaire n'est pas vide
            const aUnInputRempli = validations.some(item => item.input && item.input.value.length > 0);
            if (aUnInputRempli) {
                alert("Formulaire soumis avec succès !");
            }
        }
    });
});