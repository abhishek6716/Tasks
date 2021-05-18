console.log('app is running!')

const name = document.getElementById('fullName')                                  // input box
const email = document.getElementById('email')                                    // input box
const mobileNo = document.getElementById('mobileNo')                              // input box
const overallExperience = document.getElementById('overallExperience')            // toggler
const relaventExperience = document.getElementById('relaventExperience')          // toggler
const department = document.getElementById('department')                          // toggler
const role = document.getElementById('role')                                      // toggler
const zone = document.getElementById('zone')                                      // toggler
const branch = document.getElementById('branch')                                  // toggler
const attachFile = document.getElementById('attachFile')                          // doc
const button = document.getElementById('button')                                  // button

let form = new Object()


const getExperience = (experienceType, callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            callback(undefined, data)
        } else if (e.target.readyState === 4) {
            callback('An error has taken place', undefined)
        }
    })
    request.open('GET', `https://api-hfc.techchefz.com/icicihfc-micro-service/rms/get/experience?experienceType=${experienceType}`)
    request.send()
}

getExperience('RELEVANT', (error, data) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(data)
    }
})

