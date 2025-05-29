import styled from '@emotion/styled'
import { CodeableConcept } from '@ltht-react/types'
import Icon from '@ltht-react/icon'
import { LINK_COLOURS } from '@ltht-react/styles'
import { codeableConceptCodeSummary, codeableConceptDisplaySummary } from '@ltht-react/utils'
import DescriptionList from '@ltht-react/description-list'
import parseHtml from 'html-react-parser'
import { DetailViewComponent, IDetailViewProps } from '../atoms/detail-view-component'
import NestedListDetail from './nested-list-detail'

const StyledLink = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 0;
  margin: 0.2rem 0;
  text-decoration: none;
  background-color: ${LINK_COLOURS.BACKGROUND.DEFAULT};
  color: ${LINK_COLOURS.TEXT.DEFAULT};
  transition: all 0.1s ease-in-out;

  & > dd:first-of-type {
    margin-right: 0.2rem;
  }

  &:hover {
    color: ${LINK_COLOURS.TEXT.HOVER};
    background-color: ${LINK_COLOURS.BACKGROUND.HOVER};
  }
`

const CodeableConceptDetail: DetailViewComponent<IProps> = ({
  term,
  concept,
  links = {},
  showIfEmpty = false,
  systemExclusionsFilter = [],
  displayCode = false,
  isRichText = false,
}) => {
  if (concept || showIfEmpty === true) {
    const displaySummary = displayCode
      ? codeableConceptCodeSummary(concept)
      : codeableConceptDisplaySummary(concept, systemExclusionsFilter)
    const linkUrl = links[displaySummary]

    return (
      <NestedListDetail term={term} showIfEmpty={showIfEmpty} wrapDescription={false}>
        {linkUrl ? (
          <StyledLink href={linkUrl} target="_blank">
            <DescriptionList.Description>{displaySummary}</DescriptionList.Description>
            <Icon type="external-link" size="small" />
          </StyledLink>
        ) : (
          <DescriptionList.Description>
            {isRichText ? parseHtml(displaySummary) : displaySummary}
          </DescriptionList.Description>
        )}
      </NestedListDetail>
    )
  }
  return <></>
}

interface IProps extends IDetailViewProps {
  term: string
  concept?: CodeableConcept | null
  // TODO: Define 'links?' type once code link config implementation has been done
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  links?: any
  systemExclusionsFilter?: string[]
  displayCode?: boolean
  isRichText?: boolean
}

export default CodeableConceptDetail
