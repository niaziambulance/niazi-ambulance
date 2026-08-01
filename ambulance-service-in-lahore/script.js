/* ==========================================
   MIANWALI AMBULANCE SERVICE
   LAHORE PAGE JAVASCRIPT
========================================== */

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener("click", function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


// FAQ Toggle
document.querySelectorAll(".faq-item h3").forEach(question=>{

question.style.cursor="pointer";

question.addEventListener("click",()=>{

const answer=question.nextElementSibling;

if(answer.style.display==="block"){

answer.style.display="none";

}else{

document.querySelectorAll(".faq-item p").forEach(p=>{

p.style.display="none";

});

answer.style.display="block";

}

});

});


// Hide all FAQ answers initially
document.querySelectorAll(".faq-item p").forEach(answer=>{

answer.style.display="none";

});


// Floating buttons animation
window.addEventListener("scroll",()=>{

const call=document.querySelector(".floating-call");
const whatsapp=document.querySelector(".floating-whatsapp");

if(window.scrollY>150){

call.style.opacity="1";
whatsapp.style.opacity="1";

}else{

call.style.opacity=".85";
whatsapp.style.opacity=".85";

}

});


// Image fade animation
const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(".fleet-card,.gallery-card,.service-card,.why-card,.quick-card").forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition=".6s ease";

observer.observe(card);

});


console.log("Mianwali Ambulance Service Lahore Page Loaded Successfully");
