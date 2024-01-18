import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import "./styles/FormCard.css"

const FormCard = ({createUser, updateUser, updateInfo, setUpdateInfo, setIsFormClose}) => {

const{handleSubmit, reset, register}=useForm() //hook para poder registrar la informacion de los input y crear los usuarios

useEffect(() => {
reset(updateInfo) //cada vez que le demos al boton editar se reseteara todo el form con la informacion que se trajo de usercard
}, [updateInfo])



const submit = (data) =>{


    if (updateInfo) {
        updateUser(updateInfo.id, data)  //usamos la funcion de actualizar para pasarle la id de la informacion a actualizar
        reset({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          birthday: ""
      
      })

    } else {
        createUser(data)
    }

reset({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: ""

})
setIsFormClose(true)
}

const handleExit=()=>{
setIsFormClose(true)
reset({
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  birthday: ""

})
setUpdateInfo()
}


  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
      <div onClick={handleExit} className='form_x'>x</div>
      <h2 className='form_title'>{updateInfo ? "Update User" : "Create New User"}</h2>
    <label className="form_label">
      <span className='form_field_name'>Nombre</span>
      <input className='form_field' {...register("first_name")}type="text" />
    </label>
    <label className="form_label">
      <span className='form_field_name'>Apellidos</span>
      <input className='form_field' {...register("last_name")} type="text" />
    </label>
    <label className="form_label">
      <span className='form_field_name'>Correo</span>
      <input className='form_field'{...register("email")} type="text" />
    </label>
    <label className="form_label">
      <span className='form_field_name'>Contraseña</span>
      <input className='form_field' {...register("password")}type="password" />
    </label>
    <label className="form_label">
      <span className='form_field_name'>Contraseña</span>
      <input className='form_field' {...register("birthday")}type="date" />
    </label>
    <button className='form_btn'>{updateInfo ? "Update" : "Create"}</button>
  </form>

  )
}

export default FormCard