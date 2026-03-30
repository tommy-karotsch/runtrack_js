document.addEventListener("DOMContentLoaded", function(){

    const btn = document.getElementById("button");

    const paragraph = document.createElement("p");
    document.body.prepend(paragraph);

    function jsonValueKey(object, key) {
        return object[key];
    }

    let objet = {
        prenom: "Jean",
        nom: "Dupont",
        age: 30,
        ville: "Paris"
    };

    btn.addEventListener("click", function(){
        paragraph.textContent =
            "Prénom: " + jsonValueKey(objet, "prenom") +
            " | Nom: " + jsonValueKey(objet, "nom") +
            " | Age: " + jsonValueKey(objet, "age") +
            " | Ville: " + jsonValueKey(objet, "ville");
    });
});
