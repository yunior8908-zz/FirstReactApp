import React from 'react';
import { withRouter } from 'react-router-dom';
import { Table, Button, ButtonGroup } from 'semantic-ui-react';
import UsuarioRole from '../UsuarioRole';

const UsuarioRow = props => {
    return <Table.Row key={props.datos.id}>
        <Table.Cell collapsing>{props.index + 1}</Table.Cell>
        <Table.Cell>{props.datos.username}</Table.Cell>
        <Table.Cell>{props.datos.email}</Table.Cell>
        <Table.Cell>
            <React.Suspense delayMs={500} fallback={<div>loading...</div>}>
                <UsuarioRole key={props.datos.role} role={props.datos.role} />
            </React.Suspense>
        </Table.Cell>
        <Table.Cell collapsing>
            <ButtonGroup basic icon size='mini'>                
                <Button icon='eye' onClick={() => props.history.push(`${props.location.pathname}/details/${props.datos.id}`)}></Button>
                <Button icon='key' onClick={() => props.history.push(`${props.location.pathname}/reset/${props.datos.id}`)}></Button>
                <Button icon='edit' onClick={() => props.history.push(`${props.location.pathname}/edit/${props.datos.id}`)}></Button>
                <Button icon='trash' onClick={() => props.history.push(`${props.location.pathname}/delete/${props.datos.id}`)}></Button>
            </ButtonGroup>
        </Table.Cell>
    </Table.Row>;
}

export default withRouter(UsuarioRow);