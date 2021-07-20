import {Injectable} from '@angular/core';
import {Personaje} from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
            nombre: 'Truncks',
            poder: 1200
        }, {
            nombre: 'Yamcha',
            poder: 200
        }
    ];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor() {
    }

    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje);
    }
}