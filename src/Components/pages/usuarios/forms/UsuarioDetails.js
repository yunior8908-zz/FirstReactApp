import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions/index';
import { Card, Button, Loader, Segment } from 'semantic-ui-react';
import UsuarioRole from '../UsuarioRole';

const UsuarioDetails = props => {

    const { id } = props.match.params;
    const { usuario, obtenerUsuario } = props;

    useEffect(() => {
        obtenerUsuario(id);
    }, [id, obtenerUsuario]);

    return (
        <Card raised>
            <Card.Content>
                <Card.Header>Detalles</Card.Header>
            </Card.Content>                     
            <Card.Content>
                {props.loading === true ? <Segment basic><Loader active></Loader> </Segment> : (<Card.Description>
                    <ul>
                        <li>
                            <strong>Usuario: </strong><span>{props.usuario ? props.usuario.username : ''}</span>
                        </li>
                        <li>
                            <strong>Correo: </strong><span>{props.usuario ? props.usuario.email : ''}</span>
                        </li>
                        <li>
                            <strong>Role: </strong><span>{props.usuario ? <React.Suspense fallback={<div>loading...</div>}>
                                <UsuarioRole role={props.usuario.role} /></React.Suspense> : ''}
                            </span>
                        </li>
                    </ul>
                </Card.Description>)
                }
            </Card.Content>
            <Card.Content>
                <Card.Meta>
                    <Button size='mini' floated='right' color='red' onClick={() => props.history.push(`/pages/usuarios/delete/${usuario.id}`)}>Delete</Button>
                    <Button size='mini' floated='right' color='blue' onClick={() => props.history.push(`/pages/usuarios/edit/${usuario.id}`)}>Editar</Button>
                    <Button size='mini' floated='right' onClick={() => props.history.push('/pages/usuarios')}>Cancelar</Button>                    
                </Card.Meta>
            </Card.Content>
        </Card>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        obtenerUsuario: (id) => dispatch(actions.ObtenerUsuario(id))
    }
}

const mapStateToProps = state => {
    return {
        loading: state.usuarios.obternerUsuarioLoading,
        usuario: state.usuarios.usuarioObtenido
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsuarioDetails);