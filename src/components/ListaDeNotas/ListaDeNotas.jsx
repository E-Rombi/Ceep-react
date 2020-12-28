import React, { Component } from 'react';
import CardNota from '../CardNota/CardNota.jsx';

 class ListaDeNotas extends Component {

    render() {
        return (
            <ul>
                <div className="row">
                {this.props.notas.map((nota, index) => {
                    return (
                        <li key={index}>
                            <CardNota titulo={nota.titulo} texto={nota.texto} />
                        </li>
                    );
                })}
                </div>
            </ul>
        );
    }
}

export default ListaDeNotas;