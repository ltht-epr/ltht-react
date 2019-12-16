import styled from '@emotion/styled'

export const ListItem = styled.li`
  display: flex;
  margin: 0;
  padding: 0;
  text-indent: 0;
  padding: 0.8rem;

  &:hover {
    background: #15398d;
    cursor: pointer;
  }

  & > div {
    padding-left: 1rem;
  }

  & div:first-of-type {
    padding-left: 0;
  }
`

export default ListItem
