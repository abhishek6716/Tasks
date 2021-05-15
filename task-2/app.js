console.log('app is running!')

const submit = document.getElementById('submit')
const inputBox = document.getElementById('input')
const select = document.getElementById('select')
const container = document.getElementById('container')

let selectedValue
function getSelectValue(){
    selectedValue = select.value
    console.log(selectedValue)
}

let inputValue
function getContent(){
    inputValue = inputBox.value
    createElement()
}


function createElement(){
    const divEl = document.createElement('div')
    const paraEl = document.createElement('p')
    const buttonEl = document.createElement('button')
    paraEl.textContent = inputValue
    buttonEl.textContent = 'Delete'
    divEl.appendChild(paraEl)
    divEl.appendChild(buttonEl)
    buttonEl.setAttribute('onclick', 'deleteNode(this)')
    insertElement(divEl)
}

function deleteNode(el){
    el.parentNode.parentNode.removeChild(el.parentNode)
}

function insertElement(divEl){
    if(selectedValue === '0'){
        container.append(divEl)
    }
    if (selectedValue === '1') {
        container.prepend(divEl)
    }
    if (selectedValue === '2') {
        container.after(divEl)
    }
    if (selectedValue === '3') {
        container.before(divEl)
    }
    // if (selectedValue === '4') {
    //     container.append(divEl)
    // }
    // if (selectedValue === '5') {
    //     container.append(divEl)
    // }
}