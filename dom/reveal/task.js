const reveal = document.querySelectorAll('.reveal');

function isVisible(elem) {
    const {top, bottom} = elem.getBoundingClientRect()
    if (bottom < 0 || top > window.innerHeight) {
        return false;
    } 
    return true;
}

window.addEventListener('scroll', function() {
    reveal.forEach((elem) => {
        if (isVisible(elem)) {
            elem.classList.add('reveal_active');
        }
    })
})