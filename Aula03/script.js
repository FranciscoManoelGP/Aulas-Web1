document.querySelector('#link_logo').onclick = randomColor

function randomColor() {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;

    let color = `rgba(${r}, ${g}, ${b})`

    document.querySelector('body').style.backgroundColor = color;
}