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
let fullName, emailID, mobileNo, experienceOverallID, experienceRelavantID, roleID, resumeID, resumeName, resumeNonce;


const clearRoles = () => {
    role.innerHTML = '<option>Select</option>';
};

const clearBranches = () => {
    branch.innerHTML = '<option>Select</option>';
};

// OverallExperience and RelevantExperience
let overallExpData, relevantExpData;                                 
const loadOverallExpData = async () => {
    const body = await getExperience('OVERALL')
    overallExpData = body.data
    // console.log(body.data)
    setOverallEl()
}
loadOverallExpData()

const loadRelevantExpData = async () => {
    const body = await getExperience('RELEVANT')
    relevantExpData = body.data
    // console.log(body.data)
    setReleventEl()
}
loadRelevantExpData()

function setOverallEl(){
    for(let i=0; i<overallExpData.length; i++){
        const OptEl = document.createElement('option')
        OptEl.textContent = overallExpData[i].value
        OptEl.setAttribute('value', overallExpData[i].id)
        overallExperience.append(OptEl)
    }
    
}

function setReleventEl() {
    for (let i = 0; i < relevantExpData.length; i++) {
        const OptEl = document.createElement('option')
        OptEl.textContent = relevantExpData[i].value
        OptEl.setAttribute('value', relevantExpData[i].id)
        relaventExperience.append(OptEl)
    }
}

overallExperience.addEventListener('change', (e) => {
    experienceOverallID = e.target.value;
})

relaventExperience.addEventListener('change', (e) => {
    experienceRelavantID = e.target.value
})



////////////////// Departments and Roles ////////////////////////

let departmentAndRoleData
const loadDepAndRoleData = async () => {
    const body = await getDepAndRole()
    departmentAndRoleData = body.data
    // console.log(body.data)
    setDepEl()
}
loadDepAndRoleData()

function setDepEl() {
    role.disabled = true
    for (let i = 0; i < departmentAndRoleData.length; i++) {
        const OptEl = document.createElement('option')
        OptEl.textContent = departmentAndRoleData[i].name
        OptEl.setAttribute('value', departmentAndRoleData[i].id)
        department.append(OptEl)
    }
}

department.addEventListener('change', (e) => {
    clearRoles()
    const id = e.target.value
    setRoleEl(id)
})

function setRoleEl(selectedDep) {
    let rolesData
    for (let i = 0; i < departmentAndRoleData.length; i++) {
        if(selectedDep === departmentAndRoleData[i].id){
            rolesData = departmentAndRoleData[i].roles
        }
    }
    for(let i=0; i<rolesData.length; i++){
        const OptEl = document.createElement('option')
        OptEl.textContent = rolesData[i].name
        OptEl.setAttribute('value', rolesData[i].id)
        role.append(OptEl)
    }
    role.disabled = false
    role.addEventListener('change', (e) => {
        roleID = e.target.value
        console.log(roleID)
    })
}

////////////// zones and branches ///////////////////

let zoneData;
const loadZonesData = async () => {
    const body = await getZones()
    zoneData = body.data
    setZonesEl()
}
loadZonesData()

function setZonesEl(){
    branch.disabled = true
    for(let i=0; i<zoneData.length; i++){
        const OptEl = document.createElement('option')
        OptEl.textContent = zoneData[i]
        OptEl.setAttribute('value', zoneData[i])
        zone.append(OptEl)
    }
}

let BranchesData;
const loadBranchesData = async (selectedZone) => {
    const body = await getBranches(selectedZone)
    BranchesData = body.data
    setBranchesEl()
}

function setBranchesEl(){
    for(let i=0; i<BranchesData.length; i++){
        const OptEl = document.createElement('option')
        OptEl.textContent = BranchesData[i].branch
        OptEl.setAttribute('value', BranchesData[i].id)
        branch.append(OptEl)
    }
    branch.disabled = false
}

zone.addEventListener('change', (e) => {
    clearBranches()
    let selectedZone = e.target.value
    loadBranchesData(selectedZone)
})





const resume = document.getElementById("attachFile")
const upload = (e) => {
    // e.preventDefault()
    const form = new FormData();
    form.append("file", resume.files[0]);

    var settings = {
        "url": "https://api-hfc.techchefz.com/icicihfc-micro-service/document/reference/upload/v2",
        "method": "POST",
        "timeout": 0, 
        "processData": false,
        "mimeType": "multipart/form-data",
        "contentType": false,
        "data": form
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        let data = response.data
        resumeID = data.id
        resumeName = data.name
        resumeNonce = data.nonce
    });
}


form.experienceOverallId = experienceOverallID
form.experienceRelaventId = experienceRelavantID
form.roleId = roleID
form.resumeDocRefId = resumeID
form.resumeDocRefFileName = resumeName
form.resumeDocRefNonce = resumeNonce

