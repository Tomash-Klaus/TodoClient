import React from 'react';


const ConfirmDialog = (props) => {
  const { title, children, open, setOpen, onConfirm } = props;
  return (
    <form 
            className='bottom-panel d-flex'>
            <span>
              Confirm adding this item?
            </span>

            <button 
                type="submit"
                className='btn btn-outline-secondary'>
                Confirm
            </button>

            <button 
                type="submit"
                className='btn btn-outline-secondary'
                onClick={setOpen(false)}>
                Cancel
            </button>
        </form>
  );
};
export default ConfirmDialog;