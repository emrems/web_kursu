// Elementleri seçme
const amountInput = document.querySelector("#amount");
const firstOption = document.querySelector("#firstCurrencyOption");
const secondOption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#result");

const currency = new Currency();//yeni nesne türettik
runEventListener();

function runEventListener() {
    amountInput.addEventListener("input", exchange);
}

function exchange() {
    const amount = Number(amountInput.value.trim()); // inputa girilen değerler string olacak burda int e cevirip boşlukları kesiyoruz
    const firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent;
    const secondOptionValue = secondOption.options[secondOption.selectedIndex].textContent;

    currency.exchange(amount,firstOptionValue,secondOptionValue)//türetilen nesneyi kullandık
    .then((result)=>{
        resultInput.value = result.toFixed(4);
    })    

}


