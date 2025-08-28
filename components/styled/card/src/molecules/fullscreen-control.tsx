import { FC } from 'react'
import { IconButton } from '@ltht-react/icon'
import Tooltip from '@ltht-react/tooltip'
import { useFullScreen } from '@ltht-react/hooks'

const FullScreenControl: FC<FullScreenControlProps> = ({ elementRef }) => {
  const { isFullscreen, toggleFullScreen } = useFullScreen(elementRef)

  return (
    <Tooltip content={isFullscreen ? 'Exit Full Screen' : 'Full Screen'} placement="left" localPortal={isFullscreen}>
      <IconButton
        iconProps={{ type: isFullscreen ? 'compress' : 'expand', size: 'medium' }}
        onClick={toggleFullScreen}
      />
    </Tooltip>
  )
}

export interface FullScreenControlProps {
  elementRef: React.RefObject<HTMLDivElement>
}

export default FullScreenControl
