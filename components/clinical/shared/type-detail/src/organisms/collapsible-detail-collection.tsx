import { FC, Children, cloneElement } from 'react'
import styled from '@emotion/styled'
import { DetailViewType, Maybe } from '@ltht-react/types'
import { DESKTOP_MINIMUM_MEDIA_QUERY, MOBILE_MAXIMUM_MEDIA_QUERY, TABLET_MINIMUM_MEDIA_QUERY } from '@ltht-react/styles'

const StyledCollapsibleDetailCollection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: stretch;
  margin: 1rem 0;

  > dl {
    margin-top: 0;
    margin-bottom: 1rem;
    padding-right: 1rem;

    ${DESKTOP_MINIMUM_MEDIA_QUERY} {
      flex-basis: 33%;

      &:nth-last-child(1),
      :nth-last-child(2),
      :nth-last-child(3) {
        margin-bottom: 0px !important;
      }
    }

    ${TABLET_MINIMUM_MEDIA_QUERY} {
      flex-basis: 50%;

      &:nth-last-child(1),
      :nth-last-child(2) {
        margin-bottom: 0px !important;
      }
    }

    ${MOBILE_MAXIMUM_MEDIA_QUERY} {
      flex-basis: 100%;

      &:nth-last-child(1) {
        margin-bottom: 0px !important;
      }
    }
  }
`

const CollapsibleDetailCollection: FC<CollapsibleDetailCollectionProps> = ({ children, viewType }): JSX.Element => {
  const showIfEmpty = viewType === DetailViewType.Expanded
  if (!children) return <></>

  return (
    <StyledCollapsibleDetailCollection>
      {Children.map(children, (child) => cloneElement(child, { showIfEmpty }))}
    </StyledCollapsibleDetailCollection>
  )
}
export interface CollapsibleDetailCollectionProps {
  viewType?: Maybe<DetailViewType>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any
}

export default CollapsibleDetailCollection
