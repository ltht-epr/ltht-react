import React from 'react'
import classNames from 'classnames'
import styled from '@emotion/styled'
import { CSS_RESET, TEXT_COLOURS, CARD_BACKGROUND_COLOUR } from '@ltht-react/styles'
import Alert, { Props as AlertProps } from '../atoms/alert'
import Body, { Props as BodyProps } from '../atoms/body'
import Footer, { Props as FooterProps } from '../atoms/footer'
import Header, { Props as HeaderProps } from '../atoms/header'
import ListItem, { Props as ListItemProps } from '../atoms/list-item'
import List, { Props as ListProps } from '../atoms/list'
import Subtitle, { Props as SubtitleProps } from '../atoms/subtitle'
import Text, { Props as TextProps } from '../atoms/text'
import Title, { Props as TitleProps } from '../atoms/title'

interface CardComposition {
  Alert: React.FC<AlertProps>
  Body: React.FC<BodyProps>
  Footer: React.FC<FooterProps>
  Header: React.FC<HeaderProps>
  ListItem: React.FC<ListItemProps>
  List: React.FC<ListProps>
  Subtitle: React.FC<SubtitleProps>
  Text: React.FC<TextProps>
  Title: React.FC<TitleProps>
}

type TextAlignValues = 'left' | 'center' | 'right'

interface StyledProps {
  textAlign: TextAlignValues
}

interface Props {
  textAlign?: TextAlignValues
  classes?: string
}

const StyledCard = styled.div`
  ${CSS_RESET}
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: ${(props: StyledProps): string => props.textAlign};
  background: ${CARD_BACKGROUND_COLOUR};
  color: ${TEXT_COLOURS.PRIMARY};
  margin-bottom: 1rem;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgba(102, 102, 102, 0.1), 0px 1px 1px 0px rgba(102, 102, 102, 0.15),
    0px 1px 3px 0px rgba(102, 102, 102, 0.6);
  -webkit-font-smoothing: antialiased;

  & > .card__alert + .card__list,
  > .card__alert + .card__body,
  > .card__list + .card__footer {
    border-top-width: 0;
  }
`

const Card: React.FC<Props> & CardComposition = ({ textAlign = 'left', classes, children }) => {
  return (
    <StyledCard textAlign={textAlign} className={classNames('card', classes)}>
      {children}
    </StyledCard>
  )
}

Card.Alert = Alert
Card.Body = Body
Card.Footer = Footer
Card.Header = Header
Card.ListItem = ListItem
Card.List = List
Card.Subtitle = Subtitle
Card.Text = Text
Card.Title = Title

export default Card
