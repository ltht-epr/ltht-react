import styled from '@emotion/styled'
import {
  BullseyeIcon,
  CalendarIcon,
  CaretSquareDownIcon,
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
  KeyboardIcon,
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
  SearchIcon,
  CheckboxIcon,
  SquareIcon,
  ChevronDoubleIcon,
} from '@ltht-react/icon'
import { render, screen } from '@testing-library/react'

describe('All icons', () => {
  it.each([
    [<BullseyeIcon size="small" data-testid="icon" />],
    [<CalendarIcon size="small" data-testid="icon" />],
    [<CaretSquareDownIcon size="small" data-testid="icon" />],
    [<CheckIcon size="small" data-testid="icon" />],
    [<ChevronCircleIcon size="small" data-testid="icon" direction="up" />],
    [<ChevronIcon size="small" data-testid="icon" direction="up" />],
    [<CircleIcon size="small" data-testid="icon" status="default" />],
    [<ColumnIcon size="small" data-testid="icon" status="default" />],
    [<CommentIcon size="small" data-testid="icon" />],
    [<CounterIcon size="small" data-testid="icon" status="secondary" value={1} />],
    [<CrossIcon size="small" data-testid="icon" />],
    [<EditIcon size="small" data-testid="icon" />],
    [<EllipsisHorizontalIcon size="small" data-testid="icon" />],
    [<EllipsisVerticalIcon size="small" data-testid="icon" />],
    [<ExclamationIcon size="small" data-testid="icon" status="amber" />],
    [<ExternalLinkIcon size="small" data-testid="icon" />],
    [<FilterIcon size="small" data-testid="icon" />],
    [<FolderPlusIcon size="small" data-testid="icon" />],
    [<GridLayoutIcon size="small" data-testid="icon" />],
    [<HamburgerIcon size="small" data-testid="icon" />],
    [<InfoCircleIcon size="small" data-testid="icon" status="green" />],
    [<KeyboardIcon size="small" data-testid="icon" />],
    [<LayerGroupIcon size="small" data-testid="icon" />],
    [<ListLayoutIcon size="small" data-testid="icon" />],
    [<PauseIcon size="small" data-testid="icon" />],
    [<PlayIcon size="small" data-testid="icon" />],
    [<PlusIcon size="small" data-testid="icon" />],
    [<SpinnerIcon size="small" data-testid="icon" />],
    [<StopIcon size="small" data-testid="icon" />],
    [<TableIcon size="small" data-testid="icon" status="default" />],
    [<ToggleOffIcon size="small" data-testid="icon" />],
    [<ToggleOnIcon size="small" data-testid="icon" />],
    [<TrashIcon size="small" data-testid="icon" />],
    [<UserIcon size="small" data-testid="icon" />],
    [<DotCircleIcon size="small" data-testid="icon" status="default" />],
    [<SearchIcon size="small" data-testid="icon" />],
    [<CheckboxIcon size="small" data-testid="icon" />],
    [<SquareIcon size="small" data-testid="icon" />],
    [<ChevronDoubleIcon size="small" data-testid="icon" direction="up" />],
  ])('Renders', (icon: JSX.Element) => {
    render(icon)
  })

  it.each([
    [<BullseyeIcon size="small" data-testid="icon" />, 'icon__bullseye'],
    [<CalendarIcon size="small" data-testid="icon" />, 'icon__calendar'],
    [<CaretSquareDownIcon size="small" data-testid="icon" />, 'icon__caret-square-down'],
    [<CheckIcon size="small" data-testid="icon" />, 'icon__check'],
    [<ChevronCircleIcon size="small" data-testid="icon" direction="up" />, 'icon__chevron-circle'],
    [<ChevronIcon size="small" data-testid="icon" direction="up" />, 'icon__chevron'],
    [<CircleIcon size="small" data-testid="icon" status="default" />, 'icon__circle'],
    [<ColumnIcon size="small" data-testid="icon" status="default" />, 'icon__column'],
    [<CommentIcon size="small" data-testid="icon" />, 'icon__comment'],
    [<CounterIcon size="small" data-testid="icon" status="secondary" value={1} />, 'icon__counter'],
    [<CrossIcon size="small" data-testid="icon" />, 'icon__cross'],
    [<EditIcon size="small" data-testid="icon" />, 'icon__edit'],
    [<EllipsisHorizontalIcon size="small" data-testid="icon" />, 'icon__ellipsis__horizontal'],
    [<EllipsisVerticalIcon size="small" data-testid="icon" />, 'icon__ellipsis__vertical'],
    [<ExclamationIcon size="small" data-testid="icon" status="amber" />, 'icon__exclamation'],
    [<ExternalLinkIcon size="small" data-testid="icon" />, 'icon__external-link'],
    [<FilterIcon size="small" data-testid="icon" />, 'icon__filter'],
    [<FolderPlusIcon size="small" data-testid="icon" />, 'icon__folder__plus'],
    [<GridLayoutIcon size="small" data-testid="icon" />, 'icon__grid-layout'],
    [<HamburgerIcon size="small" data-testid="icon" />, 'icon__hamburger'],
    [<InfoCircleIcon size="small" data-testid="icon" status="green" />, 'icon__info-circle'],
    [<KeyboardIcon size="small" data-testid="icon" />, 'icon__keyboard'],
    [<LayerGroupIcon size="small" data-testid="icon" />, 'icon__layer__group'],
    [<ListLayoutIcon size="small" data-testid="icon" />, 'icon__list-layout'],
    [<PauseIcon size="small" data-testid="icon" />, 'icon__pause'],
    [<PlayIcon size="small" data-testid="icon" />, 'icon__play'],
    [<PlusIcon size="small" data-testid="icon" />, 'icon__plus'],
    [<SpinnerIcon size="small" data-testid="icon" />, 'icon__spinner'],
    [<StopIcon size="small" data-testid="icon" />, 'icon__stop'],
    [<TableIcon size="small" data-testid="icon" status="default" />, 'icon__table'],
    [<ToggleOffIcon size="small" data-testid="icon" />, 'icon__toggle--off'],
    [<ToggleOnIcon size="small" data-testid="icon" />, 'icon__toggle--on'],
    [<TrashIcon size="small" data-testid="icon" />, 'icon__trash'],
    [<UserIcon size="small" data-testid="icon" />, 'icon__user'],
    [<DotCircleIcon size="small" data-testid="icon" status="default" />, 'icon__dot__circle'],
    [<SearchIcon size="small" data-testid="icon" />, 'icon__search'],
    [<CheckboxIcon size="small" data-testid="icon" />, 'icon__checkbox'],
    [<SquareIcon size="small" data-testid="icon" />, 'icon__square'],
    [<ChevronDoubleIcon size="small" direction="up" data-testid="icon" />, 'icon__chevron-double'],
  ])('Has the right class name', (icon: JSX.Element, expectedClass: string) => {
    render(icon)

    expect(screen.getByTestId('icon')).toHaveClass(expectedClass)
  })

  it.each([
    [<BullseyeIcon size="small" data-testid="icon" className="further-maths" />, 'icon__bullseye'],
    [<CalendarIcon size="small" data-testid="icon" className="further-maths" />, 'icon__calendar'],
    [<CaretSquareDownIcon size="small" data-testid="icon" className="further-maths" />, 'icon__caret-square-down'],
    [<CheckIcon size="small" data-testid="icon" className="further-maths" />, 'icon__check'],
    [
      <ChevronCircleIcon size="small" data-testid="icon" direction="up" className="further-maths" />,
      'icon__chevron-circle',
    ],
    [<ChevronIcon size="small" data-testid="icon" direction="up" className="further-maths" />, 'icon__chevron'],
    [<CircleIcon size="small" data-testid="icon" status="default" className="further-maths" />, 'icon__circle'],
    [<ColumnIcon size="small" data-testid="icon" status="default" className="further-maths" />, 'icon__column'],
    [<CommentIcon size="small" data-testid="icon" className="further-maths" />, 'icon__comment'],
    [
      <CounterIcon size="small" data-testid="icon" status="secondary" value={1} className="further-maths" />,
      'icon__counter',
    ],
    [<CrossIcon size="small" data-testid="icon" className="further-maths" />, 'icon__cross'],
    [<EditIcon size="small" data-testid="icon" className="further-maths" />, 'icon__edit'],
    [
      <EllipsisHorizontalIcon size="small" data-testid="icon" className="further-maths" />,
      'icon__ellipsis__horizontal',
    ],
    [<EllipsisVerticalIcon size="small" data-testid="icon" className="further-maths" />, 'icon__ellipsis__vertical'],
    [<ExclamationIcon size="small" data-testid="icon" status="amber" className="further-maths" />, 'icon__exclamation'],
    [<ExternalLinkIcon size="small" data-testid="icon" className="further-maths" />, 'icon__external-link'],
    [<FilterIcon size="small" data-testid="icon" className="further-maths" />, 'icon__filter'],
    [<FolderPlusIcon size="small" data-testid="icon" className="further-maths" />, 'icon__folder__plus'],
    [<GridLayoutIcon size="small" data-testid="icon" className="further-maths" />, 'icon__grid-layout'],
    [<HamburgerIcon size="small" data-testid="icon" className="further-maths" />, 'icon__hamburger'],
    [<InfoCircleIcon size="small" data-testid="icon" status="green" className="further-maths" />, 'icon__info-circle'],
    [<KeyboardIcon size="small" data-testid="icon" className="further-maths" />, 'icon__keyboard'],
    [<LayerGroupIcon size="small" data-testid="icon" className="further-maths" />, 'icon__layer__group'],
    [<ListLayoutIcon size="small" data-testid="icon" className="further-maths" />, 'icon__list-layout'],
    [<PauseIcon size="small" data-testid="icon" className="further-maths" />, 'icon__pause'],
    [<PlayIcon size="small" data-testid="icon" className="further-maths" />, 'icon__play'],
    [<PlusIcon size="small" data-testid="icon" className="further-maths" />, 'icon__plus'],
    [<SpinnerIcon size="small" data-testid="icon" className="further-maths" />, 'icon__spinner'],
    [<StopIcon size="small" data-testid="icon" className="further-maths" />, 'icon__stop'],
    [<TableIcon size="small" data-testid="icon" status="default" className="further-maths" />, 'icon__table'],
    [<ToggleOffIcon size="small" data-testid="icon" className="further-maths" />, 'icon__toggle--off'],
    [<ToggleOnIcon size="small" data-testid="icon" className="further-maths" />, 'icon__toggle--on'],
    [<TrashIcon size="small" data-testid="icon" className="further-maths" />, 'icon__trash'],
    [<UserIcon size="small" data-testid="icon" className="further-maths" />, 'icon__user'],
    [<DotCircleIcon size="small" data-testid="icon" status="default" className="further-maths" />, 'icon__dot__circle'],
    [<SearchIcon size="small" data-testid="icon" className="further-maths" />, 'icon__search'],
    [<CheckboxIcon size="small" data-testid="icon" className="further-maths" />, 'icon__checkbox'],
    [<SquareIcon size="small" data-testid="icon" className="further-maths" />, 'icon__square'],
    [
      <ChevronDoubleIcon size="small" data-testid="icon" direction="up" className="further-maths" />,
      'icon__chevron-double',
    ],
  ])('Still has the right class name when given custom class names', (icon: JSX.Element, expectedClass: string) => {
    render(icon)

    expect(screen.getByTestId('icon')).toHaveClass(expectedClass)
    expect(screen.getByTestId('icon')).toHaveClass('further-maths')
  })

  it.each([
    [<BullseyeIcon size="small" data-testid="icon" id="123abc" />],
    [<CalendarIcon size="small" data-testid="icon" id="123abc" />],
    [<CaretSquareDownIcon size="small" data-testid="icon" id="123abc" />],
    [<CheckIcon size="small" data-testid="icon" id="123abc" />],
    [<ChevronCircleIcon size="small" data-testid="icon" direction="up" id="123abc" />],
    [<ChevronIcon size="small" data-testid="icon" direction="up" id="123abc" />],
    [<CircleIcon size="small" data-testid="icon" status="default" id="123abc" />],
    [<ColumnIcon size="small" data-testid="icon" status="default" id="123abc" />],
    [<CommentIcon size="small" data-testid="icon" id="123abc" />],
    [<CounterIcon size="small" data-testid="icon" status="secondary" value={1} id="123abc" />],
    [<CrossIcon size="small" data-testid="icon" id="123abc" />],
    [<EditIcon size="small" data-testid="icon" id="123abc" />],
    [<EllipsisHorizontalIcon size="small" data-testid="icon" id="123abc" />],
    [<EllipsisVerticalIcon size="small" data-testid="icon" id="123abc" />],
    [<ExclamationIcon size="small" data-testid="icon" status="amber" id="123abc" />],
    [<ExternalLinkIcon size="small" data-testid="icon" id="123abc" />],
    [<FilterIcon size="small" data-testid="icon" id="123abc" />],
    [<FolderPlusIcon size="small" data-testid="icon" id="123abc" />],
    [<GridLayoutIcon size="small" data-testid="icon" id="123abc" />], // TODO: This is also inconsistent!
    [<HamburgerIcon size="small" data-testid="icon" id="123abc" />],
    [<InfoCircleIcon size="small" data-testid="icon" status="green" id="123abc" />],
    [<KeyboardIcon size="small" data-testid="icon" id="123abc" />],
    [<LayerGroupIcon size="small" data-testid="icon" id="123abc" />],
    [<ListLayoutIcon size="small" data-testid="icon" id="123abc" />], // TODO: Surely this is wrong?
    [<PauseIcon size="small" data-testid="icon" id="123abc" />],
    [<PlayIcon size="small" data-testid="icon" id="123abc" />],
    [<PlusIcon size="small" data-testid="icon" id="123abc" />],
    [<SpinnerIcon size="small" data-testid="icon" id="123abc" />],
    [<StopIcon size="small" data-testid="icon" id="123abc" />], // TODO: This is inconsistent
    [<TableIcon size="small" data-testid="icon" status="default" id="123abc" />],
    [<ToggleOffIcon size="small" data-testid="icon" id="123abc" />],
    [<ToggleOnIcon size="small" data-testid="icon" id="123abc" />],
    [<TrashIcon size="small" data-testid="icon" id="123abc" />],
    [<UserIcon size="small" data-testid="icon" id="123abc" />],
    [<DotCircleIcon size="small" data-testid="icon" status="default" id="123abc" />],
    [<SearchIcon size="small" data-testid="icon" id="123abc" />],
    [<CheckboxIcon size="small" data-testid="icon" id="123abc" />],
    [<SquareIcon size="small" data-testid="icon" id="123abc" />],
  ])('Spreads html attributes down', (icon: JSX.Element) => {
    render(icon)

    expect(screen.getByTestId('icon')).toHaveAttribute('id', '123abc')
  })

  it.each([
    ['bullseye'],
    ['calendar'],
    ['caret-square-down'],
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
    ['keyboard'],
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
    ['search'],
    ['checkbox'],
    ['square'],
    ['chevron-double'],
  ])('Can be styled', (iconName) => {
    render(makeStyledIcon(iconName))

    expect(screen.getByTestId('icon')).toHaveStyle({ color: 'pink' })
  })

  const makeStyledIcon = (iconName: string) => {
    switch (iconName) {
      case 'bullseye': {
        const Icon = styled(BullseyeIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" />
      }

      case 'calendar': {
        const Icon = styled(CalendarIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" />
      }

      case 'caret-square-down': {
        const Icon = styled(CaretSquareDownIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" />
      }

      case 'check': {
        const Icon = styled(CheckIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" />
      }

      case 'chevron-circle': {
        const Icon = styled(ChevronCircleIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" direction="up" />
      }

      case 'chevron': {
        const Icon = styled(ChevronIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" direction="up" />
      }

      case 'circle': {
        const Icon = styled(CircleIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" status="default" />
      }

      case 'column': {
        const Icon = styled(ColumnIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" status="default" />
      }

      case 'comment': {
        const Icon = styled(CommentIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" />
      }

      case 'counter': {
        const Icon = styled(CounterIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" status="default" value={3} />
      }

      case 'cross': {
        const Icon = styled(CrossIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" />
      }

      case 'edit': {
        const Icon = styled(EditIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" />
      }

      case 'ellipsis-horizontal': {
        const Icon = styled(EllipsisHorizontalIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" />
      }

      case 'ellipsis-vertical': {
        const Icon = styled(EllipsisVerticalIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" />
      }

      case 'exclamation': {
        const Icon = styled(ExclamationIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" status="default" />
      }

      case 'external-link': {
        const Icon = styled(ExternalLinkIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" />
      }

      case 'filter': {
        const Icon = styled(FilterIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" />
      }

      case 'folder-plus': {
        const Icon = styled(FolderPlusIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" />
      }

      case 'grid-layout': {
        const Icon = styled(GridLayoutIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" />
      }

      case 'hamburger': {
        const Icon = styled(HamburgerIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" />
      }

      case 'info-circle': {
        const Icon = styled(InfoCircleIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" status="default" />
      }

      case 'keyboard': {
        const Icon = styled(KeyboardIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" />
      }

      case 'layer-group': {
        const Icon = styled(LayerGroupIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" />
      }

      case 'list-layout': {
        const Icon = styled(ListLayoutIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" />
      }

      case 'pause': {
        const Icon = styled(PauseIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" />
      }

      case 'play': {
        const Icon = styled(PlayIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" />
      }

      case 'plus': {
        const Icon = styled(PlusIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" />
      }

      case 'spinner': {
        const Icon = styled(SpinnerIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" />
      }

      case 'stop': {
        const Icon = styled(StopIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" />
      }

      case 'table': {
        const Icon = styled(TableIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" status="default" />
      }

      case 'toggle-off': {
        const Icon = styled(ToggleOffIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" />
      }

      case 'toggle-on': {
        const Icon = styled(ToggleOnIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" />
      }

      case 'trash': {
        const Icon = styled(TrashIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" />
      }

      case 'user': {
        const Icon = styled(UserIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" />
      }

      case 'dot-circle': {
        const Icon = styled(DotCircleIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" status="default" />
      }

      case 'search': {
        const Icon = styled(SearchIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" />
      }

      case 'checkbox': {
        const Icon = styled(CheckboxIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" />
      }

      case 'square': {
        const Icon = styled(SquareIcon)`
          color: pink;
        `
        return <Icon size="small" data-testid="icon" />
      }

      case 'chevron-double': {
        const Icon = styled(ChevronDoubleIcon)`
          color: pink;
        `
        return <Icon size="small" direction="up" data-testid="icon" />
      }
    }
    throw Error()
  }
})
