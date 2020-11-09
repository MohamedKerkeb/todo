import React from 'react';
import Input from '../component/Input';
import Checkbox from '../component/Checkbox';

const Active = ({ filterTodo, todos, onSubmit, onChange, value, handleCompleted }) => {
	return (
		<>
			<Input onChange={onChange} onSubmit={onSubmit} value={value} />
			{todos.map((todo) => {
				if (filterTodo === 'active' && todo.completed) return;
				return (
					<div key={todo.id}>
						<Checkbox label={todo.name} onChange={() => handleCompleted(todo)} checked={todo.completed} />
					</div>
				);
			})}
		</>
	);
};

export default Active;
