module.exports = {
	plugins: ['react', 'react-hooks', 'prettier', 'jsx-a11y'],
	extends: [
		'eslint:recommended',
		'plugin:prettier/recommended',
		// 'plugin:react/recommended',
		'react-app',
		'plugin:jsx-a11y/recommended',
	],
	rules: {
		// eslint
		allowTemplateLiterals: true,
		'no-console': ['warn', { allow: ['warn', 'error'] }],
		'lines-around-comment': ['error', { beforeBlockComment: true }],
		'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
		'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
		'no-nested-ternary': 'error',
		'no-trailing-spaces': 'error',
		'prefer-object-spread': 'error',
		'space-before-blocks': 'error',
		'spaced-comment': ['error', 'always'],
		// jsx-a11y
		'jsx-a11y/no-autofocus': 0,
		// prettier
		'prettier/prettier': [
			'error',
			{
				useTabs: true,
				tabWidth: 4,
				semi: true,
				singleQuote: true,
				printWidth: 90,
			},
		],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
