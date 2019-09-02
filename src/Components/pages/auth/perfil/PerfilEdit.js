import React from 'react';
import { Form, Button, Input, Label, Card } from 'semantic-ui-react';
import versatusuariosapiwithtoken from '../../../../api/versatusuariosreact-axios';

class PerfilEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id:"", username: "", email: "", role: ""};
        this.formSubmit = this.formSubmit.bind(this);
        this.onInputsChange = this.onInputsChange.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
    }

    componentDidMount() {
        const id = window.localStorage.getItem('versatusuariosId');
        versatusuariosapiwithtoken.get(`/seguridad/usuarios/${id}`)
            .then(res => this.setState({ ...res.data }))
            .catch(err => console.log("Errores: ", err.response));
    }

    formSubmit(event) {
        event.preventDefault();
        versatusuariosapiwithtoken.put(`/seguridad/usuarios/${this.state.id}`, {
            ...this.state
        }).then(res => {
            this.props.history.push('/pages/perfil');
        }).catch(err => console.error("Errors: ", err.response));
    }

    cancelEdit(event) {
        event.preventDefault();
        this.props.history.push('/pages/perfil');
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
            <Card raised with='400'>
                <Card.Content>
                    <Card.Header>Editar Perfil</Card.Header>
                </Card.Content>
                <Card.Content>
            
                <Form.Field>
                    <Label>Usuario</Label>
                    <Input size='mini' type='text' required placeholder='Usuario' value={this.state.username} name='username' onChange={this.onInputsChange} />
                </Form.Field>
                <Form.Field>
                    <Label>Correo</Label>
                    <Input size='mini' type='email' required placeholder='Correo' value={this.state.email} name='email' onChange={this.onInputsChange} />
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

export default PerfilEdit;