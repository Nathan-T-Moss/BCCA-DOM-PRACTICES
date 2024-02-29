var checkbox = document.querySelectorAll('input')

checkbox.forEach(input => {
    input.addEventListener('click', box => {
        if (box.target.checked) {
            box.target.parentElement.style.backgroundColor = 'black';
        } else {
            box.target.parentElement.style.backgroundColor = 'white';
        }
    })
});