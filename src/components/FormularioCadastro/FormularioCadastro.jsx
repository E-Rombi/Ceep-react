import React, { Component } from "react";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.nota = "";
  }

  _handleMudancaoTitulo(event) {
    event.stopPropagation();
    this.titulo = event.target.value;
  }

  _handleMudancaoNota(event) {
    event.stopPropagation();
    this.nota = event.target.value;
  }

  _criarNota(event) {
      event.preventDefault();
      event.stopPropagation();
      this.props.criarNota(this.titulo, this.nota);
  }

  render() {
    return (
      <div className="container">
        <form action=""
              onSubmit={this._criarNota.bind(this)}  >
          <div className="row">
            <input
              type="text"
              placeholder="Título"
              onChange={this._handleMudancaoTitulo.bind(this)}
            />
          </div>
          <div className="row">
            <div className="input-field">
              <textarea
                id="textarea1"
                className="materialize-textarea"
                placeholder="Escreva sua Nota"
                onChange={this._handleMudancaoNota.bind(this)}
              />
            </div>
          </div>
          <button type="submit" className="waves-effect waves-light red darken-4 btn">
            Criar Nota
          </button>
        </form>
      </div>
    );
  }
}

export default FormularioCadastro;
