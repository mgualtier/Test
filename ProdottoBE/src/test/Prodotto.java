package test;

public class Prodotto {
	
	private int id;
	private String nome;
	private String categoria;
	private double prezzo;
	private String immagine;
	
	
	
	
	public Prodotto() {
		super();
	}




	public Prodotto(int id, String nome, String categoria, double prezzo, String immagine) {
		super();
		this.id = id;
		this.nome = nome;
		this.categoria = categoria;
		this.prezzo = prezzo;
		this.immagine = immagine;
	}




	public int getId() {
		return id;
	}




	public void setId(int id) {
		this.id = id;
	}




	public String getNome() {
		return nome;
	}




	public void setNome(String nome) {
		this.nome = nome;
	}




	public String getCategoria() {
		return categoria;
	}




	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}




	public double getPrezzo() {
		return prezzo;
	}




	public void setPrezzo(double prezzo) {
		this.prezzo = prezzo;
	}




	public String getImmagine() {
		return immagine;
	}




	public void setImmagine(String immagine) {
		this.immagine = immagine;
	}




	@Override
	public String toString() {
		return "Prodotto [id=" + id + ", nome=" + nome + ", categoria=" + categoria + ", prezzo=" + prezzo
				+ ", immagine=" + immagine + "]";
	}
	
	
	

}
