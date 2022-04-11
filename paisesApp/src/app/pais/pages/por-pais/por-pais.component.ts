import {Component, OnInit} from '@angular/core';
import {PaisService} from "../../services/pais.service";
import {Country} from "../../interfaces/Country";

@Component({
    selector: 'app-por-pais',
    templateUrl: './por-pais.component.html',
    styles: [ `li{ cursor: pointer}` ]
})
export class PorPaisComponent implements OnInit {

    termino: string = '';
    isError: boolean = false;
    buscarSugerencia: boolean = false;
    countries: Country[] = [];
    countriesSugeridos: Country[] = [];
    placeholder: string = 'Buscar pais';

    constructor(private paisService: PaisService) {
    }

    buscar(termino: string) {
        this.isError = false
        this.termino = termino
        console.log(this.termino);
        this.paisService.buscarPais(this.termino)
            .subscribe(resp => {
                console.log(resp);
                this.countries = resp;
            }, () => {
                this.isError = true;
            });
    }

    sugerencias(termino: string) {
        this.isError = false;
        this.buscarSugerencia = true;
        this.paisService.buscarPais(termino)
            .subscribe(resp =>this.countriesSugeridos = resp.splice(0,4),
                () => {
                    this.isError = true;
                });

    }

    ngOnInit(): void {
    }

}
