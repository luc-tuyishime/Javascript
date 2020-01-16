const terms = document.querySelector('.terms-and-conditions');
const button = document.querySelector('.accept');

const obCallback = payload => {
        if (payload[0].intersectionRatio === 1) {
                button.disabled = false;
                observer.unobserve(terms.lastElementChild);
        }
};
const observer = new IntersectionObserver(obCallback, {
        root: terms,
        threshold: 1,
});

observer.observe(terms.lastElementChild);
