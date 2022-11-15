/* eslint no-console: 0 */
import { ActionMenuOption } from '@ltht-react/menu'

const mockActions: ActionMenuOption[] = [
  {
    text: 'View',
    clickHandler: () => {
      console.log('View was clicked')
    },
    leftIcon: { type: 'info-circle', size: 'medium' },
    rightIcon: { type: 'external-link', size: 'medium' },
  },
  {
    text: 'Edit',
    clickHandler: () => {
      console.log('Edit was clicked')
    },
    leftIcon: { type: 'info-circle', size: 'medium' },
    rightIcon: { type: 'external-link', size: 'medium' },
  },
  {
    text: 'Delete',
    clickHandler: () => {
      console.log('Delete was clicked')
    },
    leftIcon: { type: 'exclamation', size: 'medium' },
    rightIcon: { type: 'external-link', size: 'medium' },
  },
]

export default mockActions
