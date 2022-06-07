# ltht-react

An implementation of medical javascript UI components based on [FHIR](https://www.hl7.org/fhir/) like [typescript](http://www.typescriptlang.org/) data structures in [React](https://reactjs.org) using [CSSinJS](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660) (with [emotion](https://github.com/emotion-js/emotion)).

# Structure

`ltht-react` is a monorepo that uses [lerna](https://lerna.js.org/) to manage build, deployment, versioning etc.

Components are built using atomic design principles. Each set of components is published as its own npm package (e.g. `@ltht-react/diagnosis-summary` and `@ltht-react/questionnaire`). They are also all pooled together into a root package `@ltht-react/root`.

Related components are have their own sub directory e.g. Clinical related components in `components\clinical`. General use components are in `components\styled`

`packages` contains non-jsx based exports and the storybook package which is used for showing examples

## Usage

```sh
npm install ltht-react --save
```

```js
import FlagSummary from '@ltht-react/flag-summary'
import { Flag } from '@ltht-react/types'
const MyComponent = ({ title: string, flags: Flag[] }) => {
  const handleClick = (flag: Flag) => {
      console.log("Selected flag ", flag)
  }
  return (
    <div>
        <h1>{title}</h1>
        <FlagSummary title="Alerts" flags={flags} handleClick={handleClick} />
    </div>
  )
}
```

See the [Storybook](https://ltht-epr.github.io/ltht-react) for examples of all available components.

## Contributing

### Getting started

1. Clone the repo `git clone https://github.com/ltht-epr/ltht-react`
2. Install dependencies `yarn install`
3. Build all component libraries `yarn build` or `yarn build:slow`
4. View existing components using `yarn start`

> **Note:** If you are working on a component that makes use of other packaged in the library (.e.g importing from `ltht-react/types`), you will need to run a build task each time you modify that library in order for your changes to appear in other packages such as storybook
>
> You can do this by navigating to the appropriate project and running `yarn build --watch` to continuously compile new changes.

### Contributing

When adding to this library, please ensure that it;

- is appropriately categorised by atomic principles,
- has sufficient unit tests,
- includes an example in the storybook,
- includes relevant fixtures to show expected data formats

> **Note:** You will not be able to push if your branch returns any unit test or linting errors

### Running unit tests

This project uses `jest` and `@testing-library/react`.

- Run all tests `yarn test`
- Continuously run tests for changed files `yarn test --watch`

## Releasing a new version to npm

Your code must be reviewed and merged into `main`. A short while after this, an automated task will update versions wherever necessary and commit directly to `main`. This will appear as a commit by `ltht-epr` called "Publish"

1. Switch to `main` and `git pull`
2. Ensure versions have updated, if not wait for `ltht-epr` to update `main`
3. Wipe your local build with `yarn clean`
4. Install dependencies `yarn install`
5. Build with `yarn build` or `yarn build:slow`
6. Publish to npm with `yarn run deploy:npm`. You'll need to authenticate.
