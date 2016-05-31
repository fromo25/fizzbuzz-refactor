$(document).ready(function() {

    function fizzbuzz() {
    var userData = prompt("Input your number");
    if (Number.isNaN(+userData)) {
        alert("Please enter a number");
        fizzbuzz();
    } else if(userData % 1 !== 0){
        alert("Please enter a whole number");
        fizzbuzz();
    
    } else {
        for (var numCounter = 1; numCounter <= userData; numCounter += 1) {

            if (numCounter % 3 === 0 && numCounter % 5 === 0) {
                console.log("FizzBuzz");
                $('p').append("FizzBuzz" + '<br>');
            } else if (numCounter % 3 === 0) {
                console.log("Fizz");
                $('p').append("Fizz" + '<br>');
            } else if (numCounter % 5 === 0) {
                console.log("Buzz");
                $('p').append("Buzz" + '<br>');
            } else {
                console.log(numCounter);
                $('p').append(numCounter + '<br>');
            }
        }
    }
}

fizzbuzz();

});