# Care Plan Summary

### Import

```js
import CarePlanSummary from '@ltht-react/care-plan-summary'
```

### Usage

```jsx
<CarePlanSummary title="Care Plans" carePlans={carePlans} clickHandler={handleClick} />
```

### Properties

| Prop           | Required | Default    | Type       | Description                                                   |
| :------------- | :------- | :--------- | :--------- | :------------------------------------------------------------ |
| `title`        | No       | Care Plans | string     | Header text                                                   |
| `carePlans`    | Yes      |            | CarePlan[] | Array of care plans to display                                |
| `clickHandler` | No       | undefined  | Function   | Callback click handler containing the selected care plan item |
