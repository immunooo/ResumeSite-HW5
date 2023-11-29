function inital() {
let navlinks = document.getElementById("nav-links");
let button = document.createElement('input');
const sun = "../media/images/sun-icon.svg";
const moon = "../media/images/moon-icon.svg";

let theme = localStorage.getItem("theme");
console.log(theme);
if(theme === undefined) {
    theme = "dark"
}
button.type = "image";
button.src = theme === "light" ? sun : moon;
button.alt="theme swtich";
button.width="17" ;
button.height="17";

navlinks.append(button);
let r = document.documentElement;
if (theme === "dark") {
    r.style.setProperty('--background-c', '#121212');
    r.style.setProperty('--header-c', '#2c2c2c');
    r.style.setProperty('--text-c', 'aliceblue');
} else {
    r.style.setProperty('--background-c', 'Aliceblue');
    r.style.setProperty('--header-c', '#afb7bd');
    r.style.setProperty('--text-c', '#121212');
}


button.addEventListener('click', function (event) {
    let t = localStorage.getItem("theme");
    let r = document.documentElement;
    console.log(t)
    if(t === "light") {
        localStorage.setItem("theme", "dark");
        this.src = moon;
        r.style.setProperty('--background-c', '#121212');
        r.style.setProperty('--header-c', '#2c2c2c');
        r.style.setProperty('--text-c', 'aliceblue');
        //document.documentElement.style.backgroundColor = "#121212";
        //document.querySelector("header").style.backgroundColor ="#2c2c2c";
        //document.documentElement.style.color = "aliceblue";
    } else {
        localStorage.setItem("theme", "light");
        this.src = sun;
        r.style.setProperty('--background-c', 'Aliceblue');
        r.style.setProperty('--header-c', '#afb7bd');
        r.style.setProperty('--text-c', '#121212');
        //document.documentElement.style.backgroundColor = "Aliceblue";
        //document.querySelector("header").style.backgroundColor="#afb7bd";
        //document.documentElement.style.color = "#121212";
    }
})
}