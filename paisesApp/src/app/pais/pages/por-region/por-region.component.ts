import {Component} from '@angular/core';
import {Country} from "../../interfaces/Country";
import {PaisService} from "../../services/pais.service";

@Component({
    selector: 'app-por-region',
    templateUrl: './por-region.component.html',
    styles: [`button {
        margin-right: 5px;
    }`]
})
export class PorRegionComponent {

    regiones: string[] = ['EU',
        'EFTA',
        'CARICOM',
        'PA',
        'AU',
        'USAN',
        'EEU',
        'AL',
        'ASEAN',
        'CAIS',
        'CEFTA',
        'NAFTA',
        'SAARC'];
    regionActiva: string = '';

    countries: Country[] = [];


    constructor(private paisService: PaisService) {
    }

    buscar(region: string) {
        this.paisService.buscarPaisPorRegion(region)
            .subscribe(resp => {
                console.log(resp);
                this.countries = resp;
            });
    }

    activarRegion(region: string) {

        if(this.regionActiva===region) {
            return;
        }
        this.regionActiva = region;
        this.buscar(region);
    }
}
