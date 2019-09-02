import React from 'react';
import { Form, Button, Card } from 'semantic-ui-react';
import versatusuariosapiwithtoken from '../../../../api/versatusuariosreact-axios';

class UsuarioDelete extends React.Component {

    constructor(props) {
        super(props);
        this.state = { username: "", id: "" };
        this.formSubmit = this.formSubmit.bind(this);
        this.cancelDelete = this.cancelDelete.bind(this);
    }

    componentWillMount() {
        versatusuariosapiwithtoken.get(`/seguridad/usuarios/${this.props.match.params.id}`)
            .then(res => this.setState({ username: res.data.username }))
            .catch(err => console.log("Errores: ", err.response));
    }

    formSubmit(event) {
        event.preventDefault();
        versatusuariosapiwithtoken.delete(`/seguridad/usuarios/${this.props.match.params.id}`)
            .then(res => {
                this.props.history.push('/pages/usuarios');
            })
            .catch(err => console.log("Errores: ", err.response));
    }

    cancelDelete(event) {
        event.preventDefault();
        this.props.history.push('/pages/usuarios');
    }

    render() {
        return (
            <Form onSubmit={this.formSubmit} error>
                <Card centered raised>
                    <Card.Content>
                        <Card.Header></Card.Header>
                    </Card.Content>
                    <Card.Content>
                <Form.Field>
                    <label>Estas seguro que desea eliminar el usuario: {this.state.username}</label>
                        </Form.Field>
                    </Card.Content>
                    <Card.Content extra>
                <Form.Field>
                    <Button floated='right' size='mini' primary type='submit'>Aceptar</Button>
                    <Button floated='right' size='mini' onClick={this.cancelDelete}>Cancelar</Button>                    
                        </Form.Field>
                    </Card.Content>
                </Card>
            </Form>);
    }
}
export default UsuarioDelete;