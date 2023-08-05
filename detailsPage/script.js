
const ipdiv = document.getElementById("ip-div");
const googleMap = document.getElementById("google-map");
const moreInfo = document.getElementById("more-info");


const TOKEN = '181535a724bccd';
let userData = {};
let coordinates = [];
let postOffices = [];
let postOfficeMessage = "";






// async function getUserIP() {
//     const URL = 'https://api.ipify.org?format=json';

    
//     // fetch(apiURL)
//     //     .then(response => response.json())
//     //     .then(data => {
            
//     //         console.log(data);
//     //     })
//     //     .catch(error => {
//     //         console.error('Error fetching IP address:', error);
//     //     });

//     const res = await fetch(URL);
//     const data = await res.json();
//     // console.log(data);
//     // userData = data;
//     getUserDetails(data.ip);
// }


// const getUserDetails = async(currIp) => {
//     const res = await fetch(`https://ipinfo.io/json`);
//     const data = await res.json();
//     userData = JSON.parse(JSON.stringify(data));
//     extractFromTimeZone();
//     showPostOffices();
// }


// get time using timezone from user data
const extractFromTimeZone = () => {
let datetime= new Date().toLocaleString("en-US", { timeZone: userData["timezone"] });
return datetime;
}

// display post offices nearby
// const showPostOffices = async() => {
//     const res = await fetch(`https://api.postalpincode.in/pincode/${userData['postal']}`);
//     const data = await res.json();
//     postOffices = JSON.parse(JSON.stringify(data[0]["PostOffice"]));
//     postOfficeMessage = JSON.parse(JSON.stringify(data[0]["Message"]));
// }




// render inital ip details
const renderIpdDetails = () => {
    coordinates = userData["loc"].split(",");
    
    ipdiv.innerHTML = `<div id="ip-address">IP Address: ${userData["ip"]}</div>
    <div id="ip-details">
        <div id="latitute" class="ip-info">Lat: ${coordinates[0]}</div>
        <div id="city" class="ip-info">City: ${userData["city"]}</div>
        <div id="organisation" class="ip-info">Organisation: ${userData["org"]}</div>
        <div id="longitude" class="ip-info">Long: ${coordinates[1]}</div>
        <div id="region"  class="ip-info">Region: ${userData["region"]}</div>
        <div id="hostname" class="ip-info">Hostname:</div>
    </div>`;
}


// render google map
const renderGoogleMap = () => {
    googleMap.innerHTML = `
    <iframe src="https://maps.google.com/maps?q=${coordinates[0]}, ${coordinates[1]}&z=15&output=embed" ></iframe>`
}

// render more info 
const renderMoreInfo = () => {
    const dateTime = extractFromTimeZone();
    
    moreInfo.innerHTML = `<div id="time-zone">Time Zone: ${userData["timezone"]}</div>
    <div id="date-time">Date and Time: ${dateTime}</div>
    <div id="pincode">Pincode: ${userData["postal"]}</div>
    <div id="message">Message: Number of pincode(s) found: </div>
    `
}


// render post offices
const renderPostOffices = async() => {
    const res = await fetch(`https://api.postalpincode.in/pincode/${userData['postal']}`);
    const data = await res.json();
    postOffices = JSON.parse(JSON.stringify(data[0]["PostOffice"]));
    postOfficeMessage = JSON.parse(JSON.stringify(data[0]["Message"]));
    const message = document.getElementById("message");
    message.innerHTML = `${postOfficeMessage}`
}


const getUserDetailsHandler = async() => {
    const res = await fetch(`https://ipinfo.io/json?token=${TOKEN}`);
    const data = await res.json();
    userData = JSON.parse(JSON.stringify(data));
    // renderIp(); 
    
    renderIpdDetails();
    renderGoogleMap();
    renderMoreInfo();
    renderPostOffices();

    console.log(userData);
}

document.addEventListener("DOMContentLoaded", getUserDetailsHandler);



