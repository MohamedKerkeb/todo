import React, { useState } from 'react';
import { uuid } from 'uuidv4';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import All from './pages/All';
import Active from './pages/Active';
import Completed from './pages/Completed';
import Nav from './component/Nav';

import './todos.css';

const TodosApp = () => {
	const [todos, setTodos] = useState([]);
	const [input, setValue] = useState('');
	const [filterTodo, setFilterTodo] = useState('all');

	const onSubmit = (evt) => {
		evt.preventDefault();
		const trimInput = input.trim();
		if (trimInput.length > 0) {
			setTodos([...todos, { name: input, completed: false, id: uuid() }]);
			setValue('');
		}
	};

	const onChange = (evt) => {
		setValue(evt.target.value);
	};

	const handleCompleted = (todo) => {
		const newTodo = todos.map((td) => {
			if (todo.id === td.id) {
				return { ...todo, completed: !todo.completed };
			} else return td;
		});
		// console.log('td', newTodo);
		setTodos(newTodo);
	};

	// console.log('todos', todos);

	return (
		<>
			<Router>
				<div className='todosApp'>
					<h1>#Todo</h1>
					<div className='todo_Wrapper'>
						<Nav filter={setFilterTodo} />
						<Switch>
							<Route exact path='/'>
								<All
									todos={todos}
									handleCompleted={handleCompleted}
									onSubmit={onSubmit}
									value={input}
									onChange={onChange}
								/>
							</Route>
							<Route path='/active'>
								<Active
									todos={todos}
									filterTodo={filterTodo}
									handleCompleted={handleCompleted}
									onSubmit={onSubmit}
									value={input}
									onChange={onChange}
								/>
							</Route>
							<Route path='/completed'>
								<Completed
									todos={todos}
									filterTodo={filterTodo}
									handleCompleted={handleCompleted}
									deleteTodo={(todoIndex) => {
										const Dt = todos.filter((_, index) => index !== todoIndex);
										setTodos(Dt);
									}}
								/>
							</Route>
						</Switch>
					</div>
					<footer>
						<p>Mohamed@devChallanges.io</p>
					</footer>
				</div>
			</Router>
		</>
	);
};

export default TodosApp;
