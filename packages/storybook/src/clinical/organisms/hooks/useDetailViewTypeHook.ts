import { DetailViewType } from '@ltht-react/types'
import { Dispatch, SetStateAction, useState } from 'react'

// Hook that provides state data for managing the type of detail view
// eslint-disable-next-line import/prefer-default-export
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
