import React from 'react';
import { Redirect } from 'react-router-dom';

const RequiredAuthentication = Wrapper => {    
    class componente extends React.Component {
        render() {
            const isAuthenticated = window.localStorage.getItem('versatusuariosToken') != null;
            if (!isAuthenticated) {
                return <Redirect to='/'/>;
            }           
            return <Wrapper {...this.props }/>
        }
    }
    return componente;
}

export default RequiredAuthentication;