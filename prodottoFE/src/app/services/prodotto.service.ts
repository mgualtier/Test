import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prodotto } from '../components/models/prodotto';

@Injectable({
  providedIn: 'root',
})
export class ProdottoService {
  private apiUrl = 'http://localhost:8080/api/prodotti';

  constructor(private http: HttpClient) {}

  getProdotti(): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>(this.apiUrl);
  }
  getCategorie(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/categorie`);
  }

  getProdottiByCategoria(categoria: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?categoria=${categoria}`);
  }

  getStatistiche(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/statistiche`);
  }
}
