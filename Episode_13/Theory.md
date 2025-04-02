## Setup for testing our app

### First of all install the react testing library
```
 npm i -D @testing-library/react
```

### Install the Jest
```
 npm i -D jest
```

### Create a babel.config.js file and paste the below code
```
 npm install --save-dev babel-jest @babel/core @babel/preset-env
```

### Then create a .parcelrc file and paste the below code
```
  {
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
}
```

### Add test command in package.json
```
 "scripts": {
    "start": "parcel src/index.html",
    "test": "jest"
  },
```

### init the jest project
```
  npx jest --init
```
 - select these option after run this jest -- init command 
 - use Typescript "no"
 - test environment "jsdom(browser)
 - add coverage reports "yes"
 - which provider we use "babel"
 - automatically clear mock calls, contexts etc "yes"

### Install the jsdom library (if we use jet version above 28)
```
 npm install --save-dev jest-environment-jsdom
```

### Install `@babel/preset-react` to make JSX work in test cases (this will change the jsx code to html so that test cases work properly)

### Include `@babel/preset-react` inside my babel configuration
```
  ['@babel/preset-react', { runtime: 'automatic' }]
```

### Install `@testing-library/jest-dom` to use functions like `toBeInTheDocument`

### We also need to import this jest-dom in our file `import @testing-library/jest-dom` 

#### Now our project is ready for run the test cases ✈️🚀


## Create a `__tests__` name directory for all the test cases file