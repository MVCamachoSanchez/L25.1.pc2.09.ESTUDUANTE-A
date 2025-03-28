export default class Cl_estudiante{
    constructor(nombre, acumNotas, cantMaterias){
        this.nombre = nombre;
        this.acumNotas = acumNotas;
        this.cantMaterias = cantMaterias;
    }

    promedio(){
        return this.acumNotas / this.cantMaterias;
    }

    convertirStringBeca(){
        if(this.promedio() >=10){
            return "recibe una beca";
        }
        else 
            return "no le corresponde";
    }
}