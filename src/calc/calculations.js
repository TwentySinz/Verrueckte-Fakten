//speichert String mit Datum in JS Date Objekt
export const toDate = (gebDat) => {
    var splitString = gebDat.split("-");
    //console.log("Tag " + splitString[2] + "Monat " + splitString[1] + "Jahr " + splitString[0]);
    var d = new Date(splitString[0], splitString[1]-1, splitString[2]);
    return d;
}

//Differenz aktuelles Datum und Geburtsdatum in Millisekunden
export const setDiff = (currDat, gebDat) => {
    return currDat.getTime() - gebDat.getTime();
}

//Wochentag an dem User geboren wurde: Ermittlung über switch-Anweisung
export const setWochentag = (gebDat) => {
    var wochentag ='';
    switch(gebDat.getDay()){

    case 0:
        wochentag = "Sonntag";
        break;
        
    case 1:
        wochentag = "Montag";
        break;
        
    case 2:
        wochentag = "Dienstag";
        break;
        
    case 3:
        wochentag = "Mittwoch";
        break;
        
    case 4:
        wochentag = "Donnerstag";
        break;
        
    case 5:
        wochentag = "Freitag";
        break;
        
    case 6:
        wochentag = "Samstag";
        break;
        
    default:
        wochentag = "nicht gesetzt";
    
    }

    return wochentag;
}

//Sternzeichen berechnen
export const setSternzeichen = (gebDat) => {
	var sternzeichen = '';	
    switch(gebDat.getMonth()){

    case 0:
        if(gebDat.getDate() < 21){
            sternzeichen = "Steinbock";
            break;
        }
        else{
            sternzeichen = "Wassermann";
            break;
        }
        
    case 1:
        if(gebDat.getDate() < 20){
            sternzeichen = "Wassermann";
            break;
        }
        else{
            sternzeichen = "Fische";
            break;
        }
        
    case 2:
        if(gebDat.getDate() < 21){
            sternzeichen = "Fische";
            break;
        }
        else{
            sternzeichen = "Widder";
            break;
        }
        
    case 3:
        if(gebDat.getDate() < 21){
            sternzeichen = "Widder";
            break;
        }
        else{
            sternzeichen = "Stier";
            break;
        }
    
    case 4:
        if(gebDat.getDate() < 21){
            sternzeichen = "Stier";
            break;
        }
        else{
            sternzeichen = "Zwillinge";
            break;
        }
        
    case 5:
        if(gebDat.getDate() < 22){
            sternzeichen = "Zwillinge";
            break;
        }
        else{
            sternzeichen = "Krebs";
            break;
        }
        
    case 6:
        if(gebDat.getDate() < 23){
            sternzeichen = "Krebs";
            break;
        }
        else{
            sternzeichen = "Löwe";
            break;
        }
        
    case 7:
        if(gebDat.getDate() < 24){
            sternzeichen = "Löwe";
            break;
        }
        else{
            sternzeichen = "Jungfrau";
            break;
        }
        
    case 8:
        if(gebDat.getDate() < 24){
            sternzeichen = "Jungfrau";
            break;
        }
        else{
            sternzeichen = "Waage";
            break;
        }
        
    case 9:
        if(gebDat.getDate() < 24){
            sternzeichen = "Waage";
            break;
        }
        else{
            sternzeichen = "Skorpion";
            break;
        }
        
    case 10:
        if(gebDat.getDate() < 23){
            sternzeichen = "Skorpion";
            break;
        }
        else{
            sternzeichen = "Schütze";
            break;
        }
        
    case 11:
        if(gebDat.getDate() < 22){
            sternzeichen = "Schütze";
            break;
        }
        else{
            sternzeichen = "Steinbock";
            break;
        }
    default:
        sternzeichen = "nicht gesetzt";
    
    }
    return sternzeichen;
}

//User Herzschlag: Anzahl der Herzschläge während des gesamten Lebens: Berechnungsgrundlage: Durchschnittspuls 80
export const setHerzschlag = (diff) => {
    var tempherzschl = diff/1000/60 * 80;
    //console.log("Herzschlag ungerundet " + tempherzschl);
    var herzschlag = Math.round(tempherzschl);
    //console.log("Herzschlag gerundet " + this.herzschlag);
    return herzschlag;
}

//User Alter in Jahre,Monate,Tage: Wird berechnet aus aktuellem und Geburtsdatum
export const setAlter = (currDat, gebDat) => {
    var tempJahre = currDat.getFullYear() - gebDat.getFullYear();
    var tempMonate = currDat.getMonth() - gebDat.getMonth();
    var tempTage = currDat.getDate() - gebDat.getDate();
    var maxTage = 0; //max Tage des Vormonats, variiert zwischen 28 und 31 Tagen
    var alter = new Date();

    //setzt Anzahl der maximalen Tage des Vormonats des aktuellen Datums
    switch(currDat.getMonth()){
        case 2:
            maxTage = 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            maxTage = 30;
            break;
        default:
            maxTage = 31;
    }
    //im Falle eines Schaltjahres
    if((currDat.getFullYear() % 4 === 0) && (currDat.getMonth() === 2)){
        maxTage = 29;
    }

    //korrigiert Differenz Tage, Monate, Jahre
    if(tempMonate < 0){
        tempJahre -= 1;
        if(tempTage >= 0){
            tempMonate += 12; 
        }
        else{
            tempMonate += 11; 
            tempTage += maxTage;
        }
    }
    else if(tempMonate === 0 && tempTage < 0){
        tempJahre -= 1;
        tempMonate = 11;
        tempTage += maxTage;
    }
    else if(tempMonate > 0 && tempTage < 0){
        tempMonate -=1;
        tempTage += maxTage;
    }

    alter[0] = tempJahre;
    alter[1] = tempMonate;
    alter[2] = tempTage;
    //console.log("Jahre: " + tempJahre + " Monate: " + tempMonate + " Tage: " + tempTage);

    return alter;
}

