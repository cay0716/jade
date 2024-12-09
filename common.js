
document.querySelector('.circle').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        setTimeout(() => { menu.style.display = 'none'; }, 500);
    } else {
        menu.style.display = 'block';
        setTimeout(() => { menu.classList.add('show'); }, 10);
    }
});


let postcardBtn1 = document.querySelector('.postcard_btn1')
let postcard1 = document.querySelector('.postcard1')
let postcardBtn2 = document.querySelector('.postcard_btn2')
let postcard2 = document.querySelector('.postcard2')

postcardBtn1.addEventListener('click', () => {
    postcard1.style.display = 'block'
    postcard2.style.display = 'none'
})
postcardBtn2.addEventListener('click', () => {
    postcard2.style.display = 'block'
    postcard1.style.display = 'none'
})

let album = document.querySelector('.album')
let normal = document.querySelector('.normal')
let bigContainer1 = document.querySelector('.big_container')
let bigContainer2 = document.querySelector('.big_container2')

album.addEventListener('click', () => {
    bigContainer1.style.display = 'none';
    bigContainer2.style.display = 'block';
    document.querySelector('#sec1').style.background = '#222'
    document.querySelector('#sec1').style.marginBottom = '0'
    document.querySelector('#sec1 h2').style.display = 'none'
    document.querySelector('#sec1 p').style.display = 'none'
})
normal.addEventListener('click', () => {
    bigContainer2.style.display = 'none';
    bigContainer1.style.display = 'block';
    document.querySelector('#sec1').style.background = '#fff'
    document.querySelector('#sec1 h2').style.display = 'block'
    document.querySelector('#sec1 p').style.display = 'block'
})

let drawings = document.querySelectorAll('.drawing')

drawings.forEach(e, () => {
    e.style.transform = 'scale(1.5)'
})