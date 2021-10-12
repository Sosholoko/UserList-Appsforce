    import React, {Component, useState} from 'react';
    import './Users.css';
    import Modal from './Modal';
    import Modal2 from './Modal2';
    



    
    class Users extends Component {

        // const = [del, setDel] = useState(false);
        
        state = {
        loading: false,
        person: [],
        }
        
    
        async componentDidMount(){
        fetch("https://randomuser.me/api/?results=10")
        .then((response) => response.json())
        .then((response)=> {
            this.setState({
                person: response.results,
                loading: true
            })
        })
        }

        test(index){
            // var checkin = window.confirm('Do you want to delete the selected user ?')
            // if( checkin == true){
            // e.target.parentNode.remove();
            var user = this.state.person;
            delete user[index];
            this.setState({person : user});
            // }else{
            // }
    };

    changeValue(index, name, lname, email, location)
    {
    const items = this.state.person;
    const item = items [index];
    console.log("item", item)
    console.log("name", name)
    console.log("email", email)
    console.log("location", location)
    item.name.first = name;
    item.email = email;
    item.name.last = lname;
    item.location.city = location;
    this.setState({
        person: items
    });
    }

    
    render(){
        var userList = this.state.person;
        var userDiv = document.getElementsByClassName('user');
        console.log(userDiv.length);
        console.log(userList[1]);

        function modal(){
            <Modal/>
        };
        
        
        

        var {person, loading} = this.state

        if(!loading){
            return(
                <div>Loading...</div>
            )
        }
        else{
            return(
                    <>
                    
                
                <div className='container'>
                    {person.map((persons, i)  => (
                        <>
                        <div className='user' key={i}>
                        <Modal test = {()=>{this.test(i)}} idname={persons.name.first} name={persons.name.first} lname={persons.name.last}/>
                        {/* <button onClick={()=>{this.test(i)}}>X</button> */}
                        <Modal2 name={persons.name.first} lname={persons.name.last} changeValue={(name, lname, email, location) => {this.changeValue(i, name, lname, email, location)}}/>
                        <div className='info__user'>
                        <p id='name__user'>{persons.name.title} {persons.name.last}</p>
                        <p id='lname__user'>{persons.name.first}</p>
                        <p id='mail__user'>{persons.email}</p>
                        <p><span id='count__user'>Country</span>: {persons.location.country}</p>
                        <p><span id='city__user'>City</span>: {persons.location.city}</p>
                        <p><span id='id__user'>ID</span>: {persons.login.password}</p>
                        </div>
                        <div className='pic__user'>
                        <img src={persons.picture.medium} alt={persons.name.first}></img>
                        </div>
                        </div>
                        </>
                    ))}
                    <br/>
                </div>
                </>
            )
        }
    
    
        
            {/* <div>
            {this.state.loading || !this.state.person ? (
            <div>loading...</div>) 
            :(
                <div>
                <div>{this.state.person.name.first}</div>
                <div>{this.state.person.name.last}</div>
                <img src={this.state.person.picture.medium}></img>
                </div>
            )}
            </div> */}
    }
    }

    export default Users;