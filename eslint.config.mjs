import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';

export default [
    eslint.configs.recommended,
    ...tsEslint.configs.recommendedTypeChecked,
    {
        languageOptions: {
            ecmaVersion: 6,
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: {
                    modules: true,
                },
                tsconfigRootDir: '.',
                projectService: true,
            },
        },
        rules: {
            '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
            '@typescript-eslint/explicit-function-return-type': 0,
            '@typescript-eslint/explicit-member-accessibility': 0,
            '@typescript-eslint/no-floating-promises': ['error', { ignoreIIFE: true, ignoreVoid: false }],
            '@typescript-eslint/no-non-null-assertion': 'error',
            '@typescript-eslint/no-unused-vars': [
                'error',
                { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_', ignoreRestSiblings: true },
            ],
            '@typescript-eslint/require-await': 'error',
            '@typescript-eslint/return-await': ['error', 'always'],
            curly: 'error',
            eqeqeq: 2,
            'no-return-await': 'off',
            'no-unused-expressions': 2,
            'require-await': 'off',
            'indent': ['error', 4],
            '@typescript-eslint/no-explicit-any': 'error'
        },
    },
    {
        ignores: [
            'node_modules',
            'dist',
        ],
    },
    {
        /**
         * Ignore configs and generated files
         */
        files: ['*.mjs', 'dist/**'],
        ...tsEslint.configs.disableTypeChecked,
    },
];