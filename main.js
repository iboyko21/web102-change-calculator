var calculateChange = function(price, cash) {
    price = Math.round(document.getElementById("amount-due").value*100);
    cash = Math.round(document.getElementById("amount-received").value*100);
    // console.log("Price: " + price);
    // console.log("Cash: " + cash);
    var returnValue = cash - price;
    if(returnValue < 0) {
        alert("Not enough $$ !!!!!");
        return;
    }
    document.getElementById("change").innerHTML = "Change Due: $" + parseFloat(returnValue/100).toFixed(2);

    var change = {};
    const coinTypes = ["twenty", "ten", "five", "two", "dollar", "quarter", "dime", "nickle", "penny"];
    const coinValues = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];

    var amount;
    for (let i = 0; i < coinValues.length; i++){
        amount = Math.floor(returnValue/coinValues[i]);
        if (amount > 0) {
            change[coinTypes[i]] = amount;
            returnValue = returnValue % coinValues[i];
        }
    }

    var dollars = Math.trunc((cash - price)/100);
    if (dollars != 0 || dollars != undefined) {
        document.getElementById("dollars-output").innerHTML = `Dollars: ${dollars}`;
    } else {
        document.getElementById("dollars-output").innerHTML = `Dollars: 0`;
    }

    if (change["twenty"] != undefined) {
        document.getElementById("twenty-dollar").innerHTML = `$20: ${change["twenty"]}`;
    } else {
        document.getElementById("twenty-dollar").innerHTML = `$20: 0`;
    }

    if (change["ten"] != undefined) {
        document.getElementById("ten-dollar").innerHTML =  `$10: ${change["ten"]}`;
    } else {
        document.getElementById("ten-dollar").innerHTML =  `$10: 0`;
    }

    if (change["five"] != undefined) {
        document.getElementById("five-dollar").innerHTML = `$5: ${change["five"]}`;
    } else {
        document.getElementById("five-dollar").innerHTML = `$5: 0`;
    }

    if (change["two"] != undefined) {
        document.getElementById("two-dollar").innerHTML =  `$2: ${change["two"]}`;
    } else {
        document.getElementById("two-dollar").innerHTML =  `$2: 0`;
    }

    if (change["dollar"] != undefined) {
        document.getElementById("one-dollar").innerHTML = `$1: ${change["dollar"]}`;
    } else {
        document.getElementById("one-dollar").innerHTML = `$1: 0`;
    }

    cents = parseInt(((cash - price)/100).toString().split('.')[1]);
    if (isNaN(cents)) {
        document.getElementById("cents-output").innerHTML = `Cents: 0`;
    } else {
        document.getElementById("cents-output").innerHTML = `Cents: ${cents}`;
    }

    if (change["quarter"] != undefined) {
        document.getElementById("quarters-output").innerHTML = `Quarters: ${change["quarter"]}`;
    } else {
        document.getElementById("quarters-output").innerHTML = `Quarters: 0`;
    }

    if (change["dime"] != undefined) {
        document.getElementById("dimes-output").innerHTML = `Dimes: ${change["dime"]}`;
    } else {
        document.getElementById("dimes-output").innerHTML = `Dimes: 0`;
    }

    if (change["nickle"] != undefined) {
        document.getElementById("nickels-output").innerHTML = `Nickels: ${change["nickle"]}`;
    } else {
        document.getElementById("nickels-output").innerHTML = `Nickels: 0`;
    }

    if (change["penny"] != undefined) {
        document.getElementById("pennies-output").innerHTML = `Pennies: ${change["penny"]}`;
    } else {
        document.getElementById("pennies-output").innerHTML = `Pennies: 0`;
    }
    
    return change;
}

function formReset(){
    document.getElementById("amount-due").value="";
    document.getElementById("amount-received").value="";
}