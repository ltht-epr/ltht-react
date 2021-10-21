import { FC } from 'react'
import styled from '@emotion/styled'
import moment from 'moment'
import { Maybe, Period, TaskStatusCode } from '@ltht-react/types'
import { useWindowSize } from '@ltht-react/hooks'
import { isMobileView } from '@ltht-react/utils'

const formatDate = ({ date, removeSuffix }: IFormatDate) => moment(date).fromNow(removeSuffix)

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
