function onClickCheck1() {
    var checkbox = document.getElementById("check1").checked
    var input = document.getElementById("texto")
    var value = input.value;
    if(checkbox){
        input.value = value.toUpperCase();
    }else{
        return;
    }

}


function onClickCheck2() {
    var checkbox = document.getElementById("check2").checked
    var input = document.getElementById("texto")
    var value = input.value;
    if(checkbox){
        input.value = value.toLowerCase();
    }else{
        return;
    }
}