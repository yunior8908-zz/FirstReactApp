import React from 'react';
import { Form, Label, Input, Icon, Button, Card } from 'semantic-ui-react';
import versatusuariosapiwithtoken from '../../../../api/versatusuariosreact-axios';

class UsuarioResetPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            password: '', passwordConfirm: '', id: '', usuarios: {} };
        this.refPass = React.createRef();
        this.refPassConfirm = React.createRef();
        this.inputsChange = this.inputsChange.bind(this);
        this.onEyeClick = this.onEyeClick.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.cancelForm = this.cancelForm.bind(this);
    }

    componentWillMount() {
        versatusuariosapiwithtoken.get(`/seguridad/usuarios/${this.props.match.params.id}`)
            .then(res => {
                this.setState({ usuarios: res.data, id: res.data.id });

            }).catch(err => console.log(err.response));
    }

    inputsChange(event) {
        const name = event.currentTarget.name;
        const value = event.currentTarget.value;
        this.setState({
            [name]: value
        });
    }
    
    onEyeClick(input) {        
        if (input === 'pass') {
            this.refPass.current.inputRef.current.type = this.refPass.current.inputRef.current.type === 'password' ? 'text' : 'password';
        } else {
            this.refPassConfirm.current.inputRef.current.type = this.refPass.current.refPassConfirm.current.type === 'password' ? 'text' : 'password';
        }
    }

    submitForm(event) {
        event.preventDefault();
        var { password, passwordConfirm, id } = this.state;
        versatusuariosapiwithtoken.post(`/seguridad/usuarios/passwordreset`, {
            password, passwordConfirm, id
        }).then(res => console.log(res))
            .catch(err => console.log(err.reponse));
    }

    cancelForm(event) {
        event.preventDefault();
        this.props.history.push("/pages/usuarios");
    }

    render() {
        return <Form onSubmit={this.submitForm} error>
            <Card raised>
                <Card.Content>Cambiar contraseña</Card.Content>
                <Card.Content>
            <Form.Field>
                <Label>Contraseña</Label>
                <Input
                    icon={<Icon name='eye' link onClick={() => this.onEyeClick('pass')} />}
                    ref={this.refPass}
                    type='password'
                    size='mini'
                    required
                    placeholder='Introduzca la clave'
                    value={this.state.password}
                    name='password'
                    onChange={this.inputsChange} />
            </Form.Field>
            <Form.Field>
                <Label>Confirmar Contraseña</Label>
                <Input
                    icon={<Icon name='eye' link onClick={() => this.onEyeClick('passConfirm')} />}
                    ref={this.refPassConfirm}
                    type='password' size='mini'
                    required
                    placeholder='Repita la clave de arriba'
                    value={this.state.passwordConfirm}
                    name='passwordConfirm'
                    onChange={this.inputsChange} />
                    </Form.Field>
                </Card.Content>
                <Card.Content extra >
            <Form.Field>
                <Button floated='right' primary size='mini' type='submit'>Aceptar</Button>
                <Button floated='right' size='mini' onClick={this.cancelForm}>Cancelar</Button>
                    </Form.Field>
                </Card.Content>
            </Card>
        </Form>
    }
}

export default UsuarioResetPassword;