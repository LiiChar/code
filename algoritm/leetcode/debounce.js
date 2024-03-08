const debounce = function(fn, t) {
    const now = Date.now();
    let can = false;
    return function(...args) {
        setTimeout(() => {
            fn(args)
        }, t)
    }
};

const log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // Logged at t=100ms
