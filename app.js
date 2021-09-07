const toggleBar = () => {
    const navBar = document.querySelector('nav')
    const navMenu = document.querySelector('.nav__list')
    const navlinks = document.querySelectorAll('.nav__list li')
    const toggleMenu = document.querySelector('.menu__btn')
    const toggleBtn = document.querySelector('.hamburger')

    toggleMenu.addEventListener('click', () => {
        toggleBtn.classList.toggle('change')
        navBar.classList.toggle('change')
        navMenu.classList.toggle('change')
        navlinks.forEach(item => {
            item.classList.toggle('change')
        })
    })
}

toggleBar()

const textOne = [" Ifeoluwa Adepeju"];
const textTwo = ["Frontend Developer"];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function typingOne() {
    if (count === textOne.length) {
        count = 0;
    }
    currentText = textOne[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.textone').textContent = letter;

    
    setTimeout(typingOne, 700)
}
typingOne()

function typingTwo() {
    if (count === textTwo.length) {
        count = 0;
    }
    currentText = textTwo[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.texttwo').textContent = letter;

    setTimeout(typingTwo, 400);
}


typingTwo()


window.addEventListener("scroll", () => {
    let scrollHeader = document.querySelector(".header__content").parentElement
    scrollHeader.classList.toggle('sticky-header', window.scrollY > 0)
})