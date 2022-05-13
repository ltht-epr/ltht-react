import EncounterParticipantDetail from '@ltht-react/hospital-stay-detail/src/molecules/encounter-participant-detail'
import { render, screen } from '@testing-library/react'
import { encounterParticipants } from './detail.fixtures'

describe('EncounterParticipantDetail', () => {
  it('should show provided details', async () => {
    render(<EncounterParticipantDetail participants={encounterParticipants} />)

    await screen.findByText('Participant(s)')
    screen.getByText('Dr. John Doe (Practitioner): 01-Apr-2020 to Present')
  })

  it('should show a term and no details when told to do so', async () => {
    render(<EncounterParticipantDetail showIfEmpty />)
    await screen.findByText('Participant(s)')
  })

  it('should default to showing nothing when no details', () => {
    render(<EncounterParticipantDetail showIfEmpty={false} />)
    expect(screen.queryByText('Participant(s)')).toBeNull()
  })

  it('should show term when provided an empty list and told to', async () => {
    render(<EncounterParticipantDetail participants={[]} showIfEmpty />)
    await screen.findByText('Participant(s)')
  })

  it('should not show term when provided an empty list', async () => {
    render(<EncounterParticipantDetail participants={[]} showIfEmpty={false} />)
    expect(screen.queryByText('Participant(s)')).toBeNull()
  })
})
