import styled from '@emotion/styled'

const List = styled.ul`
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  text-indent: 0;
  border: 1px solid grey;

  & > li {
    border-top: 1px solid grey;
  }

  & :first-of-type {
    border-top: none;
  }
`

export default List
