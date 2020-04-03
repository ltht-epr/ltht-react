# DocumentSummary

<!-- STORY -->

### Import

```js
import DocumentSummary from '@ltht-react/document-summary'
```

### Usage

```jsx
<DocumentSummary documents={documentReferences} />
```

### Properties

| Prop           | Required | Default | Type                                      | Description                                            |
| :------------- | :------- | :------ | :---------------------------------------- | :----------------------------------------------------- |
| `documents`    | No       |         | DocumentReference[]                       | An array of document references                        |
| `clickHandler` | No       |         | clickHandler(document: DocumentReference) | A click handler that will return the selected document |
