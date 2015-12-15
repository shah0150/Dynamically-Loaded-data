// JavaScript Document
var users = [];
var i = 0;
window.onload=("DOMContentLoaded", function() {
var usr = function(alldata) {
var data = document.createElement("div");
var image = document.createElement("img");
image.src = alldata.image;
data.appendChild(image);
var resp = document.createElement("h2");
resp.innerText = dynamic(alldata);
var emailLink = document.createElement("a");
emailLink.href = "mailto:" + alldata.email;
emailLink.innerText= alldata.email;
data.appendChild(resp);
data.appendChild(emailLink);
return data.innerHTML;
};

var oldInfo = function(alldata) {
var result = document.createElement("div");
var image1 = document.createElement("img");
image1.src= alldata.thumbnail;
result.appendChild(image1);
var dynmo = document.createElement("a");
dynmo.innerText = dynamic(alldata);
dynmo.href = "mailto:" + alldata.email;
result.appendChild(dynmo);
return result;
};
var dynamic = function(name) {

var frstNme = name.firstName.substring(0, 1).toUpperCase() + name.lastName.substring(1);
var lstNme = name.lastName.substring(0, 1).toUpperCase() + name.lastName.substring(1);
return frstNme +" "+ lstNme;
};

var list = function() {
document.querySelector("#output1").innerHTML = usr(users[i]);
i++;
if (i > 0) {
document.querySelector("#showBtn").innerHTML = "Show Next";
}
if (users[i - 2]) {
if (document.querySelectorAll(".oldData").length >= 3) {
document.querySelector("#output2").removeChild(document.querySelector(".oldData"));
}

var side = document.createElement("div");

side.classList.add("oldData");

side.appendChild(oldInfo(users[i - 2]));
document.querySelector("#output2").appendChild(side);
}
};

//Load JSON data with AJAX function and disables load data to  show first
var getUrl = function() {
this.classList.remove("enabled");
this.classList.add("add");
this.removeEventListener("click", getUrl);
var req = new XMLHttpRequest();
req.open("GET","users.json", false);
req.onload = function() {
if (req.readyState === 4 && req.status === 200) {
users = JSON.parse(req.responseText);
document.querySelector("#showBtn").classList.remove("disabled");
document.querySelector("#showBtn").classList.add("enabled");

document.querySelector("#showBtn").addEventListener("click", list);
}
};
req.send(null);
};
document.querySelector("#loadBtn").addEventListener("click", getUrl);
});