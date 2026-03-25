function showhide(){
    const btn = document.getElementById("button");

    const article = document.createElement("article");

    article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";

    document.body.appendChild(article);


    btn.addEventListener("click", function(){
        if(article.parentNode){
            document.body.removeChild(article);
        } else{
            document.body.appendChild(article);
        }
    });





}
showhide();