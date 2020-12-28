import React, { Component } from 'react';
import './style.css';

class CardNota extends Component {
    render() { 
        return (  
            
                <div className="col s12 m3">
                    <div className="card red darken-4">
                        <div className="card-content white-text">
                            <span className="card-title">{this.props.titulo}</span>
                            <p>{this.props.texto}</p>
                        </div>
                            
                            <a href="#"><i className="small material-icons light-blue-text darken-4">remove_circle</i></a>
                        
                    </div>
                </div>
        );
    }
}
 
export default CardNota;