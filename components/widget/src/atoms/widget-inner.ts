import styled from '@emotion/styled'

const WidgetInner = styled.div`
  padding: 0.5rem 0.5rem 0 0.5rem;
`

const WidgetTitle = styled.h3`
  box-sizing: border-box;
  padding: 0 0 0.6rem 0;
  margin: 0;
  position: relative;
  color: #282828;
  text-align: left;
`

const DescriptionList = styled.dl`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
`

const DescriptionTerm = styled.dt`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  color: #a0a0a0;
  text-transform: uppercase;
`

const Description = styled.dd`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  color: #282828;
`

export { WidgetInner, WidgetTitle, DescriptionList, DescriptionTerm, Description }
