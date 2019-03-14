import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './text.css'
const AddText = props => {
	const initialFormState = { id: [], name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
        <div class="si">
		<form 
			onSubmit={event => {
				
				event.preventDefault()
			if (isNaN(parseInt(user.username))){ return<span>"ff"</span>}

				props.addUser(user)
				props.setCount(props.count + 1)
				setUser(initialFormState)
			}}
		>
			<label >Produit</label>
			<input  type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label class="s">Prix</label>
			<input type="text" name="username" id="pa" value={user.username} onChange={handleInputChange} />
            <label>Ar</label>
			<button class="btn btn-primary b" >Ajouter</button>
			<p class="naf">{(isNaN(parseInt(user.username)))?<span>Entrer un nombre</span>:""}</p>
		</form>
        </div>
	)
}

export default AddText