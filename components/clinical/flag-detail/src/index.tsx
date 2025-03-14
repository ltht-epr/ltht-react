import { FC } from 'react'
import styled from '@emotion/styled'
import { DetailViewType, Flag } from '@ltht-react/types'
import { getStringExtension } from '@ltht-react/utils'
import { Button, ButtonProps } from '@ltht-react/button'
import {
  MOBILE_MAXIMUM_MEDIA_QUERY,
  SMALL_SCREEN_MAXIMUM_MEDIA_QUERY,
  TABLET_MINIMUM_MEDIA_QUERY,
} from '@ltht-react/styles'

import {
  CodeableConceptDetail,
  StringDetail,
  PeriodDetail,
  NarrativeDetail,
  ResourceReferenceDetail,
  CollapsibleDetailCollectionProps,
  CollapsibleDetailCollection,
  DatetimeDetail,
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
const FullWidthSection = styled.div`
  padding: 0.5rem 0 !important;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1rem;
  gap: 1rem;

  ${MOBILE_MAXIMUM_MEDIA_QUERY} {
    flex-direction: column;
  }

  & > dl {
    display: flex;
    flex-direction: column;
  }
`

const TopSection = styled(FullWidthSection)`
  ${TABLET_MINIMUM_MEDIA_QUERY} {
    & dl:last-of-type {
      margin-top: 0;
      text-align: right;
    }
  }
`
const AuthorSection = styled(FullWidthSection)`
  ${TABLET_MINIMUM_MEDIA_QUERY} {
    & > div:last-of-type > dl {
      text-align: right;
    }
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
      <TopSection>
        <CodeableConceptDetail term="Code" concept={flag?.code} displayCode />
        <CodeableConceptDetail term="Name" concept={flag?.code} />
      </TopSection>
      <TopSection>
        <StringDetail term="Status" description={flag.status.toString()} />
        <CodeableConceptDetail term="Category" concept={flag?.category} />
      </TopSection>
      <PeriodDetail period={flag?.period} />
      <NarrativeDetail term="Description" narrative={flag?.text} />
      <StringDetail
        term="Advice"
        description={getStringExtension(flag?.extension, 'https://leedsth.nhs.uk/alert/advice')}
        parse={false}
      />
      <AuthorSection>
        <div>
          <ResourceReferenceDetail term="Author" resourceReference={flag?.author} />
          <DatetimeDetail term="Authored On" datetime={flag?.createdOn} />
        </div>
        <div>
          <ResourceReferenceDetail term="Amended By" resourceReference={flag?.amendedBy} showIfEmpty={false} />
          <DatetimeDetail term="Amended On" datetime={flag?.amendedOn} />
        </div>
      </AuthorSection>
      {buttons}
    </CollapsibleDetailCollection>
  )
}

interface Props extends CollapsibleDetailCollectionProps {
  flag: Flag
  controls?: ButtonProps[]
}

export default FlagDetail
