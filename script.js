
const figures = document.querySelectorAll('figure');


function addTabindex() {
    figures.forEach((figure, index) => {
        figure.setAttribute('tabindex', index + 1);
    });
}

figures.forEach(figure => {
    figure.addEventListener('mouseover', () => {
        figure.style.transform = 'scale(1.1)';
    });

    figure.addEventListener('mouseleave', () => {
        figure.style.transform = 'scale(1)';
    });


    figure.addEventListener('focus', () => {
        figure.style.borderColor = 'blue';
    });

    figure.addEventListener('blur', () => {
        figure.style.borderColor = '#ccc';
    });
});


window.addEventListener('load', () => {
    addTabindex();
    console.log("Tabindex added and images loaded.");
});

