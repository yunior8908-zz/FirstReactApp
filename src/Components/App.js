import React from 'react';
import RouterApp from './routers/RouterApp';
import Notifications from './notifications/Notifications';

const App = props => {
    return (
        <React.Fragment>
            <Notifications />
            <RouterApp />
        </React.Fragment>
    );
}

export default App;