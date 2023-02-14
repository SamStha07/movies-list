module.exports = {
	content: ['./src/**/*.{ts,tsx}', './public/index.html'],
	theme: {
		extend: {
			colors: {
				grayColor: '#878787',
				blueColor: '#1B54A8',
				success: 'rgba(35, 154, 69, 0.8)',
				blackLight: 'rgba(0, 0, 0, 0.2)',
			},
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
