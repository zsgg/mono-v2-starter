module.exports = {
    coverageDirectory: 'test',
    moduleNameMapper: {},
    preset: 'ts-jest',
    roots: ['./test'],
    setupFilesAfterEnv: ['./__config__/jestSetup.ts'],
    testEnvironment: 'node',
    testMatch: ['**/?(*.)+(spec).+(ts|tsx)'],
    transform: {
        '^.+\\.(ts|tsx|js)$': 'babel-jest',
    },
};
