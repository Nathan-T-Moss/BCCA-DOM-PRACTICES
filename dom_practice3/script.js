showWindowBtn = document.querySelector('#show-window')
closeWindowBtn = document.querySelector('#close-window')

popWindow = document.querySelector('.window.hidden')


showWindowBtn.addEventListener('click', btn => {
    popWindow.classList.remove('hidden');
})

closeWindowBtn.addEventListener('click', btn => {
    popWindow.classList.add('hidden');
})