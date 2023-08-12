class Currency{
    constructor(){
        this.url = "https://api.freecurrencyapi.com/v1/latest";
        this.api = "?apikey=fca_live_HFPmKorFKdbkUGuhO6ZLGr0Q8FQVVEd4ttGjnRDW";
    }
    async calculate(first_value, first_currency, second_currency){
        let totalUrl = `${this.url}${this.api}&base_currency=${first_currency}`;
        const response = await fetch(totalUrl);
        const  result = await response.json();
        return result.data[second_currency] * first_value;
    }
}
