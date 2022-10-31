import IconButton from '@ltht-react/icon/src/organisms/icon-button'
import { Story } from '@storybook/react'
import { useState } from 'react'

export const IconButtons: Story = () => {
  const [timesClicked, setTimesClicked] = useState<number>(0)

  const clickHandler = () => {
    console.log('I got clicked!')
    setTimesClicked(timesClicked + 1)
  }

  return (
    <>
      <div style={{ marginBottom: '1rem' }}>These buttons have been clicked {timesClicked} times</div>

      <div style={{ marginBottom: '1rem' }}>
        <IconButton iconProps={{ type: 'square', size: 'large' }} onClick={clickHandler}></IconButton>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <IconButton
          iconProps={{ type: 'info-circle', status: 'red', size: 'large' }}
          onClick={clickHandler}
          text="Click me!"
        ></IconButton>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <IconButton
          iconProps={{ type: 'calendar', size: 'large' }}
          text="Some button text"
          onClick={clickHandler}
        ></IconButton>
      </div>
    </>
  )
}

export default { title: 'UI/Organisms/IconButton' }
