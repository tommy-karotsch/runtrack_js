function addOne()
{
    let compteur = document.getElementById("compteur");

    let btn = document.getElementById("button");

    btn.addEventListener("clicl", function(){
        compteur.textContent = parseInt(compteur.textContent) + 1;
    });
}


addOne();