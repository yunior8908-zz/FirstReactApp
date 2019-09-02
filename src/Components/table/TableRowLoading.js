import React from 'react';
import { Table, Segment, Loader, TableRow } from 'semantic-ui-react';

const TableRowLoading = ({ colSpan, flag }) => {
    return <Table.Row>
        <Table.Cell colSpan={colSpan}>
            <Segment basic>
                <Loader active={flag}></Loader>
            </Segment>
        </Table.Cell>
    </Table.Row>;
}

export default TableRowLoading;