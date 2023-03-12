{
    console.log("Witaj tutaj Kalkulator");
    const formElement = document.querySelector(".js-currencyForm");
    const currencyInElement = document.querySelector(".js-currencyInElement");
    const currencyOutElement = document.querySelector(".js-currencyOutElement");
    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        const PLN = 1;
        const GBP = 5.36;
        const EUR = 4.72;
        const USD = 4.46;
        const CHF = 4.77;
        const DKK = 0.63;
        const SEK = 0.43;

        let currencyChange = `${currencyInElement.value}/${currencyOutElement.value}`;

        switch (currencyChange) {
            case "PLN/EUR":
                exchangeRate = PLN / EUR;
                break;
            case "PLN/USD":
                exchangeRate = PLN / USD;
                break;
            case "PLN/GBP":
                exchangeRate = PLN / GBP;
                break;
            case "PLN/CHF":
                exchangeRate = PLN / CHF;
                break;
            case "PLN/DKK":
                exchangeRate = PLN / DKK;
                break;
            case "PLN/SEK":
                exchangeRate = PLN / SEK;
                break;
            case "EUR/PLN":
                exchangeRate = EUR / PLN;
                break;
            case "EUR/USD":
                exchangeRate = EUR / USD;
                break;
            case "EUR/GBP":
                exchangeRate = EUR / GBP;
                break;
            case "EUR/CHF":
                exchangeRate = EUR / CHF;
                break;
            case "EUR/DKK":
                exchangeRate = EUR / DKK;
                break;
            case "EUR/SEK":
                exchangeRate = EUR / SEK;
                break;
            case "USD/PLN":
                exchangeRate = USD / PLN;
                break;
            case "USD/EUR":
                exchangeRate = USD / EUR;
                break;
            case "USD/GBP":
                exchangeRate = USD / GBP;
                break;
            case "USD/CHF":
                exchangeRate = USD / CHF;
                break;
            case "USD/DKK":
                exchangeRate = USD / DKK;
                break;
            case "USD/SEK":
                exchangeRate = USD / SEK;
                break;
            case "GBP/PLN":
                exchangeRate = GBP / PLN;
                break;
            case "GBP/EUR":
                exchangeRate = GBP / EUR;
                break;
            case "GBP/USD":
                exchangeRate = GBP / USD;
                break;
            case "GBP/CHF":
                exchangeRate = GBP / CHF;
                break;
            case "GBP/DKK":
                exchangeRate = GBP / DKK;
                break;
            case "GBP/CHF":
                exchangeRate = GBP / SEK;
                break;
            case "CHF/PLN":
                exchangeRate = CHF / PLN;
                break;
            case "CHF/EUR":
                exchangeRate = CHF / EUR;
                break;
            case "CHF/GBP":
                exchangeRate = CHF / GBP;
                break;
            case "CHF/USD":
                exchangeRate = CHF / USD;
                break;
            case "CHF/DKK":
                exchangeRate = CHF / DKK;
                break;
            case "CHF/SEK":
                exchangeRate = CHF / SEK;
                break;
            case "DKK/PLN":
                exchangeRate = DKK / PLN;
                break;
            case "DKK/EUR":
                exchangeRate = DKK / EUR;
                break;
            case "DKK/GBP":
                exchangeRate = DKK / GBP;
                break;
            case "DKK/USD":
                exchangeRate = DKK / USD;
                break;
            case "DKK/PLN":
                exchangeRate = DKK / PLN;
                break;
            case "DKK/SEK":
                exchangeRate = DKK / SEK;
                break;
            case "SEK/EUR":
                exchangeRate = SEK / EUR;
                break;
            case "SEK/GBP":
                exchangeRate = SEK / GBP;
                break;
            case "SEK/USD":
                exchangeRate = SEK / USD;
                break;
            case "SEK/CHF":
                exchangeRate = SEK / CHF;
                break;
            case "SEK/DKK":
                exchangeRate = SEK / DKK;
                break;
            default:
                exchangeRate = 1;
        }
    });
    const init = () => {
        const amountElement = document.querySelector(".js-currencyAmount");
    const resultElement = document.querySelector(".js-currencyResult");

        let amount = parseFloat(amountElement.value);
        let exchange = parseFloat(exchangeRate);
        let result = amount * exchange;

        resultElement.value = `${result.toFixed(4)} ${currencyOutElement.value}`;
    
    }    
    
    init();
}