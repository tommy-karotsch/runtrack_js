$(document).ready(function(){

    $('p').prepend('Expression : ')

    $('button').on('click', function(){
        fetch("expression.txt")
            .then(response => response.text())
            .then(data => $('p').text('Expression : ' + data))
            .catch(error => console.error(error));
    });
});