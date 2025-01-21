// Your JavaScript goes here!


let debounce = false;
let current_changing = false;
let size = 16;
let color_pint = document.getElementById('favcolor').value;

function changeColor(event){
    if (current_changing == false){
        event.target.style.backgroundColor = color_pint;
    }
}

console.log("Hello, World!");

function createBox(){
    let hw = 540 / size;
    hw = String(hw)
    for (let step = 0; step < size*size; step++){
        var element = document.createElement("div")
        element.style.height = hw+'px';
        element.style.width = hw+'px';
        element.style.backgroundColor = 'rgba(230, 234, 232, 0.859)';
        element.style.outline = '1px solid #fffefe'

        document.getElementById("container").appendChild(element);

        element.addEventListener("mouseover", changeColor);

    }
}

createBox();


document.getElementById("change-size").onclick = function(){
    if (debounce == false){
        debounce = true
        size = window.prompt("New size? (enter numbers 1-100 only)");


        while ((Number(size) < 1) || Number(size) > 100){
            size = window.prompt("invalid, choose only from 1-100");
        }
        var contain = document.getElementById('container');
    
        while(contain.firstChild){
            contain.removeChild(contain.firstChild);
        }
    
        createBox();
        debounce = false;
    }
}


document.getElementById("clear").onclick = function(){
    const NodeList = document.getElementById('container').childNodes;

    for (let i = 0; i < NodeList.length; i++){
        NodeList[i].style.backgroundColor = 'rgba(230, 234, 232, 0.859)';
    }
}

document.getElementById('favcolor').onclick = function(){
    current_changing = true;
}

document.getElementById('favcolor').onchange = function(){
    current_changing = false;
    console.log(document.getElementById('favcolor').value)
    color_pint = document.getElementById('favcolor').value
}

document.getElementById('saveButton').addEventListener('click', function () {
    const element = document.getElementById('container'); // Select the div
    html2canvas(element).then(canvas => {
    // Convert canvas to image
    const link = document.createElement('a');
    link.download = 'div-image.png'; // File name
    link.href = canvas.toDataURL('image/png');
    link.click();
    });
});