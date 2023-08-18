const upperSet = "ABCDEFGHOJKLMNOPQRSTUVWXYZ";

const lowerSet = "abcdefghijklmnopqrstuvwxyz";

const numberSet = "1234567890";

const symbolSet = "~!@#$%^&*()_+/";




// Selectors
const passwordInput = document.getElementById("pass-box")
const rangeInput = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");


const getRandomdata = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)]

}

const generatePassword = (password = "") => {

    if (upperInput.checked) {
        password += getRandomdata(upperSet);
    }
    if (lowerInput.checked) {
        password += getRandomdata(lowerSet);
    }
    if (numberInput.checked) {
        password += getRandomdata(numberSet);
    }
    if (symbolInput.checked) {
        password += getRandomdata(symbolSet);
    }

    if (password.length < rangeInput.value) {
        return generatePassword(password);
    }

    passwordInput.innerText = truncateString(password, rangeInput.value);


}



document.getElementById("btn").addEventListener("click", function () {
    generatePassword();
})

generatePassword();




// truncate func

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}