module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint'],
	extends: [
		'plugin:@typescript-eslint/recommended'
		// "plugin:prettier/recommended"
	],
	root: true,
	env: {
		node: true,
		jest: true
	},
	ignorePatterns: ['.eslintrc.js'],
	rules: {
		indent: ['error', 4],
		'object-curly-spacing': ['error', 'always'],
		semi: ['error', 'never'],
		'comma-dangle': ['error', 'never'],
		quotes: ['error', 'single'],
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'no-tabs': 'off',
		'space-before-function-paren': 'off',
		'no-trailing-spaces': 'off'
	}
}
