function disappear() {
    document.getElementById("splashScreen").setAttribute("class", "makeDisappear");
}

function firstHome() {
    const homepage = document.getElementById("home");
    homepage.setAttribute("class", "fadeUp");
    setTimeout(()=>homepage.removeAttribute("class", "fadeUp"), 3000);
}

