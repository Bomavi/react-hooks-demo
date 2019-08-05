/* npm imports: common */
import React from 'react';

/* npm imports: material-ui/core */
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';

/* root imports: view components */
import { InputButton } from 'views/elements';

/* root imports: common */
import { removeSpaces } from 'utils/helpers';

/* local imports: common */
import { useStyles } from './styles';

const CustomInput = React.memo(
	({
		icon,
		placeholder,
		defaultValue,
		isFetching = false,
		autoFocus = false,
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

		const changeHandler = e => {
			const { value } = e.target;

			setInputValue(value);
		};

		const actionClickHandler = () => {
			if (onClick) onClick(trimedValue);
			if (onCancel) onCancel();
			clearHandler();
		};

		const clearHandler = () => {
			setInputValue('');
		};

		const keyPressHandler = e => {
			if (e.key === 'Enter' && onClick) {
				if (trimedValue) onClick(trimedValue);
				if (onCancel) onCancel();
				if (!onCancel) clearHandler();
			}

			if (e.key === 'Escape' && onCancel) onCancel();
		};

		const changeCallbackHandler = React.useCallback(() => {
			if (onChange) onChange(trimedValue);
		}, [onChange, trimedValue]);

		React.useEffect(() => {
			changeCallbackHandler();
		}, [changeCallbackHandler, inputValue]);

		const value = inputValue || defaultValue || inputValue;

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

export { CustomInput };
