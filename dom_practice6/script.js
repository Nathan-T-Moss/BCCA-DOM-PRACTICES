backgroundColorPicker = document.querySelector('#backgroundColorPicker')
bubblesColorPicker = document.querySelector('#bubblesColorPicker')


divThatChangesColor = document.querySelector('.area')
bubblesArray = document.querySelectorAll('.bubbles')

// console.log(divThatChangesColor)
// console.log(bubblesArray)

console.log(backgroundColorPicker.value)


backgroundColorPicker.addEventListener('input', field => {
    console.log(field.value)
    divThatChangesColor.style.backgroundColor = backgroundColorPicker.value;
})
bubblesColorPicker.addEventListener('input', field => {
    console.log(field.value )
    bubblesArray.forEach(element => {
        element.style.backgroundColor = bubblesColorPicker.value;
    });
})