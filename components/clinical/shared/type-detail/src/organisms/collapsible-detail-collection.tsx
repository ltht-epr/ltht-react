import { FC, Children, cloneElement, ReactNode, isValidElement } from 'react'
import styled from '@emotion/styled'
import { DetailViewType, Maybe } from '@ltht-react/types'
import { DESKTOP_MINIMUM_MEDIA_QUERY, MOBILE_MAXIMUM_MEDIA_QUERY, TABLET_ONLY_MEDIA_QUERY } from '@ltht-react/styles'

const StyledCollapsibleDetailCollection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: stretch;
  margin: 1rem 0;

  dl > dt {
    font-weight: bold;
  }

  > dl {
    margin-top: 0;
    margin-bottom: 1rem;
    padding-right: 1rem;

    ${DESKTOP_MINIMUM_MEDIA_QUERY} {
      flex-basis: 33%;
    }

    ${TABLET_ONLY_MEDIA_QUERY} {
      flex-basis: 50%;
    }

    ${MOBILE_MAXIMUM_MEDIA_QUERY} {
      flex-basis: 100%;
      padding-right: 0.5rem;
    }
  }

  > dl[class*='--full-width'] {
    flex-basis: 100%;
  }

  > :not(dl[class*='--full-width']) {
    padding: 0.5rem 2rem 0 0;
  }
`

const CollapsibleDetailCollection: FC<CollapsibleDetailCollectionProps> = ({ children, viewType }) => {
  const showIfEmpty = viewType === DetailViewType.Expanded
  if (!children) return <></>

  return (
    <StyledCollapsibleDetailCollection>
      {Children.toArray(children)
        .filter(isValidElement<CollapsibleDetailChildProps>)
        .map((child) => cloneElement(child, { showIfEmpty }))}
    </StyledCollapsibleDetailCollection>
  )
}

export interface CollapsibleDetailCollectionProps {
  viewType?: Maybe<DetailViewType>
  children?: ReactNode
}

export interface CollapsibleDetailChildProps {
  showIfEmpty?: boolean
}

export default CollapsibleDetailCollection
