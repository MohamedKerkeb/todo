import React from 'react';

const Checkbox = ({ label, onChange, checked }) => {
	return (
		<>
			<div className='checkbox'>
				<input type='checkbox' name='' id='' onChange={() => onChange()} checked={checked} />
				<label htmlFor=''>{label}</label>
			</div>
		</>
	);
};

export default Checkbox;
