import { Component, OnInit } from '@angular/core';
import { ProdottoService } from '../../services/prodotto.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-categorie',
  imports: [NgFor],
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css'],
})
export class CategorieComponent implements OnInit {
  categorie: string[] = [];

  constructor(
    private prodottoService: ProdottoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.prodottoService.getCategorie().subscribe((data) => {
      this.categorie = data;
    });
  }

  vaiAProdotti(categoria: string) {
    this.router.navigate(['/prodotti', categoria]);
  }
}
