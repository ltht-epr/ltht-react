# CommunityTreatmentOrderSummary

<!-- STORY -->

### Import

```js
import CommunityTreatmentOrderSummary from '@ltht-react/community-treatment-order-summary'
```

### Usage

```jsx
<CommunityTreatmentOrderSummary
  title="Community Treatment Orders"
  communityTreatmentOrders={communityTreatmentOrders}
  clickHandler={handleClick}
/>
```

### Properties

| Prop                       | Required | Default                    | Type                           | Description                                         |
| :------------------------- | :------- | :------------------------- | :----------------------------- | :-------------------------------------------------- |
| `title`                    | No       | Community Treatment Orders | string                         | Header text                                         |
| `communityTreatmentOrders` | Yes      |                            | LypftCommunityTreatmentOrder[] | Array of community treatment orders to display      |
| `clickHandler`             | No       | undefined                  | Function                       | Callback click handler containing the selected item |
