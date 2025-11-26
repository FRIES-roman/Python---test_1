// Funkce pro načtení pevně daných dat (simulace vstupu)
function nactiData() {
    const cisla = [];
    const pocet = 5;
    const vstupy = [12, 7, 4, 9, 16];
    
    for (let i = 0; i < pocet; i++) {
        cisla.push(vstupy[i]);
    }
    return cisla;
}

// Funkce pro výpočet průměru
function vypocitejPrumer(cisla) {
    if (cisla.length === 0) {
        return 0;
    }
    
    let soucet = 0;
    // Použití forEach pro iteraci (alternativa k for cyklu)
    cisla.forEach(cislo => {
        soucet += cislo;
    });
    
    const prumer = soucet / cisla.length;
    return prumer;
}

// Funkce pro nalezení maxima
function najdiMaximum(cisla) {
    // Použití metody Math.max.apply pro nalezení maxima v poli
    if (cisla.length === 0) {
        return undefined; // Pro prázdné pole vracíme undefined
    }
    return Math.max.apply(null, cisla);
    
    // Alternativní ruční implementace:
    /*
    let maximum = cisla[0];
    for (const cislo of cisla) {
        if (cislo > maximum) {
            maximum = cislo;
        }
    }
    return maximum;
    */
}

// Funkce pro filtrování sudých čísel
function filtrujSuda(cisla) {
    // Použití metody Array.prototype.filter pro vytvoření nového pole jen se sudými čísly
    const suda = cisla.filter(cislo => cislo % 2 === 0);
    return suda;
}

// Hlavní řídící funkce programu
function hlavniProgram() {
    const data = nactiData();
    const prumer = vypocitejPrumer(data);
    const maximum = najdiMaximum(data);
    const suda = filtrujSuda(data);
    
    console.log("Zadaná čísla:", data);
    console.log("Průměr:", prumer);
    console.log("Maximum:", maximum);
    console.log("Sudá čísla:", suda);
}

// Spuštění hlavního programu
hlavniProgram();