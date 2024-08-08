// module.exports = {
//     moduleDirectories: [
//       'node_modules',
//         // add the directory with the test-utils.js file, for example: 'utils', // a utility folder
//       __dirname, // the root directory
//     ],
//     testEnvironment: 'jsdom',
//     extensionsToTreatAsEsm: ['.ts'],
//     moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
// }

module.exports = {
  roots: ["./src/__tests__", "./src"],
  // setupFilesAfterEnv: ["<rootDir>/src/jest.setup.ts"], // Modules are meant for code which is repeating in each test file
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMock.js',
    '\\.(css|scss|less)$': '<rootDir>/src/__mocks__/styleMock.js',
  },
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
    ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
  },
  testMatch: ["**/?(*.)(spec|test).[jt]s?(x)"], // Finds test files named like abc.test|spec.ts?tsx|js|jsx in roots:[] prop.
  testEnvironment: "jsdom", // To avoid of js DOM errors
};