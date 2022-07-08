import { CollapsibleDetailCollection, IDetailViewProps } from '@ltht-react/type-detail'
import { DetailViewType } from '@ltht-react/types'
import { fireEvent, render, screen } from '@testing-library/react'
import { FC, useState } from 'react'

describe('CollapsibleDetailCollection', () => {
  const TestableComponent: FC<IDetailViewProps> = ({ showIfEmpty }) => <>{showIfEmpty?.toString()}</>

  it('passes showIfEmpty prop', async () => {
    render(
      <CollapsibleDetailCollection viewType={DetailViewType.Expanded}>
        <TestableComponent />
      </CollapsibleDetailCollection>
    )

    await screen.findByText('true')
  })

  it('defaults to compact view', async () => {
    render(
      <CollapsibleDetailCollection>
        <TestableComponent />
      </CollapsibleDetailCollection>
    )

    await screen.findByText('false')
  })

  it('lets you toggle', async () => {
    function Wrapper() {
      const [viewType, setViewType] = useState(DetailViewType.Compact)

      return (
        <>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            onClick={() =>
              viewType === DetailViewType.Compact
                ? setViewType(DetailViewType.Expanded)
                : setViewType(DetailViewType.Compact)
            }
            type="button"
          >
            Toggle
          </button>
          <CollapsibleDetailCollection viewType={viewType}>
            <TestableComponent />
          </CollapsibleDetailCollection>
        </>
      )
    }

    render(<Wrapper />)

    await screen.findByText('false')

    fireEvent.click(await screen.findByText('Toggle'))

    await screen.findByText('true')
  })
})
