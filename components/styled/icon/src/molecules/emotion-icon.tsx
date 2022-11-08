import { EmotionIconType, IconStatus, IconDirection } from '@ltht-react/styles'
import { FC, HTMLAttributes } from 'react'
import ChevronDoubleIcon from '../atoms/emotion-icons/chevron-double-icon'

const EmotionIcon: FC<EmotionIconProps> = ({ type, size, status, direction, counterValue, ...rest }) => {
  switch (type) {
    case 'chevron-double': {
      return <ChevronDoubleIcon size={size} direction={direction ?? 'up'} {...rest} />
    }

    default: {
      return <>?</>
    }
  }
}

export interface EmotionIconProps extends HTMLAttributes<SVGElement> {
  type: EmotionIconType
  size: string | number
  status?: IconStatus
  direction?: IconDirection
  counterValue?: number
}

export default EmotionIcon
