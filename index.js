
/**
let  edad = prompt( "Escribe tu edad en numeros") ;

if  (edad >= 18){
    alert( "Tu edad es válida para conducir")
}
else{ 
    alert("Lo siento , eres menor de edad y aún no puedes conducir")
}

 */


/** pide una nota y muestra la calificacion segun la nota.
 * 
 0 - 3 : muy deficiente
 3 - 5 :  insificiente
 5-6 : suficiente
 6-7: bien
 7-9 : notable
 9-10 : sobresaliente



 let nota = prompt("pon tu nota");

 if (nota < 3){
    alert("tu nota es muy deficiente" );
 }
  else if (nota < 5 && nota >=3 ){
    alert("insificiente");
 }
 else if  (nota < 6 && nota >=5 ){
    alert("suficiente");
 }
 else if (nota < 7 && nota >=6 ){
    alert("bien");
 }
 else if (nota < 9 && nota >=7 ){
    alert("notable");
 }
 else if (nota <=10 || nota <=9 ){
    alert("sobresaliente");
 }
 else  if(nota >10){
    alert("La nota no existe porque el maximo es 10");
}


 */

// let nota = parseInt(prompt("Escribe tu nota"));

// if(nota >= 0 && nota < 3){
//     alert("tu nota es muy deficiente" );
// } 
// else if(nota >= 3 && nota < 5){
//     alert("tu nota es insuficiente" );
// }
// else if(nota >=5 && nota < 6){
//     alert("tu nota es suficiente" );
// }
// else if(nota >=6 && nota < 7){
//     alert("tu nota es bien" );
// }
// else if(nota >=7 && nota < 9){
//     alert("tu nota es notable" );
// }

// else if(nota >=9 && nota < 11){
//     alert("tu nota es sobresaliente" );
// }
// else {
//     alert("Error, esa nota no existe, solo se aceptan datos numericos" );
// }


//sacame el 9% de 125000

// let porcentaje = (125000*9) / 100;

//   alert("El 9% de 125000 es " + porcentaje);


//** la sumatoria de 1000 */

// let sumatoria = 0;
// for ( let i=0 ; i<10000; i++){
//     sumatoria +=i;
// }

// alert("La sumatoria es " + sumatoria);

//** ingrese 3 numeros y muestr el mashor */



let numero1 = parseInt(prompt("numero 1 es: "));
let numero2 = parseInt(prompt("numero 2 es: "));
let numero3 = parseInt(prompt("numero 3 es: "));

// if(numero1>numero2 && numero1> numero3){
//     alert("Es mayor el mumero" + numero1);
// }
// else if(numero2>numero1 && numero2> numero3){
//     alert("Es mayor el numero " + numero2);

// }
// else if(numero3>numero1 && numero3> numero2){
//     alert("Es mayor el numero " + numero3);

// }

// else if (!numero1 || !numero2 || !numero3){
//     alert("Una o más variables están vacías.")
// }
// else{
//     alert("error");
// }

let mayor = numero3;
if(numero1 > numero3 && numero1 > numero2){
    mayor = numero1;
} else if(numero2 > numero1 && numero2 > numero3){
     mayor = numero2;
}
alert("El numero mayor es "+mayor);
let sumatoria = parseInt(mayor);

let resultado = 0;
for(let i = 0; i < sumatoria; i++){
    
    resultado += i;
}
alert("La sumatoria es: "+resultado);