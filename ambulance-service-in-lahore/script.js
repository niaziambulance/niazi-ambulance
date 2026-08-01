/* ===================================================== */
/* JS PART 1 START */
/* STICKY HEADER + SMOOTH SCROLL + ACTIVE MENU */
/* ===================================================== */

"use strict";

/* Sticky Header */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

/* Smooth Scroll */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});

/* Active Navigation */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ===================================================== */
/* JS PART 
/* ===================================================== */
/* JS PART 2 START */
/* FAQ + GALLERY + FLOATING BUTTONS */
/* ===================================================== */

/* FAQ Accordion */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const answer = item.querySelector("p");

    if(answer){

        answer.style.display = "none";

    }

    item.addEventListener("click",()=>{

        faqItems.forEach(other=>{

            if(other!==item){

                const p=other.querySelector("p");

                if(p) p.style.display="none";

            }

        });

        if(answer){

            answer.style.display =

            answer.style.display==="block"

            ? "none"

            : "block";

        }

    });

});

/* Gallery Hover Effect */

const galleryImages=document.querySelectorAll(".gallery img");

galleryImages.forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.transform="scale(1.08)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform="scale(1)";

    });

});

/* Floating Buttons Animation */

const floatingButtons=document.querySelectorAll(".floating-call,.floating-whatsapp");

window.addEventListener("scroll",()=>{

    if(window.scrollY>250){

        floatingButtons.forEach(btn=>{

            btn.style.opacity="1";

            btn.style.visibility="visible";

        });

    }else{

        floatingButtons.forEach(btn=>{

            btn.style.opacity="0";

            btn.style.visibility="hidden";

        });

    }

});

/* Simple Button Pulse */

setInterval(()=>{

    floatingButtons.forEach(btn=>{

        btn.classList.toggle("pulse");

    });

},1200);

/* ===================================================== */
/* JS PART 2 END */
/* ===================================================== */
/* ===================================================== */
/* JS PART 3 START */
/* SCROLL ANIMATIONS + COUNTERS + BACK TO TOP */
/* ===================================================== */

/* Fade In Animation */

const animatedElements = document.querySelectorAll(

".feature-card,.fleet-card,.gallery-item,.service-card,.why-card,.review-card,.faq-item,.process-card,.hospital-grid div,.areas-grid span"

);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:0.15

});

animatedElements.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

/* Number Counter */

const counters=document.querySelectorAll("[data-count]");

const startCounter=(counter)=>{

const target=+counter.dataset.count;

let count=0;

const speed=Math.max(10,Math.floor(1500/target));

const update=()=>{

count++;

counter.innerText=count;

if(count<target){

setTimeout(update,speed);

}else{

counter.innerText=target;

}

};

update();

};

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

startCounter(entry.target);

counterObserver.unobserve(entry.target);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/* Back To Top */

const topButton=document.createElement("button");

topButton.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topButton.className="back-to-top";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.classList.add("show-top");

}else{

topButton.classList.remove("show-top");

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* ===================================================== */
/* JS PART 3 END */
/* ===================================================== */
/* ===================================================== */
/* JS PART 4 START */
/* FINAL OPTIMIZATION + PRELOADER + UTILITIES */
/* ===================================================== */

/* Remove Hidden Loader */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

/* External Links */

document.querySelectorAll('a[target="_blank"]').forEach(link=>{

link.setAttribute("rel","noopener noreferrer");

});

/* Image Lazy Loading */

document.querySelectorAll("img").forEach(img=>{

img.setAttribute("loading","lazy");

img.setAttribute("decoding","async");

});

/* Telephone Click Tracking */

document.querySelectorAll('a[href^="tel:"]').forEach(btn=>{

btn.addEventListener("click",()=>{

console.log("Call Button Clicked");

});

});

/* WhatsApp Click Tracking */

document.querySelectorAll('a[href*="wa.me"]').forEach(btn=>{

btn.addEventListener("click",()=>{

console.log("WhatsApp Button Clicked");

});

});

/* Prevent Empty Links */

document.querySelectorAll('a[href="#"]').forEach(link=>{

link.addEventListener("click",(e)=>{

e.preventDefault();

});

});

/* Current Year */

document.querySelectorAll(".current-year").forEach(item=>{

item.textContent=new Date().getFullYear();

});

/* Console */

console.log("===================================");

console.log("Niazi Ambulance Service - Lahore");

console.log("Premium Landing Page Loaded");

console.log("Version 2.0");

console.log("===================================");

/* ===================================================== */
/* JS PART 4 END */
/* ===================================================== */
