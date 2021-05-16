console.log('app is running!')

const countriesData = ['india', 'america']

const indStates = ['Delhi', 'Uttar Pradesh', 'Haryana', 'Punjab']
const delCities = ['d1', 'd2', 'd3', 'd4']
const upCities = ['u1', 'u2', 'u3', 'u4']
const harCities = ['h1', 'h2', 'h3', 'h4']
const punCities = ['p1', 'p2', 'p3', 'p4']

const usaStates = ['1', '2', '3', '4']
const Cities1 = ['1.1', '1.2', '1.3', '1.4']
const Cities2 = ['2.1', '2.2', '2.3', '2.4']
const Cities3 = ['3.1', '3.2', '3.3', '3.4']
const Cities4 = ['4.1', '4.2', '4.3', '4.4']

const countries = document.getElementById('countries')
const states = document.getElementById('states')
const cities = document.getElementById('cities')

function selectedCountry(){
    setStates(countries.value)
}

function setStates(country){
    
    if(country === 'india'){

        createAndAppendEl(indStates, true)
        // for (let i = 0; i < indStates.length; i++) {
        //     const optEl = document.createElement('option')
        //     optEl.textContent = indStates[i]
        //     states.append(optEl)
        // }
    } else{

        createAndAppendEl(usaStates, true)
        // for (let i = 0; i < usaStates.length; i++) {
        //     const optEl = document.createElement('option')
        //     optEl.textContent = usaStates[i]
        //     states.append(optEl)
        // }
    }

    states.disabled = false
}



function selectedState(stateValue){
    setCities(stateValue, countries.value)
}

function setCities(state, country){
    if(country.value === 'india'){
        console.log(state)
        if(state === 'Delhi'){
            createAndAppendEl(delCities, false)
        } else if (state === 'Uttar Pradesh'){
            createAndAppendEl(upCities, false)
        } else if (state === 'Haryana') {
            createAndAppendEl(harCities, false)
        } else if (state === 'Punjab'){
            createAndAppendEl(punCities, false)
        }
    } else{
        console.log(state)
        if (state === '1') {
            createAndAppendEl(Cities1, false)
        } else if (state === '2') {
            createAndAppendEl(Cities2, false)
        } else if (state === '3') {
            createAndAppendEl(Cities3, false)
        } else if(state === '4'){
            createAndAppendEl(Cities4, false)
        }
    }
    cities.disabled = false
}

function createAndAppendEl(arr, forState){
    if(forState){
        for (let i = 0; i < arr.length; i++) {
            const optEl = document.createElement('option')
            optEl.textContent = arr[i]
            states.append(optEl)
        }
        states.addEventListener('change', (e) => {
            selectedState(e.target.value)
        })
    } else{
        for (let i = 0; i < arr.length; i++) {
            const optEl = document.createElement('option')
            optEl.textContent = arr[i]
            cities.append(optEl)
        }
    }
}

// function setIndStates(){
//     states.disabled = false
//     for(let i=0; i<indStates.length; i++){
//         const optEl = document.createElement('option')
//         optEl.textContent = indStates[i]
//         states.append(optEl)
//     }
// }

// function setAmeStates() {
//     states.disabled = false
//     for (let i = 0; i < usaStates.length; i++) {
//         const optEl = document.createElement('option')
//         optEl.textContent = usaStates[i]
//         states.append(optEl)
//     }
// }


