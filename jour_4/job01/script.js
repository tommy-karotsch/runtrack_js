document.addEventListener('DOMContentLoaded', function(){
    const pElement = document.querySelector('p');
    pElement.textContent = 'Expression : ' + pElement.textContent;

    const button = document.querySelector('button');
    button.addEventListener('click', function(){
        fetch("expression.txt")
            .then(response => response.text())
            .then(data => {
                const pElement = document.querySelector('p');
                pElement.textContent = 'Expression : ' + data;
            })
            .catch(error => console.error(error));
    });
}); 