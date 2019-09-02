import React from 'react';
import versatusuariosapiwithtoken from '../../../../api/versatusuariosreact-axios';
import { Form } from 'semantic-ui-react';

class FormConexion extends React.Component {

    constructor(props) {
        super(props);
        this.state = { id: '', host: '', port: 0, database: '', user: '', password: '', logIn: '' };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handlerInputChange = this.handlerInputChange.bind(this);
    }

    componentDidMount() {
        versatusuariosapiwithtoken.get(`/versat/conexion/${window.localStorage.getItem('versatusuariosId')}`)
            .then(res => {
                this.setState({ ...res.data });
            })
            .catch(err => console.log(err));
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.setState({ logIn: window.localStorage.getItem('versatusuariosId') });
        versatusuariosapiwithtoken.put(`/versat/conexion`, {
            ...this.state
        }).then(res => {
            this.setState({ ...res.data });
            this.props.refresh();
        }).catch(err => console.log(err));
    }

    handlerInputChange(event) {
        const name = event.currentTarget.name;
        const value = event.currentTarget.value;
        this.setState({ [name]: value });
    }

    render() {
        return <Form onSubmit={this.onFormSubmit}>
            <Form.Group size='mini'>
                <Form.Input required size='mini' placeholder='Ip del servidor' width='4' name='host' value={this.state.host} onChange={this.handlerInputChange} />
                <Form.Input required size='mini' placeholder='Puerto' width='2' name='port' value={this.state.port} onChange={this.handlerInputChange}/>
                <Form.Input required size='mini' placeholder='Usuario' width='4' name='user' value={this.state.user} onChange={this.handlerInputChange}/>
                <Form.Input type='password' required size='mini' placeholder='Contraseña' width='4' name='password' value={this.state.password} onChange={this.handlerInputChange}/>
                <Form.Input required size='mini' placeholder='Base de datos' width='4' name='database' value={this.state.database} onChange={this.handlerInputChange}/>
                {/*  <Form.Select size='mini' options={options} placeholder='Gender' />*/}
                <Form.Button size='mini' content='Guardar' width='4' primary />
            </Form.Group>
        </Form>
    }
}

export default FormConexion;