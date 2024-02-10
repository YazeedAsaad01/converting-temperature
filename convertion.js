const question = prompt("Convert from celsius to Fahrenheit => what is the temprature ? else canel");

if(isNaN(question)) {
    alert("You have to use a number")
}else {
    alert(`${question * 9/5 +32}`);
}