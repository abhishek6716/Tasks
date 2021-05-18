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


const clearOverallExperience = () => {
    overallExperience.innerHTML = '<option>Select</option>';
};

const clearRelaventExperience = () => {
    relaventExperience.innerHTML = '<option>Select</option>';
};

const clearDepartment = () => {
    department.innerHTML = '<option>Select</option>';
};

const clearRole = () => {
    role.innerHTML = '<option>Select</option>';
};

const clearZone = () => {
    zone.innerHTML = '<option>Select</option>';
};

const clearBranch = () => {
    branch.innerHTML = '<option>Select</option>';
};

function getID(el) {
    return el.id
}


// OverallExperience and RelevantExperience

let overallExpData, relevantExpData;                                 
const getOverallExpData = async () => {
    const body = await getExperience('OVERALL')
    overallExpData = body.data
    setOverallEl()
}
const getRelevantExpData = async () => {
    const body = await getExperience('RELEVANT')
    relevantExpData = body.data
    setReleventEl()
}

function setOverallEl(){
    for(let i=0; i<overallExpData.length; i++){
        const OptEl = document.createElement('option')
        OptEl.textContent = overallExpData[i].value
        OptEl.setAttribute('id', 'overallExpData[i].id')
        OptEl.setAttribute('onclick', 'getID(this)')
        overallExperience.append(OptEl)
    }
}

function setReleventEl() {
    for (let i = 0; i < relevantExpData.length; i++) {
        const OptEl = document.createElement('option')
        OptEl.textContent = relevantExpData[i].value
        OptEl.setAttribute('id', 'relevantExpData[i].id')
        OptEl.setAttribute('onclick', 'getID(this)')
        relaventExperience.append(OptEl)
    }
}



// Departments and Roles

let departmentAndRoleData
const getDepAndRoleData = async () => {
    const body = await getDepAndRole()
    departmentAndRoleData = body.data
    setDepEl()
}

function setDepEl() {
    role.disabled = true
    for (let i = 0; i < departmentAndRoleData.length; i++) {
        const OptEl = document.createElement('option')
        OptEl.textContent = departmentAndRoleData[i].name
        OptEl.setAttribute('id', 'departmentAndRoleData[i].id')
        OptEl.setAttribute('onclick', 'getID(this)')
        department.append(OptEl)
    }
    setRoleEl(target.id)
}

function setRoleEl(selectedDep) {
    for (let i = 0; i < departmentAndRoleData.length; i++) {
        if (departmentAndRoleData[i].id == selectedDep) {
            for (let j=0; j<departmentAndRoleData[i][j]; j++) {
                const OptEl = document.createElement('option')
                OptEl.textContent = departmentAndRoleData[i][j].name
                OptEl.setAttribute('id', 'departmentAndRoleData[i][j].id')
                OptEl.setAttribute('onclick', 'getID(this)')
                role.append(OptEl)
            }
        }
    }
    role.disabled = false
}


// zones and branches

let zoneData
const getZonesAndBranch = () => {
    const body = await getZones()
    zoneData = body.data
    setZonesEl()
}

function setZonesEl(){
    branch.disabled = true
    for(let i=0; i<zoneData.length; i++){
        const OptEl = document.createElement('option')
        OptEl.textContent = zoneData[i]
        zone.append(OptEl)
    }
}









// var jane = new Object();
// jane.name = 'Jane';
// jane.lastName = 'Smith';
// jane['yearOfBirth'] = 1969;
// jane['job'] = 'retired';
// jane['isMarried'] = true;