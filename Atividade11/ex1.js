function Retangulo (x,y){
    this.base = x;
    this.altura = y;

    this.area = () => {
        return x * y
    }
}

var retangulo = new Retangulo(5,10);
var areaRetangulo = retangulo.area();

function onClickArea(){
    var x = document.getElementById("x").value
    var y = document.getElementById("y").value

    var retangulo1 = new Retangulo(x,y)
    alert(retangulo1.area())
}