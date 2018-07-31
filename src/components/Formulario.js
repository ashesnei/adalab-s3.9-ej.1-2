import React from 'react';
import '../stylesheets/Formulario.css';

class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.state = {
            name: "",
            description: "",
            gender: "",
            imageUrl: ""
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeGender = this.handleChangeGender.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        alert(`Selected file - ${this.fileInput.current.files[0].name}`);
    }
    handleChangeName(event) {
        this.setState({ name: event.target.value });
    }
    handleChangeGender(event) {
        this.setState({ gender: event.target.value });
    }
    handleChangeDescription(event) {
        this.setState({ description: event.target.value });
    }
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" value={this.state.name} onChange={this.handleChangeName} />
                    <textarea name="description" id="description" cols="30" rows="5" value={this.state.description} onChange={this.handleChangeDescription}></textarea>
                    <select name="gender" id="gender" value={this.state.gender} onChange={this.handleChangeGender}>
                        <option value="comedia">Comedia</option>
                        <option value="accion">Accion</option>
                        <option value="terror">Terror</option>
                    </select>
                    <label>Upload file:
                    <input type="file" ref={this.fileInput} />
                    </label>
                    <br />
                    <input type="submit" value="Enviar" />
                </form>
                <div>
                    <p>La pélicula {this.state.name} es del genero seleccionado: {this.state.gender}</p>
                    <p>La peli va de: {this.state.description}</p>
                    <div><img src="" alt={this.state.imageUrl}/></div>
                </div>
            </div>
        );
    }
}

export default Formulario;