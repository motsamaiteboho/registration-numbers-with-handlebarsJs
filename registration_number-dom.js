//document.body.onload = addElement;
// get a reference to the textbox where the name is to be entered
const regNumber = document.querySelector(".fReg");
//get a reference to the add button
const addBtn = document.querySelector(".AddBtn");
const resetBtn = document.querySelector(".ResetBtn");
const errorMessageElem = document.querySelector(".errorMessage");


//variables
var regNumbers = RegstrationNumbers();

if (localStorage['regNumbers']) {
    var theregNumbers = JSON.parse(localStorage.getItem('regNumbers'))
    for (var i = 0; i < theregNumbers.length; i++) {
        regNumbers.addRegistration(theregNumbers[i]);
    }
    var allRegNumbers = regNumbers.AllRegNumbers();
    for (var i = 0; i < allRegNumbers.length; i++) {
        createDivElment(allRegNumbers[i]);
    }
}
function createDivElment(regNumber) {
    // create a new div element
    const newDiv = document.createElement("div");
    newDiv.classList.add("plate");
    // and give it some content
    const newContent = document.createTextNode(regNumber);
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
    // add the newly created element and its content into the DOM
    const currentDiv = document.querySelector(".plate1");

    currentDiv.before(newDiv);
}

function addElement() {
    if (regNumber.value !== "") {
        var format1 = "^[A-Z,a-z]{2} [0-9]{6}$";
        var format2 = "^[A-Z,a-z]{2} [0-9]{3}-[0-9]{3}$";
        var format3 = "^[A-Z,a-z]{2} [0-9]{3} [0-9]{3}$";
        if (regNumber.value.match(format1) || regNumber.value.match(format2) || regNumber.value.match(format3)) {
            var reg = regNumber.value.toUpperCase();
            const currentDiv = document.querySelector(".plate11");
            if (!regNumbers.AllRegNumbers().includes(reg)){
                createDivElment(reg);
                currentDiv.innerHTML = "";
            }
            else {
                setTimeout(function () {
                    errorMessageElem.innerHTML = "...";
                }, 3000);

                errorMessageElem.innerHTML = "Please, registration already exits";
            }

            regNumbers.addRegistration(reg);
            localStorage.setItem('regNumbers', JSON.stringify(regNumbers.AllRegNumbers()));

        }
        else {
            setTimeout(function () {
                errorMessageElem.innerHTML = "...";
            }, 3000);
            errorMessageElem.innerHTML = "Please, enter a valid registration format ";
        }
        regNumber.value = "";
    }
    else {
        setTimeout(function () {
            errorMessageElem.innerHTML = "...";
        }, 3000);
        errorMessageElem.innerHTML = "Please, enter a valid registration number";
    }
}
addBtn.addEventListener('click', addElement);

//get reference to the dropdown manue
var selectedBtn = document.querySelector(".townsname");
function selectedTown() {
    //remove all current plates
    const elementList = document.querySelectorAll(".plate")
    for (let i = 0; i < elementList.length; i++) {
        elementList[i].remove();
    }
    const currentDiv = document.querySelector(".plate11");
    var regbyTown = regNumbers.filterByTown(selectedBtn.value);
    if (regbyTown.length > 0) {
        for (let i = 0; i < regbyTown.length; i++) {
            createDivElment(regbyTown[i]);
        }
        currentDiv.innerHTML = "";
    }
    else {
        currentDiv.innerHTML = "No registration numbers available";
    }

}
selectedBtn.addEventListener('click', selectedTown);

function resetReg() {
    localStorage['regNumbers'] = "";
    //remove all current plates
    const elementList = document.querySelectorAll(".plate")
    for (let i = 0; i < elementList.length; i++) {
        elementList[i].remove();
    }
    regNumbers.resetReg();
}
resetBtn.addEventListener('click', resetReg);