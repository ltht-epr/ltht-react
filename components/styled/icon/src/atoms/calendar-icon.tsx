import { FC, HTMLAttributes } from 'react'
import { calculateIconSize, IconSizes } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

const CalendarIcon: FC<CalendarIconProps> = ({ size, ...rest }) => (
  <div {...rest}>
    <FontAwesomeIcon className="icon__calendar" icon={faCalendar} size={calculateIconSize(size)} />
  </div>
)

interface CalendarIconProps extends HTMLAttributes<HTMLDivElement> {
  size: IconSizes
}

export default CalendarIcon
