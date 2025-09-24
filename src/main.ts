//  Snack 1
// Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia… Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.

// Se è una stringa: stampala in maiuscolo

// Se è un numero: moltiplicalo per due e stampalo

// Se è un booleano: stampa “Sì” o “No” in base al suo valore

// In tutti gli altri casi: stampa “Tipo non supportato”

let dati: unknown
if (typeof dati === "string") {
  const datiMaiuscolo = dati.toUpperCase()
  console.log(datiMaiuscolo)
} else if (typeof dati === "boolean") {
  console.log(dati)
} else if (typeof dati === "number") {
  const risultato = dati * 2
  console.log(risultato)
} else {
  console.log("Tipo non supportato")
}


// Snack 2
// Crea un type alias Dipendente che rappresenta un lavoratore con i seguenti dati:

// nome → stringa
// cognome → stringa
// annoNascita → numero
// sesso → Può essere solo "m" o "f".
// anniDiServizio (array di numeri, es. [2014, 2015, 2017, 2018])

type Dipendente = {
  nome: string,
  cognome: string,
  annoNascita: number,
  sesso: "m" | "f"
  anniDiServizio: number[]
}


const user: Dipendente = {
  nome: "Mauro",
  cognome: "Ana",
  annoNascita: 32,
  sesso: "m",
  anniDiServizio: [2016, 2017, 2018, 2019]
}

console.log(user)

// Estendiamo Dipendente per definire due ruoli specifici all'interno dell'azienda:

// Developer
// livelloEsperienza → Il livello di esperienza del developer (le scelte possibili sono solo “Junior”, “Mid” o “Senior”).
// linguaggi → Un array contenente i linguaggi di programmazione utilizzati dal developer in azienda (opzionale, perché i neo assunti non hanno ancora dei linguaggi assegnati).
// certificazioni → Un array di stringhe contenente certificazioni tecniche ottenute dal developer (può essere vuoto).
// ProjectManager
// teamSize → Il numero di persone nel team gestito dal Project Manager (può essere null se non ha ancora un team assegnato).
// budgetGestito → Il totale del budget annuale gestito dal PM (opzionale).
// stakeholderPrincipali → Un array di stringhe con i nomi dei principali stakeholder con cui il PM collabora (può essere vuoto).
