import { Task, IntentCode, StatusCode, Metadata } from '@ltht-react/types'

const mockMetadata: Metadata = {
  dataSources: [
    {
      display: 'Mock',
    },
  ],
  isRedacted: false,
  requestedWhen: '',
}

const redactedMetadata: Metadata = {
  dataSources: [
    {
      display: 'Mock',
    },
  ],
  isRedacted: true,
  requestedWhen: '',
}

const Task1: Task = {
  id: 'task-1',
  intent: IntentCode.Order,
  metadata: mockMetadata,
  status: StatusCode.Accepted,
  description: 'Task 1 Description',
}

const Task2: Task = {
  id: 'task-2',
  intent: IntentCode.Plan,
  metadata: mockMetadata,
  status: StatusCode.Received,
  description: 'Task 2 Description',
}

const Task3: Task = {
  id: 'task-3',
  intent: IntentCode.Order,
  metadata: mockMetadata,
  status: StatusCode.Accepted,
  description: 'Task 3 Description',
}

const Task4: Task = {
  id: 'task-4',
  intent: IntentCode.Plan,
  metadata: mockMetadata,
  status: StatusCode.Received,
  description: 'Task 4 Description',
}

const RedactedTask: Task = {
  id: 'redacted-task',
  intent: IntentCode.Plan,
  metadata: redactedMetadata,
  status: StatusCode.Received,
  description: 'Redacted Task Description',
}

const Tasks = [Task1, Task2, Task3, Task4]

export default {
  Tasks,
  RedactedTask,
}
