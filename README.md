
 Installazione e Avvio

### 1 Setup del Backend (Spring Boot)
1. Assicurati di avere **JDK 17+** e **Maven** installati.
2. Clona il repository:
   ```bash
   git clone https://github.com/mgualtier/Test.git
   cd Test/backend
   ```
3. Configura il database MySQL:
   - Assicurati che MySQL sia in esecuzione
   - Crea un database chiamato `prodotti`
   - Modifica il file `application.properties` con le tue credenziali MySQL
4. Avvia il backend:
   ```bash
   mvn spring-boot:run
   ```
   - L'API sarà disponibile su `http://localhost:8080/api/prodotti`

### 2️ Setup del Frontend (Angular)
1. Assicurati di avere **Node.js** e **Angular CLI** installati.
2. Spostati nella cartella del frontend:
   ```bash
   cd ../frontend
   ```
3. Installa le dipendenze:
   ```bash
   npm install
   ```
4. Avvia il frontend:
   ```bash
   ng serve
   ```
   - L'applicazione sarà disponibile su `http://localhost:4200`

---



