import React from 'react';
import { withRouter } from 'react-router-dom';
import { Table, Icon, Menu } from 'semantic-ui-react';
import RoleRow from './RoleRow';
import TablePagination from '../../../pagination/TablePagination';
import TableRowLoading from '../../../table/TableRowLoading';

const RoleList = props => {

    return <Table selectable size='small'>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell colSpan={5} style={{padding: '0px'}}>
                    <Menu attached='top' size='mini'>
                        {/*<Menu.Item as={Button} icon='plus' primary size='mini' onClick={() => props.history.push('/pages/roles/add')} ></Menu.Item>*/}
                        <Menu.Menu position='right'>
                            <div className='ui right aligned category search item'>
                                <div className='ui transparent icon input'>
                                    <input className='prompt' name='roleFilter' type='text' placeholder='Buscar denominacion...' value={props.denominacionFilter} onChange={(e) => props.setDenominacionFilter(e.currentTarget.value)} />
                                    <i className='search link icon' onClick={props.onFilterSearch} />
                                </div>
                                <div className='results' />
                            </div>
                        </Menu.Menu>
                    </Menu>
                </Table.HeaderCell>
            </Table.Row>
            <Table.Row>
                <Table.HeaderCell collapsing>No.</Table.HeaderCell>
                <Table.HeaderCell>Denominación</Table.HeaderCell>
                <Table.HeaderCell>Descripción</Table.HeaderCell>
                <Table.HeaderCell collapsing textAlign='center'><Icon name='cogs' /></Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {
                props.listado.length > 0 ?
                    props.listado.map((row, index) => <RoleRow index={index} datos={row} key={row.id} />) :
                    <TableRowLoading colSpan='4' flag={props.listado.length < 1}/>
            }
        </Table.Body>
        <Table.Footer>
            <TablePagination colSpan={5} total={props.total} currentPage={props.page} pageSize={props.pageSize} pageNumber={props.setPage} />
        </Table.Footer>
    </Table>;
}

export default withRouter(RoleList);