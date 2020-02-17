# Appointment Summary

### Import

```js
import AppointmentSummary from '@ltht-react/appointment-summary'
```

### Usage

```jsx
<AppointmentSummary title="Appointments" appointments={appointments} clickHandler={handleClick} />
```

### Properties

| Prop           | Required | Default      | Type        | Description                                                     |
| :------------- | :------- | :----------- | :---------- | :-------------------------------------------------------------- |
| `title`        | No       | Appointments | string      | Header text                                                     |
| `appointments` | Yes      |              | Encounter[] | Array of appointments to display                                |
| `clickHandler` | No       | undefined    | Function    | Callback click handler containing the selected appointment item |
