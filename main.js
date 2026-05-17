/*
let bevandaSelezionata;

do {
    bevandaSelezionata=Number(prompt(`inserici il numero della bevanda selezionata \n 1 - Acqua\n 2 - Coca Cola\n 3 - Birra`));
    switch(bevandaSelezionata){
        case 1:
            console.log(`Hai selezionato l'acqua`);
        break;
        case 2:
            console.log(`Hai selezionato la Coca Cola`);
        break;
        case 3:
            console.log(`Hai selezionato la Birra`);
        break;
        default:
            console.log(`La bevandaSelezionata non è valida`)
    }
} while (bevandaSelezionata <1 || bevandaSelezionata > 3)
*/
// Dizionario che mappa le intenzioni dell'utente (normalizzate) al risultato finale
const opzioniValide = {
    "1": "Acqua",
    "acqua": "Acqua",
    "2": "Coca Cola",
    "coca cola": "Coca Cola",
    "cocacola": "Coca Cola",
    "3": "Birra",
    "birra": "Birra"
};

let inputUtente;
let selezioneCompletata = false;

do {
    inputUtente = prompt("Scegli una bevanda digitando il numero o il nome:\n1 - Acqua\n2 - Coca Cola\n3 - Birra");

    let inputNormalizzato = inputUtente.trim().toLowerCase();

    let bevandaScelta = opzioniValide[inputNormalizzato];

    if (bevandaScelta) {
        console.log(`Hai selezionato ${bevandaScelta}`);
        selezioneCompletata = true;
    } else {
        console.log(`Attenzione: "${inputUtente}" non è un'opzione valida. Riprova.`);
    }

} while (!selezioneCompletata);