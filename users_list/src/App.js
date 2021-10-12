import './App.css';
import React, {Component} from 'react';
import Users from './Components/Users.js';
import Modal3 from './Components/Modal3.js';



function App() {
  return (
    <div className="App">
      <div className='title'><h1><i class="fas fa-users"></i> Users List</h1>
      </div> <Modal3/>
      <br/><br/><br/><br/><br/>
      <Users/> 
    </div>
  );
}

// class App extends Component {
//   state = {
//     loading: true,
//     person: null,
//   }

//   async componentDidMount(){
//     const url = "https://randomuser.me/api/?results=10";
//     const response = await fetch(url);
//     const data = await response.json();
//     this.setState({person: data.results[0], loading: false});
//     console.log(data);
//   }

  

// render(){
//   // const userz = this.state.users.map((fname) =>{
//   //   return <Users fname={fname}/>
//   // })


//   return(
//     <div className="App">
//       <h1>Users List</h1><br/>
//       <div>
//         {this.state.loading || !this.state.person ? (
//         <div>loading...</div>) 
//         :(
//           <div>
//             <div>{this.state.person.name.first}</div>
//             <div>{this.state.person.name.last}</div>
//             <img src={this.state.person.picture.medium}></img>
//           </div>
//         )}
//       </div>
      
//     </div>
//   );
// }
// }

export default App;
