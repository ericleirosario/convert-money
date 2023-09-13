const convertButton = document.querySelector(".button-convert");
const currencySelectToConvert = document.querySelector(".currency-select-to-convert");
const currencySelectConverted = document.querySelector(".currency-select-converted");

function convertValues() {
    const valueToConvert = document.querySelector("#value").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value-converted");

    const realToday = 1;
    const dolarToday = 4.9835;
    const euroToday = 5.3373;
    const libraToday = 6.2169001;
    const bitcoinToday = 125812.48;    

    if(currencySelectConverted.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL"
        }).format(valueToConvert / realToday);
    }else if(currencySelectConverted.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD"
        }).format(valueToConvert / dolarToday);
    } else if (currencySelectConverted.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "EUR"
        }).format(valueToConvert / euroToday);
    } else if (currencySelectConverted.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB",{
            style: "currency",
            currency: "GBP"
        }).format(valueToConvert / libraToday);
    } else if (currencySelectConverted.value == "bitcoin") {
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

function changeCurrencyConverted() {
    const currencyImageConverted = document.getElementById("currency-image-converted");
    const currencyNameConverted = document.querySelector(".currency-name-converted");
    const currencyValueConverted = document.querySelector(".currency-value-converted");
    
    if(currencySelectConverted.value == "real") {
        currencyImageConverted.src = "./assets/img/real.png";
        currencyNameConverted.innerHTML = "Real Brasil";
    } else if(currencySelectConverted.value == "dolar"){
        currencyImageConverted.src = "./assets/img/dolar.png"
        currencyNameConverted.innerHTML = "Dólar Americano";
    } else if(currencySelectConverted.value == "euro"){
        currencyImageConverted.src = "./assets/img/euro.png"
        currencyNameConverted.innerHTML = "Euro";
    } else if(currencySelectConverted.value == "libra"){
        currencyImageConverted.src = "./assets/img/libra.png"
        currencyNameConverted.innerHTML = "Libra Esterlina";
    } else if(currencySelectConverted.value == "bitcoin"){
        currencyImageConverted.src = "./assets/img/bitcoin.png"
        currencyNameConverted.innerHTML = "Bitcoin";
    }
    else {
        currencyImageConverted.src = "./assets/img/currency-interrocao.png"
        currencyNameConverted.innerHTML = "Selecione uma moeda";
        currencyValueConverted.innerHTML = "0,00";
    }
    convertValues()
}

currencySelectConverted.addEventListener("change", changeCurrencyConverted);
convertButton.addEventListener("click", convertValues);