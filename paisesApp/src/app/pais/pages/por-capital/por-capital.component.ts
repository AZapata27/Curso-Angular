import {Component, OnInit} from '@angular/core';
import {Country} from "../../interfaces/Country";
import {PaisService} from "../../services/pais.service";

@Component({
    selector: 'app-por-capital',
    templateUrl: './por-capital.component.html',
    styles: []
})
export class PorCapitalComponent implements OnInit {

    termino: string = '';
    isError: boolean = false;
    countries: Country[] = [];
    placeholder: string = 'Buscar pais por capital';

    constructor(private paisService: PaisService) {
    }

    buscar(termino: string) {
        this.isError = false
        this.termino = termino
        console.log(this.termino);
        this.paisService.buscarPaisPorCapital(this.termino)
            .subscribe(resp => {
                console.log(resp);
                this.countries = resp;
            }, () => {
                this.isError = true;
            });
    }

    sugerencias(termino: string) {

    }

    ngOnInit(): void {
    }

}
