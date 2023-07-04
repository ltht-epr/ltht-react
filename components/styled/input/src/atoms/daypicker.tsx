import { ChangeEventHandler, FC, HTMLAttributes, MouseEventHandler, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { DayPicker, SelectSingleEventHandler, DateBefore, Matcher, DateAfter } from 'react-day-picker'
import { BTN_COLOURS, TEXT_COLOURS, TRANSLUCENT_DARK_BLUE } from '@ltht-react/styles'
import { Button } from '@ltht-react/button'
import { usePopper } from 'react-popper'
import { format, isValid, parse } from 'date-fns'
import FocusTrap from 'focus-trap-react'
import Icon from '@ltht-react/icon'

const StyledDialogSheet = styled.div`
  z-index: 1;
  background: white;
  border-radius: 4px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.04), 0px 4px 5px rgba(0, 0, 0, 0.06), 0px 2px 4px -1px rgba(0, 0, 0, 0.09);
`

const DayPickerLabel = styled.small`
  color: ${TEXT_COLOURS.SECONDARY.LIGHTER25};
`

const DayPickerInput = styled.input`
  :focus-visible {
    outline-color: ${BTN_COLOURS.PRIMARY.VALUE};
    outline-style: auto;
    outline-width: 1px;
  }
`

const InputContainer = styled.div<InputProps>`
  display: flex;
  margin-right: ${({ showIcon }) => (showIcon ? '0rem;' : '2rem;')};
  height: 1.5rem;
`

const StyledButton = styled(Button)`
  position: relative;
  right: 2rem;
  width: 2rem !important;
`

const StyledDayPicker = styled(DayPicker)`
  button.rdp-button:hover:not([aria-disabled='true']) {
    background-color: ${TRANSLUCENT_DARK_BLUE};
  }

  button.rdp-day_selected: not([aria-disabled= 'true' ]), button.rdp-day_selected:not([aria-disabled='true']),
  button.rdp-day_selected:focus:not([aria-disabled='true']),
  button.rdp-day_selected:active:not([aria-disabled='true']),
  button.rdp-day_selected:hover:not([aria-disabled='true']) {
    color: white;
    background-color: ${BTN_COLOURS.PRIMARY.VALUE};
  }

  button.rdp-button:focus, button.rdp-button:active {
    border-color: ${BTN_COLOURS.PRIMARY.VALUE};
  }
`

const Daypicker: FC<DaypickerProps> = ({
  initialDate,
  pickerOpen,
  showIcon,
  dayFormat,
  label,
  minDate,
  maxDate,
  navigationNumberOfMonths,
  changeHandler,
  buttonHandler,
}) => {
  const [selected, setSelected] = useState<Date | undefined>(initialDate)
  const [inputValue, setInputValue] = useState<string>(format(initialDate ?? new Date(), dayFormat))
  const [isPopperOpen, setIsPopperOpen] = useState(pickerOpen ?? false)

  const disabledDays: Matcher[] = []

  if (minDate) {
    const disabledBefore: DateBefore = {
      before: minDate,
    }

    disabledDays.push(disabledBefore)
  }

  if (maxDate) {
    const disabledAfter: DateAfter = {
      after: maxDate,
    }

    disabledDays.push(disabledAfter)
  }

  const popperRef = useRef<HTMLDivElement>(null)
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null)

  const popper = usePopper(popperRef.current, popperElement, {
    placement: 'bottom-start',
  })

  const closePopper = () => {
    setIsPopperOpen(false)
  }

  const selectDate = (date: Date | undefined) => {
    setSelected(date)
    changeHandler && changeHandler(date)
  }

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.currentTarget.value)
    const date = parse(e.currentTarget.value, dayFormat, new Date())
    if (isValid(date)) {
      selectDate(date)
    } else {
      selectDate(undefined)
    }
  }

  const handleSelect: SelectSingleEventHandler = (_day, selectedDay, _activeModifiers, _e) => {
    if (_activeModifiers.disabled) {
      return
    }
    selectDate(selectedDay)
    if (selectedDay) {
      setInputValue(format(selectedDay, dayFormat))
      closePopper()
    } else {
      setInputValue('')
    }
  }

  const onInputClick: MouseEventHandler<HTMLInputElement> = () => {
    setIsPopperOpen(true)
  }

  const onButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
    const popperOpen = !isPopperOpen
    setIsPopperOpen(popperOpen)
    buttonHandler && buttonHandler(popperOpen)
  }

  return (
    <FocusTrap
      active={isPopperOpen}
      focusTrapOptions={{
        tabbableOptions: {
          displayCheck: 'none',
        },
        initialFocus: false,
        allowOutsideClick: false,
        clickOutsideDeactivates: true,
        onDeactivate: closePopper,
      }}
    >
      <div>
        {label && <DayPickerLabel>{label}</DayPickerLabel>}
        <InputContainer ref={popperRef} showIcon={showIcon}>
          <DayPickerInput
            type="text"
            readOnly
            placeholder={format(initialDate ?? new Date(), dayFormat)}
            value={inputValue}
            onChange={handleInputChange}
            onClick={!showIcon ? onInputClick : undefined}
          />
          {showIcon && (
            <StyledButton
              type="button"
              icon={<Icon type="calendar" size="medium" />}
              iconPlacement="center"
              onClick={onButtonClick}
            />
          )}
        </InputContainer>
        {isPopperOpen && (
          <StyledDialogSheet
            tabIndex={-1}
            style={popper.styles.popper}
            {...popper.attributes.popper}
            ref={setPopperElement}
            role="dialog"
          >
            <StyledDayPicker
              initialFocus={isPopperOpen}
              mode="single"
              defaultMonth={selected}
              selected={selected}
              onSelect={handleSelect}
              fromMonth={minDate}
              toMonth={maxDate}
              disabled={disabledDays}
              numberOfMonths={navigationNumberOfMonths}
              pagedNavigation
            />
          </StyledDialogSheet>
        )}
      </div>
    </FocusTrap>
  )
}

interface InputProps extends HTMLAttributes<HTMLDivElement> {
  showIcon: boolean
}

export interface DaypickerProps extends HTMLAttributes<HTMLDivElement> {
  initialDate?: Date
  pickerOpen?: boolean | undefined
  showIcon: boolean
  dayFormat: string
  label?: string
  minDate?: Date | undefined
  maxDate?: Date | undefined
  /**
   * The number of displayed months in navigation. Defaults to `1`.
   */
  navigationNumberOfMonths?: number | undefined
  /**
   * Executes whenever a day is selected from picker
   */
  changeHandler?: (day: Date | undefined) => void | undefined
  /**
   * Executes when the button icon clicked
   */
  buttonHandler?: (datepickerOpen: boolean) => void | undefined
}

export default Daypicker
