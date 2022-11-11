import IconButton from '@ltht-react/icon/src/organisms/icon-button'
import { Story } from '@storybook/react'
import { useState } from 'react'

export const IconButtons: Story = () => {
  const [timesClicked, setTimesClicked] = useState<number>(0)

  const clickHandler = () => {
    setTimesClicked(timesClicked + 1)
  }

  return (
    <>
      <div style={{ marginBottom: '1rem' }}>These buttons have been clicked {timesClicked} times</div>

      <div style={{ marginBottom: '1rem' }}>
        <IconButton iconProps={{ type: 'square', size: 'large' }} onClick={clickHandler} />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <IconButton
          iconProps={{ type: 'info-circle', status: 'red', size: 'large' }}
          onClick={clickHandler}
          text="Click me!"
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <IconButton iconProps={{ type: 'calendar', size: 'large' }} text="Some button text" onClick={clickHandler} />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <IconButton
          iconProps={{ type: 'chevron', direction: 'left', size: 'large' }}
          text="This button is disabled"
          onClick={clickHandler}
          disabled
        />
      </div>
    </>
  )
}

export default { title: 'UI/Organisms/IconButton' }
