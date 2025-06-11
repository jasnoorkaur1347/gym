let menu=document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menu.onclick= classList.toggle('bx-x');
navbar.classList.toggle('active');

window.onscroll= () =>{
    menu.classList.remove('bx-x');
    menu.classList.remove('active');
}
const typed = new Typed('.multiple-text', {
    strings: ['Physical Fitness','Weight Gain','Strength Training','Fat Lose','Weight Lifting','Runnung'],
    typeSpeed: 60,
    backspeed:60,
    backdelay:1000,
    loop :true
  });