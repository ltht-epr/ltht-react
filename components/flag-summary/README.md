# Flag Summary

<!-- STORY -->

### Import

```js
import FlagSummary from '@ltht-react/flag-summary'
```

### Usage

```jsx
<FlagSummary title="Alerts" flags={flags} handleItemClick={handleClick} />
```

### Properties

| Prop              | Required | Default      | Type     | Description                                                    |
| :---------------- | :------- | :----------- | :------- | :------------------------------------------------------------- |
| `title`           | No       | Flag Summary | string   | Header text for the widget                                     |
| `flags`           | Yes      |              | Flag[]   | Array of flag to display in the widget                         |
| `handleItemClick` | No       |              | Function | Callback click handler containing the flag item from the array |
