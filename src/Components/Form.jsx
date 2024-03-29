import React from "react";
import { useState } from 'react'

const Form = () => {
  //ESTADOS QUE DEBEN IT AL CONTEXT
  const [usuario, setUsuario] = useState({nombre:'', email:''})
  const [showValidationError, setShowValidationError] = useState(false)
  const [showConfiramtionMessage, setConfirmationMessage] = useState(false)

  const handleSubmit = (e) => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    e.preventDefault()
    if((usuario.nombre.length > 5 && usuario.email.match(validRegex))){
      setShowValidationError(false)
      setConfirmationMessage(true)
      console.log("datos validos" + usuario.nombre + usuario.email)
    }
    else{
      setShowValidationError(true)
      setConfirmationMessage(false)
      console.log("datos INvalidos" + usuario.nombre + usuario.email)
    }

  }
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>Nombre</label>
        <input type="text" value={usuario.nombre} onChange={({target})=> setUsuario({...usuario, nombre: target.value})}/>
        <label>Email</label>
        <input type="text" value={usuario.email} onChange={({target})=> setUsuario({...usuario, email: target.value})}/>
        <button>Contactar</button>
      </form>

      <>
       {showValidationError && <h4>Por favor verifique su información nuevamente</h4>}
       {showConfiramtionMessage && <h4>Gracias {usuario.nombre}, te contactaremos cuando antes vía mail</h4>}
    </>

    </div>
  );
};

export default Form;
