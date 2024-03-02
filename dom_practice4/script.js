sizeDownBtn = document.querySelector('.font-size-down')
sizeDefaultBtn = document.querySelector('.font-default-size')
sizeUpBtn = document.querySelector('.font-size-up')


txtElement = document.querySelector('p')

sizeDownBtn.addEventListener('click', btn => {
    txtElement.style.fontSize = '2rem';
})

sizeDefaultBtn.addEventListener('click', btn => {
    txtElement.style.fontSize = '4rem';
})

sizeUpBtn.addEventListener('click', btn => {
    txtElement.style.fontSize = '6rem'
})