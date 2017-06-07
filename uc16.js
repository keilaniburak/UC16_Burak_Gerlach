function exchangeRate(currencyId) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (this.readyState === 4) {
            //we got a response from the server
            if (this.status === 200) {
                // The request was successful!
                displayMoney(this.responseText);
    }
            else if (this.status === 404) {
                displayMoney('{"currency" : "none"}');
            }
             else {
                console.log("We have a problem...server responded with code: " + this.status);
            }
        }
        else {
            // Waiting for a response...
        }
    };

    var url = "http://api.fixer.io/latest?base=USD";
    httpRequest.open("GET", url, true);
    httpRequest.send();

}

function displayMoney(data) {
    var money = JSON.parse(data);
    var conversionRate = USD.rates. + money;
    var dollarAmt = document.getElementById('currency').value;
    document.getElementById("money").innerHTML = dollarAmt * conversionRate;
    }
