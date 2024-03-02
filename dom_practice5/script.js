var btnArray = document.querySelectorAll('.button-color')

spanChange = document.querySelector('span')
console.log(spanChange)

btnArray.forEach(element => {
    element.addEventListener('click', btn => {
        var colorText = element.textContent.toLowerCase();
        // console.log(colorText)
        spanChange.style.color = colorText;
    })
});