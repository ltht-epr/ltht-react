# DiagnosisSummary

<!-- STORY -->

### Import

```js
import DiagnosisSummary from '@ltht-react/diagnosis-summary'
```

### Usage

```jsx
<DiagnosisSummary title="Conditions" conditions={conditions} clickHandler={handleCLick} />
```

### Properties

| Prop           | Required | Default   | Type        | Description                                                   |
| :------------- | :------- | :-------- | :---------- | :------------------------------------------------------------ |
| `conditions`   | Yes      |           | Condition[] | Array of conditions to display                                |
| `clickHandler` | No       | undefined | Function    | Callback click handler containing the selected condition item |
