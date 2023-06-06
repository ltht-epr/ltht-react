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
  StarIcon,
} from '@ltht-react/icon'
import { render, screen } from '@testing-library/react'

describe('All icons', () => {
  it.each([
    ['bullseye', <BullseyeIcon size="small" />],
    ['calendar', <CalendarIcon size="small" />],
    ['caret square down', <CaretSquareDownIcon size="small" />],
    ['check', <CheckIcon size="small" />],
    ['chevron circle', <ChevronCircleIcon size="small" direction="up" />],
    ['chevron', <ChevronIcon size="small" direction="up" />],
    ['circle', <CircleIcon size="small" status="default" />],
    ['column', <ColumnIcon size="small" status="default" />],
    ['comment', <CommentIcon size="small" />],
    ['counter', <CounterIcon size="small" status="secondary" value={1} />],
    ['cross', <CrossIcon size="small" />],
    ['edit', <EditIcon size="small" />],
    ['ellipsis horizontal', <EllipsisHorizontalIcon size="small" />],
    ['ellipsis vertical', <EllipsisVerticalIcon size="small" />],
    ['exclamation', <ExclamationIcon size="small" status="amber" />],
    ['external link', <ExternalLinkIcon size="small" />],
    ['filter', <FilterIcon size="small" />],
    ['folder plus', <FolderPlusIcon size="small" />],
    ['grid layout', <GridLayoutIcon size="small" />],
    ['hamburger', <HamburgerIcon size="small" />],
    ['info circle', <InfoCircleIcon size="small" status="green" />],
    ['keyboard icon', <KeyboardIcon size="small" />],
    ['layer group', <LayerGroupIcon size="small" />],
    ['list layout', <ListLayoutIcon size="small" />],
    ['pause', <PauseIcon size="small" />],
    ['play', <PlayIcon size="small" />],
    ['plus', <PlusIcon size="small" />],
    ['spinner', <SpinnerIcon size="small" />],
    ['star', <StarIcon size="small" />],
    ['stop', <StopIcon size="small" />],
    ['table', <TableIcon size="small" status="default" />],
    ['toggle off', <ToggleOffIcon size="small" />],
    ['toggle on', <ToggleOnIcon size="small" />],
    ['trash', <TrashIcon size="small" />],
    ['user', <UserIcon size="small" />],
    ['dot circle', <DotCircleIcon size="small" status="default" />],
    ['search', <SearchIcon size="small" />],
    ['checkbox', <CheckboxIcon size="small" />],
    ['square', <SquareIcon size="small" />],
  ])("Renders the '%s' icon", (_, icon: JSX.Element) => {
    render(icon)
  })

  it.each([
    ['bullseye', 'icon__bullseye', <BullseyeIcon size="small" />],
    ['calendar', 'icon__calendar', <CalendarIcon size="small" />],
    ['caret square down', 'icon__caret-square-down', <CaretSquareDownIcon size="small" />],
    ['check', 'icon__check', <CheckIcon size="small" />],
    ['chevron circle', 'icon__chevron-circle', <ChevronCircleIcon size="small" direction="up" />],
    ['chevron', 'icon__chevron', <ChevronIcon size="small" direction="up" />],
    ['circle', 'icon__circle', <CircleIcon size="small" status="default" />],
    ['column', 'icon__column', <ColumnIcon size="small" status="default" />],
    ['comment', 'icon__comment', <CommentIcon size="small" />],
    ['counter', 'icon__counter', <CounterIcon size="small" status="secondary" value={1} />],
    ['cross', 'icon__cross', <CrossIcon size="small" />],
    ['edit', 'icon__edit', <EditIcon size="small" />],
    ['ellipsis horizontal', 'icon__ellipsis__horizontal', <EllipsisHorizontalIcon size="small" />],
    ['ellipsis vertical', 'icon__ellipsis__vertical', <EllipsisVerticalIcon size="small" />],
    ['exclamation', 'icon__exclamation', <ExclamationIcon size="small" status="amber" />],
    ['external link', 'icon__external-link', <ExternalLinkIcon size="small" />],
    ['filter', 'icon__filter', <FilterIcon size="small" />],
    ['folder plus', 'icon__folder__plus', <FolderPlusIcon size="small" />],
    ['grid layout', 'icon__grid-layout', <GridLayoutIcon size="small" />],
    ['hamburger', 'icon__hamburger', <HamburgerIcon size="small" />],
    ['info circle', 'icon__info-circle', <InfoCircleIcon size="small" status="green" />],
    ['keyboard icon', 'icon__keyboard', <KeyboardIcon size="small" />],
    ['layer group', 'icon__layer__group', <LayerGroupIcon size="small" />],
    ['list layout', 'icon__list-layout', <ListLayoutIcon size="small" />],
    ['pause', 'icon__pause', <PauseIcon size="small" />],
    ['play', 'icon__play', <PlayIcon size="small" />],
    ['plus', 'icon__plus', <PlusIcon size="small" />],
    ['spinner', 'icon__spinner', <SpinnerIcon size="small" />],
    ['star', 'icon__star', <StarIcon size="small" />],
    ['stop', 'icon__stop', <StopIcon size="small" />],
    ['table', 'icon__table', <TableIcon size="small" status="default" />],
    ['toggle off', 'icon__toggle--off', <ToggleOffIcon size="small" />],
    ['toggle on', 'icon__toggle--on', <ToggleOnIcon size="small" />],
    ['trash', 'icon__trash', <TrashIcon size="small" />],
    ['user', 'icon__user', <UserIcon size="small" />],
    ['dot circle', 'icon__dot__circle', <DotCircleIcon size="small" status="default" />],
    ['search', 'icon__search', <SearchIcon size="small" />],
    ['checkbox', 'icon__checkbox', <CheckboxIcon size="small" />],
    ['square', 'icon__square', <SquareIcon size="small" />],
  ])("'%s' has the right class name", (_, expectedClass: string, icon: JSX.Element) => {
    render(icon)

    expect(screen.getByRole('img', { hidden: true })).toHaveClass(expectedClass)
  })

  it.each([
    ['bullseye', 'icon__bullseye', <BullseyeIcon size="small" className="further-maths" />],
    ['calendar', 'icon__calendar', <CalendarIcon size="small" className="further-maths" />],
    ['caret square down', 'icon__caret-square-down', <CaretSquareDownIcon size="small" className="further-maths" />],
    ['check', 'icon__check', <CheckIcon size="small" className="further-maths" />],
    [
      'chevron circle',
      'icon__chevron-circle',
      <ChevronCircleIcon size="small" direction="up" className="further-maths" />,
    ],
    ['chevron', 'icon__chevron', <ChevronIcon size="small" direction="up" className="further-maths" />],
    ['circle', 'icon__circle', <CircleIcon size="small" status="default" className="further-maths" />],
    ['column', 'icon__column', <ColumnIcon size="small" status="default" className="further-maths" />],
    ['comment', 'icon__comment', <CommentIcon size="small" className="further-maths" />],
    ['counter', 'icon__counter', <CounterIcon size="small" status="secondary" value={1} className="further-maths" />],
    ['cross', 'icon__cross', <CrossIcon size="small" className="further-maths" />],
    ['edit', 'icon__edit', <EditIcon size="small" className="further-maths" />],
    [
      'ellipsis horizontal',
      'icon__ellipsis__horizontal',
      <EllipsisHorizontalIcon size="small" className="further-maths" />,
    ],
    ['ellipsis vertical', 'icon__ellipsis__vertical', <EllipsisVerticalIcon size="small" className="further-maths" />],
    ['exclamation', 'icon__exclamation', <ExclamationIcon size="small" status="amber" className="further-maths" />],
    ['external link', 'icon__external-link', <ExternalLinkIcon size="small" className="further-maths" />],
    ['filter', 'icon__filter', <FilterIcon size="small" className="further-maths" />],
    ['folder plus', 'icon__folder__plus', <FolderPlusIcon size="small" className="further-maths" />],
    ['grid layout', 'icon__grid-layout', <GridLayoutIcon size="small" className="further-maths" />],
    ['hamburger', 'icon__hamburger', <HamburgerIcon size="small" className="further-maths" />],
    ['info circle', 'icon__info-circle', <InfoCircleIcon size="small" status="green" className="further-maths" />],
    ['keyboard icon', 'icon__keyboard', <KeyboardIcon size="small" className="further-maths" />],
    ['layer group', 'icon__layer__group', <LayerGroupIcon size="small" className="further-maths" />],
    ['list layout', 'icon__list-layout', <ListLayoutIcon size="small" className="further-maths" />],
    ['pause', 'icon__pause', <PauseIcon size="small" className="further-maths" />],
    ['play', 'icon__play', <PlayIcon size="small" className="further-maths" />],
    ['plus', 'icon__plus', <PlusIcon size="small" className="further-maths" />],
    ['spinner', 'icon__spinner', <SpinnerIcon size="small" className="further-maths" />],
    ['star', 'icon__star', <StarIcon size="small" className="further-maths" />],
    ['stop', 'icon__stop', <StopIcon size="small" className="further-maths" />],
    ['table', 'icon__table', <TableIcon size="small" status="default" className="further-maths" />],
    ['toggle off', 'icon__toggle--off', <ToggleOffIcon size="small" className="further-maths" />],
    ['toggle on', 'icon__toggle--on', <ToggleOnIcon size="small" className="further-maths" />],
    ['trash', 'icon__trash', <TrashIcon size="small" className="further-maths" />],
    ['user', 'icon__user', <UserIcon size="small" className="further-maths" />],
    ['dot circle', 'icon__dot__circle', <DotCircleIcon size="small" status="default" className="further-maths" />],
    ['search', 'icon__search', <SearchIcon size="small" className="further-maths" />],
    ['checkbox', 'icon__checkbox', <CheckboxIcon size="small" className="further-maths" />],
    ['square', 'icon__square', <SquareIcon size="small" className="further-maths" />],
  ])(
    "'%s' Still has the right class name when given custom class names",
    (_, expectedClass: string, icon: JSX.Element) => {
      render(icon)

      expect(screen.getByRole('img', { hidden: true })).toHaveClass(expectedClass)
      expect(screen.getByRole('img', { hidden: true })).toHaveClass('further-maths')
    }
  )

  it.each([
    ['bullseye', <BullseyeIcon size="small" id="123abc" />],
    ['calendar', <CalendarIcon size="small" id="123abc" />],
    ['caret square down', <CaretSquareDownIcon size="small" id="123abc" />],
    ['check', <CheckIcon size="small" id="123abc" />],
    ['chevron circle', <ChevronCircleIcon size="small" direction="up" id="123abc" />],
    ['chevron', <ChevronIcon size="small" direction="up" id="123abc" />],
    ['circle', <CircleIcon size="small" status="default" id="123abc" />],
    ['column', <ColumnIcon size="small" status="default" id="123abc" />],
    ['comment', <CommentIcon size="small" id="123abc" />],
    ['counter', <CounterIcon size="small" status="secondary" value={1} id="123abc" />],
    ['cross', <CrossIcon size="small" id="123abc" />],
    ['edit', <EditIcon size="small" id="123abc" />],
    ['ellipsis horizontal', <EllipsisHorizontalIcon size="small" id="123abc" />],
    ['ellipsis vertical', <EllipsisVerticalIcon size="small" id="123abc" />],
    ['exclamation', <ExclamationIcon size="small" status="amber" id="123abc" />],
    ['external link', <ExternalLinkIcon size="small" id="123abc" />],
    ['filter', <FilterIcon size="small" id="123abc" />],
    ['folder plus', <FolderPlusIcon size="small" id="123abc" />],
    ['grid layout', <GridLayoutIcon size="small" id="123abc" />], // TODO: This is also inconsistent!
    ['hamburger', <HamburgerIcon size="small" id="123abc" />],
    ['info circle', <InfoCircleIcon size="small" status="green" id="123abc" />],
    ['keyboard icon', <KeyboardIcon size="small" id="123abc" />],
    ['layer group', <LayerGroupIcon size="small" id="123abc" />],
    ['list layout', <ListLayoutIcon size="small" id="123abc" />], // TODO: Surely this is wrong?
    ['pause', <PauseIcon size="small" id="123abc" />],
    ['play', <PlayIcon size="small" id="123abc" />],
    ['plus', <PlusIcon size="small" id="123abc" />],
    ['spinner', <SpinnerIcon size="small" id="123abc" />],
    ['star', <StarIcon size="small" id="123abc" />],
    ['stop', <StopIcon size="small" id="123abc" />], // TODO: This is inconsistent
    ['table', <TableIcon size="small" status="default" id="123abc" />],
    ['toggle off', <ToggleOffIcon size="small" id="123abc" />],
    ['toggle on', <ToggleOnIcon size="small" id="123abc" />],
    ['trash', <TrashIcon size="small" id="123abc" />],
    ['user', <UserIcon size="small" id="123abc" />],
    ['dot circle', <DotCircleIcon size="small" status="default" id="123abc" />],
    ['search', <SearchIcon size="small" id="123abc" />],
    ['checkbox', <CheckboxIcon size="small" id="123abc" />],
    ['square', <SquareIcon size="small" id="123abc" />],
  ])("'%s' Spreads html attributes down", (_, icon: JSX.Element) => {
    render(icon)

    expect(screen.getByRole('img', { hidden: true })).toHaveAttribute('id', '123abc')
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
    ['star'],
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
  ])("'%s' can be styled", (iconName) => {
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

      case 'caret-square-down': {
        const Icon = styled(CaretSquareDownIcon)`
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

      case 'keyboard': {
        const Icon = styled(KeyboardIcon)`
          color: pink;
        `
        return <Icon size="small" />
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

      case 'star': {
        const Icon = styled(StarIcon)`
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
        const Icon = styled(ToggleOffIcon)`
          color: pink;
        `
        return <Icon size="small" />
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

      case 'search': {
        const Icon = styled(SearchIcon)`
          color: pink;
        `
        return <Icon size="small" />
      }

      case 'checkbox': {
        const Icon = styled(CheckboxIcon)`
          color: pink;
        `
        return <Icon size="small" />
      }

      case 'square': {
        const Icon = styled(SquareIcon)`
          color: pink;
        `
        return <Icon size="small" />
      }
    }
    throw Error()
  }
})
