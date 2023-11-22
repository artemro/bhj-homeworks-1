const content = Array.from(document.querySelectorAll('.tab__content'));
const tab = Array.from(document.querySelectorAll('.tab'));

tab.forEach((elem) => {
    elem.onclick = () => {
        const currentContent = document.querySelector('.tab__content_active');
        const currentTab = document.querySelector('.tab_active');
        currentContent.classList.remove('tab__content_active');
        currentTab.classList.remove('tab_active');
        content[tab.indexOf(elem)].classList.add('tab__content_active');
        elem.classList.add('tab_active');
    }
})
