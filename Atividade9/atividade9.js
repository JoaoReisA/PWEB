function crescentOrder() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    
    
    var numberList = [num1, num2, num3];
    console.log(numberList)
    var orderedNumberList = numberList.sort((a,b) => a-b);

    alert(orderedNumberList);

}

function biggestNumber() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    
    
    var numberList = [num1, num2, num3];
    console.log(numberList)
    var orderedNumberList = numberList.sort((a,b) => b-a);

    alert(orderedNumberList[0]);

}