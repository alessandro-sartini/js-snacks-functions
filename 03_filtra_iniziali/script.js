/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function startLetter(array,char) {
   
    let selectedLetter=[]
    for (let i = 0; i < array.length; i++){
        if (char.toLowerCase() === array[i].charAt(0).toLowerCase()){
                
            selectedLetter.push( array[i]);

        } 
    }

    if (selectedLetter.length === 0) {
        console.log(`Non ci sono nomi che iniziano per ${char}`);
    } else {
        return selectedLetter;
    }
    
}
// Invoca la funzione qui e stampa il risultato in console
console.log(startLetter(names, "z"))


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]