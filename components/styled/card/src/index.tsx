import { FC, HTMLAttributes } from 'react'
import classNames from 'classnames'
import styled from '@emotion/styled'
import { CSS_RESET, TEXT_COLOURS, CARD_BACKGROUND_COLOUR } from '@ltht-react/styles'
import Banner, { Props as BannerProps } from './atoms/banner'
import Body, { Props as BodyProps } from './atoms/body'
import Footer, { Props as FooterProps } from './atoms/footer'
import Header, { Props as HeaderProps } from './atoms/header'
import List, { Props as ListProps } from './atoms/list'
import ListItem, { Props as ListItemProps } from './atoms/list-item'
import Subtitle, { Props as SubtitleProps } from './atoms/subtitle'
import Text, { Props as TextProps } from './atoms/text'
import Title, { Props as TitleProps } from './atoms/title'

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

  & > [class^='card__banner'] + .card__list,
  > [class^='card__banner'] + .card__body,
  > .card__list + .card__body,
  > .card__list + .card__list {
    border-top-width: 0;
  }
`

const Card: FC<CardProps> & CardComposition = ({ textAlign = 'left', classes, children, ...rest }) => (
  <StyledCard textAlign={textAlign} className={classNames('card', classes)} {...rest}>
    {children}
  </StyledCard>
)

Card.Banner = Banner
Card.Body = Body
Card.Footer = Footer
Card.Header = Header
Card.ListItem = ListItem
Card.List = List
Card.Subtitle = Subtitle
Card.Text = Text
Card.Title = Title

interface CardComposition {
  Banner: FC<BannerProps>
  Body: FC<BodyProps>
  Footer: FC<FooterProps>
  Header: FC<HeaderProps>
  ListItem: FC<ListItemProps>
  List: FC<ListProps>
  Subtitle: FC<SubtitleProps>
  Text: FC<TextProps>
  Title: FC<TitleProps>
}

type TextAlignValues = 'left' | 'center' | 'right'

interface StyledProps {
  textAlign: TextAlignValues
}

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  textAlign?: TextAlignValues
  classes?: string
}

export default Card
