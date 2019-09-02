import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import versatusuariosapiwithtoken from '../../../../api/versatusuariosreact-axios';

class RoleEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = { id: '', denominacion: '', descripcion: '' };

        this.formSubmit = this.formSubmit.bind(this);
        this.inputsChange = this.inputsChange.bind(this);
        this.formCancel = this.formCancel.bind(this);
    }

    componentWillMount() {
        versatusuariosapiwithtoken.get(`/seguridad/roles/${this.props.match.params.id}`)
            .then(res => this.setState({ ...res.data }))
            .catch(err => console.log(err.response));
    }

    formSubmit(event) {
        event.preventDefault();
        versatusuariosapiwithtoken.put(`/seguridad/roles/${this.state.id}`, {
            ...this.state
        })
            .then(res => this.props.history.push('/pages/roles'))
            .catch(err => console.log(err.response));
    }

    formCancel(event) {
        event.preventDefault();
    }

    inputsChange(event) {
        const name = event.currentTarget.name;
        const value = event.currentTarget.value;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <Form onSubmit={this.formSubmit}>
                <Form.Field>
                    <label>Denominación</label>
                    <Input type='text' size='mini' name='denominacion' placeholder='Denominacion' value={this.state.denominacion} onChange={this.inputsChange} />
                </Form.Field>
                <Form.Field>
                    <label>Descripción</label>
                    <textarea name='descripcion' placeholder='Descripcion' value={this.state.descripcion} onChange={this.inputsChange} />
                </Form.Field>
                <Form.Field>
                    <Button size='mini' primary type='submit' floated='right'>Aceptar</Button>
                    <Button size='mini' onClick={this.formCancel} floated='right'>Cancel</Button>
                </Form.Field>
            </Form>
        );
    }
}

export default RoleEdit;