# Banner

### Import

```js
import Banner from '@ltht-react/banner'
```

### Usage

```jsx
<Banner type="info">
  This is an info alert with{' '}
  <a href="#" class="alert-link">
    an example link
  </a>
  .
</Banner>
```

### Properties

| Prop       | Required | Default | Type                           | Description                                           |
| :--------- | :------- | :------ | :----------------------------- | :---------------------------------------------------- |
| `type`     | No       | 'info'  | 'info', 'danger', 'warning'    | Type of styling for the banner                        |
| `icon`     | No       | None    | ReactNode                      | Custom <Icon /> to render                             |
| `children` | No       | None    | Element                        | Child elements to render within the banner            |
| `...rest`  | No       | None    | HTMLAttributes<HTMLDivElement> | Any additional props supported by an HTML Div Element |
