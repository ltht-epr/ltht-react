import {
  CSS_RESET,
  TRANSLUCENT_MID_GREY,
  SCROLLBAR,
  TRANSLUCENT_BRIGHT_BLUE,
  BTN_COLOURS,
  TABLE_COLOURS,
} from '@ltht-react/styles'
import styled from '@emotion/styled'
import { Icon, IconButton } from '@ltht-react/icon'
import { Axis } from '@ltht-react/types'

const ScrollableContainer = styled.div<IScrollableContainer>`
  ${CSS_RESET};
  background-color: white;
  ${({ tableHeaderAxis, maxWidth, maxHeight }) => `
    display: ${tableHeaderAxis === 'y' ? 'inline-flex' : 'inline-block'};
    max-width: ${maxWidth ?? '100%'};
    max-height: ${maxHeight ?? '100%'};
  `}
  border-radius: 6px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 7px;
    height: 7px;
    border: 0;
  }
  &::-webkit-scrollbar-thumb {
    background: ${SCROLLBAR};
    border-radius: 10px;
  }
`
const StyledTable = styled.table`
  background-color: white;
  border-collapse: separate;
  border-spacing: 0px;
  border-radius: 6px;
`
const StyledTableHeader = styled.th<IStyledTableCell>`
  background-color: ${TABLE_COLOURS.HEADER};
  border: thin solid ${TABLE_COLOURS.BORDER};
  font-weight: bold;
  padding: 1rem;

  ${({ stickyWidth }) =>
    stickyWidth !== undefined &&
    `
    position: sticky !important;
    left: ${stickyWidth}px;
    top: 0;
    z-index: 1;`}
`
const StyledTableData = styled.td<IStyledTableCell>`
  border: thin solid ${TABLE_COLOURS.BORDER};
  white-space: nowrap;

  ${({ stickyWidth }) =>
    stickyWidth !== undefined &&
    `
    position: sticky !important;
    left: ${stickyWidth}px;
    top: 0;
    z-index: 1;`}

  &:first-of-type {
    background-color: ${TABLE_COLOURS.HEADER} !important;
  }
`
const PaginationContainer = styled.div`
  ${CSS_RESET};
  margin-top: 5px;
  display: block;
`
const StyledPaginationPageInput = styled.input`
  ${CSS_RESET};
  width: 50px;
  border: 1px solid gray;
`
const StyledPaginationPageSelect = styled.select`
  ${CSS_RESET};
  width: 45px;
  display: inline-block;
  font-size: 0.9rem;
  border: 1px solid gray;
`
const StyledHideOnMobile = styled.span`
  font-size: 1.1em;
  padding: 2px;
  @media (max-width: 320px) {
    display: none;
  }
`
const StyledPaginationButtonDiv = styled.div`
  float: right;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`
const StyledPageCountDiv = styled.div`
  margin-right: 5px;
  margin-left: 5px;
  display: flex;
  font-size: 1.1em;
  padding: 1px;
`
const StyledStandardButton = styled(IconButton)`
  color: ${BTN_COLOURS.STANDARD.TEXT};
  background-color: ${BTN_COLOURS.STANDARD.VALUE};
  padding: 2px 5px;
  border-radius: 5px;
  &:hover {
    background-color: ${BTN_COLOURS.STANDARD.HOVER};
  }

  &:disabled {
    background-color: ${BTN_COLOURS.STANDARD.DISABLED};
  }
`
const StyledPaginationButton = styled(IconButton)`
  padding: 2px 5px;
  background-color: ${TRANSLUCENT_BRIGHT_BLUE};
  color: black;
  border: 1px solid ${TRANSLUCENT_MID_GREY};
  margin: 0 2.5px;
  border-radius: 3px;

  &:disabled {
    background-color: inherit;
    color: gray;
    border-color: ${TRANSLUCENT_MID_GREY};
    pointer-events: none;
  }
`
const StyledSpinnerIcon = styled(Icon)`
  margin: 3px 0;
  font-size: 1.1em;
  padding: 1.5px;
`
const StyledNextPageButtonContainer = styled.div<IStyledNextPageButtonContainer>`
  display: ${({ hidden, elementPosition }) => {
    if (!hidden) {
      return elementPosition === 'bottom' ? 'flex' : 'inline-flex'
    }

    return 'none'
  }};
  justify-content: center;
  cursor: pointer;
  align-items: center;

  &:hover {
    padding: 5px;
    font-size: 1.3em;
    transition: 0.15s linear;
  }
`
const StyledSpinnerContainer = styled.div<IStyledNextPageButtonContainer>`
  display: ${({ hidden, elementPosition }) => {
    if (!hidden) {
      return elementPosition === 'bottom' ? 'flex' : 'inline-flex'
    }

    return 'none'
  }};
  justify-content: center;
  cursor: pointer;
  align-items: center;
  padding: 5px;
`
const StyledTHead = styled.thead`
  position: sticky;
  left: 0;
  top: 0;
  z-index: 2;
`

interface IStyledTableCell {
  stickyWidth?: number
}

interface IStyledNextPageButtonContainer {
  elementPosition: 'right' | 'bottom'
}

interface IScrollableContainer {
  tableHeaderAxis: Axis
  maxHeight?: string
  maxWidth?: string
}

export {
  StyledTable,
  StyledTableHeader,
  StyledTableData,
  PaginationContainer,
  StyledPaginationPageInput,
  StyledPaginationPageSelect,
  StyledHideOnMobile,
  StyledPaginationButton,
  ScrollableContainer,
  StyledPaginationButtonDiv,
  StyledPageCountDiv,
  StyledStandardButton,
  StyledSpinnerIcon,
  StyledNextPageButtonContainer,
  StyledTHead,
  StyledSpinnerContainer,
}
