import { FC } from 'react'
import styled from '@emotion/styled'
import moment from 'moment'
import { Maybe, Period } from '@ltht-react/types'
import { useWindowSize } from '@ltht-react/hooks'
import { isMobileView } from '@ltht-react/utils'
import { StatusCodes } from '../organisms/task'

const formatDate = ({ date, removeSuffix }: IFormatDate) => moment(date).fromNow(removeSuffix)

const StyledDueDate = styled.div``

const DueDate: FC<IProps> = ({ executionPeriod, status }) => {
  const { width } = useWindowSize()

  const date = status === 'OVERDUE' ? executionPeriod?.end?.value : executionPeriod?.start?.value

  return <StyledDueDate>{formatDate({ date, removeSuffix: isMobileView(width) })}</StyledDueDate>
}

interface IProps {
  executionPeriod?: Maybe<Period>
  status: StatusCodes
}

interface IFormatDate {
  date?: Maybe<string>
  removeSuffix: boolean
}

export default DueDate
