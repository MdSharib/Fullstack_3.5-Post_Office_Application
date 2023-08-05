
const getBtn = document.getElementById("get-btn");
const ipScreen = document.getElementById("right-ip");
const TOKEN = '181535a724bccd';
let userIp = '';






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


// // get time using timezone from user data
// const extractFromTimeZone = () => {
    
// let chicago_datetime_str = new Date().toLocaleString("en-US", { timeZone: userData["timezone"] });
// console.log(chicago_datetime_str);
// }

// // display post offices nearby
// const showPostOffices = async() => {
//     const res = await fetch(`https://api.postalpincode.in/pincode/${userData['postal']}`);
//     const data = await res.json();
//     console.log(data);
// }

// getUserIP();

const renderIp = () => {
    ipScreen.innerHTML = `Your Current IP Address is ${userIp}`;
}



const getIpHandler = async() => {
    const res = await fetch(`https://ipinfo.io/json?token=${TOKEN}`);
    const data = await res.json();
    userIp = data.ip; 
    renderIp(); 
    // console.log(data);
}

document.addEventListener("DOMContentLoaded", getIpHandler);

const getBtnHandler = () => {
    window.location.href = "./detailsPage"
}


// /event listeners
getBtn.addEventListener('click', getBtnHandler);