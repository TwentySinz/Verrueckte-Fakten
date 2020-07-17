import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInput } from '../actions/inputActions';

class Home extends Component {
    state = {
            name: '',
            gebdat: ''
        }

        handleChange = (e) => {
            this.setState({
                [e.target.id]: e.target.value
            })
        }
        
        handleSubmit = (e) => {
            e.preventDefault();
            this.props.getInput(this.state);
            this.props.history.push('/ergebnis');
        }
    render(){
        
        return(
            <div className="home container">
                <div className="inputform z-depth-2 blue-grey lighten-5">
                    <h2>Willkommen</h2>
                    <p>Ich bin ein super intelligentes Computerprogramm, das Ihnen all die Fragen beantwortet, die Sie sich nie gestellt haben.
                        Und das Beste daran ist, dass ich dazu weder Ihre Kontoverbindung noch Ihren Chatverlauf von WhatsApp benötige, sondern nur Ihr 
                        Geburtsdatum. Also dann... <br/> <br/> Bitte geben Sie Ihren Namen und Ihr Geburtsdatum ein: </p>

                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <input id="name" type="text" onChange={this.handleChange}></input>
                            <label>Name</label>
                    
                            <input id="gebdat" type="date" onChange={this.handleChange}></input>
                            <label>Geburtsdatum</label>
                        </div>
                        <div className="row">
                            <button className="btn  blue accent-4">Los</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
} 

const mapDispatchToProps = (dispatch) => {
    return{
        getInput: (input) => dispatch(getInput(input)) 
    }
}


export default connect(null, mapDispatchToProps)(Home)