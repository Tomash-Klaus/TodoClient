import React from 'react';
import { deleteItem } from '../../api/api';
import './confirm-delete-dialog.css'

const ConfirmDeleteDialog = (props) => {
    const {id, setIsOpenDeleteConfirm,todos , setTodos} = props;

    const onClick = async(e) =>{
        e.preventDefault();
            await deleteItem(id)
              .then(
                  res => {
                    let idx = todos.findIndex( el => el.id === res.data);
                    const newArray = [
                        ...todos.slice(0, idx),
                        ...todos.slice(idx + 1)
                    ];
                    setTodos(newArray);
                  }
              )
              setIsOpenDeleteConfirm(false)
      }

    return (
        <div className={`dialog`}>
            <div className={'modal-title'}>
                    <label className="dialog-label" htmlFor="name"> Do you want to delete? </label>
                    <div className='modal-footerr'>
                        <button className="btn btn-secondary" onClick={() => setIsOpenDeleteConfirm(false)}> Cancel </button>
                        <button className="btn btn-primary" onClick={onClick}> Delete </button>
                    </div>
            </div>
            <div className="close-btn-dialog" onClick={() => setIsOpenDeleteConfirm(false)}>X</div>
        </div>
        );
};

export default ConfirmDeleteDialog;