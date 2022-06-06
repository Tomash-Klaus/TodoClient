import React, {useState} from 'react';
import './add-panel.css'
import ConfirmDialog from '../confirm-adding-dialog/confirm-adding-dialog';

const AddForm = ({todos, setData}) => {

const [label, setLabel] = useState('');

const [isOpenConfirm, setIsOpenConfirm] = useState(false)

const[itemBody,setItemBody] = useState({})

const onLabelChange = e =>{
    setLabel(e.target.value);
}

const onSubmit = (e) => {
    e.preventDefault();
    setItemBody({value:label, isDone: false});
    setIsOpenConfirm(true)
};
    
    return (
        <>
        <form   className='bottom-panel d-flex'
                onSubmit={onSubmit}>
            <input  type="text"
                    className='form-control new-todo-label'
                    value={label}
                    placeholder="what needs to be done?"
                    onChange={onLabelChange}
                    required
            >       
            </input>

            <button type="submit"
                    className='btn btn-outline-secondary'>
                Add
            </button>
        </form>

        { isOpenConfirm && (
            <ConfirmDialog 
                        dataToSend={itemBody} 
                        setLabel={setLabel} 
                        setIsOpenConfirm={setIsOpenConfirm}
                         todos={todos} 
                         setData={setData}/>
        )}
        </>
   );
};

export default AddForm;