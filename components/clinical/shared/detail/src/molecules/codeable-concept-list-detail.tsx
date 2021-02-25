import React, { FC, Fragment } from 'react'
import styled from '@emotion/styled'
import { CodeableConcept, Maybe } from '@ltht-react/types'
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

const CodeableConceptListDetail: FC<Props> = ({ term, concepts, links = {} }) => {
  if (concepts && concepts.length > 0) {
    return (
      <DescriptionList>
        <DescriptionList.Term>{term}</DescriptionList.Term>
        {concepts?.map((item, index) => {
          if (item?.text) {
            const linkUrl = links[codeableConceptDisplaySummary(item)]

            return (
              <Fragment key={`${term}-${index}`}>
                {linkUrl ? (
                  <StyledLink href={linkUrl} target="_blank">
                    <DescriptionList.Description>{codeableConceptDisplaySummary(item)}</DescriptionList.Description>
                    <ExternalLinkIcon size="small" />
                  </StyledLink>
                ) : (
                  <DescriptionList.Description>{codeableConceptDisplaySummary(item)}</DescriptionList.Description>
                )}
              </Fragment>
            )
          }

          return <></>
        })}
      </DescriptionList>
    )
  }
  return <></>
}

interface Props {
  term: string
  concepts?: Maybe<CodeableConcept>[] | null
  links?: any // TODO: Define type once code link config implementation has been done
}

export default CodeableConceptListDetail
