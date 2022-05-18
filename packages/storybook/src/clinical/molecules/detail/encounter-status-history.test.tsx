import EncounterStatusHistoryDetail from '@ltht-react/hospital-stay-detail/src/molecules/encounter-status-history-detail'
import { render, screen } from '@testing-library/react'
import { encounterStatusHistories } from './detail.fixtures'

describe('EncounterStatusHistoryDetail', () => {
  it('should show provided details', async () => {
    render(<EncounterStatusHistoryDetail hospitalStatusHistories={encounterStatusHistories} />)

    await screen.findByText('Status History')
    screen.getByText('In Progress - 01-Apr-2020 to Present')
  })

  it('should show a term and no details when told to do so', async () => {
    render(<EncounterStatusHistoryDetail showIfEmpty />)
    await screen.findByText('Status History')
  })

  it('should default to showing nothing when no details', () => {
    render(<EncounterStatusHistoryDetail showIfEmpty={false} />)
    expect(screen.queryByText('Status History')).toBeNull()
  })

  it('should show term when provided an empty list and told to', async () => {
    render(<EncounterStatusHistoryDetail hospitalStatusHistories={[]} showIfEmpty />)
    await screen.findByText('Status History')
  })

  it('should not show term when provided an empty list', async () => {
    render(<EncounterStatusHistoryDetail hospitalStatusHistories={[]} showIfEmpty={false} />)
    expect(screen.queryByText('Status History')).toBeNull()
  })
})
