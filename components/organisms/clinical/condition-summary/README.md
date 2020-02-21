# ConditionSummary

<!-- STORY -->

### Import

```js
import ConditionSummary from '@ltht-react/condition-summary'
```

### Usage

```jsx
<ConditionSummary title="Conditions" conditions={conditions} clickHandler={handleCLick} />
```

### Properties

| Prop           | Required | Default    | Type        | Description                                                   |
| :------------- | :------- | :--------- | :---------- | :------------------------------------------------------------ |
| `title`        | No       | Conditions | string      | Header text                                                   |
| `conditions`   | Yes      |            | Condition[] | Array of conditions to display                                |
| `clickHandler` | No       | undefined  | Function    | Callback click handler containing the selected condition item |
