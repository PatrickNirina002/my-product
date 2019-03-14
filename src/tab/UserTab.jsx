
import React, { useState } from 'react'
//import "./table.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import './pa.css'
const UserTab                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                = props => (
  <div class="pas">
	<table class="table table-hover container">
		<thead>
			<tr >
        <th class="bg bg-success">id</th>
				<th class="bg bg-success">Produits</th>
				<th class="bg bg-success">Prix</th>
				<th class="bg bg-success">Actions</th>
			</tr>
		</thead>
		<tbody>
			{props.users.length > 0 ? (
				props.users.map(user => (
					<tr class="si">
            <td>{user.id}</td>
						<td>{user.name[0].toUpperCase()+user.name.split("").splice(1).join("").toLowerCase()}</td>
						<td>{user.username}</td>
						<td>
                          
							<button class="btn btn-danger" onClick={() => {
    confirmAlert({
			title: 'suppression de produit.',
			message:user.name,
      buttons: [
        {
          label: 'oui',
          onClick: () => props.deleteUser(user.id )  
				
        },
        {
          label: 'Non'
         
        }
      ]
    })
  }}>x</button>
	
	<button class="btn btn-success"
  onClick={() => {
		
		confirmAlert({
			customUI: () => {
				return (
					<div>
						<input type="text" />
						<p>
						<button onClick={event => {
				
				event.preventDefault()

				props.updateUser(user.id, user)
			}}>ok</button>
			<button >Anuler</button></p>
					</div>
				)
				
			}

		})
	}}

  
>
  Edit
</button>
						</td>
					</tr>
				))
			) : (
				<tr>
				
				</tr>
			)}
		</tbody>
	</table>
	<button class="btn btn-primary sa" onClick={
		()=>{
			var total=0;
			for(let i=0;i<props.users.length;i++)
			{
				total+=parseInt(props.users[i].username);
			}
			document.getElementById("total").innerHTML=total;
		}
	}>TOTAL</button>
	<div>

			<p class="ss">TOTAL=<span id="total"></span>Ar</p>
	</div>
</div>
)

export default UserTab