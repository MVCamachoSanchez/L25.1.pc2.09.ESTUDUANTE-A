import Cl_estudiante from "./Cl_estudiante.js";

export default class Cl_beca extends Cl_estudiante {
    constructor(nombre, acumNotas, cantMaterias,) {
        super(nombre, acumNotas, cantMaterias)
    }

    beca() {
        if (this.promedio() >= 15)
            return 30;

        else
            if (this.promedio() >= 10 && this.promedio() < 15)
                return 20;

            else
                return 0;
    }
}