module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'airbnb-typescript/base',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings'
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
        'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'no-tabs': 'off',
        // 'space-before-function-paren': 'off',
        '@typescript-eslint/semi': ['error', 'never'],
        'no-trailing-spaces': 'off'
    }
}
