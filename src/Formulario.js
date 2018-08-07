import React, { Component } from "react";
import "./App.css";

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      descripcion:'',
      genero:''
    };

    this.image = '';
    this.fileInput = React.createRef();
    this.handleChangeNombre = this.handleChangeNombre.bind(this);
    this.handleChangeDescripcion = this.handleChangeDescripcion.bind(this);
    this.handleChangeGenero = this.handleChangeGenero.bind(this);
    this.handleSubmitPicture = this.handleSubmitPicture.bind(this);

    
  }

    handleChangeNombre(event) {
      this.setState({nombre: event.target.value});
    }
    handleChangeDescripcion(event) {
      this.setState({descripcion: event.target.value});
    }
    handleChangeGenero(event) {
      this.setState({genero: event.target.value});
    }

    handleSubmitPicture (event) {
        
        const fr = new FileReader();

        const loadImage = () => {
            this.setState ({image: fr.result});
        }
        
        fr.addEventListener('load', loadImage);
        fr.readAsDataURL(this.fileInput.current.files[0]);
    }


  render() {
    return (
      <div className="App">
        <form action="">
        <div className="name">
          <label htmlFor="">Nombre</label>
          <input name="nombre" type="text" value={this.state.nombre} onChange={this.handleChangeNombre} />
          </div>
           <div className="description">
          <label htmlFor="">Descripción</label>
          <textarea name="descripcion" id="" cols="30" rows="10" value= {this.state.descripcion} onChange={this.handleChangeDescripcion} />
          </div>
          <div className="gender">
          <select name="genero" id="" value= {this.state.genero} onChange={this.handleChangeGenero} >
            <option>Comedia</option>
            <option>Drama</option>
            <option>Infantil</option>
          </select>
          </div>
          <div className="picture">
            <label htmlFor="imagen">
                <input type="file" ref={this.fileInput} onChange={this.handleSubmitPicture}/>
            </label>
            <img src={this.state.image} alt="" />
            <button type="submit">Submit</button>
          </div>  
        </form>
      </div>
    );
  }
}

export default Formulario;