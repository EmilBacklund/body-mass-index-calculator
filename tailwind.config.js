/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				blue: {
					DEFAULT: '#345FF6',
					'dark-electric': '#5E6E85',
					gunmetal: '#253347'
				},
				borders: '#D8E2E7'
			},
			fontSize: {
				'heading-xl': [
					'64px',
					{
						lineHeight: '110%',
						fontWeight: '600',
						letterSpacing: '-3.2px'
					}
				],
				'heading-l': [
					'48px',
					{
						lineHeight: '110%',
						fontWeight: '600',
						letterSpacing: '-3.2px'
					}
				],
				'heading-m': [
					'24px',
					{
						lineHeight: '110%',
						fontWeight: '600',
						letterSpacing: '-3.2px'
					}
				],
				'heading-s': [
					'20px',
					{
						lineHeight: '110%',
						fontWeight: '600',
						letterSpacing: '-3.2px'
					}
				],
				'body-m': [
					'16px',
					{
						lineHeight: '150%',
						fontWeight: '400'
					}
				],
				'body-m-bold': [
					'16px',
					{
						lineHeight: '150%',
						fontWeight: '600'
					}
				],
				'body-s': [
					'14px',
					{
						lineHeight: '150%',
						fontWeight: '400'
					}
				]
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif']
			}
		}
	},
	plugins: []
};

// 721637
