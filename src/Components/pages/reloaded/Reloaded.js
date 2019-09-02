import React from 'react';
import { Redirect } from 'react-router-dom';

const Reloaded = props => {    
    return <Redirect to={props.location.state.url} />;
}

export default Reloaded;