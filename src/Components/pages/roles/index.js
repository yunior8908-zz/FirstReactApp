import React from 'react';
import versatusuariosapiwithtoken from '../../../api/versatusuariosreact-axios';
import RoleList from './list/RoleList';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

class Roles extends React.Component {
    constructor(props) {
        super(props);
        this.state = { roles: [], page: 1, pageSize: 10, total: 0, denominacionFilter: '' };
        this.onFilterSearch = this.onFilterSearch.bind(this);
    }

    fetchDatos() {
        const filter = this.state.denominacionFilter !== '' ? `&denominacion=${this.state.denominacionFilter}` : '';
        versatusuariosapiwithtoken.get(`/seguridad/roles?page=${this.state.page}&pageSize=${this.state.pageSize}${filter}`)
            .then(res => {
                this.setState({ roles: res.data.listado, total: res.data.total });
            })
            .catch(err => {
                console.log(err.response);
                this.props.setMessage("red", err.response.statusText)
            });
    }    

    componentWillMount() {
        this.fetchDatos();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.page !== this.state.page) {
            this.fetchDatos();
        }
    }

    onFilterSearch() {
        this.fetchDatos();
    }

    render() {
        return (
            <RoleList
                listado={this.state.roles}
                total={this.state.total}
                page={this.state.page}
                pageSize={this.state.pageSize}
                denominacionFilter={this.state.denominacionFilter}
                setDenominacionFilter={(val) => this.setState({ denominacionFilter: val })}
                onFilterSearch={this.onFilterSearch}
                setPage={(p) => { this.setState({ page: p }); console.log(p) }}
            />
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setMessage: (color, message) => dispatch(actions.setMessage(color, message))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Roles);