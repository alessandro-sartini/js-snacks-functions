/* Scrivi una funzione che accetti una stringa e restituisca 
il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function numberChar(stringCharCount) {
    let numVocali=0;
    const vocali = ['a', 'e', 'i', 'o', 'u', 'y'];
    for (let i = 0; i < stringCharCount.length; i++){
        if (vocali.includes(stringCharCount[i].toLowerCase())) {
            numVocali++
        }

    }
    return numVocali
}

// Invoca la funzione qui e stampa il risultato in console
console.log(numberChar(word))


//Risultato atteso se si passa 'javascript': 3 (a, a, i)