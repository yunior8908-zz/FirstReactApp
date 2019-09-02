import React from 'react';
import { Button, Form, Input, Card } from 'semantic-ui-react';
import versatusuariosapiwithtoken from '../../../../api/versatusuariosreact-axios';
import DropdownRole from '../../roles/dropdown/DropdownRole';

class UsuarioAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = { username: "", email: "", role: "", password: "", passwordConfirm: "" };
        this.formSubmit = this.formSubmit.bind(this);
        this.onInputsChange = this.onInputsChange.bind(this);
        this.cancelAdd = this.cancelAdd.bind(this);
    }

    formSubmit(event){
        event.preventDefault();
        versatusuariosapiwithtoken.post("/seguridad/usuarios", {
            ...this.state
        }).then(res => {
            this.props.history.push('/pages/usuarios');
        }).catch(err => console.error("Errors: ", err.response));
    }

    cancelAdd(event) {
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
            <Form autoComplete='off' onSubmit={this.formSubmit} error>
                <Card raised>
                    <Card.Content>
                        <Card.Header>Adicionar usuario</Card.Header>
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
                    <label>Contraseña</label>
                    <Input size='mini' type='password' required placeholder='Contraseña' value={this.state.password} name='password' onChange={this.onInputsChange} />
                </Form.Field>
                <Form.Field>
                    <label>Confirmar contraseña</label>
                    <Input size='mini' type='password' required placeholder='Confirmar contraseña' value={this.state.passwordConfirm} name='passwordConfirm' onChange={this.onInputsChange} />
                </Form.Field>
                <Form.Field>
                    <label>Role</label>
                    <DropdownRole selected={(v) => this.setState({role: v})} />
                        </Form.Field>
                    </Card.Content>
                    <Card.Content extra>
                <Button floated='right' size='mini' primary type='submit'>Aceptar</Button>
                        <Button floated='right' size='mini' onClick={this.cancelAdd}>Cancelar</Button>
                    </Card.Content>
                </Card>
            </Form>
        );
    }
}

export default UsuarioAdd;