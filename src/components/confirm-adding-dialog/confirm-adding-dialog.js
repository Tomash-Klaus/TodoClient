import React from 'react';
import './confirm-adding-dialog.css'
import { addItem} from '../../api/api';

const ConfirmDialog = (props) => {
  const {dataToSend, setLabel, setIsOpenConfirm,todos , setData} = props;

const onClick = async(e) =>{
  e.preventDefault();
      await addItem(dataToSend)
        .then(
            res => {
                const newArray = [...todos,res.data];
                setData(newArray);
            }
        )
  setLabel("")
  setIsOpenConfirm(false)
}

  return (
  <div className={`dialog`}>
      <div className={'modal-title'}>
              <label className="dialog-label" htmlFor="name"> Confirm your add </label>
              <div className='modal-footerr'>
                  <button className="btn btn-secondary" onClick={() => setIsOpenConfirm(false)}> Cancel </button>
                  <button className="btn btn-primary" onClick={onClick}> Add </button>
              </div>
      </div>
      <div className="close-btn-dialog" onClick={() => setIsOpenConfirm(false)}>X</div>
  </div>
  );
};
export default ConfirmDialog;