import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Table, Icon, Button, Menu } from 'semantic-ui-react';
import VersatUsuariosRow from './VersatUsuariosRow';


const VersatUsuariosList = props => {
    const listado = props.listado.length > 0 ? props.listado.map((value, index) => <VersatUsuariosRow key={value.loginusuario} index={index} datos={value} onHabilitar={props.handlerHabilitar} />) : null;
    return <Table size='small'>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell colSpan='7' style={{ padding: '0px' }}>
                    <Menu attached='top' size='mini'>
                        <Menu.Item as={Button} primary inverted size='mini' onClick={props.activarlos} >Activarlos</Menu.Item>
                        <Menu.Item as={Link} to={{ pathname: '/pages/reloaded', state: {url: props.location.pathname} }} size='mini' position='right'><Icon name='refresh' /></Menu.Item>
                    </Menu>
                </Table.HeaderCell>
            </Table.Row>
            <Table.Row>
                <Table.HeaderCell collapsing textAlign='center'>No.</Table.HeaderCell>
                <Table.HeaderCell>Usuario</Table.HeaderCell>
                <Table.HeaderCell>Nombre y Apellidos</Table.HeaderCell>
                <Table.HeaderCell collapsing textAlign='center'>Intentos</Table.HeaderCell>
                <Table.HeaderCell collapsing textAlign='center'>Activo</Table.HeaderCell>
                <Table.HeaderCell collapsing textAlign='center'>Habilitado</Table.HeaderCell>
                <Table.HeaderCell collapsing textAlign='center'><Icon name='cogs' /></Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {listado}
        </Table.Body>
    </Table>;
}

export default withRouter(VersatUsuariosList);