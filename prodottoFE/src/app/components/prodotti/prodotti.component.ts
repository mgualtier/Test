import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdottoService } from '../../services/prodotto.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-prodotti',
  imports: [NgFor],
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css'],
})
export class ProdottiComponent implements OnInit {
  categoria: string = '';
  prodotti: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private prodottoService: ProdottoService
  ) {}

  ngOnInit(): void {
    this.categoria = this.route.snapshot.paramMap.get('categoria')!;
    this.prodottoService
      .getProdottiByCategoria(this.categoria)
      .subscribe((data) => {
        this.prodotti = data;
      });
  }
}
