console.log('app is running!')

let button = document.getElementById('b1')
let container = document.getElementById('c1')

function nightMode(){
    if (button.innerHTML === 'Night'){
        button.innerHTML = "Day"
        container.classList.remove("container-day")
        container.classList.add("container-night")
        button.classList.remove("day")
        button.classList.add("night")
    } else{
        button.innerHTML = "Night"
        container.classList.remove("container-night")
        container.classList.add("container-day")
        button.classList.remove("night")
        button.classList.add("day")
    }
}
