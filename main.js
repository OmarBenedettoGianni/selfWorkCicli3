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
} while (bevandaSelezionata <1 || bevandaSelezionata > 3);