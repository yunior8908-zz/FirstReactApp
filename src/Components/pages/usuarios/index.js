import React from 'react';
import { connect } from 'react-redux';
import UsuariosList from './list/UsuariosList';
import * as actions from '../../../store/actions/index';

class Usuarios extends React.Component {

    constructor(props) {
        super(props);
        this.state = { page: 1, pageSize: 10, filter: ''};
        this.handleSetPage = this.handleSetPage.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    fetchDatos() {
        this.props.fetchUsuarios(this.state.page, this.state.pageSize, this.state.filter);
    }

    componentDidMount() {
        this.fetchDatos();
    }

    handleSetPage(page) {
        this.setState({ page: page });
    }

    handleFilter(filtro) {
        const filter = filtro !== '' ? `&username=${filtro}` : '';
        this.setState({ filter: filter, page: 1, pageSize: 10 });
    }

    componentDidUpdate() {
        this.fetchDatos();
        
    }

    render() {        
        return <React.Fragment>
            <UsuariosList page={this.state.page} pageSize={this.state.pageSize} setPage={this.handleSetPage} onFilter={this.handleFilter} />
        </React.Fragment>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsuarios: (page, pageSize, filter) => dispatch(actions.FetchUsuarios(page, pageSize, filter)),
        setMessage: (color, message) => dispatch(actions.setMessage(color, message))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Usuarios);