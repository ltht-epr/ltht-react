import { FC } from 'react'
import styled from '@emotion/styled'
import moment from 'moment'
import { Maybe, Period, TaskStatusCode } from '@ltht-react/types'

const formatDate = ({ date, status }: IFormatDate) => {
  const now = moment()
  const dueDate = moment(date)
  const duration =
    status === TaskStatusCode.NotYetDue ? moment.duration(dueDate.diff(now)) : moment.duration(now.diff(dueDate))
  const showSuffix = status !== TaskStatusCode.NotYetDue

  if (duration.asHours() > 24) {
    const days = Math.floor(duration.asDays())

    return `${days} ${days === 1 ? 'day' : 'days'} ${showSuffix ? 'ago' : ''}`
  }

  if (duration.asHours() < 24 && duration.asMinutes() > 60) {
    const hours = Math.floor(duration.asHours())
    const minutes = Math.floor(((duration.asMilliseconds() % 86400000) % 3600000) / 60000)

    if (minutes) {
      return `${hours} ${hours > 1 ? 'hours' : 'hour'} ${minutes} ${minutes > 1 ? 'mins' : 'min'} ${
        showSuffix ? 'ago' : ''
      }`
    }

    return `${hours} ${hours > 1 ? 'hours' : 'hour'} ${showSuffix ? 'ago' : ''}`
  }

  return moment(date).fromNow(!showSuffix)
}

const StyledDueDate = styled.div``

const DueDate: FC<IProps> = ({ executionPeriod, status }) => {
  const date = status === TaskStatusCode.Overdue ? executionPeriod?.end?.value : executionPeriod?.start?.value

  return <StyledDueDate>{formatDate({ date, status })}</StyledDueDate>
}

interface IProps {
  executionPeriod?: Maybe<Period>
  status: TaskStatusCode
}

interface IFormatDate {
  date?: Maybe<string>
  status: TaskStatusCode
}

export default DueDate
