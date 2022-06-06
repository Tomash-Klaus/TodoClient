import React from 'react';
import './filter-buttons.css';

const allButtons = [
    {name: 'all', label:'All'},
    {name: 'active', label:'Active'},
    {name: 'done', label:'Done'}
]

const FilterButtons = ({ filter, setFilter }) => {

    const button = allButtons.map(({ name, label })=>{
        const isActive = filter === name;
        const clazz = 'btn' + (isActive ? ' btn-info': ' btn-outline-secondary');
        
        return (
            <button 
                type='button'
                className={clazz}
                key={name}
                onClick={()=> setFilter(name)}
            >
                {label}
            </button>
        )
    })

  
// const FilterButtons = () =>{
    return (
        <div className='button-group'>
            {button}
        </div>
    
        // <div className="btn-group">
        //   <button type="button"
        //           className="btn btn-info">All</button>
        //   <button type="button"
        //           className="btn btn-outline-secondary">Active</button>
        //   <button type="button"
        //           className="btn btn-outline-secondary">Done</button>
        // </div>
    );
};

export default FilterButtons;