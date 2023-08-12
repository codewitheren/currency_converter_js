//Sayı
const first_value = document.querySelector("#first_value");
const second_value = document.querySelector("#second_value");

//Para Birimi
const first_currency = document.querySelector("#first_currency");
const second_currency = document.querySelector("#second_currency");

//Buton
const calculate_button = document.querySelector(".calculate_button");
const clear_button = document.querySelector(".clear_button");

const currency = new Currency(first_currency.value.toUpperCase());

function startEventListener(){
    calculate_button.addEventListener("click",calculate);
    clear_button.addEventListener("click",clear);
}

function clear(){
    first_value.value = "";
    second_value.value = "";
}

function calculate(){
    if(first_value.value == "")
    {
        alert("Lütfen bir sayı giriniz.");
        return ;
    }
    currency.calculate(parseFloat(first_value.value), first_currency.value.toUpperCase(), second_currency.value.toUpperCase())
    .then((result)=>{
        second_value.value = result;
    })
}

startEventListener();