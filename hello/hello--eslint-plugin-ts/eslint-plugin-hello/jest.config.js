module.exports = {
    collectCoverage: false,
    // collectCoverageFrom: ['src/**/*.{ts}'],
    // coverageReporters: ['text-summary', 'lcov'],
    globals: {
        'ts-jest': {
            tsconfig: './tests/tsconfig.json',
        },
    },
    moduleFileExtensions: ['ts', 'js'],
    moduleNameMapper: {
        '@lib/(.*)': '<rootDir>/lib/$1',
    },
    testEnvironment: 'node',
    testRegex: './tests/.+\\.test\\.ts$',
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
};
