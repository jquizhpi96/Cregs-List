import React from 'react';
import Delete from './Delete';
import { useState } from 'react';


function Modal({ creg, isOpen, onClose, props }) {
  const [toggleFetch, setToggleFetch] = useState(false);

  if (!isOpen) {
    return <p></p>
  }
  else {
  
  
   
    return (
      <div  >
        <h1>Are you sure?</h1>
        <button onClick={onClose}> Close</button>
        <Delete className="delete" creg={creg} setToggleFetch={setToggleFetch}/>
      </div>
    );
  }
}

export default Modal;