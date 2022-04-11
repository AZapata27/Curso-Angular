import {Component, Input, OnInit} from '@angular/core';
import {Country} from "../../interfaces/Country";

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent implements OnInit {


  @Input() countries: Country[] = [];

  constructor() { }

  ngOnInit(): void {
  }


}
