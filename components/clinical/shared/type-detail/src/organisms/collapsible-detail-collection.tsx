import { DetailViewType, Maybe } from '@ltht-react/types'
import { FC, Children, cloneElement } from 'react'

const CollapsibleDetailCollection: FC<Props> = ({ children, viewType }) => {
  const showIfEmpty = viewType === DetailViewType.Expanded

  return Children.map(children, (child) => cloneElement(child, { showIfEmpty }))
}

interface Props {
  viewType?: Maybe<DetailViewType>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any
}

export default CollapsibleDetailCollection
