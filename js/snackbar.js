const baselineBtn = document.querySelector('.button-baseline');
const leadingBtn = document.querySelector('.button-leading');
const stackedBtn = document.querySelector('.button-stacked');
const snackbar = document.querySelector('.snackbar');

baselineBtn.addEventListener('click', () => {
    snackbar.classList.add('baseline');
    snackbar.classList.remove('leading', 'stacked');
    setTimeout(function() {
        document.querySelector('.baseline').classList.remove('baseline')
    }, 3000)
})

leadingBtn.addEventListener('click', () => {
    snackbar.classList.add('leading');
    snackbar.classList.remove('baseline', 'stacked');
    setTimeout(function() {
        document.querySelector('.leading').classList.remove('leading')
    }, 3000)
})

stackedBtn.addEventListener('click', () => {
    snackbar.classList.add('stacked');
    snackbar.classList.remove('baseline', 'leading');
    setTimeout(function() {
        document.querySelector('.stacked').classList.remove('stacked')
    }, 3000)
})