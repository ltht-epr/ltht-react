import { FC } from 'react'
import { Task as ITask } from '@ltht-react/types'

const Task: FC<Props> = ({ task: { description } }) => <div>{description}</div>

interface Props {
  task: ITask
}

export default Task
