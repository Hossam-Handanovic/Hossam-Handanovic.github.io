//Some of these code i get some help about some functions from Stackoverflow 
//in order to get right for who owns and I made different function to be 
//specific and suitable for my site which means that i get different ideas from around 6 websites around online and get this final site.
/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => { //The Animation as slider movement when click on Hamburgar Icon
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/ //SCroll Animation get from https://scrollrevealjs.org/ as API library Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title', {});
sr.reveal('.button', { delay: 200 });
sr.reveal('.home__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', { delay: 400 });
sr.reveal('.about__text', { delay: 400 });

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {});
sr.reveal('.skills__data', { interval: 200 });
sr.reveal('.skills__img', { delay: 600 });

/*SCROLL MY Design*/
sr.reveal('.work__img', { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal('.contact__input', { interval: 200 });




/* ======================== AVATAR CHANGINE =============================*/

var myIndex = 0;
carousel();

function carousel() { //USING FOR LOOP TO MAKE INFINTE MOVEMENT TRANSATION ABOUT BOTH IMAGES 
    var i;
    var x = document.getElementsByClassName("img1");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 1000); // Change image every 1 second
}



/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__item a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__item a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}



/*===============================Dark Mode=========================================*/

/* Dark Mode */
const themebutton = document.getElementById('dark1')
const darktheme = 'dark-theme'
const icontheme = 'bx-sun'
const selectedtheme = localStorage.getItem('selected-theme')
const selectedicon = localStorage.getItem('selected-icon')
const getCurrentTheme = () => document.body.classList.contains(darktheme) ? 'dark1' : 'light'
const getCurrentIcon = () => themebutton.classList.contains(icontheme) ? 'bx-moon' : 'bx-sun'
if (selectedtheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedtheme === 'dark1' ? 'add' : 'remove'](darktheme)
    themebutton.classList[selectedicon === 'bx-moon' ? 'add' : 'remove'](icontheme)

}

themebutton.addEventListener('click', () => {
    document.body.classList.toggle(darktheme)
    themebutton.classList.toggle(icontheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())

})



/*===================================Button UP and Down===============*/

const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 300) { // Show backToTopButton
        if (!backToTopButton.classList.contains("btnEntrance")) {
            backToTopButton.classList.remove("btnExit");
            backToTopButton.classList.add("btnEntrance");
            backToTopButton.style.display = "block";
        }
    } else { // Hide backToTopButton
        if (backToTopButton.classList.contains("btnEntrance")) {
            backToTopButton.classList.remove("btnEntrance");
            backToTopButton.classList.add("btnExit");
            setTimeout(function() {
                backToTopButton.style.display = "none";
            }, 250);
        }
    }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

// function backToTop() {
//   window.scrollTo(0, 0);
// }

function smoothScrollBackToTop() {
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 750;
    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
    }
}

function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
};



/*  
               Hi.....

    1- My name is Hossam EL Hendawi and I’m Web developer.
    2- You can access to my account in Github and Stack over flow and also codepen.
    3- My account in Github: https://github.com/Hossam-Handanovic
    4- My account in Stack over flow: https://stackoverflow.com/users/14985916/handanovic?tab=profile
    5- My account in codepen: https://codepen.io/handanovic22
     
    Bye.....    
              
  */