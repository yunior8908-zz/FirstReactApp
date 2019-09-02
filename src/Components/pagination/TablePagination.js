import React from 'react';
import { Table, Menu } from 'semantic-ui-react';

const TablePagination = props => {
    var items = [];
    for (var i = 0; i < Math.ceil(props.total / props.pageSize); i++) {
        const page = 1 + i;
        items.push(<Menu.Item as='a' key={i} disabled={props.currentPage === page} onClick={() => props.pageNumber(page)} active={props.currentPage === page}>{page}</Menu.Item>);
    }
   
    return <Table.Row>
        <Table.HeaderCell colSpan={props.colSpan}>
            <Menu floated='right' pagination size='mini'>                
                {/*<Menu.Item as='a' icon>
                    <Icon name='chevron left' />
                </Menu.Item> */}
                {items}
                {/*}
                <Menu.Item as='a' icon>
                    <Icon name='chevron right' />
                </Menu.Item>
                */}
            </Menu>
        </Table.HeaderCell>
    </Table.Row>
}

export default TablePagination;