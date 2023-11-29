const sizes = Array.from(document.querySelectorAll('.font-size'));
const book = document.getElementById('book');
let currentFont;
const fontSizes = ['book_fs-small', '', 'book_fs-big'];
 
sizes.forEach((elem) => {
    if (elem.classList.contains('font-size_active')) {
        currentFont = elem;
    }
    elem.addEventListener('click', function(e) {
        e.preventDefault();
        elem.classList.toggle('font-size_active');
        currentFont.classList.toggle('font-size_active');
        if (sizes.indexOf(currentFont) !== 1) {
            book.classList.remove(fontSizes[sizes.indexOf(currentFont)]);
        }
        currentFont = elem; 
        if (sizes.indexOf(currentFont) !== 1) {
            book.classList.add(fontSizes[sizes.indexOf(currentFont)]);
        }
    });
});