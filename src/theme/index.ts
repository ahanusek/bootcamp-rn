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
    elevation: 2,
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

const baseText = {
  color: palette.black,
  fontSize: 14,
  lineHeight: 18,
};

const title = {
  color: palette.black,
  fontFamily: 'Rubik-SemiBold',
  fontSize: 28,
  lineHeight: 30,
};

const subtitle = {
  color: palette.black,
  fontFamily: 'Rubik-Medium',
  fontSize: 18,
  lineHeight: 26,
};

const paragraph = {
  color: palette.black,
  fontFamily: 'Rubik-Regular',
  fontSize: 16,
  lineHeight: 20,
};

const subText = {
  fontSize: 13,
  fontFamily: 'Rubik-Regular',
  lineHeight: 18,
  color: palette.grey,
};

const centered = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
} as const;

export const appStyles = {
  baseText,
  title,
  subtitle,
  paragraph,
  subText,
  centered,
};
