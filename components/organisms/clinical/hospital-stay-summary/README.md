# Hospital Stay Summary

<!-- STORY -->

### Import

```js
import HospitalStaySummary from '@ltht-react/hospital-stay-summary'
```

### Usage

```jsx
<HospitalStaySummary title="Hospital Stays" hospitalStays={hospitalStays} clickHandler={handleClick} />
```

### Properties

| Prop            | Required | Default               | Type        | Description                                                       |
| :-------------- | :------- | :-------------------- | :---------- | :---------------------------------------------------------------- |
| `title`         | No       | Hospital Stay Summary | string      | Header text                                                       |
| `hospitalStays` | Yes      |                       | Encounter[] | Array of Hospital Stays to display                                |
| `clickHandler`  | No       | undefined             | Function    | Callback click handler containing the selected hospital stay item |
