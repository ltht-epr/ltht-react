import { FC } from 'react'
import styled from '@emotion/styled'
import { Guidance, RequestGroupAction } from '@ltht-react/types'
import { UnorderedList, ListItem } from '@ltht-react/list'
import { Button } from '@ltht-react/button'
import Icon from '@ltht-react/icon'

import { LINK_COLOURS } from '@ltht-react/styles'

import Redacted from '../molecules/guidance-redacted'

const StyledTitle = styled.h4``

const StyledBody = styled.div``

const StyledText = styled.span`
  display: block;
  padding-top: 0.5rem;
`

const StyledUnorderedList = styled(UnorderedList)`
  padding-top: 0.5rem;
`

const StyledActionButton = styled(Button)`
  display: inline-flex !important;
  font-size: 0.8rem !important;
  text-decoration: underline;
  color: ${LINK_COLOURS.TEXT.DEFAULT};
`

const ActionTypeIcon = ({ action, ...rest }: { action: RequestGroupAction }) => {
  const actionCode = action?.code?.find((x) =>
    x?.coding?.some((y) => y?.system === 'https://leedsth.nhs.uk/ehr/guidance-action')
  )?.coding?.[0]

  if (!actionCode?.code) {
    return <Icon type="link" size="small" {...rest} />
  }

  const parts = actionCode.code.split('/')

  switch (parts[1]) {
    case 'form':
    case 'care-plan':
      return <Icon type="folder-plus" size="small" {...rest} />
    default:
      return <Icon type="link" size="small" {...rest} />
  }
}

const StyledActionTypeIcon = styled(ActionTypeIcon)`
  margin-right: 0.2rem;
`

const GuidanceSummaryV2: FC<Props> = ({ guidance, onActionClick }) => {
  if (guidance.metadata.isRedacted) {
    return <Redacted />
  }

  return (
    <>
      <StyledTitle>{guidance.reasonCode?.text}</StyledTitle>
      <StyledBody>
        <StyledText>{guidance.text?.text}</StyledText>
        {!!guidance.note && (
          <StyledUnorderedList bullet="disc">
            {guidance.note?.map((note, index) => {
              const actions = guidance.result?.action?.filter((x) => x?.elementId === note?.elementId)
              return (
                <ListItem key={index}>
                  {note?.text}{' '}
                  {onActionClick && (actions ?? []).length > 0
                    ? actions?.map(
                        (action) =>
                          action && (
                            <StyledActionButton
                              key={action?.elementId}
                              styling={{ buttonStyle: 'clear' }}
                              type="button"
                              onClick={() => action && onActionClick(action)}
                            >
                              <StyledActionTypeIcon action={action} /> {action?.title}
                            </StyledActionButton>
                          )
                      )
                    : null}
                </ListItem>
              )
            })}
          </StyledUnorderedList>
        )}
      </StyledBody>
    </>
  )
}

interface Props {
  guidance: Guidance
  onActionClick?: (action: RequestGroupAction) => void
}

export default GuidanceSummaryV2
