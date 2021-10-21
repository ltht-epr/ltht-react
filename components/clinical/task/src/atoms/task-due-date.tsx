import { FC } from 'react'
import styled from '@emotion/styled'
import moment from 'moment'
import { Maybe, Period, TaskStatusCode } from '@ltht-react/types'
import { useWindowSize } from '@ltht-react/hooks'
import { isMobileView } from '@ltht-react/utils'

const formatDate = ({ date, removeSuffix }: IFormatDate) => {
  const now = moment()
  const dueDate = moment(date)
  const duration = moment.duration(now.diff(dueDate))

  if (duration.asHours() > 24) {
    const days = Math.floor(duration.asDays())

    return `${days} ${days === 1 ? 'day' : 'days'} ago`
  }

  if (duration.asHours() < 24 && duration.asMinutes() > 60) {
    const hours = Math.floor(duration.asHours())
    const minutes = Math.floor(((duration.asMilliseconds() % 86400000) % 3600000) / 60000)

    if (minutes) {
      return `${hours} ${hours > 1 ? 'hours' : 'hour'} ${minutes} ${minutes > 1 ? 'mins' : 'min'} ago`
    }

    return `${hours} ${hours > 1 ? 'hours' : 'hour'} ago`
  }

  return moment(date).fromNow(removeSuffix)
}

const StyledDueDate = styled.div``

const DueDate: FC<IProps> = ({ executionPeriod, status }) => {
  const { width } = useWindowSize()

  const date = status === TaskStatusCode.Overdue ? executionPeriod?.end?.value : executionPeriod?.start?.value

  return <StyledDueDate>{formatDate({ date, removeSuffix: isMobileView(width) })}</StyledDueDate>
}

interface IProps {
  executionPeriod?: Maybe<Period>
  status: TaskStatusCode
}

interface IFormatDate {
  date?: Maybe<string>
  removeSuffix: boolean
}

export default DueDate
