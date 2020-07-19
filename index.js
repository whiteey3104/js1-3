const openBtn = document.getElementById('open-btn')
const closeBtn = document.getElementById('close-btn')
const modal = document.getElementById('modal')


openBtn.addEventListener('click', function () {
    modal.style.display = 'block'
})

closeBtn.addEventListener('click', function () {
    modal.style.display = 'none'
})

window.addEventListener('click', function (e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
})


