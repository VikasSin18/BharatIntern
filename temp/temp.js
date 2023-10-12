const celciusF = document.querySelector("#celcius");
const degf = document.querySelector("#degf");
const convertBtn = document.querySelector("#convert-btn");
const temp1 = document.querySelector("#temp-type");

window.addEventListener("load", () => {
    degf.value = "";
    celciusF.innerHTML = "";
});

convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertTo();
});

function convertTo() {
    let inputValue = parseFloat(degf.value); 

    if (isNaN(inputValue)) {
        celciusF.innerHTML = "Invalid input";
        return;
    }

    if (temp1.value == "fahrenheit") {
        const fahren = (inputValue *(5/9)) +32;
        celciusF.innerHTML = `${fahren.toFixed(2)} &deg;C`;
    } else if (temp1.value == "kelvin") {
        const kel = inputValue + 273.15;
        celciusF.innerHTML = `${kel.toFixed(2)} &deg;C`;
    }
}
