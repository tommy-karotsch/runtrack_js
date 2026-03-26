$(document).ready(function(){
    $("#conteneur-arc").sortable({
        update: function(event, ui){
            verifierOrdre();
        }
    });

    $("button").click(function(){
        let conteneur = $("#conteneur-arc");
        let images = conteneur.children(".image-arc").toArray();

        while(images.length){
            let indexAleatoire = Math.floor(Math.random() * images.length);
            conteneur.append(images.splice(indexAleatoire, 1)[0]);
        }

        $("#message").text("");
    });

    function verifierOrdre(){
        let estGagne = true;

        $("#conteneur-arc .image-arc").each(function(index){
            let ordreAttendu = index + 1;
            let ordreActuel = parseInt($(this).data("ordre"));

            if(ordreActuel !== ordreAttendu){
                estGagne = false;
            }
        });

        if(estGagne){
            $("#message").text("Félicitations ! Vous avez gagné !").css("color", "#15d468");
        } else{
            $("#message").text("Vous avez perdu.").css("color", "red");
        }
    }
});
