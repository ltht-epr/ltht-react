import {
  CSS_RESET,
  TRANSLUCENT_MID_GREY,
  SCROLLBAR,
  TRANSLUCENT_BRIGHT_BLUE,
  BTN_COLOURS,
  TABLE_COLOURS,
  StickyTableData,
  StickyTableHead,
  getZIndex,
} from '@ltht-react/styles'
import styled from '@emotion/styled'
import Icon, { IconButton } from '@ltht-react/icon'
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

const StyledTable = styled.table<IStyledTable>`
  border-spacing: 0;
  border-radius: 6px;
  ${({ flex }) => flex && 'display: flex'};
  ${({ flex }) => flex && 'flex-direction: column'};
`

const StyledTableHeader = styled.th<IStyledTableCell>`
  background-color: ${TABLE_COLOURS.HEADER};
  border: thin solid ${TABLE_COLOURS.BORDER};
  font-weight: bold;
  padding: 0.5rem;

  ${({ stickyWidth }) =>
    stickyWidth !== undefined &&
    `
    position: sticky !important;
    left: ${stickyWidth}px;
    top: 0;
    z-index: ${getZIndex(StickyTableData)};`}
`
const StyledTableData = styled.td<IStyledTableCell>`
  border: thin solid ${TABLE_COLOURS.BORDER};
  white-space: normal;
  text-align: center;
  padding: 0.15rem;

  &:first-of-type {
    background-color: ${TABLE_COLOURS.HEADER} !important;
    font-weight: bold;
  }

  ${({ stickyWidth }) =>
    stickyWidth !== undefined &&
    `
    background-color: ${TABLE_COLOURS.STRIPE_LIGHT};
    position: sticky !important;
    left: ${stickyWidth}px;
    top: 0;
    z-index: ${getZIndex(StickyTableData)};`}

  ${({ tableHeaderAxis }) =>
    tableHeaderAxis === 'y' &&
    `
    &:nth-of-type(even) {
      background-color: ${TABLE_COLOURS.STRIPE_DARK};
    }`}
`
const StyledTableRow = styled.tr<IStyledTableCell>`
  ${({ tableHeaderAxis }) =>
    tableHeaderAxis === 'x' &&
    `
    &:nth-of-type(odd) {
      background-color: ${TABLE_COLOURS.STRIPE_DARK};
    }`}
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
  padding: 10px;
  font-size: 1.3em;
  border: solid 2px #eeeeee;
  border-left: solid 1px #eeeeee;

  :hover {
    background-color: #f3f6f6;
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
  z-index: ${getZIndex(StickyTableHead)};
`

interface IStyledTableCell {
  stickyWidth?: number
  tableHeaderAxis?: string
}

interface IStyledNextPageButtonContainer {
  elementPosition: 'right' | 'bottom'
}

interface IScrollableContainer {
  tableHeaderAxis: Axis
  maxHeight?: string
  maxWidth?: string
}

interface IStyledTable {
  flex?: boolean
}

export {
  StyledTable,
  StyledTableHeader,
  StyledTableRow,
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
