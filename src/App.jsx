import { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/';
import ListaDeNotas from './components/ListaDeNotas/';
import 'materialize-css/dist/css/materialize.css';
import Navbar from './components/Navbar/';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notas: []
    }
  }

  criarNota(titulo, texto) {
    const novaNota = {
      titulo, texto
    };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas
    };
    
    this.setState(novoEstado);
  }

  render() {
      return (
        <div>
          <section className="row">
            <Navbar />
          </section>
          <section className="row">
            <FormularioCadastro criarNota={this.criarNota.bind(this)} />
            <ListaDeNotas notas={this.state.notas}/>
        </section>
        </div>
    );
  }
}

export default App;
