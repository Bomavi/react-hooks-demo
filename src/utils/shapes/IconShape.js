/* npm imports: common */
import { string, oneOf } from 'prop-types';

export const iconNames = [
	'settings',
	'file-question',
	'theme-light-dark',
	'pencil',
	'account-circle',
	'delete',
	'grab',
	'magnify',
	'close',
	'plus',
	'check',
	'check-bold',
	'compare',
	'account',
	'login-variant',
	'logout-variant',
	'textbox-password',
	'eye-off-outline',
	'eye-outline',
	'help',
	'help-rhombus-outline',
	'sort-ascending',
	'sort-descending',
];
export const iconSizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
export const iconColors = ['white', 'black'];

export const IconShape = {
	name: oneOf(iconNames).isRequired,
	title: string,
	size: oneOf(iconSizes),
	svgSize: oneOf(iconSizes),
	color: oneOf(iconColors),
};
