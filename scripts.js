
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select") //Está pegando o tipo de moeda selecionada

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") //Outras moedas

    console.log(currencySelect.value)

    const dolarToday = 4.93
    const euroToday = 5.35
    const libraToday = 6.29
    const bitcoinToday = 127.847

    if (currencySelect.value == "dolar") {  //Se o select estiver selecionado o valor de dolar entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "euro") { //Se o select estiver selecionado o valor de euro entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value == "libra") {  //Se o select estiver selecionado o valor de libra entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    if (currencySelect.value == "bitcoin") {  //Se o select estiver selecionado o valor de bitcoin entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue) //Vai jogar o valor em real para a tela


}




convertButton.addEventListener("click", convertValues)