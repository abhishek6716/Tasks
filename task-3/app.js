console.log('app is running!')

const inputEl = document.getElementById('input')
const paraEl = document.getElementById('para')


function getContent() {
    let inputValue = inputEl.value
    setContent(inputValue)
}

function setContent(inputValue){
    let variableColor
    if(inputValue[inputValue.length-1] === ' '){
        variableColor = getRandomColor()
        paraEl.textContent = inputValue
        paraEl.setAttribute('style', 'color: ' + variableColor + ';')
    } else{
        paraEl.textContent = inputValue
    }
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



