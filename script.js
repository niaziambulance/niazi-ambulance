// =========================================
// NIAZI AMBULANCE SERVICE
// SCRIPT.JS
// =========================================

// Smooth Scroll for Navigation
document.querySelectorAll('nav a').forEach(link => {

link.addEventListener('click', function(e){

const target = this.getAttribute('href');

if(target.startsWith("#")){

e.preventDefault();

document.querySelector(target).scrollIntoView({

behavior:'smooth'

});

}

});

});

// Header Shadow on Scroll
window.addEventListener('scroll',()=>{

const header=document.querySelector('header');

if(window.scrollY>50){

header.style.boxShadow="0 8px 25px rgba(0,0,0,.15)";

}

else{

header.style.boxShadow="0 3px 15px rgba(0,0,0,.08)";

}

});

// Fade In Animation
const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},

{

threshold:0.2

});

document.querySelectorAll(

'.service-card,.why-card,.fleet-card,.gallery-grid img,.contact-box'

).forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition=".8s";

observer.observe(item);

});

// Gallery Click Effect
document.querySelectorAll(".gallery-grid img").forEach(img=>{

img.addEventListener("click",()=>{

window.open(img.src,"_blank");

});

});

// Button Hover Animation
document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

// Welcome Message
window.onload=function(){

console.log("Welcome to Niazi Ambulance Service Website");

};

// Current Year in Footer
const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();
/* =========================================
   NIAZI MOBILE MENU
========================================= */

function toggleNiaziMenu() {

    const menu = document.getElementById("niazi-navigation");

    menu.classList.toggle("niazi-menu-open");

}


function closeNiaziMenu() {

    const menu = document.getElementById("niazi-navigation");

    menu.classList.remove("niazi-menu-open");

}
}
