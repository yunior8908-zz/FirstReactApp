import React from 'react';
import VersatUsuariosList from './list/VersatUsuariosList';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import FormConexion from './form/FormConexion';
import versatusuariosapiwithtoken from '../../../api/versatusuariosreact-axios';

class VersatUsuarios extends React.Component {

    constructor(props) {
        super(props);
        this.state = { versatusuarios: [] };
        this.onRefresh = this.onRefresh.bind(this);
        this.handlerActivarlos = this.handlerActivarlos.bind(this);
        this.handlerHabilitar = this.handlerHabilitar.bind(this);
    }

    fetchData() {
        versatusuariosapiwithtoken.get(`/versat/usuariosversat?login=${window.localStorage.getItem('versatusuariosId')}`)
            .then(res => {
                this.setState({ versatusuarios: res.data });
            })
            .catch(err => this.props.setMessage(err.response.statusText));
    }

    componentDidMount() {
        this.fetchData();
    }

    onRefresh() {
        this.fetchData();
    }

    handlerActivarlos() {
        versatusuariosapiwithtoken.get(`/versat/usuariosversat/activarlos?login=${window.localStorage.getItem('versatusuariosId')}`)
            .then(res => {
                this.onRefresh();
            })
            .catch(err => this.props.setMessage(err.response.statusText));
    }

    handlerHabilitar(event, usuario) {
        console.log(event, usuario);
        event.preventDefault();
        versatusuariosapiwithtoken.get(`/versat/usuariosversat/habilitar?loginusuario=${usuario}&login=${window.localStorage.getItem('versatusuariosId')}`)
            .then(res => {
                this.onRefresh();
            })
            .catch(err => this.props.setMessage(err.response.statusText));
    }

    render() {
        return <div>
            <FormConexion refresh={this.onRefresh} />
            <VersatUsuariosList listado={this.state.versatusuarios} refresh={this.state.randomState} activarlos={this.handlerActivarlos} handlerHabilitar={this.handlerHabilitar} />
        </div>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setMessage: (mensaje) => dispatch(actions.setMessage('red', mensaje))
    }
}

export default connect(null, mapDispatchToProps)(VersatUsuarios);