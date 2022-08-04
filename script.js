const btnRandom = document.getElementById("btn-random");
const adress = document.getElementById("p-address");
const emails = document.getElementById("p-email");
const img = document.getElementById("img-profile");
const user = document.getElementById("p-name");
const gender = document.getElementById("span-gender-icon");
const loadcard = document.getElementById("div-loading-card");
const usercard = document.getElementById("div-user-card");

usercard.style.display = "none";
setTimeout(() => {
  usercard.style.display = "";
  loadcard.style.display = "none";
}, 1500);

callApi();
btnRandom.onclick = () => {
  callApi();
  usercard.style.display = "none";
  loadcard.style.display = "";
  setTimeout(() => {
    usercard.style.display = "";
    loadcard.style.display = "none";
  }, 1500);
};

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  img.src = resp.data.results[0].picture.large;
  emails.innerText = resp.data.results[0].email;
  user.innerText = `${resp.data.results[0].name.first} ${resp.data.results[0].name.last}`;
  adress.innerText = `${resp.data.results[0].location.city} ${resp.data.results[0].location.state} ${resp.data.results[0].location.country} ${resp.data.results[0].location.postcode}`;
  if (resp.data.results[0].gender === "female") {
    gender.innerText = "👩";
  } else {
    gender.innerText = "👨";
  }
}
