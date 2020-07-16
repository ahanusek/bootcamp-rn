export const palette = {
  lightBlue: '#0075EB',
  grey: '#8B959E',
  lightGrey: '#F1F1F1',
  black: '#191C1F',
  white: '#ffffff',
  background: '#F2F2F2',
  green: '#2DC897',
  red: '#F85051',
  orange: '#FFD386',
  darkRed: '#CC4B7A',
  purple: '#E9B0FF',
  darkBlue: '#5184D8',
};

export const theme = {
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  spacing: {
    small: 8,
    standard: 12,
    medium: 16,
    large: 24,
    xlarge: 40,
  },
  sizes: {
    borderRadius: 22,
  },
  colors: {
    main: palette.black,
    secondary: palette.lightBlue,
    lightBorder: palette.lightGrey,
    light: palette.white,
    lightGrey: palette.lightGrey,
  },
} as const;

export const baseText = {
  fontFamily: 'Rubik-Regular',
  color: palette.black,
  fontSize: 14,
  lineHeight: 18,
};

export const title = {
  fontFamily: 'Rubik-Regular',
  color: palette.black,
  fontSize: 28,
  lineHeight: 30,
};

export const subtitle = {
  fontFamily: 'Rubik-Regular',
  color: palette.black,
  fontSize: 18,
  lineHeight: 26,
};

export const paragraph = {
  fontFamily: 'Rubik-Regular',
  color: palette.black,
  fontSize: 16,
  lineHeight: 20,
};

export const subText = {
  fontFamily: 'Rubik-Regular',
  fontSize: 13,
  lineHeight: 18,
  color: palette.grey,
};
