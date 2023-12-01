import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { TABLET_MINIMUM_MEDIA_QUERY } from '@ltht-react/styles'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > div:last-of-type {
    padding-right: 0 !important;
  }

  ${TABLET_MINIMUM_MEDIA_QUERY} {
    flex-direction: row;
    & > div {
      padding-right: 0.5rem;
    }
  }
`

const StyledColumn = styled.div`
  ${TABLET_MINIMUM_MEDIA_QUERY} {
    flex: 1;
  }
`

const Container: FC<HTMLAttributes<HTMLDivElement>> = ({ children }) => <StyledContainer>{children}</StyledContainer>

const Column: FC<HTMLAttributes<HTMLDivElement>> = ({ children }) => <StyledColumn>{children}</StyledColumn>

export { Container, Column }
