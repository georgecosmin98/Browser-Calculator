function getHistory() {
    return document.getElementById("history-value").innerText;
}

function printHistory(num) {
    document.getElementById("history-value").innerText = num;
}

function getOutput() {
    return document.getElementById("output-value").innerText;
}

function printOutput(num) {
    document.getElementById("output-value").innerText = num;
}

var operator = document.getElementsByClassName("operator");
var aux;
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        if (getHistory() == "" && this.id != "backspace") {
            printHistory(getOutput());
            aux = getOutput() + this.id;
            printOutput("");
        }
        if (this.id == "backspace") {
            if (getOutput() == "")
                printOutput("");
            else
                printOutput(getOutput().substr(0, getOutput().length - 1))
        }
        if (this.id == "clear") {
            printHistory("");
            printOutput("");
        }
        if (getHistory() != "" && this.id == "=") {
            printOutput(eval(aux + getOutput()));
            printHistory("");
        }
    });
}

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        if (getOutput() == "" && this.id != "0")
            printOutput(this.id);
        else if (getOutput() != "") {
            getOutput();
            printOutput(getOutput() + this.id);
        }
    });
}