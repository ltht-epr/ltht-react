import * as colours from './nhs-colours'

export const INPUT_COLOURS = {
  RADIO_SELECTED: colours.NHS_LIGHT_GREEN.LIGHTER75,
}

export const TEXT_COLOURS = {
  PRIMARY: colours.NHS_BLACK,
  SECONDARY: colours.NHS_MID_GREY,
  DANGER: colours.NHS_DARK_RED,
  INFO: colours.NHS_DARK_BLUE.VALUE,
}

export const ICON_COLOURS = {
  PRIMARY: colours.NHS_BLACK,
  SECONDARY: colours.NHS_DARK_BLUE.VALUE,
  DANGER: colours.NHS_EMERGENCY_SERVICES_RED,
  WARNING: colours.NHS_ORANGE,
  SUCCESS: colours.NHS_GREEN,
  DEFAULT: colours.NHS_MID_GREY,
  INFO: colours.NHS_BRIGHT_BLUE,
}

export const CARD_BACKGROUND_COLOUR = colours.NHS_WHITE
export const CARD_BACKGROUND_COLOUR_NO_DATA = '#F2F2F2'
export const CARD_BORDER_COLOUR = '#b0b0b0'
export const CARD_SHADOW_COLOUR = '#666666'
export const CARD_LIST_ITEM_BACKGROUND_HOVER = colours.NHS_PALE_GREY
export const CARD_LIST_ITEM_BORDER_COLOUR = '#d8d8d8'
export const CARD_LIST_ITEM_BORDER_HOVER = '#b0b0b0'

export const PATIENT_BANNER_DECEASED_BACKGROUND_COLOUR = colours.NHS_BLACK
export const PATIENT_BANNER_BACKGROUND_COLOUR = '#56008c'
export const PATIENT_BANNER_TEXT_COLOUR = '#FFF'
export const PATIENT_BANNER_LABEL_COLOUR = '#CCC'

export const BTN_COLOURS = {
  DEFAULT: {
    VALUE: colours.NHS_DARK_BLUE.VALUE,
    DISABLED: colours.NHS_DARK_BLUE.LIGHTER25,
    HOVER: colours.NHS_DARK_BLUE.DARKER25,
    TEXT: colours.NHS_BLACK,
  },
  PRIMARY: {
    VALUE: colours.NHS_DARK_BLUE.VALUE,
    DISABLED: colours.NHS_DARK_BLUE.LIGHTER25,
    HOVER: colours.NHS_DARK_BLUE.DARKER25,
    TEXT: colours.NHS_WHITE,
  },
  STANDARD: {
    VALUE: colours.NHS_LIGHT_BLUE.VALUE,
    DISABLED: colours.NHS_LIGHT_BLUE.LIGHTER25,
    HOVER: colours.NHS_LIGHT_BLUE.DARKER25,
    TEXT: colours.NHS_WHITE,
  },
  WORKFLOW: {
    VALUE: colours.NHS_GREEN.VALUE,
    DISABLED: colours.NHS_GREEN.LIGHTER25,
    HOVER: colours.NHS_GREEN.DARKER25,
    TEXT: colours.NHS_WHITE,
  },
}

export const BANNER_COLOURS = {
  DEFAULT: {
    VALUE: colours.NHS_DARK_BLUE.VALUE,
    TEXT: colours.NHS_BLACK,
  },
  PRIMARY: {
    VALUE: colours.NHS_DARK_BLUE.VALUE,
    TEXT: colours.NHS_WHITE,
  },
  INFO: {
    VALUE: colours.NHS_TRANSLUCENT_BRIGHT_BLUE,
    TEXT: colours.NHS_DARK_BLUE.VALUE,
  },
  WARNING: {
    VALUE: colours.NHS_TRANSLUCENT_WARM_YELLOW,
    TEXT: colours.NHS_ORANGE,
  },
  ERROR: {
    VALUE: colours.NHS_DARK_RED,
    TEXT: colours.NHS_WHITE,
  },
}
