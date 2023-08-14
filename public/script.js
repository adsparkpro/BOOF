const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - cursor.offsetHeight / 2) + "px; left: " + (e.pageX - cursor.offsetWidth / 2) + "px;");
});

document.querySelectorAll('*').forEach(el => {
    el.addEventListener('mouseover', () => {
        cursor.classList.add('hover');
    });
    el.addEventListener('mouseout', () => {
        cursor.classList.remove('hover');
    });
});

document.addEventListener('click', () => {
    cursor.classList.add('expand');
    setTimeout(() => {
        cursor.classList.remove('expand');
    }, 500);
});

