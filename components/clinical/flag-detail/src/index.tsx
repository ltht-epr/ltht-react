import { FC } from 'react'
import styled from '@emotion/styled'
import { DetailViewType, Flag } from '@ltht-react/types'
import { codeableConceptCodeSummary, getStringExtension } from '@ltht-react/utils'
import { Button, ButtonProps } from '@ltht-react/button'
import { MOBILE_MAXIMUM_MEDIA_QUERY, SMALL_SCREEN_MAXIMUM_MEDIA_QUERY } from '@ltht-react/styles'

import {
  CodeableConceptDetail,
  StringDetail,
  PeriodDetail,
  NarrativeDetail,
  ResourceReferenceDetail,
  CollapsibleDetailCollectionProps,
  CollapsibleDetailCollection,
} from '@ltht-react/type-detail'

const StyledControlsContainer = styled.div`
  display: flex;
  margin: auto 10px auto 10px;
  flex-direction: column;

  ${MOBILE_MAXIMUM_MEDIA_QUERY} {
    margin: 10px 0 0 0;
    flex-flow: row wrap;
  }

  ${SMALL_SCREEN_MAXIMUM_MEDIA_QUERY} {
    margin: 10px 5px 0 0;
    flex-direction: column;
  }
`
const StyledButton = styled(Button)`
  margin: 2px 0 2px 0;
  font-size: 0.8em !important;
  padding: 1px 5px;

  ${MOBILE_MAXIMUM_MEDIA_QUERY} {
    margin: 2px 5px 2px 0;
    width: fit-content;
  }

  ${SMALL_SCREEN_MAXIMUM_MEDIA_QUERY} {
    margin: 2px 0 2px 0;
    width: 100%;
    max-width: 200px;
  }
`

const FlagDetail: FC<Props> = ({ flag, controls = [], viewType = DetailViewType.Compact }) => {
  let buttons = <></>
  if (controls.length) {
    buttons = (
      <StyledControlsContainer>
        {controls.map((props, index) => (
          <StyledButton key={index} {...props} />
        ))}
      </StyledControlsContainer>
    )
  }

  return (
    <CollapsibleDetailCollection viewType={viewType}>
      <StringDetail term="Code" description={codeableConceptCodeSummary(flag?.code)} />
      <CodeableConceptDetail term="Name" concept={flag?.code} />
      <StringDetail term="Status" description={flag.status.toString()} />
      <CodeableConceptDetail term="Category" concept={flag?.category} />
      <PeriodDetail period={flag?.period} />
      <NarrativeDetail term="Description" narrative={flag?.text} />
      <StringDetail
        term="Advice"
        description={getStringExtension(flag?.extension, 'https://leedsth.nhs.uk/alert/advice')}
        parse={false}
      />
      {buttons}
      <ResourceReferenceDetail term="Author" resourceReference={flag?.author} />
    </CollapsibleDetailCollection>
  )
}

interface Props extends CollapsibleDetailCollectionProps {
  flag: Flag
  controls?: ButtonProps[]
}

export default FlagDetail
