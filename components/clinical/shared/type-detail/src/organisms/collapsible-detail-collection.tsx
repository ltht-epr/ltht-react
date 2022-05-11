import { FC, Children, cloneElement, useState, Dispatch, SetStateAction } from 'react'
import styled from '@emotion/styled'
import { DetailViewType, Maybe } from '@ltht-react/types'
import { DESKTOP_MINIMUM_MEDIA_QUERY, MOBILE_MAXIMUM_MEDIA_QUERY, TABLET_ONLY_MEDIA_QUERY } from '@ltht-react/styles'

const StyledDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: '1rem';

  & > dl {
    margin-top: 0;
    margin-bottom: 1rem;

    ${DESKTOP_MINIMUM_MEDIA_QUERY} {
      width: 25%;

      &:nth-last-child(1),
      :nth-last-child(2),
      :nth-last-child(3),
      :nth-last-child(4) {
        margin-bottom: 0px !important;
      }

      &:nth-child(4n + 1) {
        text-align: left;
      }

      &:nth-child(4n + 2) {
        text-align: center;
      }

      &:nth-child(4n + 3) {
        text-align: center;
      }

      &:nth-child(4n) {
        text-align: right;
      }
    }

    ${TABLET_ONLY_MEDIA_QUERY} {
      width: 33.3%;

      &:nth-last-child(1),
      :nth-last-child(2),
      :nth-last-child(3) {
        margin-bottom: 0px !important;
      }

      &:nth-child(3n + 1) {
        text-align: left;
      }

      &:nth-child(3n + 2) {
        text-align: center;
      }

      &:nth-child(3n) {
        text-align: right;
      }
    }

    ${MOBILE_MAXIMUM_MEDIA_QUERY} {
      width: 100%;

      &:nth-last-child(1) {
        margin-bottom: 0px !important;
      }
    }
  }
`
const CollapsibleDetailCollection: FC<CollapsibleDetailCollectionProps> = ({ children, viewType }): JSX.Element => {
  const showIfEmpty = viewType === DetailViewType.Expanded
  if (!children) return <></>

  return <StyledDetail>{Children.map(children, (child) => cloneElement(child, { showIfEmpty }))}</StyledDetail>
}

export interface CollapsibleDetailCollectionProps {
  viewType?: Maybe<DetailViewType>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any
}

// Hook that provides state data for managing the type of detail view
export const useDetailViewType = (): UseDetailViewType => {
  const [viewType, setViewType] = useState(DetailViewType.Compact)

  const toggleViewType = () => {
    if (viewType === DetailViewType.Compact) setViewType(DetailViewType.Expanded)
    else setViewType(DetailViewType.Compact)
  }

  return { viewType, toggle: toggleViewType, setViewType }
}

type UseDetailViewType = {
  viewType: DetailViewType
  toggle: () => void
  setViewType: Dispatch<SetStateAction<DetailViewType>>
}

export default CollapsibleDetailCollection
