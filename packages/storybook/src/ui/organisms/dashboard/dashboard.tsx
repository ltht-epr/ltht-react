import { FC } from 'react'
import styled from '@emotion/styled'
import { TABLET_MEDIA_QUERY } from '@ltht-react/styles'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > div:last-of-type {
    padding-right: 0 !important;
  }

  ${TABLET_MEDIA_QUERY} {
    flex-direction: row;
    & > div {
      padding-right: 0.5rem;
    }
  }
`

const StyledColumn = styled.div`
  ${TABLET_MEDIA_QUERY} {
    flex: 1;
  }
`

const Container: FC = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

const Column: FC = ({ children }) => {
  return <StyledColumn>{children}</StyledColumn>
}

export { Container, Column }
