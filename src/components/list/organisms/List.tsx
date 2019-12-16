import styled from '@emotion/styled'

export const List = styled.ul`
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  border: 1px solid grey;

  & > li {
    border-top: 1px solid grey;
  }

  & :first-of-type {
    border-top: none;
  }
`

export default List
