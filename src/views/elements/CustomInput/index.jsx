/* npm imports: common */
import React from 'react';
import PropTypes from 'prop-types';

/* npm imports: material-ui/core */
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';

/* root imports: view components */
import { InputButton } from 'views/elements';

/* root imports: common */
import { removeSpaces } from 'utils/helpers';
import { IconShape } from 'utils/shapes';

/* local imports: common */
import { useStyles } from './styles';

const CustomInput = React.memo(
	({
		icon,
		placeholder,
		defaultValue,
		isFetching,
		autoFocus,
		onClick,
		onCancel,
		onChange,
	}) => {
		const classes = useStyles();

		const [inputValue, setInputValue] = React.useState('');

		const trimedValue = React.useMemo(() => {
			return removeSpaces(inputValue).trim();
		}, [inputValue]);

		const isEmpty = React.useMemo(() => {
			return !trimedValue || trimedValue === defaultValue;
		}, [defaultValue, trimedValue]);

		const value = React.useMemo(() => inputValue || defaultValue || inputValue, [
			defaultValue,
			inputValue,
		]);

		const changeHandler = e => {
			const { value } = e.target;

			setInputValue(value);
		};

		const clearHandler = React.useCallback(() => {
			setInputValue('');
		}, []);

		const actionClickHandler = () => {
			if (onClick) onClick(trimedValue);
			if (onCancel) onCancel();
			clearHandler();
		};

		const keyPressHandler = e => {
			if (e.key === 'Enter' && onClick) {
				if (trimedValue) onClick(trimedValue);
				if (onCancel) onCancel();
				if (!onCancel) clearHandler();
			}

			if (e.key === 'Escape' && onCancel) onCancel();
		};

		React.useEffect(() => {
			if (onChange) onChange(trimedValue);
		}, [onChange, trimedValue]);

		return (
			<div className={classes.root}>
				{icon && (
					<InputButton
						icon={icon}
						isFetching={isFetching}
						color={onClick ? 'primary' : 'inherit'}
						title={icon.title}
						disabled={onClick && isEmpty}
						onClick={onClick && actionClickHandler}
					/>
				)}
				{icon && <Divider className={classes.divider} />}
				<InputBase
					className={classes.input}
					placeholder={placeholder}
					value={value}
					autoFocus={autoFocus}
					onChange={changeHandler}
					onKeyUp={keyPressHandler}
				/>
				{(!isEmpty || onCancel) && <Divider className={classes.divider} />}
				{!isEmpty && !onCancel && (
					<InputButton
						icon={{ name: 'close' }}
						title="Clear"
						onClick={clearHandler}
					/>
				)}
				{onCancel && (
					<InputButton
						icon={{ name: 'close' }}
						title="Cancel"
						onClick={onCancel}
					/>
				)}
			</div>
		);
	}
);

CustomInput.propTypes = {
	icon: PropTypes.shape(IconShape),
	placeholder: PropTypes.string,
	defaultValue: PropTypes.string,
	isFetching: PropTypes.bool,
	autoFocus: PropTypes.bool,
	onClick: PropTypes.func,
	onCancel: PropTypes.func,
	onChange: PropTypes.func,
};

CustomInput.defaultProps = {
	isFetching: false,
	autoFocus: false,
};

export { CustomInput };
