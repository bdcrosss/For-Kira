function scrollToMemories() {
    document.getElementById("photos").scrollIntoView({
        behavior: "smooth"
    });
}


function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
