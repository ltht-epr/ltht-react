import { FC } from 'react'
import styled from '@emotion/styled'
import moment from 'moment'
import { Maybe, Period, TaskStatusCode } from '@ltht-react/types'

const formatDate = (date?: Maybe<string>) => {
  const now = moment()
  const dueDate = moment(date)

  const dateInPast = dueDate < now
  const duration = !dateInPast ? moment.duration(dueDate.diff(now)) : moment.duration(now.diff(dueDate))

  if (duration.asHours() > 24) {
    const days = Math.floor(duration.asDays())

    return `${days} ${days === 1 ? 'day' : 'days'} ${dateInPast ? 'ago' : ''}`
  }

  if (duration.asHours() < 24 && duration.asMinutes() > 60) {
    const hours = Math.floor(duration.asHours())
    const minutes = Math.floor(((duration.asMilliseconds() % 86400000) % 3600000) / 60000)

    if (minutes) {
      return `${hours} ${hours > 1 ? 'hours' : 'hour'} ${minutes} ${minutes > 1 ? 'mins' : 'min'} ${
        dateInPast ? 'ago' : ''
      }`
    }

    return `${hours} ${hours > 1 ? 'hours' : 'hour'} ${dateInPast ? 'ago' : ''}`
  }

  return moment(date).fromNow(!dateInPast)
}

const StyledDueDate = styled.div``

const DueDate: FC<IProps> = ({ executionPeriod, status }) => {
  // default use the overdueDate
  // if the dueDate is provided, and the status is not overdue, then measure against the dueDate
  const date =
    executionPeriod?.start?.value && status !== TaskStatusCode.Overdue
      ? executionPeriod?.start.value
      : executionPeriod?.end?.value

  return <StyledDueDate>{formatDate(date)}</StyledDueDate>
}

interface IProps {
  executionPeriod?: Maybe<Period>
  status: TaskStatusCode
}

export default DueDate
