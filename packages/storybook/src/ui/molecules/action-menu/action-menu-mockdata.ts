/* eslint no-console: 0 */
import { ActionMenuOption } from '@ltht-react/menu'

const mockActions: ActionMenuOption[] = [
  {
    text: 'View',
    clickHandler: () => console.log('View Clicked'),
  },
  {
    text: 'Edit',
    clickHandler: () => console.log('Edit Clicked'),
  },
  {
    text: 'Delete',
    clickHandler: () => console.log('Delete Clicked'),
  },
]

export default mockActions
