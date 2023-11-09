module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint'],

    extends: [
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:@typescript-eslint/recommended',
        'eslint:recommended',
        'airbnb-typescript/base',
        'standard'
    ],
    root: true,
    env: {
        node: true,
        jest: true
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        'indent': ['error', 4, { "SwitchCase": 1 }],
        'object-curly-spacing': ['error', 'always'],
        'semi': ['error', 'never'],
        'comma-dangle': ['error', 'never'],
        'quotes': ['error', 'single'],
        'arrow-parens': ['error', 'as-needed'],
        '@typescript-eslint/no-unused-vars': ['warn'],
        'no-unused-vars': ['warn'],
        'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'no-useless-constructor': 'off',
        'no-tabs': 'off',
        '@typescript-eslint/semi': ['error', 'never'],
        'no-trailing-spaces': 'off',
        'space-before-function-paren': [
            'error', {
                'anonymous': 'always',
                'named': 'never',
                'asyncArrow': 'always'
            }
        ]
    }
}
