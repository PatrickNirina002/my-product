import React, { useState } from 'react'
import UserTable from './tab/UserTab'
import AddUserForm from './text/AddText'
//import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import EditUserForm from './text/Edit'

const App = () => {
  const usersData = [
  ]

  const [users, setUsers] = useState(usersData)

  const [count, setCount] = useState(0);

  const [ editing, setEditing ] = useState(false)

  const initialFormState = { id: null, name: '', username: '' }
  const [ currentUser, setCurrentUser ] = useState(initialFormState)

  const editRow = user => {
    setEditing(true)
  
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
  
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }
  
  const addUser = user => {
		user.id = users.length + 1
    setUsers([ ...users, user ])
    user.id=count
	}

	const deleteUser = id => {
		setUsers(users.filter(user => user.id !== id))
    }
   
  

  return (
    <div >
      <div >
      <div >
  {editing ? (
    <div>
      <EditUserForm
        editing={editing}
        setEditing={setEditing}
        currentUser={currentUser}
        updateUser={updateUser}
      />
    </div>
  ) : (
    <div>
      <AddUserForm addUser={addUser}  setCount={setCount} count={count}/>
    </div>
  )}
</div>
       
        <div >
		
      <UserTable users={users} updateUser={updateUser} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

export default App