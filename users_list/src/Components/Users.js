    import React, {Component, useState} from 'react';
    import './Users.css';
    import Modal from './Modal';
    import Modal2 from './Modal2';
    
    
    class Users extends Component {
    
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

        del(index){
            var user = this.state.person;
            delete user[index];
            this.setState({person : user});
    };

    changeValue(index, name, lname, email, location)
    {
    const items = this.state.person;
    const item = items [index];
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

                            <Modal del = {()=>{this.del(i)}} idname={persons.name.first} name={persons.name.first} lname={persons.name.last}/>
                            {/* <button onClick={()=>{this.test(i)}}>X</button> */}
                            <Modal2 name={persons.name.first} lname={persons.name.last} changeValue={(name, lname, email, location) => {this.changeValue(i, name, lname, email, location)}}/>

                            <div className='info__user'>
                                <p id='name__user'>{persons.name.title} {persons.name.last}</p>
                                <p id='lname__user'>{persons.name.first}</p>
                                <p id='mail__user'>{persons.email}</p>
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
    }
    }

    export default Users;