const rotator = Array.from(document.querySelectorAll('.rotator__case'));

let timer_id = setInterval(() => {
    const rotator__current = document.querySelector('.rotator__case_active');
    let currentIndex = rotator.indexOf(rotator__current);
    rotator__current.classList.remove('rotator__case_active');
    if (currentIndex === (rotator.length - 1)) {
        rotator[0].classList.add('rotator__case_active');
    }
    else {
        rotator[currentIndex + 1].classList.add('rotator__case_active');
    }
}, 1000);