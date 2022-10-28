import { FC, HTMLAttributes } from 'react'
import { calculateIconSize, IconSizes } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

const CalendarIcon: FC<CalendarIconProps> = ({ size, className, ...rest }) => (
  <FontAwesomeIcon
    className={`${className ?? ''} icon__calendar`.trimStart()}
    icon={faCalendar}
    size={calculateIconSize(size)}
    {...rest}
  />
)

interface CalendarIconProps extends HTMLAttributes<SVGElement> {
  size: IconSizes
}

export default CalendarIcon
