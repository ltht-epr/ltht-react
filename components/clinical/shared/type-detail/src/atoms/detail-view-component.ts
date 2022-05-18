import { FC } from 'react'
import { Maybe, Scalars } from '@ltht-react/types'

interface IDetailViewProps {
  showIfEmpty?: Maybe<Scalars['Boolean']>
}

type DetailViewComponent<T extends IDetailViewProps> = FC<T>

export { DetailViewComponent, IDetailViewProps }
