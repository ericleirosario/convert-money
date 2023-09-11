const convertButton = document.querySelector(".button-convert");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const valueToConvert = document.querySelector("#value").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value-converted");

    const dolarToday = 4.9835;
    const euroToday = 5.3373;
    const libraToday = 6.2169001;
    const bitcoinToday = 125812.48;    

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
    } else if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB",{
            style: "currency",
            currency: "GBP"
        }).format(valueToConvert / libraToday);
    } else if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "BTC"
        }).format(valueToConvert / bitcoinToday);
    }
    
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL"
    }).format(valueToConvert);
    
}

function changeCurrency() {
    const currencyImage = document.getElementById("currency-image");
    const currencyName = document.querySelector(".currency-name");
    const currencyValueConverted = document.querySelector(".currency-value-converted");
    
    if(currencySelect.value == "dolar"){
        currencyImage.src = "./assets/img/dolar.png"
        currencyName.innerHTML = "Dólar Americano";
    } else if(currencySelect.value == "euro"){
        currencyImage.src = "./assets/img/euro.png"
        currencyName.innerHTML = "Euro";
    } else if(currencySelect.value == "libra"){
        currencyImage.src = "./assets/img/libra.png"
        currencyName.innerHTML = "Libra Esterlina";
    } else if(currencySelect.value == "bitcoin"){
        currencyImage.src = "./assets/img/bitcoin.png"
        currencyName.innerHTML = "Bitcoin";
    }
    else {
        currencyImage.src = "./assets/img/currency-interrocao.png"
        currencyName.innerHTML = "Selecione uma moeda";
        currencyValueConverted.innerHTML = "0,00";
    }
    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)