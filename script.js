

var requestBar1 = document.getElementById('todd-image-bar');
var requestBar2 = document.getElementById('phil-image-bar');
var editName = document.getElementById("h2-profile");
var currentRequestNumber = document.getElementById("total-request");
var currentConnectionsNumber = document.getElementById("connection-number");
console.log(currentRequestNumber);

var totalRequest = 2;
var totalConnections = 418;

function removeAccept1() {
    requestBar1.remove();
}

function removeClose1() {
    requestBar1.remove();
}
function removeAccept2() {
    requestBar2.remove();
}

function removeClose2() {
    requestBar2.remove();
}

function editProfile() {
    editName.innerText = "Rupesh G";
}

function decreaseRequest() {
    totalRequest--;
    currentRequestNumber.innerText = totalRequest;
}
function increaseConnection() {
    totalConnections++;
    currentConnectionsNumber.innerText = totalConnections;
}


