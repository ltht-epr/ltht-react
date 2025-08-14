import { ActionMenuOption } from '@ltht-react/menu'
import { Task, IntentCode, TaskStatusCode, Metadata } from '@ltht-react/types'

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

const now = new Date()
now.setMinutes(now.getMinutes() - 20)
export const Task1: Task = {
  id: 'task-1',
  isEnteredInError: false,
  intent: IntentCode.Order,
  metadata: mockMetadata,
  status: TaskStatusCode.Overdue,
  description: 'Task 1 Description',
  performerType: {
    text: 'Forms',
  },
  extension: [
    {
      url: 'https://leedsth.nhs.uk/task/display-due-time',
      valueString: '20 mins ago',
    },
  ],
}

const Task2: Task = {
  id: 'task-2',
  isEnteredInError: false,
  intent: IntentCode.Plan,
  metadata: mockMetadata,
  status: TaskStatusCode.NotYetDue,
  description: 'Obs Due',
  performerType: {
    text: 'Forms',
  },
  extension: [
    {
      url: 'https://leedsth.nhs.uk/task/display-due-time',
      valueString: '30 mins ago',
    },
  ],
}

const Task3: Task = {
  id: 'task-3',
  isEnteredInError: false,
  intent: IntentCode.Plan,
  metadata: mockMetadata,
  status: TaskStatusCode.NotYetDue,
  description: 'Task 5 Description',
  performerType: {
    text: 'Forms',
  },
  extension: [
    {
      url: 'https://leedsth.nhs.uk/task/display-due-time',
      valueString: 'an hour ago',
    },
  ],
}

const Task4: Task = {
  id: 'task-4',
  isEnteredInError: false,
  intent: IntentCode.Plan,
  metadata: mockMetadata,
  status: TaskStatusCode.Due,
  description: 'Task 4 Description',
  performerType: {
    text: 'Forms',
  },
  extension: [
    {
      url: 'https://leedsth.nhs.uk/task/display-due-time',
      valueString: 'a few seconds ago',
    },
  ],
}

const Task5: Task = {
  id: 'task-5',
  isEnteredInError: false,
  intent: IntentCode.Plan,
  metadata: mockMetadata,
  status: TaskStatusCode.Overdue,
  description: 'Task 7 Description',
  performerType: {
    text: 'Forms',
  },
  extension: [
    {
      url: 'https://leedsth.nhs.uk/task/display-due-time',
      valueString: '20 mins',
    },
  ],
}

const Task6: Task = {
  id: 'task-6',
  isEnteredInError: false,
  intent: IntentCode.Plan,
  metadata: mockMetadata,
  status: TaskStatusCode.Overdue,
  description: 'Obs Overdue',
  performerType: {
    text: 'Forms',
  },
  extension: [
    {
      url: 'https://leedsth.nhs.uk/task/display-due-time',
      valueString: '50 mins',
    },
  ],
}

const Task7: Task = {
  id: 'task-7',
  isEnteredInError: false,
  intent: IntentCode.Order,
  metadata: mockMetadata,
  status: TaskStatusCode.Due,
  description: 'Start the eDAN',
  performerType: {
    text: 'Forms',
  },
  extension: [
    {
      url: 'https://leedsth.nhs.uk/task/display-due-time',
      valueString: '34 hours ago',
    },
  ],
}

export const CompletedTask: Task = {
  id: 'completed-task',
  isEnteredInError: false,
  intent: IntentCode.Plan,
  metadata: mockMetadata,
  status: TaskStatusCode.Complete,
  description: 'Task 5 Description',
  performerType: {
    text: 'Forms',
  },
  extension: [
    {
      url: 'https://leedsth.nhs.uk/task/display-due-time',
      valueString: '2 mins ago',
    },
  ],
  executionPeriod: {
    start: {
      value: '2021-04-20T09:00:00',
    },
    end: {
      value: '2021-04-21T00:00:00',
    },
  },
}

export const CancelledTask: Task = {
  id: 'cancelled-task',
  isEnteredInError: false,
  intent: IntentCode.Plan,
  metadata: mockMetadata,
  status: TaskStatusCode.Cancelled,
  description: 'Task 6 Description',
  performerType: {
    text: 'Forms',
  },
  extension: [
    {
      url: 'https://leedsth.nhs.uk/task/display-due-time',
      valueString: '7 mins ago',
    },
  ],
  executionPeriod: {
    start: {
      value: '2021-04-20T09:00:00',
    },
    end: {
      value: '2021-04-21T00:00:00',
    },
  },
}

export const RedactedTask: Task = {
  id: 'redacted-task',
  isEnteredInError: false,
  intent: IntentCode.Plan,
  metadata: redactedMetadata,
  status: TaskStatusCode.Due,
  performerType: {
    text: 'Forms',
  },
  extension: [
    {
      url: 'https://leedsth.nhs.uk/task/display-due-time',
      valueString: '20 mins ago',
    },
  ],
  executionPeriod: {
    start: {
      value: '2021-04-20T09:00:00',
    },
    end: {
      value: '2021-04-21T00:00:00',
    },
  },
  description: 'Redacted Task Description',
}

export const TaskActions: ActionMenuOption[] = [
  { text: 'Close', clickHandler: () => undefined, leftIcon: { type: 'cross', size: 'medium', color: 'red' } },
  { text: 'Reassign', clickHandler: () => undefined, leftIcon: { type: 'edit', size: 'medium', color: 'info-blue' } },
]

export const TaskActionsWithoutIcons: ActionMenuOption[] = [
  { text: 'Close', clickHandler: () => undefined },
  { text: 'Reassign', clickHandler: () => undefined },
]

export const Tasks: Task[] = [Task1, Task2, Task3, Task4, Task5, Task6, Task7, CompletedTask, CancelledTask]
