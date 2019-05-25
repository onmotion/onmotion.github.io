document.addEventListener("DOMContentLoaded", function () {
    // prevent circle color wave effect on click
    [].forEach.call(document.querySelectorAll('a'), link => {
        link.addEventListener('mousedown', (e) => {
            e.stopPropagation();
        })
        link.addEventListener('touchstart', (e) => {
            e.stopPropagation();
        })
    })

});


