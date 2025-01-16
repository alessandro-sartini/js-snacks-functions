/* Scrivi una funzione che accetti una stringa contenente 
un nome e restituisca un saluto seguito dal nome fornito. 

Il saluto deve essere :

buongiorno se è mattina (fino alle 13), 

buon pomeriggio se è pomeriggio (fino alle 17) 

e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.

function hiHour(stringName) {
    const data = new Date();
    const houar = data.getHours()
    // console.log(houar)
    if (houar >= 7 && houar <= 13) {

        console.log(`Buongiorno ${stringName}`);

    } else if (houar > 13 && houar <= 17) {

        console.log(`Buon pomeriggio ${stringName}`);

    } else {

        console.log(`Buonasera ${stringName}`);
        
    }

}

// Invoca la funzione qui e stampa il risultato in console

hiHour(name);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.