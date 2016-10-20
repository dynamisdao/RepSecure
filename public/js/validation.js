   // handle validation
const modal = document.getElementById('modal-insure');

function validateInsureForm(event) {
    let text = "This field is required";

    const current_address = document.getElementById("current-address").value;
    const tx_hash = document.getElementById("tx-hash").value;

    // Get the modal
    const modal = document.getElementById('modal-insure');

    if (!current_address) {
        document.getElementById("error-current-address").innerHTML = text;
    } 
    if (!tx_hash) {
        document.getElementById("error-tx-hash").innerHTML = text;
    } 
    if (tx_hash && current_address) {
        modal.style.display = "block";
    }
    event.preventDefault();
}

function clearValidationTxHash() {
    document.getElementById("error-tx-hash").innerHTML = null;
}

function clearValidationAddress() {
    document.getElementById("error-current-address").innerHTML = null;
}

    // When the user clicks on <span> (x), close the modal
function handleCloseModal() {
    modal.style.display = "none";
    document.getElementById("form-insure").reset();
    event.preventDefault();
}

// Show block on token2_page
function showBlock(target) {
    const display =  window.getComputedStyle(document.getElementById(target), null).display;
    if (display == 'none') {
        document.getElementById(target).style.display = 'block';
    } else if (display == 'block') {
        document.getElementById(target).style.display = 'none';
    }
}