import React from 'react';
import { Table, Icon, Button } from 'semantic-ui-react';

const VersatUsuariosRow = props => {
    return <Table.Row style={{ backgroundColor: (!props.datos.activo || props.datos.deshabilitado || props.datos.intentos > 0) ? 'darksalmon' : '' }}>
        <Table.Cell>{props.index + 1 }</Table.Cell>
        <Table.Cell>{props.datos.loginusuario}</Table.Cell>
        <Table.Cell>{props.datos.nombre}</Table.Cell>
        <Table.Cell collapsing textAlign='center'>{props.datos.intentos}</Table.Cell>
        <Table.Cell collapsing textAlign='center'>{props.datos.activo ? <Icon name='check' color='green' /> : <Icon name='ban' color='red' />}</Table.Cell>
        <Table.Cell collapsing textAlign='center'>{props.datos.deshabilitado ? <Icon name='ban' color='red' /> : <Icon name='check' color='green' />}</Table.Cell>
        <Table.Cell>
            {props.datos.deshabilitado &&
                <Button primary size='mini' onClick={(e) => props.onHabilitar(e, props.datos.loginusuario)}>Habilitar</Button>
            }
        </Table.Cell>
    </Table.Row>
}

export default VersatUsuariosRow;