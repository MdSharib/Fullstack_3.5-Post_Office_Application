const getBtn = document.getElementById("get-btn");
const ipScreen = document.getElementById("right-ip");
const TOKEN = "181535a724bccd";
let userIp = "";

const renderIp = () => {
  ipScreen.innerHTML = `Your Current IP Address is <span class="result-styling">${userIp}</span>`;
};

const getIpHandler = async () => {
  try {
    const res = await fetch(`https://ipinfo.io/json?token=${TOKEN}`);
    const data = await res.json();

    if (!data) {
      throw new Error("error while fetching ip address");
      return;
    }
    userIp = data.ip;
    renderIp();
    // console.log(data);
  } catch (err) {
    console.error(err);
  }
};

document.addEventListener("DOMContentLoaded", getIpHandler);

const getBtnHandler = () => {
  window.location.href = "./detailsPage";
};

// /event listeners
getBtn.addEventListener("click", getBtnHandler);
