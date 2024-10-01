var tablinks = document.getElementsByClassName("tab-links");
var tablecontents = document.getElementsByClassName("table-contents");

function opentab(tabname){
    for(x of tablinks){
        x.classList.remove("active-link");
    }
    for(y of tablecontents){
        y.classList.remove("active-table");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-table");
}


//----------------------------------------Menu-option-in-small-screens-------------------------------------//

var openMenubar = document.getElementById('sidemenu');

function openMenu() {
    openMenubar.style.right = '0';
    document.body.classList.add("menu-open");
}

function closeMenu() {
    openMenubar.style.right = '-150px';
    document.body.classList.remove("menu-open");
}


//--------------------------------------=------go-to-top-button---------------------------------------------//

const goTop = document.getElementById('goTop');

function goToTop() {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
    document.body.scrollTop = (0,0);
}

//--------------------------------------intersection observer for projects page-----------------------------//

const items = document.querySelectorAll(".projects-item, .para"); // Include both classes

const options = {
    root: null,
    threshold: 0.1
};

const observer = new IntersectionObserver(callback, options);

function callback(entries, observe) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('projects-item')) {
                entry.target.classList.add("scrollAnimation"); // Apply the existing animation for .projects-item
            } else if (entry.target.classList.contains('para')) {
                entry.target.classList.add("scrollAnimation-left"); // Apply the new animation for .para
            }
            observer.unobserve(entry.target);
        }
    });
}

items.forEach(item => {
    observer.observe(item);
});


//-------------------------------dark and light mode----------------------------------------//

let darkMode = document.getElementById("mode");
let iconElement = document.querySelector("#mode i");
contactBackground = document.getElementById("background");

let iconChange = document.querySelector("#mode i");


darkMode.onclick = function() {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        iconChange.className = "fa-solid fa-sun"
        iconChange.style.color = "#FFE469"
        localStorage.setItem("darkMode", "enabled");
    }
    else {
        localStorage.setItem("darkMode", "disabled");
        iconChange.className = "fa-solid fa-moon";
        iconChange.style.color = "black"
    }
}

window.onload = function() {
    if (localStorage.getItem("darkMode")=== "enabled") {
        document.body.classList.toggle("dark-mode");
        iconChange.className = "fa-solid fa-sun"
        iconChange.style.color = "#FFE469"
    }
}
