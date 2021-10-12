import React, {useState} from 'react';
import './Modal3.css';

export default function Modal(props){
    const [modal, setModal] = useState(false);

    const toggleModal = () =>{
        setModal(!modal);
    }

    return(
        <>
            <button onClick={toggleModal}className='btn-modal3'>
            <i class="fas fa-user-plus"></i> Add User
            </button>


            {modal && (
                <div className='modal'>
                <div className="overlay"> </div>
                    <div className='modal-content'>
                        <h2>Add a new User</h2>
                        <input type='text' placeholder='Title'></input><br/>
                        <input type='text' placeholder='First Name'></input><br/>
                        <input type='text' placeholder='Last Name'></input><br/>
                        <input type='text' placeholder='Email'></input><br/>
                        <input type='text' placeholder='Country'></input><br/>
                        <input type='text' placeholder='City'></input><br/><br/><br/>
                        <button id='yes__btn'>Confirm</button><button id='no__btn' className='close__modal'onClick={toggleModal}>Cancel</button>
                    </div>
            </div>
            )}
            
        </>
    )
}