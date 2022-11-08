import EmotionIcon from '@ltht-react/icon/src/molecules/emotion-icon'
import { Story } from '@storybook/react'

export const AllPurposeEmotionIcon: Story = () => (
  <>
    <div>chevron double - up</div>
    <EmotionIcon type="chevron-double" size="1em" />
    <br />
    <div>chevron double - down</div>
    <EmotionIcon type="chevron-double" size="1em" direction="down" />
    <br />
    <div>chevron double - left</div>
    <EmotionIcon type="chevron-double" size="1em" direction="left" />
    <br />
    <div>chevron double - right</div>
    <EmotionIcon type="chevron-double" size="1em" direction="right" />
    <br />
  </>
)
