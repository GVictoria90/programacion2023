//Modificar el primer script de "HolaMundo" para que:
//El mensaje que se muestra al usuario se almacene en una variable llamada mensaje y el funcionamiento del script sea el mismo.
//Modificar el ejemplo de secuencia:
//Que cada mensaje se almacene en una variable a mostrar por consola y que el funcionamiento del script sea el mismo.
//Modificar el ejemplo de base por altura
//Almacenar la base y la altura en variables y el resultado y que el funcionamiento del script sea el mismo.

let readlineSync = require('readline-sync');

console.log("Hola Mundo");
 
let message = readlineSync.question("indique el mensaje: ");

console.log(message);

