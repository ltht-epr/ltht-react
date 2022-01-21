# ltht-react

An implementation of medical javascript UI components based on [FHIR](https://www.hl7.org/fhir/) like [typescript](http://www.typescriptlang.org/) data structures in [React](https://reactjs.org) using [CSSinJS](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660) (with [emotion](https://github.com/emotion-js/emotion)).

## Pre-requisites

```sh
Node v16.13.2 or higher
Yarn v1 - 1.22.5 or higher
```

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
