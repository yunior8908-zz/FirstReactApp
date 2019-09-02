import * as actionType from '../actionTypes/ActionTypes';

const initialState = {
    usuariosList: [],
    totalItems: 0,
    listLoading: false,
    usuarioObtenido: null,
    obternerUsuarioLoading: false
};

export const UsuariosReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.FETCH_USUARIOS_LIST:
            return {
                ...state, listLoading: true, totalItems: 0
            }
        case actionType.FETCH_USUARIOS_LIST_SUCCESS:
            return {
                ...state, usuariosList: action.usuariosList, totalItems: action.totalItems, listLoading: false
            }
        case actionType.FETCH_USUARIOS_LIST_FAILED:
            return {
                ...state, usuariosList: [], totalItems: 0, listLoading: false
            }
        case actionType.FETCH_OBTENER_USUARIO:
            return {
                ...state, obternerUsuarioLoading: true, obtenerUsuario: null
            }
        case actionType.FETCH_OBTENER_USUARIO_SUCCESS:
            return {
                ...state, obternerUsuarioLoading: false, usuarioObtenido: action.usuarioObtenido
            }
        case actionType.FETCH_OBTENER_USUARIO_FAILED:
            return {
                ...state, obternerUsuarioLoading: true, usuarioObtenido: null
            }
        default:
            return state;
    }
}