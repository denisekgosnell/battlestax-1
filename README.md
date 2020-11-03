## BattleStax 

BattleStax is a stateful JAMStack game that is wholesome fun for the entire crew.

[![Actions Status](https://github.com/DataStax-Academy/battlestax/workflows/BattleStax%20Tests/badge.svg)](https://github.com/DataStax-Academy/battlestax/actions) 

[![Netlify Status](https://api.netlify.com/api/v1/badges/e265340f-c6a6-4d7b-b24c-438b87c67876/deploy-status)](https://app.netlify.com/sites/battlestax-tutorial/deploys)

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/DataStax-Academy/battlestax)

### Project Structure

BattleStax's folder structure is (mostly) generated from [Create React App](https://github.com/facebook/create-react-app). We then add a Netlify Functions and Github Actions.

- .github - [Github Actions](https://github.com/features/actions) configuration
- .storybook - [Storybook Documentation](https://storybook.js.org/) Storybook configuration
- functions - [Netlify Functions](https://www.netlify.com/products/functions/) Lambda function definition
- public - Static files
- src - [create-react-app](https://github.com/facebook/create-react-app) source files
- tutorial - tutorial content

### Prerequisites
-  A Github account - [Github](https://github.com)
-  A fork of the `BattleStax Tutorial` repository - [Repository](https://github.com/kidrecursive/battlestax-tutorial)
-  NodeJS 12 - [Download](https://nodejs.org/en/download/) - Recommended alternative: Setup your local development environment with [nodeenv](#nodeenv)
-  A Netlify account (it's free!) - [Netlify](https://www.netlify.com)
-  An Astra account and database (it's free!) - [Astra](https://astra.datastax.com/)

### Using `nodeenv` (recommended)

Using [nodeenv](https://github.com/ekalinin/nodeenv) allows you to keep your NodeJS version and dependencies isolated for the project you're 
working on. To get started using it for BattleStax, install it using [homebrew](https://formulae.brew.sh/formula/nodeenv) or `easy_install`.
```sh
# install using homebrew
brew install nodeenv

# install using easy_install
sudo easy_install nodeenv
```

Once nodeenv is installed, setup a virtualenv in the project folder, and then activate it.

```sh
# setup a nodeenv in the venv folder using NodeJS 12
nodeenv venv --node=12.18.4

# activate the nodeenv
. venv/bin/activate
```

### Working with BattleStax

Create a `.env` file and fill it with values from the `.env.example` file.

Make sure the package dependencies are installed
```sh
# install dependencies
npm install
```

Then, start the app in dev mode. Changes in the `src` or `functions` directories will trigger reloads.

```sh
# start battlestax in dev mode
npm run dev
```

### UI Storybook

To run storybook, make sure you have some {ComponentName}.stories.js files and then:

```sh
# start storybook
npm run storybook
```

### Client Testing

Test your react/redux client 
```sh
# run the client tests
npm test
```

### Netlify Function Testing

Test your netlify functions 
```sh
# run the function tests
npm run test:functions
```
