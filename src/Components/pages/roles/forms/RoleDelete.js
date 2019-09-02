import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import versatusuariosapiwithtoken from '../../../../api/versatusuariosreact-axios';

class RoleDelete extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: '', denominacion: '', descripcion: '' };
        this.formSubmit = this.formSubmit.bind(this);
        this.formCancel = this.formCancel.bind(this);
    }

    componentWillMount() {
        versatusuariosapiwithtoken.get(`/seguridad/roles/${this.props.match.params.id}`)
            .then(res => this.setState({ ...res.data }))
            .catch(err => console.log(err.response));
    }

    formSubmit(event) {
        event.preventDefault();
        versatusuariosapiwithtoken.delete(`/seguridad/roles/${this.state.id}`)
            .then(res => this.props.history.push('/pages/roles'))
            .catch(err => console.log(err.response));
    }

    formCancel(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={this.formSubmit}>
                <Form.Field>
                    <label>Esta seguro que desea eliminar el role: <strong>{this.state.denominacion}</strong></label>
                </Form.Field>
                <Form.Field>
                    <Button size='mini' primary type='submit' floated='right'>Aceptar</Button>
                    <Button size='mini' onClick={this.formCancel} floated='right'>Cancel</Button>
                </Form.Field>
            </Form>
        );
    }
}

export default RoleDelete;