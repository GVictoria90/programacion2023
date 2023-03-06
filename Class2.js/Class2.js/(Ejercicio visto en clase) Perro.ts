class Perro {
    /* Variables internas de la clase perro */
    /* Como creamos una variable interna?
    escribimos el nombre, el tipo y si es necesario le asignamos un valor inicial */
    private estaDespierto: boolean = true;
    private tieneHambre: boolean = true;
    private ladridos: number = 0;
    private solo: boolean = false;
    private bolsaRota: boolean = false;
    private esFeliz: boolean = false;
    private color: string;
    private nombre: string;

    /* Funciones de nuestra clase */
    /* cuando la funcion se ejecute va a leer el estado de la instancia */
    alimentar(): void {
        if (this.tieneHambre === true){
            this.tieneHambre = false
            console.log('El perro come el alimento');
            
        } else {
           console.log( `El perro no tiene hambre, porque ya se alimentó`);
           
        }
    }
 
    ladrar(): void {
        this.ladridos = this.ladridos + 1
    }
 
    romperBolsa(): void {
        if (this.solo === true && this.tieneHambre === true)
        {this.bolsaRota = true
        console.log(`Bolsa rota`)} 
        else {
            console.log(`No puede romper la bolsa en este momento`)
        }
        
    }
 
    acariciar(): void {
        if (this.estaDespierto === true) {
            this.estaDespierto = false;
            this.esFeliz = true;
            console.log('El perro es feliz con tus caricias, el perro se durmió')
        } else this.despertar()
        
    }

    despertar(): void {
        if(this.estaDespierto === false){
            this.estaDespierto = true
            console.log('El perró se despertó');
        } else {
            console.log('El perro ya se encuentra despierto')
        }
    }

    asignarColor(color): void {
        /* this.color es la variable dentro de la clase y
        color es el parametro de la funcion */
        /* comillas backticks para template string alt + 96 */
        this.color = color
        console.log(`El color del perro es ${color}`);
        
    }

    asignarNombre(nombre): void {
        this.nombre = nombre
        console.log(`El nombre del perro es ${nombre}`);
        
    }

    llamarPorNombre(nombre): void{
        if(nombre === this.nombre){
            console.log(`El perro ${this.nombre} viene`);
            
        } else {
            console.log(`El perro NO viene, ${nombre} no es su nombre`);
            
        }
    }
 }
