import { defineConfig } from 'vitepress'
export default defineConfig({
	title: 'North Tool Records',
	description: '记录项目常用的工具函数、项目配置、自定义组件等等',
	appearance: true,
	ignoreDeadLinks: true,
	lastUpdated: true,
	head: [
		[
			'link',
			{
				rel: 'icon',
				href: '/icon/icon.ico'
			}
		]
	],
	markdown: {
		// theme: 'github-dark',
		lineNumbers: true,
		config: md => {
			const { demoBlockPlugin } = require('vitepress-theme-demoblock')
			md.use(demoBlockPlugin)
		}
	},
	themeConfig: {
		logo: '/icon/icon.ico',
		nav: [
			{ text: '首页', link: '/' },
			{ text: 'HTML', link: '/html/' },
			{ text: 'CSS', link: '/css/' },
			{ text: 'JavaScript', link: '/javaScript/' },
			{ text: 'TypeScript', link: '/typeScript/' },
			{ text: 'Vue', link: '/pages/vue/components/material-input' },
			{ text: '工具函数', link: '/pages/utils/regexp/index' },
			{ text: '项目配置', link: '/pages/config/eslint/vue2' }
		],
		sidebar: {
			'/pages/vue/': [
				{
					text: 'vue组件',
					collapsed: false,
					collapsible: true,
					items: [{ text: 'material-input', link: '/pages/vue/components/material-input' }]
				}
			],
			'/pages/config/': [
				{
					text: '项目配置',
					collapsed: false,
					collapsible: true,
					items: [
						{ text: 'eslint-vue2', link: '/pages/config/eslint/vue2' },
						{ text: 'eslint-vue3', link: '/pages/config/eslint/vue3' },
						{ text: 'prettier', link: '/pages/config/prettier' },
						{ text: 'editorconfig', link: '/pages/config/editorconfig' }
					]
				}
			],
			'/pages/utils': [
				{
					text: '工具函数',
					collapsed: false, // 是否折叠
					collapsible: true, // 是否显示折叠
					items: [{ text: '正则表达式', link: '/pages/utils/regexp/verify/index' }]
				}
			]
		},
		socialLinks: [{ icon: 'github', link: 'https://github.com/North-al/note' }]
	}
})
