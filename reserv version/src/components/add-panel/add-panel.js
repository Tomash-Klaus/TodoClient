import React, {useState} from 'react';
import { addItem } from '../../api/api';
import './add-panel.css'

const AddForm = ({todos, setData}) => {

const [label, setLabel] = useState('');

const onLabelChange = e =>{
    setLabel(e.target.value);
}

const onSubmit = (e) => {
    e.preventDefault();
    const itemBody = {value:label, isDone: false};
    console.log(itemBody)

    addItem(itemBody)
        .then(
            res => {
                const newArray = [...todos,res.data];
                setData(newArray);
            }
        )
    
    setLabel("")
};
    
    return (
        <form 
            className='bottom-panel d-flex'
            onSubmit={onSubmit}
        >
            <input 
                type="text"
                className='form-control new-todo-label'
                value={label}
                placeholder="what needs to be done?"
                onChange={onLabelChange}
                required
            >       
            </input>

            <button 
                type="submit"
                className='btn btn-outline-secondary'
            >
                Add
            </button>
        </form>
   );



  
       
   
};


export default AddForm;