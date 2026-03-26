$(document).ready(function(){

    $('body').prepend('<article id="message"></article>');
    $('#message').text('"Les logiciels et les cathédrales, c\'est un peu la même chose - d\'abord on les construit, ensuite, on prie."');

    $("button").on('click', function(){
        $('#message').toggle();
    });
});