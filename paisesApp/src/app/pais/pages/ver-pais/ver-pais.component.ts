import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PaisService} from "../../services/pais.service";
import {switchMap} from "rxjs/operators";
import {Country} from "../../interfaces/Country";

@Component({
    selector: 'app-ver-pais',
    templateUrl: './ver-pais.component.html',
    styles: []
})
export class VerPaisComponent implements OnInit {

    country !: Country;

    constructor(private activatedRoute: ActivatedRoute,
                private paisSerivce: PaisService) {
    }


    ngOnInit(): void {
        this.activatedRoute.params.pipe(
            switchMap(({id}) => this.paisSerivce.getPais(id))

        ).subscribe(pais => this.country = pais);
    }

}
