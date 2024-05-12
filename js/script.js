// contact form validation
function contactFormValidation() {
    let isValid = true;

    // function to check if input field is empty
    function isEmpty(x) {
        let userInput = document.getElementById(x);
        if (userInput.value == '') {
            userInput.style.borderColor = "red"; // set red border 
            isValid = false;
        }
        else{
            firstName.style.backgroundColor = ""; // remove red border
        }
    }

    // call function for all input fields
    isEmpty('firstName')
    isEmpty('lastName')
    isEmpty('date')
    isEmpty('time')
    isEmpty('message')

    return isValid;
}

// order form validation: 
function orderFormValidation() {
    let isValid = true;

    let printLofoten    = document.getElementById('printLofoten');
    let printMain       = document.getElementById('printMain');
    let printMilkyway   = document.getElementById('printMilkyway');
    let printZurich     = document.getElementById('printZurich');

    let orderSum = printLofoten.value+printMain.value+printMilkyway.value+printZurich.value;

    if (orderSum == 0) {
        printLofoten.style.borderColor = "red";
        printMain.style.borderColor = "red";
        printMilkyway.style.borderColor = "red";
        printZurich.style.borderColor = "red";
        isValid = false; 
    }
    else {
        printLofoten.style.borderColor = "";
        printMain.style.borderColor = "";
        printMilkyway.style.borderColor = "";
        printZurich.style.borderColor = "";
    }

    // function to check if input field is empty
    function isEmpty(x) {
        let userInput = document.getElementById(x);
        if (userInput.value == '') {
            userInput.style.borderColor = "red"; // set red border 
            isValid = false;
        }
        else{
            firstName.style.backgroundColor = ""; // remove red border
        }
    }

    isEmpty('firstNameOrder')
    isEmpty('lastNameOrder')
    isEmpty('adress')
    isEmpty('city')
    isEmpty('tel')

    let email = document.getElementById('email');
    if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        email.style.borderColor = ""; // remove red border 
    }
    else {
        email.style.borderColor = "red"; // set red border 
        isValid = false;
    }

    return isValid;
}
