var slider = document.querySelector('#circleSlider')

var circle = document.querySelector('.wave')



slider.addEventListener('input', size => {

    circle.style.height = String(slider.value) + 'vh'
    circle.style.width = String(slider.value) + 'vh'
    console.log(circle.style.height)
})