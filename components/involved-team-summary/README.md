# Involved Team Summary

### Import

```js
import InvolvedTeamSummary from '@ltht-react/involved-team-summary'
```

### Usage

```jsx
<InvolvedTeamSummary title="Involved Teams" episodeOfCares={episodeOfCares} clickHandler={handleClick} />
```

### Properties

| Prop             | Required | Default   | Type             | Description                                                         |
| :--------------- | :------- | :-------- | :--------------- | :------------------------------------------------------------------ |
| `title`          | No       | Allergies | string           | Header text                                                         |
| `episodeOfCares` | Yes      |           | EpisodeOfCares[] | Array of episode of care to display                                 |
| `clickHandler`   | No       | undefined | Function         | Callback click handler containing the selected episode of care item |
