/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function firstLetterArray(arrayDate) {
    let charNames=[]
    for (let i = 0; i < arrayDate.length; i++){
        
        charNames.push( arrayDate[i].charAt(0));
    }
    return charNames;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(firstLetterArray(names))


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]