function fadeInClick() {
    let section = document.querySelector("section");
    section.setAttribute("class", "fadeIn_clickable");
    setTimeout(function() {
        section.removeAttribute("class", "fadeIn_clickable");
    }, 2000);
}

// Show splash only on first load
function showSplash() {
    let splash = document.querySelector("#splashScreen");
    let currentUrl = window.location.href;
    const desiredUrl = "http://127.0.0.1:5500/";

    if (currentUrl.endsWith(desiredUrl)) {
        splash.style.display = "block";
    }
}
function hideSplash() {
    let splash = document.querySelector("#splashScreen");
    splash.style.display="none";
    document.body.removeAttribute("onload");
}




