import React from 'react';
import Checkbox from '../component/Checkbox';
import Input from '../component/Input';

const All = ({ todos, onSubmit, onChange, value, handleCompleted }) => {
	return (
		<>
			<Input onChange={onChange} onSubmit={onSubmit} value={value} />
			{todos.map((todo) => {
				return (
					<div key={todo.id}>
						<Checkbox label={todo.name} onChange={() => handleCompleted(todo)} checked={todo.completed} />
					</div>
				);
			})}
		</>
	);
};

export default All;
