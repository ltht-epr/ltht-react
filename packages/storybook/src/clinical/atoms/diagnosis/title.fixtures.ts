import { Condition } from '@ltht-react/types'

const conditionWithNoMissingValues: Condition = {
  id: '345ha927-34e0-e911-a2c7-005087226er3|condition',
  isEnteredInError: false,
  metadata: {
    dataSources: [
      {
        display: 'Mock data source',
      },
    ],
    tag: [
      {
        system: 'https://leedsth.nhs.uk/cds/snippet-hover-text',
        display: 'Mock snippet hover text',
      },
    ],
    isRedacted: false,
    requestedWhen: '',
  },
  code: {
    coding: [
      {
        system: 'Mock',
        code: '1',
        display: 'Mock condition display name',
      },
    ],
    text: 'Mock condition display name',
  },
}

const conditionWithEmptySnippetHoverText: Condition = {
  id: '345ha927-34e0-e911-a2c7-005087226er3|condition',
  isEnteredInError: false,
  metadata: {
    dataSources: [
      {
        display: 'Mock data source',
      },
    ],
    tag: [
      {
        system: 'https://leedsth.nhs.uk/cds/snippet-hover-text',
        display: '',
      },
    ],
    isRedacted: false,
    requestedWhen: '',
  },
  code: {
    coding: [
      {
        system: 'Mock',
        code: '1',
        display: 'Mock condition display name',
      },
    ],
    text: 'Mock condition display name',
  },
}

const conditionWithNullSnippetHoverText: Condition = {
  id: '345ha927-34e0-e911-a2c7-005087226er3|condition',
  isEnteredInError: false,
  metadata: {
    dataSources: [
      {
        display: 'Mock data source',
      },
    ],
    tag: [
      {
        system: 'https://leedsth.nhs.uk/cds/snippet-hover-text',
        display: null,
      },
    ],
    isRedacted: false,
    requestedWhen: '',
  },
  code: {
    coding: [
      {
        system: 'Mock',
        code: '1',
        display: 'Mock condition display name',
      },
    ],
    text: 'Mock condition display name',
  },
}

const conditionWithUndefinedSnippetHoverText: Condition = {
  id: '345ha927-34e0-e911-a2c7-005087226er3|condition',
  isEnteredInError: false,
  metadata: {
    dataSources: [
      {
        display: 'Mock data source',
      },
    ],
    tag: [
      {
        system: 'https://leedsth.nhs.uk/cds/snippet-hover-text',
        display: undefined,
      },
    ],
    isRedacted: false,
    requestedWhen: '',
  },
  code: {
    coding: [
      {
        system: 'Mock',
        code: '1',
        display: 'Mock condition display name',
      },
    ],
    text: 'Mock condition display name',
  },
}

export {
  conditionWithNoMissingValues,
  conditionWithEmptySnippetHoverText,
  conditionWithNullSnippetHoverText,
  conditionWithUndefinedSnippetHoverText,
}
