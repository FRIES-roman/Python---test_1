def nacti_data():
    cisla = []
    pocet = 5  
    vstupy = [12, 7, 4, 9, 16] 
    for i in range(pocet):
        cislo = vstupy[i]
        cisla.append(cislo)
    return cisla

def vypocitej_prumer(cisla):
    if len(cisla) == 0:
        return 0
    soucet = 0
    for cislo in cisla:
        soucet += cislo
    prumer = soucet / len(cisla)
    return prumer

def najdi_maximum(cisla):
    maximum = cisla[0]
    for cislo in cisla:
        if cislo > maximum:
            maximum = cislo
    return maximum

def filtruj_suda(cisla):
    suda = []
    for cislo in cisla:
        if cislo % 2 == 0:
            suda.append(cislo)
    return suda

def hlavni_program():
    data = nacti_data()
    prumer = vypocitej_prumer(data)
    maximum = najdi_maximum(data)
    suda = filtruj_suda(data)
    print("Zadaná čísla:", data)
    print("Průměr:", prumer)
    print("Maximum:", maximum)
    print("Sudá čísla:", suda)

hlavni_program()
