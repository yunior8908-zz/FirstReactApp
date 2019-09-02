import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home/Home';
import Perfil from '../pages/auth/perfil/Perfil';
import UsuarioEdit from '../pages/usuarios/forms/UsuarioEdit';
import AuthResetPassword from '../pages/auth/perfil/AuthResetPassword';
import Usuarios from '../pages/usuarios';
import UsuarioAdd from '../pages/usuarios/forms/UsuarioAdd';
import UsuarioDelete from '../pages/usuarios/forms/UsuarioDelete';
import UsuarioResetPassword from '../pages/usuarios/forms/UsuarioResetPassword';
import UsuarioDetails from '../pages/usuarios/forms/UsuarioDetails';
import Roles from '../pages/roles';
//import RoleAdd from '../pages/roles/forms/RoleAdd';
//import RoleEdit from '../pages/roles/forms/RoleEdit';
//import RoleDelete from '../pages/roles/forms/RoleDelete';
import RoleDetails from '../pages/roles/forms/RoleDetails';
import Found404 from '../pages/404/Found404';
import VersatUsuarios from '../pages/versat';
import Logout from '../pages/auth/Logout';
import PerfilEdit from '../pages/auth/perfil/PerfilEdit';
import Reloaded from '../pages/reloaded/Reloaded';

const RouterLayout = props => {
    return <React.Fragment>
        <Switch>
            <Route path='/pages/home' exact component={Home} />
            <Route path='/pages/perfil' exact component={Perfil} />
            <Route path='/pages/perfil/edit' exact component={PerfilEdit} key="perfiledit" />
            <Route path='/pages/perfil/reset' exact component={AuthResetPassword} />
            <Route path='/pages/perfil/logout' exact component={Logout} />
            <Route path='/pages/usuarios' exact component={Usuarios} />
            <Route path='/pages/usuarios/add' exact component={UsuarioAdd} />
            <Route path='/pages/usuarios/edit/:id' exact component={UsuarioEdit} key="usuarioedit"/>
            <Route path='/pages/usuarios/delete/:id' exact component={UsuarioDelete} />
            <Route path='/pages/usuarios/reset/:id' exact component={UsuarioResetPassword} />
            <Route path='/pages/usuarios/details/:id' exact component={UsuarioDetails} />
            <Route path='/pages/roles' exact component={Roles} />
            {/* <Route path='/pages/roles/add' exact component={RoleAdd} />
            <Route path='/pages/roles/edit/:id' exact component={RoleEdit} />
            <Route path='/pages/roles/delete/:id' exact component={RoleDelete} />*/}
            <Route path='/pages/roles/details/:id' exact component={RoleDetails} />
            <Route path='/pages/versat/usuarios' exact component={VersatUsuarios} />
            <Route path='/pages/reloaded' exact component={Reloaded} />
            <Route component={Found404} />
        </Switch>
    </React.Fragment>;
}

export default RouterLayout;