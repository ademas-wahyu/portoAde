const btn = document.getElementById("topBtn");

window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
        btn.classList.add('show');
    } else {
        btn.classList.remove('show');
    }
});

btn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});