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

const Task1: Task = {
  id: 'task-1',
  intent: IntentCode.Order,
  metadata: mockMetadata,
  status: TaskStatusCode.Overdue,
  description: 'Task 1 Description',
  performerType: {
    text: 'Forms',
  },
  executionPeriod: {
    start: {
      value: '2021-04-01T00:00:00',
    },
    end: {
      value: '2021-04-02T17:00:00',
    },
  },
}

const Task2: Task = {
  id: 'task-2',
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
      value: '2021-04-19T12:30:00',
    },
  },
}

const Task3: Task = {
  id: 'task-3',
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
  intent: IntentCode.Plan,
  metadata: mockMetadata,
  status: TaskStatusCode.Due,
  description: 'Task 4 Description',
  performerType: {
    text: 'Forms',
  },
  executionPeriod: {
    start: {
      value: '2021-04-21T09:00:00',
    },
    end: {
      value: '2021-04-23T00:00:00',
    },
  },
}

export const CompletedTask: Task = {
  id: 'completed-task',
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

export const Tasks: Task[] = [Task1, Task2, Task3, Task4, CompletedTask, CancelledTask]
