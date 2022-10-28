import styled from '@emotion/styled'
import {
  BullseyeIcon,
  CalendarIcon,
  CheckIcon,
  ChevronCircleIcon,
  ChevronIcon,
  CircleIcon,
  ColumnIcon,
  CommentIcon,
  CounterIcon,
  CrossIcon,
  EditIcon,
  EllipsisHorizontalIcon,
  EllipsisVerticalIcon,
  ExclamationIcon,
  ExternalLinkIcon,
  FilterIcon,
  FolderPlusIcon,
  GridLayoutIcon,
  HamburgerIcon,
  InfoCircleIcon,
  LayerGroupIcon,
  ListLayoutIcon,
  PauseIcon,
  PlayIcon,
  PlusIcon,
  SpinnerIcon,
  StopIcon,
  TableIcon,
  ToggleOffIcon,
  ToggleOnIcon,
  TrashIcon,
  UserIcon,
} from '@ltht-react/icon'
import { render, screen } from '@testing-library/react'

describe('All icons', () => {
  it.each([
    [<BullseyeIcon size="small" />],
    [<CalendarIcon size="small" />],
    [<CheckIcon size="small" />],
    [<ChevronCircleIcon size="small" direction="up" />],
    [<ChevronIcon size="small" direction="up" />],
    [<CircleIcon size="small" status="default" />],
    [<ColumnIcon size="small" status="default" />],
    [<CommentIcon size="small" />],
    [<CounterIcon size="small" status="secondary" value={1} />],
    [<CrossIcon size="small" />],
    [<EditIcon size="small" />],
    [<EllipsisHorizontalIcon size="small" />],
    [<EllipsisVerticalIcon size="small" />],
    [<ExclamationIcon size="small" status="amber" />],
    [<ExternalLinkIcon size="small" />],
    [<FilterIcon size="small" />],
    [<FolderPlusIcon size="small" />],
    [<GridLayoutIcon size="small" />],
    [<HamburgerIcon size="small" />],
    [<InfoCircleIcon size="small" status="green" />],
    [<LayerGroupIcon size="small" />],
    [<ListLayoutIcon size="small" />],
    [<PauseIcon size="small" />],
    [<PlayIcon size="small" />],
    [<PlusIcon size="small" />],
    [<SpinnerIcon size="small" />],
    [<StopIcon size="small" />],
    [<TableIcon size="small" status="default" />],
    [<ToggleOffIcon size="small" />],
    [<ToggleOnIcon size="small" />],
    [<TrashIcon size="small" />],
    [<UserIcon size="small" />],
  ])('Renders', (icon: JSX.Element) => {
    render(icon)
  })

  it.each([
    [<BullseyeIcon size="small" />, 'icon__bullseye'],
    [<CalendarIcon size="small" />, 'icon__calendar'],
    [<CheckIcon size="small" />, 'icon__check'],
    [<ChevronCircleIcon size="small" direction="up" />, 'icon__chevron-circle'],
    [<ChevronIcon size="small" direction="up" />, 'icon__chevron'],
    [<CircleIcon size="small" status="default" />, 'icon__circle'],
    [<ColumnIcon size="small" status="default" />, 'icon__column'],
  ])('Has the right class name', (icon: JSX.Element, expectedClass: string) => {
    render(icon)

    expect(screen.getByRole('img', { hidden: true })).toHaveClass(expectedClass)
  })

  it.each([
    [<BullseyeIcon size="small" className="further-maths" />, 'icon__bullseye'],
    [<CalendarIcon size="small" className="further-maths" />, 'icon__calendar'],
    [<CheckIcon size="small" className="further-maths" />, 'icon__check'],
    [<ChevronCircleIcon size="small" direction="up" className="further-maths" />, 'icon__chevron-circle'],
    [<ChevronIcon size="small" direction="up" className="further-maths" />, 'icon__chevron'],
    [<CircleIcon size="small" status="default" className="further-maths" />, 'icon__circle'],
    [<ColumnIcon size="small" status="default" className="further-maths" />, 'icon__column'],
  ])('Still has the right class name when given custom class names', (icon: JSX.Element, expectedClass: string) => {
    render(icon)

    expect(screen.getByRole('img', { hidden: true })).toHaveClass(expectedClass)
    expect(screen.getByRole('img', { hidden: true })).toHaveClass('further-maths')
  })

  it.each([
    [<BullseyeIcon size="small" id="123abc" />],
    [<CalendarIcon size="small" id="123abc" />],
    [<CheckIcon size="small" id="123abc" />],
    [<ChevronCircleIcon size="small" direction="up" id="123abc" />],
    [<ChevronIcon size="small" direction="up" id="123abc" />],
    [<CircleIcon size="small" status="default" id="123abc" />],
    [<ColumnIcon size="small" status="default" id="123abc" />],
  ])('Spreads html attributes down', (icon: JSX.Element) => {
    render(icon)

    expect(screen.getByRole('img', { hidden: true })).toHaveAttribute('id', '123abc')
  })

  it.each([['bullseye'], ['calendar'], ['check'], ['chevron-circle'], ['chevron'], ['circle'], ['column']])(
    'Can be styled',
    (iconName) => {
      render(makeStyledIcon(iconName))

      expect(screen.getByRole('img', { hidden: true })).toHaveStyle({ color: 'pink' })
    }
  )

  const makeStyledIcon = (iconName: string) => {
    switch (iconName) {
      case 'bullseye': {
        const Icon = styled(BullseyeIcon)`
          color: pink;
        `
        return <Icon size="small" />
      }

      case 'calendar': {
        const Icon = styled(CalendarIcon)`
          color: pink;
        `
        return <Icon size="small" />
      }

      case 'check': {
        const Icon = styled(CheckIcon)`
          color: pink;
        `
        return <Icon size="small" />
      }

      case 'chevron-circle': {
        const Icon = styled(ChevronCircleIcon)`
          color: pink;
        `
        return <Icon size="small" direction="up" />
      }

      case 'chevron': {
        const Icon = styled(ChevronIcon)`
          color: pink;
        `
        return <Icon size="small" direction="up" />
      }

      case 'circle': {
        const Icon = styled(CircleIcon)`
          color: pink;
        `
        return <Icon size="small" status="default" />
      }

      case 'column': {
        const Icon = styled(ColumnIcon)`
          color: pink;
        `
        return <Icon size="small" status="default" />
      }
    }
    throw Error()
  }
})
