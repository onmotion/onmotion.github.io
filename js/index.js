function onready(fn) {
    let passiveSupported = false;
    try {
        const options = Object.defineProperty({}, "passive", {
            get: function() {
                passiveSupported = true;
            }
        });
        window.addEventListener("test", null, options); // dummy listener for check if passive is possible
    } catch(err) {
        console.log('Cannot use event listeners');
    }

    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        fn(passiveSupported);
    } else {
        document.addEventListener('DOMContentLoaded', () => { fn(passiveSupported); }, passiveSupported ? { passive: true } : false);
    }
}

onready( function (passiveSupported) {
    // prevent circle color wave effect on click
    [].forEach.call(document.querySelectorAll('a'), link => {
        link.addEventListener('mousedown', (e) => {
            e.stopPropagation();
        }, passiveSupported ? { passive: true } : false);
        link.addEventListener('touchstart', (e) => {
            e.stopPropagation();
        }, passiveSupported ? { passive: true } : false);
    })
});


