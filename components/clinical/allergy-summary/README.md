# Allergy Summary

### Import

```js
import AllergySummary from '@ltht-react/allergy-summary'
```

### Usage

```jsx
<AllergySummary title="Allergies" allergies={allergies} clickHandler={handleClick} />
```

### Properties

| Prop           | Required | Default   | Type                 | Description                                                 |
| :------------- | :------- | :-------- | :------------------- | :---------------------------------------------------------- |
| `title`        | No       | Allergies | string               | Header text                                                 |
| `allergies`    | Yes      |           | AllergyIntolerance[] | Array of allergies to display                               |
| `clickHandler` | No       | undefined | Function             | Callback click handler containing the selected allergy item |
