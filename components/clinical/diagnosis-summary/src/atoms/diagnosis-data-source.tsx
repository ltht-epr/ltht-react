import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Condition } from '@ltht-react/types'

const StyledConditionStatus = styled.div<IStyledDescription>`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
  text-align: left;
  font-size: smaller;
  padding-top: 0.25rem;
  text-decoration: ${({ enteredInError }) => (enteredInError ? 'line-through' : 'none')};
`

const extractDataSourceDisplayNames = (condition: Condition) => {
  const dataSourceDisplayNames: string[] = []

  condition.metadata.dataSources.forEach((dataSource, _) => {
    if (dataSource?.display) {
      dataSourceDisplayNames.push(dataSource.display)
    }
  })

  return dataSourceDisplayNames.join(', ')
}

const DiagnosisDataSource: FC<Props> = ({ condition, enteredInError, ...rest }) => {
  const dataSourceDisplayNames = extractDataSourceDisplayNames(condition)

  return (
    <StyledConditionStatus enteredInError={enteredInError} {...rest}>
      {`Source: ${dataSourceDisplayNames}`}
    </StyledConditionStatus>
  )
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  condition: Condition
  enteredInError: boolean
}

interface IStyledDescription {
  enteredInError: boolean
}

export default DiagnosisDataSource
