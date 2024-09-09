//navbar
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("nav-links");

    menuIcon.addEventListener("click", function() {
        navLinks.classList.toggle("active");
        menuIcon.classList.toggle("active");
    });
});

//text color changer
document.addEventListener("DOMContentLoaded", function() {
    const changeColor = document.querySelector('.change-color');
    const text = changeColor.textContent;
    changeColor.innerHTML = '';

    const colors = [
        'var(--color1)',
        'var(--color2)',
        'var(--color3)',
        'var(--color4)',
        'var(--color5)',
        'var(--color6)',
        'var(--color7)',
        'var(--color8)',
        'var(--color9)',
        'var(--color10)'
    ];

    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.color = colors[index % colors.length];  // Cycle through colors
        changeColor.appendChild(span);
    });
});



//color changer
document.addEventListener('mousemove', (e) => {
    createCircle(e.clientX, e.clientY);
});

function createCircle(x, y) {
    const circle = document.createElement('div');
    circle.classList.add('cursor');
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
    circle.style.background = getRandomColor();
    document.body.appendChild(circle);
    
    requestAnimationFrame(() => {
        circle.style.transform = 'scale(1)';
        circle.style.opacity = '1';
    });
    
    setTimeout(() => {
        circle.style.transform = 'scale(0)';
        circle.style.opacity = '0';
        circle.addEventListener('transitionend', () => {
            circle.remove();
        });
    }, 300);
}

function getRandomColor() {
    const colors = ['var(--color1)', 'var(--color2)', 'var(--color3)', 'var(--color4)', 'var(--color5)', 'var(--color6)', 'var(--color7)'];
    return colors[Math.floor(Math.random() * colors.length)];
}




//slider
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const list = document.querySelector('.list');
    const items = Array.from(document.querySelectorAll('.item'));

    // Clone items and append them for seamless scrolling
    items.forEach(item => {
        const clone = item.cloneNode(true);
        list.appendChild(clone);
    });

    // Dynamically adjust the width of the list based on the number of items
    const itemWidth = parseInt(getComputedStyle(slider).getPropertyValue('--width'), 10);
    const totalItems = items.length * 2; // Total items including clones
    const totalWidth = itemWidth * totalItems;

    list.style.width = `${totalWidth}px`;

    // Adjust animation duration based on the total width
    slider.style.animationDuration = `${10 * totalItems / items.length}s`; // Adjust the duration as needed
});


