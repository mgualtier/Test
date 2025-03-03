package test;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class Main {

	public static void main(String[] args) {
		
	     List<Prodotto> prodotti = List.of(
	            new Prodotto(1, "Coca Cola", "Bevande", 1.50, "/images/coca_cola.jpg"),
	            new Prodotto(2, "Pane", "Alimenti", 0.80, "/images/pane.jpg"),
	            new Prodotto(3, "Latte", "Latticini", 1.20, "/images/latte.jpg"),
	            new Prodotto(4, "Mela", "Frutta", 0.60, "/images/mela.jpg"),
	            new Prodotto(5, "Pasta", "Alimenti", 1.00, "/images/pasta.jpg")
	        );
	
	     getMediaPrezzo(prodotti);
	     getMenoCaro(prodotti);
	     getPiuCaro(prodotti);
	            
	}

	public static double getMediaPrezzo(List<Prodotto> lista) {
		double prezzoMedio = 0;
		for (Prodotto p : lista) {
			prezzoMedio += p.getPrezzo();
		}
		prezzoMedio /= lista.size(); 
		 System.out.println("Media prezzo nella lista prodotti: " + prezzoMedio + "$");
		return prezzoMedio;
	}
	
	public static Prodotto getMenoCaro(List<Prodotto> lista) {
	 	Prodotto min = Collections.min(lista, Comparator.comparing(p -> p.getPrezzo()));
	 	System.out.println("Il prodotto meno caro è: " + min.toString());
	 	return min;
	}
	public static Prodotto getPiuCaro(List<Prodotto> lista) {
	 	Prodotto min = Collections.max(lista, Comparator.comparing(p -> p.getPrezzo()));
	 	System.out.println("Il prodotto più caro è: " + min.toString());
	 	return min;
	}

}