//User geschlafene Zeit in Tagen: Berechnungsgrundlage: User schläft 1/3 des Tages
export const setGeschlafen = (diff) =>{
    var tempGeschlafen = diff/1000/60/60/24 /3;
    //console.log("Tage geschlafen ungerundet: " + tempGeschlafen +" Tage");
    var geschlafen = Math.round(tempGeschlafen);
    //console.log("Tage geschlafen gerundet: " + this.geschlafen + " Tage");
    return geschlafen;
}

//User Energieumsatz in kWh: Berechnungsgrundlage: Durchschnittliche Energieaufnahme durch Nahrung pro Tag: 10000 kJ
//1 kWh = 3600 kJ -> Faktor: 10/3.6 kWh pro Tag
export const setEnergieumsatz = (diff) => {
	var faktor = 10/3.6;
	var tempenergie = diff/1000/60/60/24 * faktor;
	//console.log("Energie erzeugt ungerundet: " + tempenergie + "kWh");
	var energieumsatz = Math.round(tempenergie);
    //console.log("Energie erzeugt gerundet: " + this.energieumsatz + "kWh");
    return energieumsatz;
}

//Stromverbrauch 4-köpfige Familie in Jahren (dient als Vergleich zu Energieumsatz): 
//Berechnungsgrundlage: Durchschnittsverbrauch pro Jahr 4000 kWh
export const setStromverbrauch = (energieumsatz) => {
	var stromverbrauch = energieumsatz/4000;
    //console.log("Stromverbrauch 4-köpfige Familie in Jahren: " + this.stromverbrauch);
    return stromverbrauch;
}

//User Flüssigkeitsverbrauch in Liter: Grundlage: 2 Liter Flüssigkeit pro Tag
export const setGetrunken = (diff) =>{
    var tempgetrunken = diff/1000/60/60/24 * 2;
    var getrunken = Math.round(tempgetrunken);
    //console.log("Flüssigkeit getrunken gerundet: " + this.getrunken + " l");
    return getrunken;
}

//Anzahl Badewannen (dient als Vergleich zu getrunken): Berechnungsgrundlage: Durchschnittliches Fassungsvermögen Badewanne: 150l
export const setBadewannen = (getrunken) =>{
    var badewannen = Math.round(getrunken/150);
    //console.log("Badewannen gerundet: " + this.badewannen);
    return badewannen;
}

//User Haarlänge in cm: Lebenslanges Wachstum der Haare in cm: Berechnungsgrundlage: Haare wachsen 0.4 mm am Tag 
export const setHaare = (diff) => {
    var temphaare = diff/1000/60/60/24 * 0.04;
    //console.log("Haarlänge ungerundet: " + temphaare +" cm");
    var haare = Math.round(temphaare);
    //console.log("Haarlänge gerundet: " + this.haare + " cm");
    return haare;
}

//User Fingernagellänge in cm: Lebenslanges Wachstum der Fingernägel in cm: Berechnungsgrundlage: Wachstum 0,5 - 1,2 mm pro Woche -> Faktor: 0,7 mm pro Woche = 0,01 cm pro Tag
export const setFingernagel = (diff) => {
    var tempfinger = diff/1000/60/60/24 * 0.01;
    //console.log("Fingernagellänge ungerundet: " + tempfinger + "cm");
    var fingernagel = Math.round(tempfinger);
    //console.log("Fingernagellänge gerundet: " + this.fingernagel + "cm");
    return fingernagel;
}

//User CO2 Ausstoss in kg: Berechnungsgrundlage: Durchschnittlicher CO2 Ausstoß Mensch pro min: 0,7g
export const setAusstossCo2 = (diff) => {
    var tempCo2 = diff/1000/60 * 0.0007;
    var ausstossCo2 = Math.round(tempCo2);
    //console.log("CO2 Ausstoß gerundet: " + this.ausstossCo2 + " kg");
    return ausstossCo2;
}

//gefahrene Strecke PKW in km (dient als Vergleich zu CO2 Austoss): Berechnungsgrundlage: CO2 Ausstoss Benziner: 8 Liter/100 km = 8 * 23,8 = 190,4 g CO2/km
export const setStreckeAuto = (ausstossCo2) => {
    var tempStrecke = ausstossCo2 / 0.1904; 
    var streckeAuto = Math.round(tempStrecke);
    //console.log("CO2 Ausstoß verglichen mit gerundet Autofahrt von: " + this.streckeAuto + " km");
    return streckeAuto;
}


//gelaufene Strecke User in km: Berechnungsgrundlage: 10000 Schritte pro Tag (empfohlen zu laufen) = 6 km
export const setStreckeGelaufen = (diff) => {
    var tempStrecke = diff/1000/60/60/24 * 6; 
    var streckeGelaufen = Math.round(tempStrecke);
    //console.log("Strecke gelaufen gerundet: " + this.streckeGelaufen + " km");
    return streckeGelaufen;
}