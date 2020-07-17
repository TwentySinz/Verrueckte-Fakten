import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Ergebnis extends Component{

    render(){
        const erg = this.props.erg;
        console.log(this.props);
        return(
            <div className="ergebnis container z-depth-2 blue-grey lighten-5">
                <h3>Hallo {erg.name}</h3>
                <h5>Ich hab da mal was vorbereitet </h5>
                <p>Ich, Ihr super intelligentes Computerprogramm, konnte mittels meiner hoch komplexen Algorithmen 
                    einige interessante Fakten über Sie berechnen. Sind Sie bereit? Atmen Sie noch einmal tief 
                    durch, und dann legen wir los:
                </p>
                <h5>An Ihrem Geburtstag </h5>
                <p>
                    Wie ich sehe, sind Sie {erg.alter[0]} Jahre {erg.alter[1]} Monate und {erg.alter[2]} Tage alt.
                    Vermutlich haben Sie während dieser Zeit {erg.geschlafen} Tage geschlafen, Sie alter Faulpelz. 
                    Wußten Sie eigentlich, dass Sie an einem {erg.wochentag} geboren wurden?
                    Ihr Sternzeichen ist übrigens {erg.sternzeichen}.
                </p>
                <h5>Ihre körperlichen Leistungen Teil 1 </h5>
                <p>
                    Sie haben in Ihren {erg.alter[0]} Jahren {erg.alter[1]} Monaten und {erg.alter[2]} Tagen
                    aber auch einiges geleistet. Ihr Herz hat zum Beispiel bis zu diesem Zeitpunkt 
                    ungefähr {erg.herzschlag} schlanke Mal geschlagen. Insgesamt hat Ihr Körper 
                    sogar {erg.energieumsatz} kWh (Kilowattstunden) Energie erzeugt. Damit hätten Sie eine 
                    vierköpfige Familie {erg.stromverbrauch} Jahre lang mit Strom versorgen können.
                </p>
                <h5>Ihre körperlichen Leistungen Teil 2 </h5>
                <p>
                    Haben Sie eigentlich gerade Durst? Holen Sie sich am besten einen kühlen Drink, denn es ist 
                    immer gut viel zu trinken. Übrigens, sollten Sie jeden Tag genügend getrunken haben, haben 
                    Sie bis jetzt mindestens {erg.getrunken} Liter Flüssigkeit zu sich genommen. Das entspricht 
                    einer Menge von circa {erg.badewannen} vollen Badewannen, also Cheers.
                </p>
                <h5>Ihre körperlichen Leistungen Teil 3 </h5>
                <p>
                    Jetzt wird es ein wenig kurios, für manche vielleicht sogar etwas eklig, aber da müssen Sie 
                    jetzt durch: Wenn Sie Ihre Haare niemals geschnitten hätten, wären sie jetzt {erg.haare} cm lang.
                    Also passen Sie auf, dass Sie nicht stolpern. Kratzen Sie sich gerade vor Verwunderung am Kopf? 
                    Dann habe ich noch eine Info für Sie: Hätten Sie sich nie die Fingernägel geschnitten, wären diese 
                    jetzt {erg.fingernagel} cm lang. Viel Spaß bei der nächsten Maniküre.
                </p>
                <h5>Ihre CO2 Bilanz </h5>
                <p>
                    Wie mir meine Datenbanken mitgeteilt haben, ist ja der Klimaschutz zur Zeit ein viel diskutiertes 
                    Thema. Wußten Sie, dass auch Sie ganz persönlich am weltweiten CO2 Ausstoß beteiligt sind?
                    Bis heute beträgt der CO2 Austoß Ihres Körpers {erg.ausstossCo2} kg. Im Vergleich hätte ein 
                    durchschnittlicher PKW eine Strecke von {erg.streckeAuto} km zurücklegen müssen um die gleiche Menge 
                    an CO2 zu produzieren. Hören Sie jetzt aber bitte vor Scham nicht auf zu atmen, denn Ihre durchschnittliche 
                    Laufleistung beträgt zur Zeit {erg.streckeGelaufen} km. Also sind Sie keine ganz so schlimme Drecksschleuder.
                </p>
                <h5>Auf Wiedersehen </h5>
                <p>
                    So, jetzt reicht es aber mit den ganzen Fakten und Berechnungen. Meine Klassenmethoden rotieren ja schon.
                    Ich hoffe, dass Sie meine berechneten Fakten ein wenig interessant fanden. Vielleicht konnten Sie an der einen 
                    oder anderen Stelle auch ein wenig lachen, durchschnittlich haben Sie nämlich bis jetzt...
                    Ach lassen wir das, es reicht. Vielen Dank, dass Sie mich benutzt haben, ich fühle mich jetzt auch ein bisschen 
                    schmutzig.
                </p>
                <Link to="/"><button className="btn blue accent-4">Zurück</button></Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        erg: state
    }
}


export default connect(mapStateToProps)(Ergebnis)