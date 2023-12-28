const scrollUp = document.querySelector(".scrollUp");

window.addEventListener("scroll",()=>{
    if(window.scrollY > 500){
        scrollUp.style = "display: block";
    }else{
        scrollUp.style = "display: none";
    }
})
scrollUp.addEventListener("click", () => {
    window.scrollTo(0,0);
}
);

//Scroll Observer###################

const rightObserver = new IntersectionObserver((elements)=>{
    elements.forEach((element)=>{
        if(element.isIntersecting){
            element.target.classList.add("showRight");
        };
    });
});
const leftObserver = new IntersectionObserver((elements)=>{
    elements.forEach((element)=>{
        if(element.isIntersecting){
            element.target.classList.add("showLeft");
        }
    });
});
const loadObserver = new IntersectionObserver((elements)=>{
    elements.forEach((element)=>{
        if(element.isIntersecting){
            element.target.classList.add("showBody");
        };
    });
});

const loadObserverNav = new IntersectionObserver((elements)=>{
    elements.forEach((element)=>{
        if(element.isIntersecting){
            element.target.classList.add("slideDown");
        };
    });
});

const hiddenRightElements = document.querySelectorAll(".hiddenRight");
const hiddenLeftElements = document.querySelectorAll(".hiddenLeft");
const bodyElements = document.querySelectorAll(".load");
const navElements = document.querySelectorAll(".slider");

hiddenRightElements.forEach((e)=> rightObserver.observe(e));
hiddenLeftElements.forEach((e)=> leftObserver.observe(e));
bodyElements.forEach((e)=> loadObserver.observe(e));
navElements.forEach((e)=> loadObserverNav.observe(e));
