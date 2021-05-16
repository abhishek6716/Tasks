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
        createAndAppendEl('ind', indStates, true)
    } else{
        createAndAppendEl('aus', usaStates, true)
    }
    states.disabled = false
}



function selectedState(countryValue, stateValue){
    console.log(countryValue)
    setCities(countryValue, stateValue)
}

function setCities(countryValue, stateValue){
    if(countryValue === 'ind'){
        if(stateValue === 'Delhi'){
            createAndAppendEl(countryValue, delCities, false)
        } else if (stateValue === 'Uttar Pradesh'){
            createAndAppendEl(countryValue, upCities, false)
        } else if (stateValue === 'Haryana') {
            createAndAppendEl(countryValue, harCities, false)
        } else if (stateValue === 'Punjab'){
            createAndAppendEl(countryValue, punCities, false)
        }
    } else{
        if (stateValue === '1') {
            createAndAppendEl(countryValue, Cities1, false)
        } else if (stateValue === '2') {
            createAndAppendEl(countryValue, Cities2, false)
        } else if (stateValue === '3') {
            createAndAppendEl(countryValue, Cities3, false)
        } else if(stateValue === '4'){
            createAndAppendEl(countryValue, Cities4, false)
        }
    }
    cities.disabled = false
}

function createAndAppendEl(countryValue ,arr, forState){
    if(forState){
        for (let i = 0; i < arr.length; i++) {
            const optEl = document.createElement('option')
            optEl.textContent = arr[i]
            states.append(optEl)
        }
        states.addEventListener('change', (e) => {
            selectedState(countryValue, e.target.value)
        })
    } else{
        for (let i = 0; i < arr.length; i++) {
            const optEl = document.createElement('option')
            optEl.textContent = arr[i]
            cities.append(optEl)
        }
    }
}



