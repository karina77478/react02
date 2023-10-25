import React, { useState } from 'react'
import { db } from './firebase';
import { addDoc, collection } from 'firebase/firestore';

const AppForm = () => {
    ////GUARDAR / ACTUALIZAR ////
    const camposRegistro = {nombre:"",edad:"",genero:""}
    const [objeto, setObjeto] = useState(camposRegistro);

  const handleSubmit = (e) =>{ 
    e.preventDefault();
    try {
      if(db){
        addDoc(collection(db,'persona'), objeto);
        console.log("Se guardo con exito");
      }

  } catch (error) {
    console.error();
  }

  }
  return (
    <div style={{background:"orange", padding:"10px", textAlign:"center"}}>
    <form onSubmit={handleSubmit}>
      <h1>AppForm.js</h1>
      <input type='texto' placeholder='Nombre.....'/>
      <input type='texto' placeholder='Nombre.....'/>
      <select>
      <option value="">Seleccione</option>
      <option value="M">Masculino</option>
      <option value="F">Femenino</option>
      </select>
      <button>Guardar/Actualizar</button>
    </form>
    </div>
  )
}

export default AppForm
