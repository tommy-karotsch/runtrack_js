function citation(){
    const btn = document.getElementById("button");
    const article = document.getElementById("citation");

    btn.addEventListener("click", function(){
        const contenu = article.textContent;
        console.log(contenu);
    });
}

citation();