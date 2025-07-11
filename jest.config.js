/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/tests', '<rootDir>/'],
    transform: {
        '^.+\\.tsx?$': ['ts-jest'],
    },
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    moduleDirectories: ['node_modules', 'src'],
    extensionsToTreatAsEsm: ['.ts'],
};
