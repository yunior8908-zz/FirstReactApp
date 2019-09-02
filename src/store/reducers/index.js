import { combineReducers } from 'redux';
import { NotificationsReducer } from './NotificationsReducer';
import { UsuariosReducer } from './UsuariosReducer';

export const reducer = combineReducers({
    notifications: NotificationsReducer,
    usuarios: UsuariosReducer
});