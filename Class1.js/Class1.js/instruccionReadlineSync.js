//importa paquete readlineSync

//Modificar el primer script de AlturaPersona para:
//preguntar el nombre de la persona
//Verificar si la persona es mas alta de 178cm.
//En caso afirmativo informar "es mayor que el promedio", de lo contrario "es menor que el promedio"


let readlineSync = require('readline-sync');

let alturaPersona = readlineSync.question("Indique la altura de la persona: ");
console.log('La altura de la persona es: ',alturaPersona);

if (alturaPersona>178){
    console.log("Es mayor al promedio");

} else{
    console.log("Es menor al promedio");
}



let nombrePersona = readlineSync.question("Indique el nombre de la persona: ");
console.log('el nombre de la persona es: ',nombrePersona); 