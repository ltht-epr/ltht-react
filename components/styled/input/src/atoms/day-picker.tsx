import { ChangeEventHandler, FC, HTMLAttributes, MouseEventHandler, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { DayPicker, Modifier, SelectSingleEventHandler } from 'react-day-picker'
// import { TABLET_MINIMUM_MEDIA_QUERY, TEXT_COLOURS } from '@ltht-react/styles'
import { usePopper } from 'react-popper'
import { format, isValid, parse } from 'date-fns'
import FocusTrap from 'focus-trap-react'

const StyledDialogSheet = styled.div`
  background: white;
  border-radius: 4px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.04), 0px 4px 5px rgba(0, 0, 0, 0.06), 0px 2px 4px -1px rgba(0, 0, 0, 0.09);
`

// const StyledDayPickerInput = styled.div`
//   margin-bottom: 0.25rem;
//   display: flex;
//   flex-direction: column;

//   ${TABLET_MINIMUM_MEDIA_QUERY} {
//     margin-right: 0.5rem;
//     flex: 1;
//   }

//   .DayPickerInput-Overlay {
//     z-index: 999;

//     * {
//       font-size: 0.8rem;

//       ${TABLET_MINIMUM_MEDIA_QUERY} {
//         font-size: 1rem;
//       }
//     }
//   }

//   .DayPickerInput {
//     width: 100%;

//     input {
//       letter-spacing: 0.03rem;
//       cursor: pointer;
//       padding: 0.25rem;
//       width: 100%;
//     }
//   }

//   .DayPicker-TodayButton {
//     width: 100%;
//     display: block;
//     text-align: center;
//   }
// `

const DayPickerInput: FC<Props> = () => {
  const [selected, setSelected] = useState<Date>()
  const [inputValue, setInputValue] = useState<string>('')
  const [isPopperOpen, setIsPopperOpen] = useState(false)

  const popperRef = useRef<HTMLDivElement>(null)
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null)

  const popper = usePopper(popperRef.current, popperElement, {
    placement: 'bottom-start',
  })

  const closePopper = () => {
    setIsPopperOpen(false)
  }

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = e => {
    setInputValue(e.currentTarget.value)
    const date = parse(e.currentTarget.value, 'y-MM-dd', new Date())
    if (isValid(date)) {
      setSelected(date)
    } else {
      setSelected(undefined)
    }
  }

  const handleSelect: SelectSingleEventHandler = (_day, selectedDay, _activeModifiers, _e) => {
    setSelected(selectedDay)
    if (selectedDay) {
      setInputValue(format(selectedDay, 'y-MM-dd'))
      closePopper()
    } else {
      setInputValue('')
    }
  }

  const onInputFocus: MouseEventHandler<HTMLInputElement> = () => {
    // console.log('Focus')
    setIsPopperOpen(true)
  }

  // const onInputBlur: FocusEventHandler<HTMLInputElement> = () => {
  //   console.log('Blur')
  //   setIsPopperOpen(false)
  // }

  return (
    <div>
      <div ref={popperRef}>
        <input
          type="text"
          placeholder={format(new Date(), 'y-MM-dd')}
          value={inputValue}
          onChange={handleInputChange}
          onClick={onInputFocus}
          // onFocus={onInputFocus}
          // onBlur={onInputBlur}
          className="input-reset pa2 ma2 bg-white black ba"
        />
      </div>
      {isPopperOpen && (
        <FocusTrap
          active
          focusTrapOptions={{
            initialFocus: false,
            allowOutsideClick: true,
            clickOutsideDeactivates: true,
            onDeactivate: closePopper,
          }}
        >
          <StyledDialogSheet
            tabIndex={-1}
            style={popper.styles.popper}
            className="dialog-sheet"
            {...popper.attributes.popper}
            ref={setPopperElement}
            role="dialog"
          >
            <DayPicker
              initialFocus={isPopperOpen}
              mode="single"
              defaultMonth={selected}
              selected={selected}
              onSelect={handleSelect}
            />
          </StyledDialogSheet>
        </FocusTrap>
      )}
    </div>
  )
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  selectedDate?: Date
  dayFormat: string
  label?: string
  fromMonth?: Date | undefined
  toMonth?: Date | undefined
  disabledDays?: Modifier | Modifier[]
  // changeHandler: ((day: Date, DayModifiers: DayModifiers, dayPickerInput: DayPickerInput) => void) | undefined
}

export default DayPickerInput
