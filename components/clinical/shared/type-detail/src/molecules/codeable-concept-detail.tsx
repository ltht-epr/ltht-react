import { FC } from 'react'
import styled from '@emotion/styled'
import { CodeableConcept, Maybe, Scalars } from '@ltht-react/types'
import { ExternalLinkIcon } from '@ltht-react/icon'
import { LINK_COLOURS } from '@ltht-react/styles'
import { codeableConceptDisplaySummary } from '@ltht-react/utils'
import DescriptionList from '@ltht-react/description-list'

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

  &:hover {
    color: ${LINK_COLOURS.TEXT.HOVER};
    background-color: ${LINK_COLOURS.BACKGROUND.HOVER};
  }
`

const CodeableConceptDetail: FC<Props> = ({ term, concept, links = {}, showIfEmpty = false }) => {
  if (concept || showIfEmpty === true) {
    const displaySummary = codeableConceptDisplaySummary(concept)
    const linkUrl = links[displaySummary]

    return (
      <DescriptionList>
        <DescriptionList.Term>{term}</DescriptionList.Term>
        {linkUrl ? (
          <StyledLink href={linkUrl} target="_blank">
            <DescriptionList.Description>{displaySummary}</DescriptionList.Description>
            <ExternalLinkIcon size="small" />
          </StyledLink>
        ) : (
          <DescriptionList.Description>{displaySummary}</DescriptionList.Description>
        )}
      </DescriptionList>
    )
  }
  return <></>
}

interface Props {
  term: string
  concept?: CodeableConcept | null
  // TODO: Define 'links?' type once code link config implementation has been done
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  links?: any
  showIfEmpty?: Maybe<Scalars['Boolean']>
}

export default CodeableConceptDetail
