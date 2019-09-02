import React from 'react';

class Logout extends React.Component {

    componentDidMount() {
        window.localStorage.removeItem('versatusuariosId');
        window.localStorage.removeItem('versatusuariosToken');
        window.localStorage.removeItem('versatusuariosTokenExpirationTime');
        this.props.history.push('/');
    }

    render() {
        return <div>Logout</div>;
    }
}

export default Logout;