
import "./card-list.styles.css"

export default function CardList({monsters}){
        
            // mapping function
            <div className="card-list">
            {monsters.map((monster) =>{
                const{ name,email,id} = monsters
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
        
         
    }

