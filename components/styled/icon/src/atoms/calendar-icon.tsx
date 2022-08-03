import { FC } from 'react'
import { calculateIconSize, IconSizes } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

const CalendarIcon: FC<CalendarIconProps> = ({ size }) => (
  <FontAwesomeIcon className="icon__calendar" icon={faCalendar} size={calculateIconSize(size)} />
)

interface CalendarIconProps {
  size: IconSizes
}

export default CalendarIcon
