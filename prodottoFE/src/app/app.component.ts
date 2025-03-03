import { Component, OnInit } from '@angular/core';
import { ProdottoService } from './services/prodotto.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [NgFor, NgIf],
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  prodotti: any[] = [];
  tuttiProdotti: any[] = [];
  categorie: string[] = [];
  prezzoMedio: number = 0;
  prodottoPiuCaro: any;
  prodottoMenoCaro: any;
  constructor(private prodottoService: ProdottoService) {}

  ngOnInit() {
    this.caricaProdotti();
    this.caricaCategorie();
    this.getStatistiche();
  }

  caricaProdotti() {
    this.prodottoService.getProdotti().subscribe((data: any[]) => {
      this.prodotti = data;
      this.tuttiProdotti = data;
    });
  }

  caricaCategorie() {
    this.prodottoService.getCategorie().subscribe((data: string[]) => {
      this.categorie = data;
    });
  }

  filtraPerCategoria(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const categoria = selectElement?.value || '';
    this.prodotti = categoria
      ? this.tuttiProdotti.filter((p) => p.categoria === categoria)
      : this.tuttiProdotti;
  }

  getStatistiche() {
    this.prodottoService.getStatistiche().subscribe((stat) => {
      this.prezzoMedio = stat.prezzoMedio;
      this.prodottoPiuCaro = stat.prodottoPiuCaro;
      this.prodottoMenoCaro = stat.prodottoMenoCaro;
    });
  }
}
