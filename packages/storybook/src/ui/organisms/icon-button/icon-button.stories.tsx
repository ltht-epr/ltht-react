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
        <IconButton iconProps={{ type: 'external-link', size: 'large', color: 'dark-blue' }} onClick={clickHandler} />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <IconButton
          iconProps={{ type: 'info-circle', color: 'red', size: 'large' }}
          onClick={clickHandler}
          text="Click me!"
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <IconButton
          iconProps={{ type: 'calendar', size: 'large', color: 'green' }}
          text="Some button text"
          onClick={clickHandler}
        />
      </div>
    </>
  )
}

export default { title: 'UI/Organisms/IconButton' }
