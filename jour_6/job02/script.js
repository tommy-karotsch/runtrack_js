$(document).ready(function(){

    $("#button").on('click', function(){
        $("#p1").text("La lumière qui brûle deux fois plus vite brûle deux fois moins longtemps.");
        $("#p2").text("Le monde est un grand balancier qui oscille entre le chaos et l'ordre");
    });

    $("#prev").on('click', function(){
        let $bar = $("#progressBar .progress-bar");
        let currentPercent = parseInt($bar.css("width")) / $("#progressBar").width() * 100;
        let newPercent = Math.max(0, currentPercent - 10);
        $bar.css("width", newPercent + "%");
    });

    $("#next").on('click', function(){
        let $bar = $("#progressBar .progress-bar");
        let currentPercent = parseInt($bar.css("width")) / $("#progressBar").width() * 100;
        let newPercent = Math.min(100, currentPercent + 10);
        $bar.css("width", newPercent + "%");
    });


});

