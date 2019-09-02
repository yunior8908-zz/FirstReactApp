import React, { useEffect } from 'react';
import Nav from '../nav/Nav';
import SideBar from '../sideBar/SideBar';
import RouterLayout from '../routers/RouterLayout';

const Layout = props => {
    useEffect(() => {
        if (props.match.isExact) {
            props.history.push('/pages/home');
        }
    }, [props.match.isExact, props.history]);

    return (
        <React.Fragment>
            <SideBar />
            <div style={{ position: 'relative', marginLeft: '170px' }}>
                <Nav />
                <div style={{ margin: '10px' }} >
                    <RouterLayout />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Layout;