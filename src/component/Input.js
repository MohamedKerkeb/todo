import React from 'react';
import Button from './Button';

const Input = ({ onSubmit, onChange, value }) => {
	return (
		<>
			<form className='formInput' onSubmit={onSubmit}>
				<input className='inputTodo' type='text' placeholder='add Todos...' onChange={onChange} value={value} />
				<Button variant='primary'>Add</Button>
			</form>
		</>
	);
};

export default Input;
