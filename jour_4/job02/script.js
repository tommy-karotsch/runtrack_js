document.addEventListener("DOMContentLoaded", function(){

    const btn = document.getElementById("button");

    const paragraph = document.createElement("p");
    paragraph.textContent = "";
    document.body.prependChild(paragraph);

    function jsonValueKey(chaine,key ) {
        return chaine + key ;
    }

    let objet = {
        prenom: "Jean",
        nom: "Dupont",
        age: 30,
        ville: "Paris"
    };

    btn.addEventListener("click", function(){
        
    });
});
