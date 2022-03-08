const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navUl = document.getElementsByClassName('nav-items')[0];
// const navBar = document.querySelector('nav');
// const grayBlue = 'hsl(216, 30%, 68%)';

toggleButton.addEventListener('click', () => {
    navUl.classList.toggle('active');
    document.body.classList.toggle('hidden')
    document.body.classList.toggle("cross");

    // navBar.classList.toggle('nav-active')
    // burger.classList.toggle('close')

}) 

// burger.addEventListener('click', () => {
//     if (navBar.style.backgroundColor = 'grayBlue') {
//         navBar.classList.add('nav-active');
//     }else {
//         navBar.classList.remove('nav-active');
//     }
// })

window.addEventListener ('scroll', function() {
    let navBar = document.querySelector('nav');
    let windowPosition =  window.scrollY > 600;
    navBar.classList.toggle('scrolling-active', windowPosition);
})

function hideUl() {
    document.body.classList.toggle('cross');
    document.body.classList.toggle('hidden');
    navUl.classList.toggle('active');
}