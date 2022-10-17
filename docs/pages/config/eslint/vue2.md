# eslint vue2 配置

## 1. 安装

```bash
npm install eslint eslint-plugin-vue -D
```

:::warning
`eslint-plugin-prettier` `eslint-config-prettier` <br />
这两个包在`@vue/eslint-config-prettier`中已经包含了，不需要单独安装<br />
如果你使用了`webStorm`, 那么在配置eslint的时候需要安装，不然会出现找不到插件的错误
建议全部安装
:::
```bash
npm install prettier @vue/eslint-config-prettier -D

npm install prettier @vue/eslint-config-prettier eslint-plugin-prettier eslint-config-prettier -D
```

## 全部配置

```js
// eslintrc.js
module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: ['plugin:vue/recommended', '@vue/eslint-config-prettier'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['vue'],
	rules: {
		'for-direction': 'error', // for语句无限循环
		'getter-return': 'error', // getter必须有返回值
		'no-class-assign': 'error', // 禁止修改类声明的变量
		/*
		 * 禁止在条件表达式中进行赋值
		 * except-parens（默认）仅当括号括起来时才允许在测试条件中进行赋值
		 * always不允许在测试条件下进行所有分配
		 * */
		'no-cond-assign': ['warn', 'always'],
		'no-constant-condition': 'warn', // 禁止在条件中使用常量表达式
		'no-constructor-return': 'warn', // 禁止在构造函数中返回值, 主要是你返回了也没啥用...
		// 'no-debugger': "error" // 禁止使用debugger
		// no-console: "error" // 禁止使用console
		'no-dupe-args': 'error', // 禁止在函数定义或表达式中使用重复的参数
		'no-duplicate-imports': 'warn', // 禁止重复导入模块
		'no-unreachable': 'warn', // 禁止在return、throw、continue 和 break 语句后出现不可达代码
		'no-use-before-define': 'error', // 禁止在变量定义之前使用它们
		'use-isnan': 'error', // 禁止比较时使用NaN，只能用isNaN()
		'valid-typeof': 'error', // 强制 typeof 表达式与有效的字符串进行比较
		'arrow-spacing': 'warn', // 要求箭头函数的箭头之前或之后有空格
		'block-spacing': 'warn', // 禁止或强制在代码块中开括号前和闭括号后有空格
		'comma-dangle': ['warn', 'never'], // 要求或禁止末尾逗号
		'comma-spacing': ['warn', { before: false, after: true }], // 强制在逗号前后使用一致的空格
		'computed-property-spacing': ['warn', 'never'], // 强制在计算的属性的方括号中使用一致的空格
		'eol-last': ['warn'], // 要求或禁止文件末尾存在空行
		'func-call-spacing': ['error', 'never'], // 要求或禁止在函数标识符和其调用之间有空格
		indent: ['error', 'tab', { SwitchCase: 1, VariableDeclarator: 1, ignoredNodes: ['ConditionalExpression'] }], // 强制使用一致的缩进
		'jsx-quotes': ['warn', 'prefer-single'], // 强制在 JSX 属性中一致地使用双引号或单引号
		'key-spacing': ['warn', { beforeColon: false }], // 强制在对象字面量的属性中键和值之间使用一致的间距
		'linebreak-style': ['error', 'unix'], // 强制使用一致的换行风格 unix: LF, windows: CRLF
		eqeqeq: 'error', // 要求使用 === 和 !==
		'new-cap': 'warn', // 要求构造函数首字母大写
		'no-eq-null': 'error', // 禁止在没有类型检查操作符的情况下与 null 进行比较
		'no-eval': 'warn', // 禁用 eval()
		'no-extra-semi': 'warn', // 禁止不必要的分号
		'no-redeclare': 'error', // 禁止多次声明同一变量
		'no-shadow-restricted-names': 'error', // 禁止将标识符定义为受限的名字
		'no-var': 'error', // 要求使用 let 或 const 而不是 var
		'no-mixed-spaces-and-tabs': 'error', // 禁止空格和 tab 的混合缩进
		'no-multi-spaces': 'error', // 禁止使用多个空格
		quotes: ['error', 'single'], // 强制使用一致的反勾号、双引号或单引号
		'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }], // 强制在 function的左括号之前使用一致的空格
		'space-infix-ops': 'error' // 要求操作符周围有空格
	}
}

```
