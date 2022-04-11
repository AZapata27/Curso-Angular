import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject} from "rxjs";
import {debounceTime} from "rxjs/operators";

@Component({
    selector: 'app-pais-input',
    templateUrl: './pais-input.component.html',
    styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

    @Output() onEnter: EventEmitter<string> = new EventEmitter<string>();
    @Output() onDebounce: EventEmitter<string> = new EventEmitter<string>();

    @Input() placeholder: string = 'Buscar...';

    termino: string = '';
    debouncer: Subject<string> = new Subject<string>();

    buscar() {
        this.onEnter.emit(this.termino);
    }

    ngOnInit(): void {
        this.debouncer.pipe(
            debounceTime( 300)
        ).subscribe(termino => this.onDebounce.emit(termino));
    }

    teclaPresionada() {
        this.debouncer.next(this.termino);
    }
}