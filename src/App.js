import { useEffect, useState } from 'react';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
// import New from './new';

//import logo from './logo.svg';
import './App.css';

const App = () =>{
 

  const[searchField,setSearchField] = useState("");
  
  const[monsters,setMonsters] = useState([]);
  const [filterMonsters,setFilterMonsters] = useState(monsters);
  

  useEffect(()=>{
    console.log("Effect has been fired");

  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => setMonsters(users));
  

  },[]);


  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
     
});    
  setFilterMonsters(newFilteredMonsters);

  },[monsters,searchField])
  

 const onSearchChange = (event)=>{
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString);
  
      
    };


  return ( 
    <div className="App">
      <h1 className='app-title'>Monster Rolodex</h1>
    

     <SearchBox

     className = 'monsters-search-box'
     onChangeHandler = {onSearchChange}
      placeholder = "Search monsters"

     />
    {/* <New monster = {filterMonsters} /> */}

        {/* {
          filterMonsters.map((monster) =>{
            return(
              <div key={monster.id}>
                <h3>{monster.name}</h3>
              </div>
            );
          })}   */}

     < CardList monsters = {filterMonsters} /> 


    </div>
  )
}

// class App extends Component {
//   // Runs first
//   constructor(){
//     super();

//     this.state = {
//       monsters:[],
//       searchField :"",
//     };
//     console.log("Constructor");
//   }
// // runs third

// onSearchChange = (event)=>{
          
//   const searchField = event.target.value.toLocaleLowerCase();
  
//   this.setState(() =>{
//     return{ searchField };
//   },
  
//   )

  
//   }
// componentDidMount(){

//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.json())
//   .then((users) =>this.setState(()=>{
//     return {monsters:users}
//   },
  
//   ));
// }
//  // mounted second 
//   render(){
//     console.log("Render from App JS");

//     const {monsters,searchField} = this.state;
//     const {onSearchChange} = this;

//     const filterMonsters = monsters.filter((monster)=>{
//       return monster.name.toLocaleLowerCase().includes(searchField); 
//     });

//     // return ( 
//     //   <div className="App">

//     //    <SearchBox
//     //    className = 'monsters-search-box'
//     //    onChangeHandler = {onSearchChange} placeholder = {"Search monsters"}
//     //    />

//     //       {/* {
//     //         filterMonsters.map((monster) =>{
//     //           return(
//     //             <div key={monster.id}>
//     //               <h3>{monster.name}</h3>
//     //             </div>
//     //           );
//     //         })}   */}

//     //         <CardList monsters = {filterMonsters} />


//     //   </div>
//     // )
//   }
   
// }

export default App;
