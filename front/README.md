# vue-rpa

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Think about

*   axios
*   vue-chartist
*   tslib

### For tests

*   @types/chai
*   @types/mocha
*   @vue/test-utils
*   chai
*   chromedriver
*   geckodriver


    "overrides": [
      {
        "files": [
          "**/__tests__/*.{j,t}s?(x)",
          "**/tests/unit/**/*.spec.{j,t}s?(x)"
        ],
        "env": {
          "mocha": true
        }
      }
    ]

#### In tsconfig

    "types": [
      "webpack-env",
      "mocha",
      "chai"
    ],
