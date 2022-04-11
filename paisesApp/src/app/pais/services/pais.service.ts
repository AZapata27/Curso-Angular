import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Country} from "../interfaces/Country";

@Injectable({
    providedIn: 'root'
})
export class PaisService {

    private apiUrl: string = 'https://restcountries.com/v2';

    get httpParams(): HttpParams {
        return new HttpParams()
            .set('fields', 'name,capital,currencies,region,numericCode,flag,translations,population,alpha2Code');
    }

    constructor(private http: HttpClient) {
    }

    buscarPais(termino: string): Observable<Country[]> {
        const url = `${this.apiUrl}/name/${termino}`;
        return this.http.get<Country[]>(url,{params: this.httpParams});
    }

    buscarPaisPorCapital(termino: string): Observable<Country[]> {
        const url = `${this.apiUrl}/capital/${termino}`
        return this.http.get<Country[]>(url,{params: this.httpParams});
    }

    buscarPaisPorRegion(termino: string): Observable<Country[]> {
        const url = `${this.apiUrl}/regionalbloc/${termino}`
        return this.http.get<Country[]>(url,{params: this.httpParams});
    }

    getPais(id: string): Observable<Country> {
        const url = `${this.apiUrl}/alpha/${id}`
        return this.http.get<Country>(url,{params: this.httpParams});
    }

  sugerencias(termino: string) {

  }

}
