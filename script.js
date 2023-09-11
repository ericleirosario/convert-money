const convertButton = document.querySelector(".button-convert");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const valueToConvert = document.querySelector("#value").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value-converted");

    const dolarToday = 4.98;
    const euroToday = 5.33;    

    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD"
        }).format(valueToConvert / dolarToday);
    } else if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "EUR"
        }).format(valueToConvert / euroToday);
    } else {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL"
        }).format(valueToConvert);
    }
    
}

function changeCurrency() {
    const currencyImage = document.getElementById("currency-image");
    const currencyName = document.querySelector(".currency-name");
    const currencyValueConverted = document.querySelector(".currency-value-converted");
    
    if(currencySelect.value == "dolar"){
        currencyImage.src = "./assets/img/dollar.svg"
        currencyName.innerHTML = "Dólar Americano";
    } else if(currencySelect.value == "euro"){
        currencyImage.src = "./assets/img/euro.svg"
        currencyName.innerHTML = "Euro";
    } else {
        currencyImage.src = "./assets/img/currency-interrocao.png"
        currencyName.innerHTML = "Selecione uma moeda";
        currencyValueConverted.innerHTML = "0,00"
    }
    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)