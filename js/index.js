// Your code goes here
const funBusImg = document.querySelector('header img');
funBusImg.addEventListener('click', (event) => {
    alert("HONK HONK!");
});

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

navLink.forEach((el,index) => {
    el.addEventListener('click', (event) =>{
      event.preventDefault();
      console.log('not today')
  })})