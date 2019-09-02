import React from 'react';
import { Form, Button, Input, Card } from 'semantic-ui-react';
import versatusuariosapiwithtoken from '../../../../api/versatusuariosreact-axios';
import DropdownRole from '../../roles/dropdown/DropdownRole';

class UsuarioEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id:"", username: "", email: "", role: ""};
        this.formSubmit = this.formSubmit.bind(this);
        this.onInputsChange = this.onInputsChange.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
    }

    componentWillMount() {
        let id = this.props.match.params.id;
        versatusuariosapiwithtoken.get(`/seguridad/usuarios/${id}`)
            .then(res => this.setState({ ...res.data }))
            .catch(err => console.log("Errores: ", err.response));
    }

    formSubmit(event) {
        event.preventDefault();
        versatusuariosapiwithtoken.put(`/seguridad/usuarios/${this.state.id}`, {
            ...this.state
        }).then(res => {
            this.props.history.push('/pages/usuarios');
        }).catch(err => console.error("Errors: ", err.response));
    }

    cancelEdit(event) {
        event.preventDefault();
        this.props.history.push('/pages/usuarios');
    }

    onInputsChange(event) {
        var input = event.currentTarget.name;
        var value = event.currentTarget.value;
        this.setState({
            [input]: value
        });
    }

    render() {
        return (
            <Form onSubmit={this.formSubmit}>
                <Card raised>
                    <Card.Content>
                        <Card.Header>Editar usuario</Card.Header>
                    </Card.Content>
                    <Card.Content>
                        <Form.Field>
                            <label>Usuario</label>
                            <Input size='mini' type='text' required placeholder='Usuario' value={this.state.username} name='username' onChange={this.onInputsChange} />
                        </Form.Field>
                        <Form.Field>
                            <label>Correo</label>
                            <Input size='mini' type='email' required placeholder='Correo' value={this.state.email} name='email' onChange={this.onInputsChange} />
                        </Form.Field>
                        <Form.Field>
                            <label>Role</label>
                            <DropdownRole role={this.state.role} selected={(v) => this.setState({ role: v })} />
                        </Form.Field>
                    </Card.Content>
                    <Card.Content extra>
                        <Button floated='right' size='mini' primary type='submit'>Aceptar</Button>
                        <Button floated='right' size='mini' onClick={this.cancelEdit}>Cancelar</Button>
                    </Card.Content>
                </Card>
            </Form>
        );
    }
}

export default UsuarioEdit;