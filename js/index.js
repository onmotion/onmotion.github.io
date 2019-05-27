function onready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

onready( function () {
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


