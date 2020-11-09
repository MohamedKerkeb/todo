import React from 'react';

const Button = ({ variant, children }) => {
	let css = 'default';
	css += ' ' + variant;
	return (
		<>
			<button className={css}>{children}</button>
		</>
	);
};

export default Button;
