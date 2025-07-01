// Menu button

let MenuBtn = document.getElementById('MenuBtn')
MenuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

//typing effect

let typed = new Typed('.auto-input',{
    strings:['Data Science !','Artificial Intelligence !','Programming !','Cyber Security !'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,

})

// back to top scroll

const toTop = document.querySelector(".toTop");
window.addEventListener("scroll",()=>{
    if(window.pageYOffset > 100){
        toTop.classList.add("active");

    }else{
        toTop.classList.remove("active");
    }
}) 



// auto-scroll left bar
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("#navbar a");
const navbar = document.getElementById("navbar");

function setActiveLink(sectionId) {
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");

            // Auto-scroll the active link into view
            link.scrollIntoView({
                block: "nearest",
                behavior: "smooth"
            });
        }
    });
}

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const pageBottom = window.innerHeight + scrollY;
    const docHeight = document.body.offsetHeight;

    let activeFound = false;

    // 1. Loop through sections to find which one is in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
            scrollY >= sectionTop - 150 &&
            scrollY < sectionTop + sectionHeight - 100
        ) {
            setActiveLink(sectionId);
            activeFound = true;
        }
    });

    // 2. If near top of the page, force "home"
    if (scrollY <= 20) {
        setActiveLink("home");
        activeFound = true;
    }

    // 3. If at bottom of the page, force last section as active
    if (pageBottom >= docHeight - 5) {
        const lastSection = sections[sections.length - 1];
        setActiveLink(lastSection.getAttribute("id"));
        activeFound = true;
    }
});

