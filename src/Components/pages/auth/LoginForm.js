import React from 'react';
import { Form, Input, Label, Button, Card, Header } from 'semantic-ui-react';
import { versatusuariosapi } from '../../../api/versatusuariosreact-axios';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
        this.formSubmit = this.formSubmit.bind(this);
        this.inputsChange = this.inputsChange.bind(this);
    }

    componentWillMount() {
        if (window.localStorage.getItem('versatusuariosToken') != null) {
            this.props.history.push('/pages/home');
        }
    }

    formSubmit(event) {
        event.preventDefault();
        versatusuariosapi.post(`/auth/login`, {
            ...this.state
        }).then(res => {
            window.localStorage.setItem('versatusuariosId', res.data.id);
            window.localStorage.setItem('versatusuariosToken', res.data.token);
            window.localStorage.setItem('versatusuariosTokenExpirationTime', res.data.tokenExpirationTime);
            this.props.history.push('/pages/home');
        }).catch(err => console.log(err.response));
    }

    inputsChange(event) {
        var name = event.currentTarget.name;
        var value = event.currentTarget.value;
        this.setState({
            [name]: value
        });
    }

    render() {
        return <Card style={{ margin: '17vh auto', boxShadow: '0px 0px 7px #000000'}}>
            <Card.Content>
                <Card.Header><Header>Acceso</Header></Card.Header>
            </Card.Content>
            <Card.Content>
                <Form autoComplete='off' onSubmit={this.formSubmit}>
                    <Form.Field>
                        <Label htmlFor="email">Correo</Label>
                        <Input size='mini' required type='email' placeholder='Correo' name='email' value={this.state.email} onChange={this.inputsChange} />
                    </Form.Field>
                    <Form.Field>
                        <Label>Contraseña</Label>
                        <Input size='mini' required type='password' placeholder='Contraseña' name='password' value={this.state.password} onChange={this.inputsChange} />
                    </Form.Field>
                    <Form.Field>
                        <Button type='submit' floated='right' primary size='mini'>Acceder</Button>
                    </Form.Field>
                </Form>
            </Card.Content>
        </Card>
    }
}

export default LoginForm;