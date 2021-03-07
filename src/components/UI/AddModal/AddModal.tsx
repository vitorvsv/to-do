import React, { useState } from 'react';
import classes from './AddModal.module.css';

import Overlay from '../Overlay/Overlay';

const AddModal = (props: any) => {
  const [item, setItem] = useState('');

  return (
    <React.Fragment>
      <Overlay clicked={props.onCloseModal} />
      <div className={classes.AddModal}>
        <div className={classes.AddModalHeader}>
          <h1>{props.modalTitle}</h1>  
        </div>
        <div className={classes.ModalBody}>
          <div>
            <input 
              placeholder="Informe a nova tarefa" 
              value={item} 
              onChange={(event) => setItem(event.target.value)} />
          </div>
          <div>
            <button onClick={() => { props.onAddItem(item); setItem(''); }}>Adicionar</button>
          </div>
        </div> 
      </div>
    </React.Fragment>
  )
}

export default AddModal;