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
const Task1: Task = {
  id: 'task-1',
  isEnteredInError: false,
  intent: IntentCode.Order,
  metadata: mockMetadata,
  status: TaskStatusCode.Overdue,
  description: 'Task 1 Description',
  performerType: {
    text: 'Forms',
  },
  executionPeriod: {
    start: {
      value: now.toDateString(),
    },
    end: {
      value: now.toDateString(),
    },
  },
}

const Task2: Task = {
  id: 'task-2',
  isEnteredInError: false,
  intent: IntentCode.Plan,
  metadata: mockMetadata,
  status: TaskStatusCode.Overdue,
  description: 'Task 2 Description',
  performerType: {
    text: 'Forms',
  },
  executionPeriod: {
    start: {
      value: '2021-04-15T00:00:00',
    },
    end: {
      value: '2021-10-20T12:41:00+01:00',
    },
  },
}

const Task3: Task = {
  id: 'task-3',
  isEnteredInError: false,
  intent: IntentCode.Order,
  metadata: mockMetadata,
  status: TaskStatusCode.Overdue,
  description: 'Task 3 Description',
  performerType: {
    text: 'Forms',
  },
  executionPeriod: {
    start: {
      value: '2021-04-18T00:00:00',
    },
    end: {
      value: '2021-04-20T10:00:00',
    },
  },
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
  executionPeriod: {
    start: {
      value: '2021-02-23T13:18:00+00:00',
    },
    end: {
      value: '2021-04-23T00:00:00',
    },
  },
}

const Task5: Task = {
  id: 'task-5',
  isEnteredInError: false,
  intent: IntentCode.Plan,
  metadata: mockMetadata,
  status: TaskStatusCode.NotYetDue,
  description: 'Task 5 Description',
  performerType: {
    text: 'Forms',
  },
  executionPeriod: {
    start: {
      value: '2021-10-22T14:21:07.869968+01:00',
    },
    end: {
      value: '2021-04-23T00:00:00',
    },
  },
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

export const Tasks: Task[] = [Task1, Task2, Task3, Task4, Task5, CompletedTask, CancelledTask]
