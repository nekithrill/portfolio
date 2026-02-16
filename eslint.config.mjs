import js from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettierConfig from 'eslint-config-prettier'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import globals from 'globals'

export default [
	{
		ignores: [
			'**/node_modules/**',
			'**/dist/**',
			'**/build/**',
			'**/coverage/**',
			'**/*.config.*',
			'**/.*/**'
		]
	},
	js.configs.recommended,
	{
		files: ['src/**/*.{ts,tsx,js,jsx}'],
		languageOptions: {
			parser: tsParser,
			parserOptions: { project: './tsconfig.json' },
			globals: globals.browser
		},
		settings: { react: { version: 'detect' } },
		plugins: {
			'@typescript-eslint': tsPlugin,
			react,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			unicorn: eslintPluginUnicorn,
			'jsx-a11y': jsxA11y
		},
		rules: {
			...tsPlugin.configs.recommended.rules,
			...tsPlugin.configs['recommended-requiring-type-checking'].rules,
			...react.configs.recommended.rules,
			...eslintPluginUnicorn.configs.recommended.rules,
			...jsxA11y.configs.recommended.rules,

			// ESLint core
			'consistent-return': 'warn',
			'no-console': 'warn',
			'no-debugger': 'error',
			'no-var': 'error',
			'prefer-const': 'warn',
			eqeqeq: ['error', 'always'],

			// TypeScript
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{ argsIgnorePattern: '^_' }
			],
			'@typescript-eslint/explicit-function-return-type': [
				'warn',
				{ allowExpressions: true }
			],

			// React
			'react/jsx-uses-react': 'off',
			'react/react-in-jsx-scope': 'off',
			'react/no-unescaped-entities': 'warn',
			'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],

			'react-hooks/exhaustive-deps': 'error',
			'react-hooks/rules-of-hooks': 'error',

			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true }
			],

			// JSX Accessibility
			'jsx-a11y/anchor-is-valid': [
				'error',
				{ components: ['Link'], specialLink: ['to'] }
			],
			'jsx-a11y/no-noninteractive-element-interactions': 'warn',
			'jsx-a11y/label-has-associated-control': 'warn',
			'jsx-a11y/no-noninteractive-tabindex': 'warn',
			'jsx-a11y/interactive-supports-focus': 'warn',
			'jsx-a11y/media-has-caption': 'warn',
			'jsx-a11y/aria-props': 'error',
			'jsx-a11y/alt-text': 'error',

			// Unicorn
			'unicorn/filename-case': 'off',
			'unicorn/no-abusive-eslint-disable': 'off',
			'unicorn/no-array-reduce': 'off',
			'unicorn/no-array-reverse': 'off',
			'unicorn/no-array-sort': 'off',
			'unicorn/no-for-loop': 'off',
			'unicorn/no-negated-condition': 'off',
			'unicorn/no-new-buffer': 'off',
			'unicorn/no-process-exit': 'off',
			'unicorn/no-unnecessary-polyfills': 'off',
			'unicorn/no-console-spaces': 'off',

			'unicorn/no-null': 'warn',
			'unicorn/better-regex': 'warn',
			'unicorn/consistent-destructuring': 'warn',
			'unicorn/no-keyword-prefix': 'warn',
			'unicorn/prefer-import-meta-properties': 'warn',
			'unicorn/prevent-abbreviations': 'warn',
			'unicorn/empty-brace-spaces': 'warn',
			'unicorn/number-literal-case': 'warn',
			'unicorn/numeric-separators-style': 'warn',
			'unicorn/no-nested-ternary': 'warn',
			'unicorn/prefer-ternary': 'warn',
			'unicorn/text-encoding-identifier-case': 'warn',
			'unicorn/no-zero-fractions': 'warn',
			'unicorn/prefer-add-event-listener': 'warn',
			'unicorn/prefer-array-find': 'warn',
			'unicorn/prefer-array-flat': 'warn',
			'unicorn/prefer-array-flat-map': 'warn',
			'unicorn/prefer-array-index-of': 'warn',
			'unicorn/prefer-array-some': 'warn',
			'unicorn/prefer-at': 'warn',
			'unicorn/prefer-date-now': 'warn',
			'unicorn/prefer-default-parameters': 'warn',
			'unicorn/prefer-includes': 'warn',
			'unicorn/prefer-string-replace-all': 'warn',
			'unicorn/prefer-string-slice': 'warn',
			'unicorn/prefer-string-starts-ends-with': 'warn',
			'unicorn/prefer-string-trim-start-end': 'warn',
			'unicorn/catch-error-name': 'warn',
			'unicorn/prefer-module': 'warn',
			'unicorn/no-lonely-if': 'warn',

			'unicorn/template-indent': [
				'warn',
				{
					tags: ['outdent', 'dedent', 'gql', 'sql', 'html', 'styled'],
					functions: ['dedent', 'stripIndent'],
					selectors: [],
					comments: ['HTML', 'indent']
				}
			],

			'unicorn/import-style': [
				'warn',
				{
					styles: {
						util: { named: true },
						path: { default: true },
						chalk: { default: true }
					},
					extendDefaultStyles: true,
					checkImport: true,
					checkDynamicImport: true,
					checkRequire: true,
					checkExportFrom: false
				}
			]
		}
	},
	prettierConfig
]
