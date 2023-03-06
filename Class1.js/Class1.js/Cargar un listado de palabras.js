//Definir funciones (con todos los tipos necesarios) para hacer lo siguiente:
//Cargar un listado de palabras (por esta vez usar el arreglo como variable global)
//Insertar/eliminar/buscar/actualizar una palabra del listado.
var palabras = ['arruga', 'vaso', 'pantalon', 'espatula', 'motocicleta'];
function palabrasFuncion2(palabra, accion, array, actualizacion) {
    console.log(accion + " " + palabra);
    switch (accion) {
        case "insertar":
            array.push(palabra);
            console.log(array);
            break;
        case "eliminar": //array[0]
            var index = array.indexOf(palabra);
            if (index) {
                array.splice(index, 1);
            }
            console.log(array);
            break;
        case "buscar":
            var index = array.indexOf(palabra);
            if (index) {
                console.log("palabra", array[index], "encontrado");
            }
            else {
                console.log("palabra", "palabra", "no encontrado");
            }
            break;
        case "actualizar":
            var index = array.indexOf(palabra);
            if (index) {
                array[index] = String(actualizacion);
            }
            console.log(array);
            break;
        default:
            console.log("no se encuentra accion");
            break;
    }
}

palabrasFuncion2('vasija', 'insertar', palabras);
palabrasFuncion2('vasija', 'buscar', palabras);
palabrasFuncion2('vasija', 'actualizar', palabras, 'jarron');
palabrasFuncion2('jarron', 'eliminar', palabras);
console.log("Fin console log");
palabrasFuncion2('vasija', 'insertar', palabras);
palabrasFuncion2('vasija', 'buscar', palabras);
palabrasFuncion2('vasija', 'actualizar', palabras, 'jarron');
palabrasFuncion2('jarron', 'eliminar', palabras);
