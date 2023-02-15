module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
	coverageDirectory: 'coverage',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
	moduleDirectories: ['node_modules', 'bower_components', 'shared'],
	// moduleNameMapper: {
	// 	'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
	// 		'<rootDir>/__mocks__/fileMock.js',
	// 	'\\.(css|less)$': 'identity-obj-proxy',
	// },
	// transform: {
	// 	'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
	// 		'<rootDir>/fileTransformer.js',
	// },
	// moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
	// transform: {
	// 	'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
	// 		'<rootDir>/fileTransformer.js',
	// },
	// Automatically clear mock calls and instances between every test
	// clearMocks: true,
	// The directory where Jest should output its coverage files
	// moduleNameMapper: {
	// 	'\\.(css|less|scss|sss|styl)$': './node_modules/jest-css-modules',
	// 	'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
	// 		'<rootDir>/__mocks__/fileMock.js',
	// 	'\\.(css|less)$': './__mocks__/styleMock.js',
	// },
	// // A list of paths to modules that run some code to configure or set up the testing framework before each test
	// testPathIgnorePatterns: ['./dist/', './node_modules/'],
	// transform: {
	// 	'^.+\\.(js|jsx|ts|tsx)$': './node_modules/babel-jest',
	// 	// transformer for svg files
	// 	'^.+\\.svg$': '<rootDir>/svgTransform.js',
	// },
};
