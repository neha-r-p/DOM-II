// Your code goes here
const funBusImg = document.querySelector('header img');
funBusImg.addEventListener('dblclick', (event) => {
    alert("HONK HONK!");
    event.stopPropagation();
});

const intro = document.querySelector('.intro');
intro.addEventListener('dblclick', (event) => {
    alert("WELCOME FRANDS");
})

const navLink = document.querySelectorAll('.nav-link');
navLink.forEach((el) =>
    el.addEventListener('mouseover', (event) => {
        el.style.fontSize = "2rem";
    })
);

navLink.forEach((el) =>
    el.addEventListener('mouseleave', (event) => {
        el.style.fontSize = "";
    })
);

navLink.forEach((el) => {
    el.addEventListener('click', (event) =>{
      event.preventDefault();
      console.log('not today')
  })});

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
});

window.addEventListener('keypress', (event) => {
    alert("oh hi there");
});

