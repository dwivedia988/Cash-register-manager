const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const nextbutton = document.querySelector("#next-button");
const message = document.querySelector("#error-message");
const fullPage = document.querySelector("#full-page");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 1];

nextbutton.addEventListener("click", checkBillInput);

function checkBillInput(){
    var inputValue = billAmount.value;
    if (inputValue.trim() !== '') {
        fullPage.style.display = "block";
      } else {
        alert('Please enter the bill amount.');
      }
 }



checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        } else {
            showMessage("Do you wanna wash plates?");
        }

    } else {
        showMessage("Invalid Bill Amount");
    }

} );


function calculateChange(amountToBeReturned) {
    for(let i = 0; i < availableNotes.length; i++){
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned = Math.trunc(amountToBeReturned % availableNotes[i]);
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}