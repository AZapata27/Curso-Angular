import {Component, OnInit} from '@angular/core';
import {PaisService} from "../../services/pais.service";
import {Country} from "../../interfaces/Country";

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: []
})
export class PorPaisComponent implements OnInit{

  termino: string = '';
  isError: boolean = false;
  countries: Country[] = [];

  constructor(private paisService: PaisService) {
  }

  buscar() {
    this.isError = false
    console.log(this.termino);
    this.paisService.buscarPais(this.termino)
      .subscribe(resp => {
        console.log(resp);
        this.countries = resp;
      }, () => {
        this.isError = true;
      });
  }

  ngOnInit(): void {
  }

}
