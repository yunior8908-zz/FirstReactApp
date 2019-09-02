import React from 'react';
import { connect } from 'react-redux';
import './Notifications.css';
import * as actions from '../../store/actions/index';
import { Message } from 'semantic-ui-react';

class Notifications extends React.Component {
    _mounted = false;
    constructor(props) {
        super(props);
        this.state = { className: 'normal'};
        this.handleDismiss = this.handleDismiss.bind(this);
    }

    componentDidMount() {
        this.setState({className: 'normal' });
        this._mounted = true;
    }

    componentDidUpdate(props, state) {
        if (this._mounted && state.className === 'normal') {
            setTimeout(() => {
                this.setState({ className: 'mounted' });
            }, 2000);
            
        }
    }

    handleDismiss() {
        this.setState({ className: 'unmounted' });
        setTimeout(() => {
            this.setState({ className: 'normal' });
            this.props.setMensaje();
        }, 2000);
             
    }

    render() {
        if (this.props.message.message !== '') {
            return <div className={`notification ${this.state.className}`}>
                <Message
                    size='mini'
                    onClick={this.handleDismiss}
                    color={this.props.message.color}
                    floating
                    header="Notificacion"
                    content={this.props.message.message}
                />
            </div>
        }
        return null;
    }
}

const mapStateToProps = state => {
    return {
        message: state.notifications
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setMensaje: () => dispatch(actions.setMessage('red',''))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notifications);