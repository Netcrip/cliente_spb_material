import React from "react";

import {useSelector,useDispatch} from 'react-redux'

import {setUsuariosAccion} from '../redux/userDucks'


const Practica = () => {
  const usuario = useSelector(store =>store.usuario);
  const dispatch = useDispatch()

  console.log(usuario)
  return (
    <div>
    <button onClick={() =>dispatch(setUsuariosAccion("1","Emaul","1256sdas","ultimo"))}>Obtener</button>
    </div>
  );


};

export default Practica;