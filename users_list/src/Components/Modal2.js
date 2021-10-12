import React, {useState} from 'react';
import './Modal2.css';

export default function Modal(props){
    const [modal, setModal] = useState(false);
    const [name, setName] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');

    const toggleModal = () =>{
        setModal(!modal);
    }

    function onSubmit(e){
        e.preventDefault();
        console.log("name", name)
        console.log("email", email)
        console.log("location", location)
        if(name.length > 3 && email.includes('@') && email.length > 3 && location.length > 1){
            props.changeValue(name, lname, email, location);
            toggleModal()
        }
        else if(name.length < 3){
            alert(" ⚠︎ The name you used isn't long enough, you need at least 3 characters. ")
        }
        else if(email.includes('@') == false){
            alert(" ⚠︎ The email you used isn't valid, please try again.")
        }
        else if(location.length < 1){
            alert("⚠︎ A field is missing, please try again.")
        }
        else{
            alert("⚠︎ Something went wrong, please verify the fields !")
            toggleModal()
        }
        
    }

    
    return(
        <>
            <button onClick={toggleModal}className='btn_modal'>
            <i class="fas fa-edit"></i>
            </button>


            {modal && (
                <div className='modal'>
                <div className="overlay"> </div>
                    <div className='modal-content'>
                        <h2>Edit infos for</h2><p>{props.name}</p><p>{props.lname}</p>
                        
                        <form onSubmit={onSubmit}>
                            <input onChange={event => setName(event.target.value) } type='text' placeholder='First Name' className='name_input'></input><br/>
                            <input onChange={event => setLname(event.target.value) } type='text' placeholder='Last Name' className='lname_input'></input><br/>
                            <input onChange={event => setEmail(event.target.value) } type='text' placeholder='Email' className='mail_input'></input><br/>
                            <input onChange={event => setLocation(event.target.value) } type='text' placeholder='Location' className='loca_input'></input><br/><br/>
                            <button type='submit' id='yes__btn'>Confirm</button><button id='no__btn' className='close__modal'onClick={toggleModal}>Cancel</button>
                        </form>
                    </div>
            </div>
            )}
            
        </>
    )
}