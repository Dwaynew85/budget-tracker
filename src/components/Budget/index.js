import React from 'react';
import { AppContext } from '../../context/AppContext';
import EditBudget from '../EditBudget';
import ViewBudget from '../ViewBudget';

const Budget = () => {
	const { budget, dispatch } = React.useContext(AppContext)
	const [isEditing, setIsEditing] = React.useState(false);

	const handleEditClick = () => {
		setIsEditing(true);
	}

	const handleSaveClick = (value) => {
		dispatch({
			type: 'SET_BUDGET',
			payload: value,
		});
		setIsEditing(false);
	};

	return (
		<div className='alert alert-secondary'>
			{isEditing? (
				<EditBudget handleSaveClick={handleSaveClick} budget={budget} />
			) : (
				<ViewBudget handleEditClick={handleEditClick} budget={budget} />
			)}
		</div>
	);
};

export default Budget;