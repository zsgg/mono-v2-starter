module.exports = {
    preset: 'ts-jest',
    projects: ['<rootDir>/hello/*', '<rootDir>/apps/*'],
    testEnvironment: 'node',
    testMatch: ['**/?(*.)+(spec|test).+(ts|tsx)'],
};
