import React from 'react';
import './filter-buttons.css';

const allButtons = [
    {name: 'all', label:'All'},
    {name: 'active', label:'Active'},
    {name: 'done', label:'Done'}]

const FilterButtons = ({ filter, setFilter }) => {

    const button = allButtons.map(({ name, label })=>{
        const isActive = filter === name;
        const clazz = 'btn' + (isActive ? ' btn-info': ' btn-outline-secondary');
        
        return (
            <button 
                type='button'
                className={clazz}
                key={name}
                onClick={()=> setFilter(name)}>
                {label}
            </button>
        )
    })
  
    return (
        <div className='button-group'>
            {button}
        </div>
    );
};

export default FilterButtons;