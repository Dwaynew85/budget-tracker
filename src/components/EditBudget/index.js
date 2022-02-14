import React from 'react';

const EditBudget = ({ budget, handleSaveClick}) => {
    const [value, setValue ] = React.useState(budget);
    return (
        <>
            <input
                required='required'
                type='number'
                class='form-control mr-3'
                id='name'
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <button
                type='button'
                class='btn btn-primary'
                onClick={() => handleSaveClick(value)}
            >
                Save
            </button>
        </>
    )
};

export default EditBudget;