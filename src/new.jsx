import React from 'react'

export default function New({monsters}) {
  return (
    <div className="card-list">
            {monsters.map((monster) =>{
                const{ name,email,id} = monster
                return(
               <div className="card-container" key={id}>

                <img  alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2`}
                />
                <h2>{name}</h2>
                <p>{email}</p>
               </div>
             )})}
         </div>
  )
}
