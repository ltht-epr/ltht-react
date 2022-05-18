import EncounterHospitalisationDetail from '@ltht-react/hospital-stay-detail/src/molecules/encounter-hospitalisation-detail'
import { render, screen } from '@testing-library/react'
import { encounterHospitalisation } from './detail.fixtures'

describe('EncounterHospitalisationDetail', () => {
  it('should show provided details', async () => {
    render(<EncounterHospitalisationDetail hospitalisation={encounterHospitalisation} />)

    await screen.findByText('Hospitalisation')
    screen.getByText('Admit Source')
    screen.getByText('Destination')
    screen.getByText('Discharge Disposition')
    screen.getByText('Pre Admission Identifier')
    screen.getByText('Diet Preference(s)')
    screen.getByText('Special Arrangement(s)')
    screen.getByText('Special Courtesy(s)')

    expect(screen.getAllByText('GP').length).toBe(6)
    expect(screen.getAllByText('Smith, John (Dr)').length).toBe(2)
  })

  it('should show a title and no details when told to do so', async () => {
    render(<EncounterHospitalisationDetail showIfEmpty />)
    await screen.findByText('Hospitalisation')
  })

  it('should default to showing nothing when no details', () => {
    render(<EncounterHospitalisationDetail showIfEmpty={false} />)
    expect(screen.queryByText('Hospitalisation')).toBeNull()
  })

  it('should show sub-detail terms when no detail and told to', async () => {
    render(<EncounterHospitalisationDetail hospitalisation={{}} showIfEmpty />)

    await screen.findByText('Hospitalisation')
    screen.getByText('Admit Source')
    screen.getByText('Destination')
    screen.getByText('Discharge Disposition')
    screen.getByText('Pre Admission Identifier')
    screen.getByText('Diet Preference(s)')
    screen.getByText('Special Arrangement(s)')
    screen.getByText('Special Courtesy(s)')
  })

  it('should not show sub-detail terms when no detail value', async () => {
    render(<EncounterHospitalisationDetail hospitalisation={{}} showIfEmpty={false} />)

    await screen.findByText('Hospitalisation')
    expect(screen.queryByText('Admit Source')).toBeNull()
    expect(screen.queryByText('Destination')).toBeNull()
    expect(screen.queryByText('Discharge Disposition')).toBeNull()
    expect(screen.queryByText('Pre Admission Identifier')).toBeNull()
    expect(screen.queryByText('Diet Preference(s)')).toBeNull()
    expect(screen.queryByText('Special Arrangement(s)')).toBeNull()
    expect(screen.queryByText('Special Courtesy(s)')).toBeNull()
  })
})
