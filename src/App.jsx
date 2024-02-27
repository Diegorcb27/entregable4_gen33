
import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import UserCard from './components/UserCard'
import FormCard from './components/FormCard'

function App() {

  const[updateInfo, setUpdateInfo]=useState()
  const [isFormClose, setIsFormClose] = useState(true)

  const baseUrl = "https://entregable-2-api-md3.onrender.com"
  
  const[users, getUser, createUser, deleteUser, updateUser]=useFetch(baseUrl)

  useEffect(() => {
    getUser()
    
  }, [])

  console.log(users);

  const handleOpenForm = ()=>{
    setIsFormClose(!isFormClose)
  }
  

  return (
  <div className='container_principal'>
    <h2 className='user'>Usuarios</h2>

    <button className="btn_user" onClick={handleOpenForm}><span><i className='bx bx-plus-circle'></i></span> <span>CREAR NUEVO USUARIO</span></button>

    <div className={`form_container ${isFormClose && "form_close"}`} > {/**si isFormClose es true se cierra porque se aplica la clase form_close */}
      <FormCard createUser={createUser} updateUser={updateUser} updateInfo={updateInfo} setUpdateInfo={setUpdateInfo} setIsFormClose={setIsFormClose}/>
    </div>

    <div className='container'>
      {
        users?.map(user => (
          <UserCard key={user.id} user={user} deleteUser={deleteUser} setUpdateInfo={setUpdateInfo} setIsFormClose={setIsFormClose}/>
        ))
      }
    </div>

  </div>
  )
}

export default App
