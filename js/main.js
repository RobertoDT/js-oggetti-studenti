// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

$(document).ready(function(){

  //creare oggetto studente con nome cognome ed età
  var studente = {
    "nome" : "Elisabetta",
    "cognome" : "Caputi",
    "eta" : 28
  }

  //ciclo e printo con "for in" sia parola chiave che valore dell'oggetto
  for(var key in studente){
    console.log(key + " -> " + studente[key]);
  }

  //creo array di oggetti di studenti
  var listaStudenti = [
    {
      "nome" : "Alex",
      "cognome" : "Olivieri",
      "eta" : 28
    },
    {
      "nome" : "Marco",
      "cognome" : "Esposito",
      "eta" : 28
    },
    {
      "nome" : "Matteo",
      "cognome" : "Antenucci",
      "eta" : 28
    },
    {
      "nome" : "Roberto",
      "cognome" : "Del Toro",
      "eta" : 28
    }
  ]

  //ciclo sugli oggetti dell'array e stampo nome e cognome
  //ciclo elm array
  for(var i = 0; i < listaStudenti.length; i++){

      console.log(listaStudenti[i].nome);
      console.log(listaStudenti[i].cognome);

  }

  //chiedo 3 prompt all'utente (nome, cognome, età) ed aggiungo un nuovo oggetto
  // var nome = prompt("Inserisci un nome");
  // var cognome = prompt("inserisci un cognome");
  // var anni = parseInt(prompt("Inserisci un numero per l'età"));
  //
  // var nuovoStudente = {
  //   "firstName" : nome,
  //   "lastName" : cognome,
  //   "age" : anni
  // }
  //
  // listaStudenti.push(nuovoStudente);
  //
  // console.log(listaStudenti);

  var source = $("#students").html();
  var template = Handlebars.compile(source);


  var context = {
    "title" : "Lista studenti",
    "listaStudenti" : listaStudenti
  };

  var html = template(context);

  // html e template compilato appeso al mio div prova
  $(".prova").append(html);


});
