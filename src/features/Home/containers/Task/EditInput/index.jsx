/* npm imports: common */
import React from 'react';

/* root imports: view components */
import { CustomInput } from 'views/elements';

/* local imports: common */
import { useStyles } from './styles';

const EditInput = props => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CustomInput
				icon={{
					name: 'check',
					svgSize: 'md',
					title: 'Save',
				}}
				{...props}
			/>
		</div>
	);
};

export { EditInput };
