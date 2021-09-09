import * as colours from './nhs-colours'

export const INPUT_COLOURS = {
  RADIO_SELECTED: colours.NHS_LIGHT_GREEN.LIGHTER75,
}

export const SELECT_COLOURS = {
  OPTION_SELECTED: colours.NHS_LIGHT_GREEN.LIGHTER75,
  OPTION_HOVER: colours.NHS_LIGHT_GREEN.LIGHTER75,
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
  DANGER: colours.NHS_EMERGENCY_SERVICES_RED.VALUE,
  WARNING: colours.NHS_ORANGE,
  SUCCESS: colours.NHS_GREEN,
  DEFAULT: colours.NHS_MID_GREY,
  INFO: colours.NHS_BRIGHT_BLUE,
}

export const LINK_COLOURS = {
  BACKGROUND: {
    DEFAULT: 'rgb(238, 248, 255)',
    HOVER: 'rgba(238, 248, 255, 0.8)',
  },
  TEXT: {
    DEFAULT: 'rgb(0, 145, 255)',
    HOVER: 'rgba(0, 145, 255, 0.8)',
  },
}

export const EFORM_BACKGROUND_COLOUR = colours.NHS_WHITE

export const CARD_BACKGROUND_COLOUR = colours.NHS_WHITE
export const CARD_BACKGROUND_COLOUR_NO_DATA = '#F2F2F2'
export const CARD_BORDER_COLOUR = '#b0b0b0'
export const CARD_SHADOW_COLOUR = '#666666'
export const CARD_LIST_ITEM_BACKGROUND_HOVER = colours.NHS_PALE_GREY
export const CARD_LIST_ITEM_BORDER_COLOUR = '#d8d8d8'
export const CARD_LIST_ITEM_BORDER_HOVER = '#b0b0b0'
export const CARD_LIST_ITEM_SELECTED_BACKGROUND = colours.NHS_LIGHT_GREEN.LIGHTER75

export const PATIENT_BANNER_DECEASED_BACKGROUND_COLOUR = colours.NHS_BLACK
export const PATIENT_BANNER_BACKGROUND_COLOUR = '#56008c'
export const PATIENT_BANNER_TEXT_COLOUR = '#FFF'
export const PATIENT_BANNER_LABEL_COLOUR = '#CCC'
export const PATIENT_NHS_NUMBER_STATUS_VERIFIED = '#4cc552'
export const PATIENT_NHS_NUMBER_STATUS_NOT_VERIFIED = '#f33'

export const TRANSLUCENT_WARM_YELLOW = colours.NHS_TRANSLUCENT_WARM_YELLOW
export const TRANSLUCENT_BRIGHT_BLUE = colours.NHS_TRANSLUCENT_BRIGHT_BLUE
export const TRANSLUCENT_DARK_BLUE = colours.NHS_TRANSLUCENT_DARK_BLUE

export const BTN_COLOURS = {
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
  DANGER: {
    VALUE: colours.NHS_EMERGENCY_SERVICES_RED.VALUE,
    DISABLED: colours.NHS_EMERGENCY_SERVICES_RED.LIGHTER25,
    HOVER: colours.NHS_EMERGENCY_SERVICES_RED.DARKER25,
    TEXT: colours.NHS_WHITE,
  },
}

export const BANNER_COLOURS = {
  DEFAULT: {
    BACKGROUND: '#edecec',
    TEXT: '#626262',
    BORDER: '#e4e4e4',
    ICON: '#919090',
    HOVER: '#c8c5c5',
  },
  INFO: {
    BACKGROUND: '#cbdbee',
    TEXT: '#0053c3',
    BORDER: '#bdd2ec',
    ICON: '#107dbd',
    HOVER: '#b2cae6',
  },
  WARNING: {
    BACKGROUND: '#fef3cd',
    TEXT: '#926100',
    BORDER: '#faeab4',
    ICON: '#ffa500',
    HOVER: '#faeab1',
  },
  DANGER: {
    BACKGROUND: '#eeacbd',
    TEXT: '#a41e40',
    BORDER: '#ec9bb0',
    ICON: '#f50b47',
    HOVER: '#ea94aa',
  },
}
