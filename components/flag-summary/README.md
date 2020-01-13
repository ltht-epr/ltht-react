# Flag Summary

### Import

```js
import FlagSummary from '@ltht-react/flag-summary'
```

### Usage

```jsx
<FlagSummary title="Alerts" flags={flags} clickHandler={handleClick} />
```

### Properties

| Prop           | Required | Default      | Type     | Description                                              |
| :------------- | :------- | :----------- | :------- | :------------------------------------------------------- |
| `title`        | No       | Flag Summary | string   | Header text                                              |
| `flags`        | Yes      |              | Flag[]   | Array of flags to display                                |
| `clickHandler` | No       | undefined    | Function | Callback click handler containing the selected flag item |
