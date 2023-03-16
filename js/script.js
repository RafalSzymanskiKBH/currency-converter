{
    console.log("Witaj tutaj Kalkulator");

    const calculateResult = (currencyChange) => {
        const PLN = 1;
        const GBP = 5.36;
        const EUR = 4.72;
        const USD = 4.46;
        const CHF = 4.77;
        const DKK = 0.63;
        const SEK = 0.43;
       
        
        switch (currencyChange)  {
            case "PLN/EUR":
                return PLN / EUR;

            case "PLN/USD":
                return PLN / USD;

            case "PLN/GBP":
                return PLN / GBP;

            case "PLN/CHF":
                return PLN / CHF;

            case "PLN/DKK":
                return PLN / DKK;

            case "PLN/SEK":
                return PLN / SEK;

            case "EUR/PLN":
                return EUR / PLN;

            case "EUR/USD":
                return EUR / USD;

            case "EUR/GBP":
                return EUR / GBP;

            case "EUR/CHF":
                return EUR / CHF;

            case "EUR/DKK":
                return EUR / DKK;

            case "EUR/SEK":
                return EUR / SEK;

            case "USD/PLN":
                return USD / PLN;

            case "USD/EUR":
                return USD / EUR;

            case "USD/GBP":
                return USD / GBP;

            case "USD/CHF":
                return USD / CHF;

            case "USD/DKK":
                return USD / DKK;

            case "USD/SEK":
                return USD / SEK;

            case "GBP/PLN":
                return GBP / PLN;

            case "GBP/EUR":
                return GBP / EUR;

            case "GBP/USD":
                return GBP / USD;

            case "GBP/CHF":
                return GBP / CHF;

            case "GBP/DKK":
                return GBP / DKK;

            case "GBP/CHF":
                return GBP / SEK;

            case "CHF/PLN":
                return CHF / PLN;

            case "CHF/EUR":
                return CHF / EUR;

            case "CHF/GBP":
                return CHF / GBP;

            case "CHF/USD":
                return CHF / USD;

            case "CHF/DKK":
                return CHF / DKK;

            case "CHF/SEK":
                return CHF / SEK;

            case "DKK/PLN":
                return DKK / PLN;

            case "DKK/EUR":
                return DKK / EUR;

            case "DKK/GBP":
                return DKK / GBP;

            case "DKK/USD":
                return DKK / USD;

            case "DKK/PLN":
                return DKK / PLN;

            case "DKK/SEK":
                return DKK / SEK;

            case "SEK/EUR":
                return SEK / EUR;

            case "SEK/GBP":
                return SEK / GBP;

            case "SEK/USD":
                return SEK / USD;

            case "SEK/CHF":
                return SEK / CHF;

            case "SEK/DKK":
                return SEK / DKK;

        };
    }
    const updateResultText = (result, currencyOutElement) => {
        const resultElement = document.querySelector(".js-currencyResult");
        resultElement.value = `${result.toFixed(4)} ${currencyOutElement.value}`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const currencyOutElement = document.querySelector(".js-currencyOutElement");
        const currencyInElement = document.querySelector(".js-currencyInElement"); 
        const amountElement = document.querySelector(".js-currencyAmount");
        const amount = amountElement.value;
        currencyChange = `${currencyInElement.value}/${currencyOutElement.value}`;
        calculateResult(currencyChange);
        const result =  amount*currencyChange;
        updateResultText(result, currencyOutElement);

    };

    const init = () => {
        const formElement = document.querySelector(".js-currencyForm");
        formElement.addEventListener("submit", onFormSubmit);
    };
    init();
}
