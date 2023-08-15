// Time Delays can be played around with 
// to adjust to the size of the text

let intro = document.querySelector('.intro');
let text = document.querySelector('.text-header');
let textSpan = document.querySelectorAll('.text');
let content = document.querySelector('.content');

window.addEventListener('DOMContentLoaded', () => {

    // Focus on splash
    setTimeout(() => {
        // Add active class to text span elements
        // Delay each with 400ms
        textSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 500)
        });

        // Delay the out animation with 2 seconds
        setTimeout(() => {
            textSpan.forEach((span, idx) => {
                // Remove active class from text span elements
                // Add fade class to text span elements
                // Delay each with 50ms 
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        }, 2000);

        // Delay splash outro animation with 2.3 seconds 
        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2300);

        // Delay content intro animation with 3 seconds
        setTimeout(() => {
            content.classList.add('done');
        }, 3000);
    });

});