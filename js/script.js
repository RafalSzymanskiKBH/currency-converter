{
    console.log("Witaj tutaj Kalkulator");

    const calculateResult = (exchangeRate,currencyChange) => {
        const currencyOutElement = document.querySelector(".js-currencyOutElement");
        const currencyInElement = document.querySelector(".js-currencyInElement");
        const currencyChange = `${currencyInElement.value}/${currencyOutElement.value}`;
        const PLN = 1;
        const GBP = 5.36;
        const EUR = 4.72;
        const USD = 4.46;
        const CHF = 4.77;
        const DKK = 0.63;
        const SEK = 0.43;

        switch (currencyChange) {
            case "PLN/EUR":
                return exchangeRate = PLN / EUR;

            case "PLN/USD":
                return exchangeRate = PLN / USD;

            case "PLN/GBP":
                return exchangeRate = PLN / GBP;

            case "PLN/CHF":
                return exchangeRate = PLN / CHF;

            case "PLN/DKK":
                return exchangeRate = PLN / DKK;

            case "PLN/SEK":
                return exchangeRate = PLN / SEK;

            case "EUR/PLN":
                return exchangeRate = EUR / PLN;

            case "EUR/USD":
                return exchangeRate = EUR / USD;

            case "EUR/GBP":
                return exchangeRate = EUR / GBP;

            case "EUR/CHF":
                return exchangeRate = EUR / CHF;

            case "EUR/DKK":
                return exchangeRate = EUR / DKK;

            case "EUR/SEK":
                return exchangeRate = EUR / SEK;

            case "USD/PLN":
                return exchangeRate = USD / PLN;

            case "USD/EUR":
                return exchangeRate = USD / EUR;

            case "USD/GBP":
                return exchangeRate = USD / GBP;

            case "USD/CHF":
                return exchangeRate = USD / CHF;

            case "USD/DKK":
                return exchangeRate = USD / DKK;

            case "USD/SEK":
                return exchangeRate = USD / SEK;

            case "GBP/PLN":
                return exchangeRate = GBP / PLN;

            case "GBP/EUR":
                return exchangeRate = GBP / EUR;

            case "GBP/USD":
                return exchangeRate = GBP / USD;

            case "GBP/CHF":
                return exchangeRate = GBP / CHF;

            case "GBP/DKK":
                return exchangeRate = GBP / DKK;

            case "GBP/CHF":
                return exchangeRate = GBP / SEK;

            case "CHF/PLN":
                return exchangeRate = CHF / PLN;

            case "CHF/EUR":
                return exchangeRate = CHF / EUR;

            case "CHF/GBP":
                return exchangeRate = CHF / GBP;

            case "CHF/USD":
                return exchangeRate = CHF / USD;

            case "CHF/DKK":
                return exchangeRate = CHF / DKK;

            case "CHF/SEK":
                return exchangeRate = CHF / SEK;

            case "DKK/PLN":
                return exchangeRate = DKK / PLN;

            case "DKK/EUR":
                return exchangeRate = DKK / EUR;

            case "DKK/GBP":
                return exchangeRate = DKK / GBP;

            case "DKK/USD":
                return exchangeRate = DKK / USD;

            case "DKK/PLN":
                return exchangeRate = DKK / PLN;

            case "DKK/SEK":
                return exchangeRate = DKK / SEK;

            case "SEK/EUR":
                return exchangeRate = SEK / EUR;

            case "SEK/GBP":
                return exchangeRate = SEK / GBP;

            case "SEK/USD":
                return exchangeRate = SEK / USD;

            case "SEK/CHF":
                return exchangeRate = SEK / CHF;

            case "SEK/DKK":
                return exchangeRate = SEK / DKK;

            default:
                return exchangeRate = 1;
        };
    }
    const updateResultText = (result, currencyOutElement) => {
        const resultElement = document.querySelector(".js-currencyResult");
        resultElement.value = `${result.toFixed(4)} ${currencyOutElement.value}`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-currencyAmount");
        const amount = amountElement.value;
        const exchange = exchangeRate.value;
        let result = calculateResult(amount * exchange);
        updateResultText(result, currencyOutElement);
    };

    const init = () => {
        const formElement = document.querySelector(".js-currencyForm");
        formElement.addEventListener("submit", onFormSubmit);
    };
    init();
}