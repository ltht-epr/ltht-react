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
  DotCircleIcon,
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
    [<DotCircleIcon size="small" status="default" />],
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
    [<CommentIcon size="small" />, 'icon__comment'],
    [<CounterIcon size="small" status="secondary" value={1} />, 'icon__counter'],
    [<CrossIcon size="small" />, 'icon__cross'],
    [<EditIcon size="small" />, 'icon__edit'],
    [<EllipsisHorizontalIcon size="small" />, 'icon__ellipsis__horizontal'],
    [<EllipsisVerticalIcon size="small" />, 'icon__ellipsis__vertical'],
    [<ExclamationIcon size="small" status="amber" />, 'icon__exclamation'],
    [<ExternalLinkIcon size="small" />, 'icon__external-link'],
    [<FilterIcon size="small" />, 'icon__filter'],
    [<FolderPlusIcon size="small" />, 'icon__folder__plus'],
    [<GridLayoutIcon size="small" />, 'icon__grid-layout'], // TODO: This is also inconsistent!
    [<HamburgerIcon size="small" />, 'icon__hamburger'],
    [<InfoCircleIcon size="small" status="green" />, 'icon__info-circle'],
    [<LayerGroupIcon size="small" />, 'icon__layer__group'],
    [<ListLayoutIcon size="small" />, 'icon__grid-layout'], // TODO: Surely this is wrong?
    [<PauseIcon size="small" />, 'icon__pause'],
    [<PlayIcon size="small" />, 'icon__play'],
    [<PlusIcon size="small" />, 'icon__plus'],
    [<SpinnerIcon size="small" />, 'icon__spinner'],
    [<StopIcon size="small" />, 'icon__Stop'], // TODO: This is inconsistent
    [<TableIcon size="small" status="default" />, 'icon__table'],
    [<ToggleOffIcon size="small" />, 'icon__toggle--off'],
    [<ToggleOnIcon size="small" />, 'icon__toggle--on'],
    [<TrashIcon size="small" />, 'icon__trash'],
    [<UserIcon size="small" />, 'icon__user'],
    [<DotCircleIcon size="small" status="default" />, 'icon__dot__circle'],
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
    [<CommentIcon size="small" className="further-maths" />, 'icon__comment'],
    [<CounterIcon size="small" status="secondary" value={1} className="further-maths" />, 'icon__counter'],
    [<CrossIcon size="small" className="further-maths" />, 'icon__cross'],
    [<EditIcon size="small" className="further-maths" />, 'icon__edit'],
    [<EllipsisHorizontalIcon size="small" className="further-maths" />, 'icon__ellipsis__horizontal'],
    [<EllipsisVerticalIcon size="small" className="further-maths" />, 'icon__ellipsis__vertical'],
    [<ExclamationIcon size="small" status="amber" className="further-maths" />, 'icon__exclamation'],
    [<ExternalLinkIcon size="small" className="further-maths" />, 'icon__external-link'],
    [<FilterIcon size="small" className="further-maths" />, 'icon__filter'],
    [<FolderPlusIcon size="small" className="further-maths" />, 'icon__folder__plus'],
    [<GridLayoutIcon size="small" className="further-maths" />, 'icon__grid-layout'], // TODO: This is also inconsistent!
    [<HamburgerIcon size="small" className="further-maths" />, 'icon__hamburger'],
    [<InfoCircleIcon size="small" status="green" className="further-maths" />, 'icon__info-circle'],
    [<LayerGroupIcon size="small" className="further-maths" />, 'icon__layer__group'],
    [<ListLayoutIcon size="small" className="further-maths" />, 'icon__grid-layout'], // TODO: Surely this is wrong?
    [<PauseIcon size="small" className="further-maths" />, 'icon__pause'],
    [<PlayIcon size="small" className="further-maths" />, 'icon__play'],
    [<PlusIcon size="small" className="further-maths" />, 'icon__plus'],
    [<SpinnerIcon size="small" className="further-maths" />, 'icon__spinner'],
    [<StopIcon size="small" className="further-maths" />, 'icon__Stop'], // TODO: This is inconsistent
    [<TableIcon size="small" status="default" className="further-maths" />, 'icon__table'],
    [<ToggleOffIcon size="small" className="further-maths" />, 'icon__toggle--off'],
    [<ToggleOnIcon size="small" className="further-maths" />, 'icon__toggle--on'],
    [<TrashIcon size="small" className="further-maths" />, 'icon__trash'],
    [<UserIcon size="small" className="further-maths" />, 'icon__user'],
    [<DotCircleIcon size="small" status="default" className="further-maths" />, 'icon__dot__circle'],
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
    [<CommentIcon size="small" id="123abc" />],
    [<CounterIcon size="small" status="secondary" value={1} id="123abc" />],
    [<CrossIcon size="small" id="123abc" />],
    [<EditIcon size="small" id="123abc" />, 'icon__edit'],
    [<EllipsisHorizontalIcon size="small" id="123abc" />],
    [<EllipsisVerticalIcon size="small" id="123abc" />],
    [<ExclamationIcon size="small" status="amber" id="123abc" />],
    [<ExternalLinkIcon size="small" id="123abc" />],
    [<FilterIcon size="small" id="123abc" />],
    [<FolderPlusIcon size="small" id="123abc" />],
    [<GridLayoutIcon size="small" id="123abc" />], // TODO: This is also inconsistent!
    [<HamburgerIcon size="small" id="123abc" />],
    [<InfoCircleIcon size="small" status="green" id="123abc" />],
    [<LayerGroupIcon size="small" id="123abc" />],
    [<ListLayoutIcon size="small" id="123abc" />], // TODO: Surely this is wrong?
    [<PauseIcon size="small" id="123abc" />],
    [<PlayIcon size="small" id="123abc" />],
    [<PlusIcon size="small" id="123abc" />],
    [<SpinnerIcon size="small" id="123abc" />],
    [<StopIcon size="small" id="123abc" />], // TODO: This is inconsistent
    [<TableIcon size="small" status="default" id="123abc" />],
    [<ToggleOffIcon size="small" id="123abc" />],
    [<ToggleOnIcon size="small" id="123abc" />],
    [<TrashIcon size="small" id="123abc" />],
    [<UserIcon size="small" id="123abc" />],
    [<DotCircleIcon size="small" status="default" id="123abc" />],
  ])('Spreads html attributes down', (icon: JSX.Element) => {
    render(icon)

    expect(screen.getByRole('img', { hidden: true })).toHaveAttribute('id', '123abc')
  })

  it.each([
    ['bullseye'],
    ['calendar'],
    ['check'],
    ['chevron-circle'],
    ['chevron'],
    ['circle'],
    ['column'],
    ['comment'],
    ['counter'],
    ['cross'],
    ['edit'],
    ['ellipsis-horizontal'],
    ['ellipsis-vertical'],
    ['exclamation'],
    ['external-link'],
    ['filter'],
    ['folder-plus'],
    ['grid-layout'],
    ['hamburger'],
    ['info-circle'],
    ['layer-group'],
    ['list-layout'],
    ['pause'],
    ['play'],
    ['plus'],
    ['spinner'],
    ['stop'],
    ['table'],
    ['toggle-off'],
    ['toggle-on'],
    ['trash'],
    ['user'],
    ['dot-circle'],
  ])('Can be styled', (iconName) => {
    render(makeStyledIcon(iconName))

    expect(screen.getByRole('img', { hidden: true })).toHaveStyle({ color: 'pink' })
  })

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

      case 'comment': {
        const Icon = styled(CommentIcon)`
          color: pink;
        `
        return <Icon size="small" />
      }

      case 'counter': {
        const Icon = styled(CounterIcon)`
          color: pink;
        `
        return <Icon size="small" status="default" value={3} />
      }

      case 'cross': {
        const Icon = styled(CrossIcon)`
          color: pink;
        `
        return <Icon size="small" />
      }

      case 'edit': {
        const Icon = styled(EditIcon)`
          color: pink;
        `
        return <Icon size="small" />
      }

      case 'ellipsis-horizontal': {
        const Icon = styled(EllipsisHorizontalIcon)`
          color: pink;
        `
        return <Icon size="small" />
      }

      case 'ellipsis-vertical': {
        const Icon = styled(EllipsisVerticalIcon)`
          color: pink;
        `
        return <Icon size="small" />
      }

      case 'exclamation': {
        const Icon = styled(ExclamationIcon)`
          color: pink;
        `
        return <Icon size="small" status="default" />
      }

      case 'external-link': {
        const Icon = styled(ExternalLinkIcon)`
          color: pink;
        `
        return <Icon size="small" />
      }

      case 'filter': {
        const Icon = styled(FilterIcon)`
          color: pink;
        `
        return <Icon size="small" />
      }

      case 'folder-plus': {
        const Icon = styled(FolderPlusIcon)`
          color: pink;
        `
        return <Icon size="small" />
      }

      case 'grid-layout': {
        const Icon = styled(GridLayoutIcon)`
          color: pink;
        `
        return <Icon size="small" />
      }

      case 'hamburger': {
        const Icon = styled(HamburgerIcon)`
          color: pink;
        `
        return <Icon size="small" />
      }

      case 'info-circle': {
        const Icon = styled(InfoCircleIcon)`
          color: pink;
        `
        return <Icon size="small" status="default" />
      }

      case 'layer-group': {
        const Icon = styled(LayerGroupIcon)`
          color: pink;
        `
        return <Icon size="small" />
      }

      case 'list-layout': {
        const Icon = styled(ListLayoutIcon)`
          color: pink;
        `
        return <Icon size="small" />
      }

      case 'pause': {
        const Icon = styled(PauseIcon)`
          color: pink;
        `
        return <Icon size="small" />
      }

      case 'play': {
        const Icon = styled(PlayIcon)`
          color: pink;
        `
        return <Icon size="small" />
      }

      case 'plus': {
        const Icon = styled(PlusIcon)`
          color: pink;
        `
        return <Icon size="small" />
      }

      case 'spinner': {
        const Icon = styled(SpinnerIcon)`
          color: pink;
        `
        return <Icon size="small" />
      }

      case 'stop': {
        const Icon = styled(StopIcon)`
          color: pink;
        `
        return <Icon size="small" />
      }

      case 'table': {
        const Icon = styled(TableIcon)`
          color: pink;
        `
        return <Icon size="small" status="default" />
      }

      case 'toggle-off': {
        const Icon = styled(ColumnIcon)`
          color: pink;
        `
        return <Icon size="small" status="default" />
      }

      case 'toggle-on': {
        const Icon = styled(ToggleOnIcon)`
          color: pink;
        `
        return <Icon size="small" />
      }

      case 'trash': {
        const Icon = styled(TrashIcon)`
          color: pink;
        `
        return <Icon size="small" />
      }

      case 'user': {
        const Icon = styled(UserIcon)`
          color: pink;
        `
        return <Icon size="small" />
      }

      case 'dot-circle': {
        const Icon = styled(DotCircleIcon)`
          color: pink;
        `
        return <Icon size="small" status="default" />
      }
    }
    throw Error()
  }
})
