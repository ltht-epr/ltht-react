import { FC } from 'react'
import { Maybe } from '@ltht-react/types'

interface IDetailViewProps {
  showIfEmpty?: Maybe<boolean>
  className?: string
}

type DetailViewComponent<T extends IDetailViewProps> = FC<T>

export { DetailViewComponent, IDetailViewProps }
