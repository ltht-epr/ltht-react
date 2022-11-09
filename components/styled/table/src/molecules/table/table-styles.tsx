import { CSS_RESET, TRANSLUCENT_MID_GREY, SCROLLBAR, TRANSLUCENT_BRIGHT_BLUE } from '@ltht-react/styles'
import styled from '@emotion/styled'

const Container = styled.div`
  ${CSS_RESET};
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
  border-radius: 6px;
`
const ScrollableContainer = styled.div`
  ${CSS_RESET};
  background-color: white;
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
  border-radius: 6px;
  overflow: scroll;
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
  border-collapse: collapse;
  border-radius: 6px;
  border: thin solid rgba(200, 200, 200, 0.5);
  padding: 1rem;
`
const StyledTableHeader = styled.th`
  background-color: ${TRANSLUCENT_MID_GREY};
  border: thin solid rgba(200, 200, 200, 0.5);
  font-weight: bold;
  padding: 0.5rem 1rem;
`
const StyledTableData = styled.td`
  border: thin solid rgba(200, 200, 200, 0.5);
  white-space: nowrap;
  &:first-of-type {
    background-color: ${TRANSLUCENT_MID_GREY} !important;
  }
`
const PaginationContainer = styled.div`
  ${CSS_RESET};
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
`
const paginationButtonStyle = `
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
const StyledPaginationPageInput = styled.input`
  ${CSS_RESET};
  width: 50px;
  border: 1px solid gray;
`
const StyledPaginationPageSelect = styled.select`
  ${CSS_RESET};
  width: 50px;
  display: inline-block;
  font-size: 0.9rem;
  border: 1px solid gray;
`
const StyledHideOnMobile = styled.span`
  @media (max-width: 320px) {
    display: none;
  }
`

export {
  Container,
  StyledTable,
  StyledTableHeader,
  StyledTableData,
  PaginationContainer,
  StyledPaginationPageInput,
  StyledPaginationPageSelect,
  StyledHideOnMobile,
  paginationButtonStyle,
  ScrollableContainer,
}
