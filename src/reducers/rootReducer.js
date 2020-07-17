import { 
        toDate, 
        setDiff, 
        setWochentag, 
        setSternzeichen,
        setHerzschlag,
        setAlter,
        setGeschlafen,
        setEnergieumsatz,
        setStromverbrauch,
        setGetrunken,
        setBadewannen,
        setHaare,
        setFingernagel,
        setAusstossCo2,
        setStreckeAuto,
        setStreckeGelaufen 
       } from '../calc/calculations';

const initState = {
    name: '',
    gebdat: new Date(),
    diff: 0,
    wochentag: '',
    sternzeichen: '',
    herzschlag: 0,
    alter: new Date(),
    geschlafen: 0,
    energieumsatz: 0,
    stromverbrauch: 0,
    getrunken: 0,
    badewannen: 0,
    haare: 0,
    fingernagel: 0,
    ausstossCo2: 0,
    streckeAuto: 0,
    streckeGelaufen: 0
}

const rootReducer = (state = initState, action) => {
    if(action.type === 'GET_INPUT'){
        let name = action.input.name;
        let gebdat = toDate(action.input.gebdat);
        let aktdat = new Date();
        let diff = setDiff(aktdat,gebdat);
        let wochentag = setWochentag(gebdat);
        let sternzeichen = setSternzeichen(gebdat);
        let herzschlag = setHerzschlag(diff);
        let alter = setAlter(aktdat,gebdat);
        let geschlafen = setGeschlafen(diff);
        let energieumsatz = setEnergieumsatz(diff);
        let stromverbrauch = setStromverbrauch(energieumsatz);
        let getrunken = setGetrunken(diff);
        let badewannen = setBadewannen(getrunken);
        let haare = setHaare(diff);
        let fingernagel = setFingernagel(diff);
        let ausstossCo2 = setAusstossCo2(diff);
        let streckeAuto= setStreckeAuto(ausstossCo2);
        let streckeGelaufen = setStreckeGelaufen(diff);
        return{
            ...state,
            name: name,
            gebdat: gebdat,
            diff: diff,
            wochentag: wochentag,
            sternzeichen: sternzeichen,
            herzschlag: herzschlag,
            alter: alter,
            geschlafen: geschlafen,
            energieumsatz: energieumsatz,
            stromverbrauch: stromverbrauch,
            getrunken: getrunken,
            badewannen: badewannen,
            haare: haare,
            fingernagel: fingernagel,
            ausstossCo2: ausstossCo2,
            streckeAuto: streckeAuto,
            streckeGelaufen: streckeGelaufen
        };
    }
    return state

}

export default rootReducer