import * as actionType from '../actionTypes/ActionTypes';
import versatusuariosapiwithtoken from '../../api/versatusuariosreact-axios';
import { setMessage } from './NotificatiosActions';


const fetchUsuariosList = () => {
    return {
        type: actionType.FETCH_USUARIOS_LIST
    }
}

const fetchUsuariosListSuccess = data => {
    return {
        type: actionType.FETCH_USUARIOS_LIST_SUCCESS,
        usuariosList: data.lista,
        totalItems: data.total 
    }
}

const fetchUsuariosListFailed = () => {
    return {
        type: actionType.FETCH_USUARIOS_LIST_FAILED,
    }
}

export const FetchUsuarios = (page, pageSize, filter) => dispatch => {
    dispatch(fetchUsuariosList());
    versatusuariosapiwithtoken.get(`/seguridad/usuarios?page=${page}&pageSize=${pageSize}${filter}`)
        .then(res => dispatch(fetchUsuariosListSuccess(res.data)))
        .catch(err => {
            dispatch(fetchUsuariosListFailed());
            dispatch(setMessage('red', err.response));
        });
}



const obtenerUsuario = () => {
    return {
        type: actionType.FETCH_OBTENER_USUARIO
    }
}

const obtenerUsuarioSuccess = data => {
    return {
        type: actionType.FETCH_OBTENER_USUARIO_SUCCESS,
        usuarioObtenido: data
    }
}

const obtenerUsuarioFailed = () => {
    return {
        type: actionType.FETCH_OBTENER_USUARIO_FAILED
    }
}


export const ObtenerUsuario = id => dispatch => {
    dispatch(obtenerUsuario());
    versatusuariosapiwithtoken.get(`/seguridad/usuarios/${id}`)
        .then(res => dispatch(obtenerUsuarioSuccess(res.data)))
        .catch(err => {
            dispatch(setMessage('red', err.response));
            dispatch(obtenerUsuarioFailed());
        });
}