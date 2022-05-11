import { DetailViewType, Maybe } from '@ltht-react/types'
import { FC, Children, cloneElement, useState, Dispatch, SetStateAction } from 'react'

const CollapsibleDetailCollection: FC<CollapsibleDetailCollectionProps> = ({ children, viewType }) => {
  const showIfEmpty = viewType === DetailViewType.Expanded
  if (!children) return <></>

  return Children.map(children, (child) => cloneElement(child, { showIfEmpty }))
}

export interface CollapsibleDetailCollectionProps {
  viewType?: Maybe<DetailViewType>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any
}

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
