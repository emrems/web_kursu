//apiye istek atm işlemlerini burdan yapıcaz
class Currency{
    constructor(){
        this.url= "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_BnyPHqhxk4eMNeCxSt153A5iuYRz1yz3yYDlGi86&currencies=EUR%2CUSD%2CCAD&base_currency=";
    }
   async exchange(amount,firstCurrency,secondCurrency){
        const response = await fetch(`${this.url}${firstCurrency}`);
        const result =await response.json();
        const exchangedResult = amount*result.data[secondCurrency];
        return exchangedResult;
    }
}