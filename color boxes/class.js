console.log("script running!")

function getBackgroundColor() {
    let val1 = Math.floor(Math.random() * (255 - 0) + 0);
    let val2 = Math.floor(Math.random() * (255 - 0) + 0);
    let val3 = Math.floor(Math.random() * (255 - 0) + 0);
    return `rgb(${val1}, ${val2}, ${val3})`;
}

// setInterval(changeColor, 500);

function changeColor() {
    let boxes = document.getElementsByClassName('box');
    Array.from(boxes).forEach(e => {
        e.style.backgroundColor = getBackgroundColor();
        e.style.Color = getBackgroundColor();
        e.addEventListener('click',()=>{alert('a box was clicked!')})
    })

}
let container =  document.getElementsByClassName("container")
console.log(container)


