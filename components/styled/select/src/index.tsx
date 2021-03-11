import { FC, HTMLAttributes, useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { CSS_RESET, DESKTOP_MEDIA_QUERY } from '@ltht-react/styles'
import { ChevronIcon } from '@ltht-react/icon'

import Option, { IProps as OptionProps } from './atoms/option'

const StyledSelect = styled.div`
  ${CSS_RESET};
  display: flex;
  flex-direction: column;
  position: relative;
`

const SelectTrigger = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 32px;
  border: 1px solid black;
  padding: 0.5rem 1rem;
  background: white;
  cursor: pointer;

  ${DESKTOP_MEDIA_QUERY} {
    min-height: 39px;
  }
`

const ActiveOption = styled.span`
  font-weight: bold;
  flex: 1;
`

const SelectOptions = styled.div<ISelectOptions>`
  width: 100%;
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
`

const Select: FC<IProps> & SelectComposition = ({ children, activeOption = '', ...rest }) => {
  const [open, setOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  const handleOnEscapeKey = (e: KeyboardEvent) => {
    // IE11 has the key of 'Esc'
    if (e.key === 'Escape' || e.key === 'Esc') {
      setOpen(false)
    }
  }

  const handleOutsideClick = (e: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
      setOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleOnEscapeKey, true)
    document.addEventListener('click', handleOutsideClick, true)

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleOnEscapeKey, true)
      document.removeEventListener('click', handleOutsideClick, true)
    }
  })

  return (
    <StyledSelect {...rest} ref={selectRef}>
      <SelectTrigger data-testid="select-trigger" onClick={() => setOpen((open) => !open)}>
        <ActiveOption data-testid="select-active-option">{activeOption}</ActiveOption>
        <ChevronIcon direction={open ? 'up' : 'down'} size="small" />
      </SelectTrigger>
      <SelectOptions data-testid="select-options" open={open} onClick={() => setOpen(false)}>
        {children}
      </SelectOptions>
    </StyledSelect>
  )
}

Select.Option = Option

interface SelectComposition {
  Option: FC<OptionProps>
}

interface IProps extends HTMLAttributes<HTMLDivElement> {
  activeOption?: string
}

interface ISelectOptions {
  open: boolean
}

export default Select
