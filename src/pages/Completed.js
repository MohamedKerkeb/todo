import React from 'react';
import Button from '../component/Button';
import Checkbox from '../component/Checkbox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Completed = ({ filterTodo, todos, handleCompleted, deleteTodo }) => {
	return (
		<>
			<div className='deleteWrapper'>
				{todos.map((todo, i) => {
					if (filterTodo === 'completed' && !todo.completed) return;
					return (
						<div className='deleteCheckbox' key={todo.id}>
							<Checkbox label={todo.name} onChange={() => handleCompleted(todo)} checked={todo.completed} />
							<i
								className='icon'
								onClick={() => {
									deleteTodo(i);
								}}>
								<FontAwesomeIcon icon={faTrashAlt} />
							</i>
						</div>
					);
				})}
				<div className='btnWrapper'>
					<Button variant='delete'>Delete</Button>
				</div>
			</div>
		</>
	);
};

export default Completed;
