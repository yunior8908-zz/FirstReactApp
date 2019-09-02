import React from 'react';
import { createCache, createResource } from 'simple-cache-provider';
import versatusuariosapiwithtoken from '../../../api/versatusuariosreact-axios';

 function fetchRole(id) {
     return versatusuariosapiwithtoken.get(`/seguridad/roles/${id}`)
         .then(res => res);
}

const cache = createCache();
const fetchRoleResource = createResource(fetchRole);

const UsuarioRole = props => {
    const { role } = props;
    const rolee = fetchRoleResource.read(cache, role);
    return <React.Fragment>{rolee.data.denominacion}</React.Fragment>;
}

export default UsuarioRole;