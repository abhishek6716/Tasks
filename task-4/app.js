const countries = document.getElementById('countries');
const states = document.getElementById('states');
const cities = document.getElementById('cities');
const log = console.log;

const clearStates = () => {
    states.innerHTML = '<option>Select State</option>';
};
const clearCities = () => {
    cities.innerHTML = '<option>Select City</option>';
};

const loadCountries = () => {
    for (const country of data.countries) {
        countries.append(new Option(country.name, country.name));
    }
    clearStates();
    clearCities();
};

loadCountries();

countries.addEventListener('change', (e) => {
    clearStates();
    clearCities();
    if (e.target.value == 'Select Country') {
        states.disabled = true;
        cities.disabled = true;
        return;
    }
    loadStates(e.target.value);
});

const loadStates = (selectedCountry) => {
    for (const country of data.countries) {
        if (country.name == selectedCountry) {
            for (const state of country.states) {
                states.append(new Option(state.name, state.name));
            }
        }
    }
    states.disabled = false;
};

states.addEventListener('change', (e) => {
    clearCities();
    if (e.target.value == 'Select State') {
        cities.disabled = true;
        return;
    }
    loadCities(e.target.value);
});

const loadCities = (selectedState) => {
    const selectedCountry = countries.value;
    for (const country of data.countries) {
        if (country.name == selectedCountry) {
            for (const state of country.states) {
                if (state.name == selectedState) {
                    for (const city of state.cities) {
                        cities.append(new Option(city.name, city.name));
                    }
                }
            }
        }
    }
    cities.disabled = false;
};