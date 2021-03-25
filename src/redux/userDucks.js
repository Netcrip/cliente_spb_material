//constantes
const datosIniciales = null;

//tipos
const SET_USUARIO = "SET_USUARIO";

//reducer
export default function usuarioReducer(state = datosIniciales, action) {
  switch (action.type) {
    case SET_USUARIO:
      return [state, action.data.userID,action.data.usuario,action.data.token,action.data.ultimo];
    default:
      return state;
  }
}

//acciones
export const setUsuariosAccion = (id,usuario,token,ultimo) => (dispatch, getState) => {
  dispatch({
    type: SET_USUARIO,
    data:{
    userID: id,
    usuario: usuario,
    token: token,
    ultimoInicio: ultimo
    }
  });

};
