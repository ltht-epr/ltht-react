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

const Task1: Task = {
  id: 'task-1',
  isEnteredInError: false,
  intent: IntentCode.Order,
  metadata: mockMetadata,
  status: TaskStatusCode.Overdue,
  description: 'Resend eDan',
  performerType: {
    text: 'Http-Post',
    coding: [
      {
        system: 'https://leedsth.nhs.uk/task/action/performer-type',
        code: 'Http-Post',
        display: 'Http-Post',
      },
    ],
    extension: [
      {
        url: 'https://leedsth.nhs.uk/task/action/data',
        valueAttachment: {
          contentType: 'application/json',
          data: '{\n  scopeId: "edanScope";\n  action: "ResendToGp";\n}',
          url: 'https://ppmuat2.api.co.uk',
        },
      },
    ],
  },
  executionPeriod: {
    start: {
      value: '2021-10-22T10:12:00+01:00',
    },
    end: {
      value: '2021-10-21T20:43:19+01:00',
    },
  },
}

const Task2: Task = {
  id: 'task-2',
  isEnteredInError: false,
  intent: IntentCode.Plan,
  metadata: mockMetadata,
  status: TaskStatusCode.Overdue,
  description: 'Reset Pathway',
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
  id: 'task-id3',
  isEnteredInError: false,
  intent: IntentCode.Order,
  metadata: mockMetadata,
  status: TaskStatusCode.NotYetDue,
  description: 'Delete Document',
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

const AdminActionsList: Task[] = [Task1, Task2, Task3]

export default AdminActionsList
