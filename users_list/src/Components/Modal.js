import React, {useState} from 'react';
import './Modal.css';

export default function Modal(props){
    const [modal, setModal] = useState(false);

    const toggleModal = () =>{
        setModal(!modal);
    }

    return(
        <>
            <button onClick={toggleModal}className='btn__modal'>
            <i class="far fa-trash-alt"></i>
            </button>


            {modal && (
                <div className='modal'>
                <div className="overlay"> </div>
                    <div className='modal-content'>
                        <h3>Do you want to delete the user <br/> {props.name} {props.lname} ?</h3>
                        <button id='yes__btn' onClick={props.test}>Yes</button><button id='no__btn' className='close__modal'onClick={toggleModal}>No</button>
                    </div>
            </div>
            )}
            
        </>
    )
}