import React from 'react';
import { withRouter } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

const Nav = props => {

    const editPerfil = (window.localStorage.getItem('versatusuariosToken')) ? <Menu.Item as='a' onClick={() => props.history.push(`/pages/perfil/edit`)}>Editar perfil</Menu.Item > : null;
    const resetPass = (window.localStorage.getItem('versatusuariosToken')) ? <Menu.Item as='a' onClick={() => props.history.push(`/pages/perfil/reset`)}>Cambiar contraseña</Menu.Item > : null;
    const logout = (window.localStorage.getItem('versatusuariosToken')) ? <Menu.Item as='a' onClick={() => props.history.push(`/pages/perfil/logout`)}>Salir</Menu.Item > : null;
    return (
        <Menu attached='top' borderless inverted color='teal'>
            <Menu.Menu position='right'>
                <Menu.Item></Menu.Item>
                {editPerfil}
                {resetPass}
                {logout}
            </Menu.Menu>
        </Menu>
    );
}

export default withRouter(Nav);