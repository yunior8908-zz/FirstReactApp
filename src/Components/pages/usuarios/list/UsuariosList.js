import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Table, Icon, Button, Menu } from 'semantic-ui-react';
import UsuarioRow from './UsuarioRow';
import TablePagination from '../../../pagination/TablePagination';
import TableRowLoading from '../../../table/TableRowLoading';

const UsuariosList = props => {
    const [usuarioFilter, setUsuarioFilter] = useState('');

    return (
        <Table size='small' selectable >
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell colSpan='6' style={{ padding: '0px' }}>
                        <Menu attached='top' size='mini'>
                            <Menu.Item as={Button} icon='plus' primary size='mini' onClick={() =>props.history.push('/pages/usuarios/add')} ></Menu.Item>
                            <Menu.Menu position='right'>
                                <div className='ui right aligned category search item'>
                                    <div className='ui transparent icon input'>
                                        <input className='prompt' name='usuarioFilter' type='text' value={usuarioFilter} onChange={(e) => setUsuarioFilter(e.currentTarget.value)} placeholder='Buscar usuario...' />
                                        <i className='search link icon' onClick={() => props.onFilter(usuarioFilter)} />
                                    </div>
                                    <div className='results' />
                                </div>
                            </Menu.Menu>
                        </Menu>
                    </Table.HeaderCell>
                </Table.Row>
                <Table.Row>
                    <Table.HeaderCell collapsing textAlign='center' >No.</Table.HeaderCell>
                    <Table.HeaderCell>Usuario</Table.HeaderCell>
                    <Table.HeaderCell>Correo</Table.HeaderCell>
                    <Table.HeaderCell>Role</Table.HeaderCell>
                    <Table.HeaderCell collapsing textAlign='center'><Icon name='cogs' /></Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    props.loading ?
                        <TableRowLoading colSpan='6' flag={props.loading} />
                        : props.listado.map((row, index) => <UsuarioRow index={index} datos={row} key={row.id} />)
                }
            </Table.Body>
            <Table.Footer>
                {<TablePagination colSpan={6} total={props.total} currentPage={props.page} pageSize={props.pageSize} pageNumber={props.setPage} />}
            </Table.Footer>
        </Table>
    );
}

const mapStateToProps = state => {
    return {
        listado: state.usuarios.usuariosList,
        total: state.usuarios.totalItems,
        loading: state.usuarios.listLoading
    }
}

export default connect(
    mapStateToProps
)(withRouter(UsuariosList));