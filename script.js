//script to check if passwords are equal
const passOne = document.getElementById('password');
const passTwo = document.getElementById('confirmed');
const button = document.getElementById('submitData');
const targetDiv = document.getElementById('notEqual')

//check if passwords are identical
function checkEquality () {
    if (passOne.value == passTwo.value) {
        targetDiv.textContent = ''
        return true;
    }
    else {
        targetDiv.textContent = '(passwords do not match)';
        return false;
    }
}
