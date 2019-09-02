import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import versatusuariosapiwithtoken from '../../../../api/versatusuariosreact-axios';

class DropdownRole extends React.Component {

    constructor(props) {
        super(props);
        this.state = { opciones: [], selected: '' };
        this.handlerChange = this.handlerChange.bind(this);
    }

    componentWillMount() {
        versatusuariosapiwithtoken.get('/seguridad/roles')
            .then(res => {
                const aux = res.data.listado.map((item, index) => {
                    return { ...item, key: item.id, value: item.id, text: item.denominacion };
                });
                this.setState({ opciones: aux });
            })
            .catch(err => console.log("Errores: ", err.response));
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.role !== nextProps.role) {
            this.setState({ selected: nextProps.role });
        }
    }

    handlerChange(e, { value }) {
        this.setState({ selected: value });
        this.props.selected(value);
    }

    render() {
        return <Dropdown
            placeholder='Seleccione un role'
            fluid
            search
            selection
            options={this.state.opciones}            
            onChange={this.handlerChange}
            value={this.state.selected}
        />
    }
}

export default DropdownRole;