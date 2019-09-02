import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Sidebar } from 'semantic-ui-react';

const SideBar = props => {
    return <React.Fragment>
        <Sidebar
            direction='left'
            animation='push'
            visible
            as={Menu}
            vertical
            style={{ width: '170px' }}
            inverted
        >
            <Menu.Item as={NavLink} to='/pages/home'>Inicio</Menu.Item>
            <Menu.Menu>
                <Menu.Item header style={{ color: '#ffffff', fontSize: '15px' }}>Seguridad</Menu.Item>
                <Menu.Item as={NavLink} to='/pages/usuarios'>Usuarios</Menu.Item>
                <Menu.Item as={NavLink} to='/pages/roles'>Roles</Menu.Item>
            </Menu.Menu>
            <Menu.Menu>
                <Menu.Item header style={{ color: '#ffffff', fontSize: '15px' }}>Versat</Menu.Item>
                <Menu.Item as={NavLink} to='/pages/versat/usuarios'>Usuarios</Menu.Item>
            </Menu.Menu>
        </Sidebar>
    </React.Fragment>;
}
    
export default SideBar;