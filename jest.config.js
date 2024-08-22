module.exports = {
  roots: ["./src/__tests__", "./src"],
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
  testMatch: ["**/?(*.)(spec|test).[jt]s?(x)"],
  testEnvironment: "jsdom",
  collectCoverage: true, 
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
};