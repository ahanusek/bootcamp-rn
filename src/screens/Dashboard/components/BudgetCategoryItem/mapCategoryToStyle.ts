import { palette } from '@/theme';
import { Category } from '@/screens/Dashboard/components/mockData';

export const mapCategoryToStyle = {
  [Category.Transport.toString()]: {
    color: palette.darkRed,
    icon: 'car',
  },
  [Category.Foods.toString()]: {
    color: palette.green,
    icon: 'food',
  },
  [Category.House.toString()]: {
    color: palette.darkBlue,
    icon: 'home',
  },
  [Category.Entertainment.toString()]: {
    color: palette.red,
    icon: 'party-popper',
  },
  [Category.Debts.toString()]: {
    color: palette.red,
    icon: 'credit-card-outline',
  },
  [Category.Clothes.toString()]: {
    color: palette.lightBlue,
    icon: 'tshirt-crew',
  },
  [Category.Other.toString()]: {
    color: palette.lightBlue,
    icon: 'gift',
  },
  [Category.Kids.toString()]: {
    color: palette.green,
    icon: 'car-child-seat',
  },
  [Category.Healthcare.toString()]: {
    color: palette.green,
    icon: 'hospital-building',
  },
  [Category.Telecommunication.toString()]: {
    color: palette.darkRed,
    icon: 'cellphone-wireless',
  },
  [Category.Savings.toString()]: {
    color: palette.green,
    icon: 'piggy-bank',
  },
  [Category.Business.toString()]: {
    color: palette.red,
    icon: 'office-building',
  },
};
