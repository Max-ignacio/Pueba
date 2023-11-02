function validar(){
let nombre = document.getElementById("nombre").value;;
let radios = document.getElementsByName("Honorario");
let estudia = document.getElementById("estudiante");
let valorRadio="";
for (let a=0 ; a < radios.length ; a++ ){
if (radios[a].checked){
valorRadio = radios[a].value;
}
}
if (estudia.checked){
estudia ="SI";
}else{
estudia ="NO";
}
console.log(valorRadio);
console.log("Nombre: "+ nombre + valorRadio +
"\nEstudiante: " + estudia);
}
function limpiar(){
document.getElementById("nombre").value ="";
let radios = document.getElementsByName("honorario");
for (let a=0;a<radios.length;a++){
if (radios[a].checked){
radios[a].value =false;
}
}
let estudia = document.getElementById("estudiante");
estudia.checked=false;
}
function pedido() {
    var pedidos = parseInt(prompt("Ingresa la renta: "));
    let calculos = 90 / 10 * pedidos;
    console.log(calculos)
    alert(calculos)
    //let pedido_nombre = prompt("Ingresa tu nombre: ");
    //alert("Gracias, tu nombre es: " + pedido_nombre)
}
function honorarios(){
var valor = parseInt(prompt("Ingresa la renta: "));
let calculo = 10 / 100 * valor;
console.log(calculo);
alert(calculo)
}
function nombres() {
    var nombres = prompt("Ingresa la ingresa tu nombre");
    alert("tu nombre es: " + nombres);
}