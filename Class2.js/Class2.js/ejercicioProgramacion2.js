//Piensen en un objeto de la vida real, 
//construyan una clase basada en este objeto y escriban sus propiedades y funcinalidades.
var Gato = /** @class */ (function () {
    function Gato() {
        this.estaDespierto = true;
        this.tieneHambre = true;
        this.solo = false;
        this.estaFeliz = false;
    }
    Gato.prototype.alimentar = function () {
        if (this.tieneHambre === true) {
            this.tieneHambre = false;
            console.log('El gato come el alimento');
        }
        else {
            console.log("El gato no tiene hambre, porque ya se aliment\u00F3");
        }
    };
    Gato.prototype.acariciar = function () {
        if (this.estaDespierto === true) {
            this.estaDespierto = false;
            this.estaFeliz = true;
            console.log('El Gato es feliz con las caricias, el Gato se durmió');
        }
        else
            this.despertar();
    };
    Gato.prototype.despertar = function () {
        if (this.estaDespierto === false) {
            this.estaDespierto = true;
            console.log('El gato se despertó');
        }
        else {
            console.log('El gato ya se encuentra despierto');
        }
    };
    Gato.prototype.asignarColor = function (color) {
        this.color = color;
        console.log("El color del gato es ".concat(color));
    };
    Gato.prototype.asignarNombre = function (nombre) {
        this.nombre = nombre;
        console.log("El nombre del gato es ".concat(nombre));
    };
    Gato.prototype.llamarPorNombre = function (nombre) {
        if (nombre === this.nombre) {
            console.log("El Gato ".concat(this.nombre, " viene"));
        }
        else {
            console.log("El Gato NO viene, ".concat(nombre, " no es su nombre"));
        }
    };
    return Gato;
}());
