import { FC, useState } from 'react'
import screenfull from 'screenfull'
import { IconButton } from '@ltht-react/icon'
import Tooltip from '@ltht-react/tooltip'

const FullScreenControl: FC<FullScreenControlProps> = ({ widgetRef }) => {
  const [isFullscreen, setIsFullscreen] = useState(screenfull.isFullscreen)

  const handleFullScreen = async () => {
    if (widgetRef.current && screenfull.isEnabled) {
      await screenfull.toggle(widgetRef.current)
    }

    setIsFullscreen(screenfull.isFullscreen)
  }

  if (!screenfull.isEnabled) {
    // eslint-disable-next-line no-console
    console.warn(
      `Full screen mode is not supported in this browser. 
      If your page is inside an <iframe> you will need to add a allowfullscreen attribute 
      (+ webkitallowfullscreen and mozallowfullscreen).
      Full screen mode is only available in browsers that support the Screenfull.js library. (https://www.npmjs.com/package/screenfull/v/5.2.0)`
    )
    return null
  }

  return (
    <Tooltip content={isFullscreen ? 'Exit Full Screen' : 'Full Screen'} placement="left">
      <IconButton
        iconProps={{ type: isFullscreen ? 'compress' : 'expand', size: 'medium' }}
        onClick={handleFullScreen}
      />
    </Tooltip>
  )
}

export interface FullScreenControlProps {
  widgetRef: React.RefObject<HTMLDivElement>
}

export default FullScreenControl
