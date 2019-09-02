import React from 'react';
import { withRouter } from 'react-router-dom';
import { Table, ButtonGroup, Button } from 'semantic-ui-react';

const RoleRow = props => {
    return <Table.Row>
        <Table.Cell>{props.index + 1}</Table.Cell>
        <Table.Cell>{props.datos.denominacion}</Table.Cell>
        <Table.Cell>{props.datos.descripcion}</Table.Cell>
        <Table.Cell collapsing>
            <ButtonGroup icon size='mini' basic>
                <Button icon='eye' onClick={()=>props.history.push(`${props.location.pathname}/details/${props.datos.id}`)}></Button>
                {/*<Button icon='edit' onClick={() => props.history.push(`${props.location.pathname}/edit/${props.datos.id}`)}></Button>
                <Button icon='trash' onClick={() => props.history.push(`${props.location.pathname}/delete/${props.datos.id}`)}></Button>*/}
            </ButtonGroup>
        </Table.Cell>
    </Table.Row>;
}

export default withRouter(RoleRow);