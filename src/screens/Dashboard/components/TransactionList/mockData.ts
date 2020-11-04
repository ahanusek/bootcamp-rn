export enum Category {
  House = 'house',
  Transport = 'transport',
  Entertainment = 'entertainment',
  Debts = 'debts',
  Healthcare = 'healthcare',
  Clothes = 'clothes',
  Other = 'other',
  Foods = 'foods',
  Savings = 'savings',
  Kids = 'kids',
  Telecommunication = 'telecommunication',
  Hygiene = 'hygiene',
  Business = 'business',
}

export enum CategoryType {
  Income = 'income',
  Outcome = 'outcome',
  Investment = 'investment',
}

export interface BudgetCategory {
  id: string;
  category: Category;
  type: CategoryType;
  transactions: number;
  totalAmount: {
    value: number;
    currency: string;
    type: 'prefix' | 'suffix';
  };
}

export const transactions: BudgetCategory[] = [
  {
    id: '1',
    category: Category.Foods,
    type: CategoryType.Outcome,
    transactions: 30,
    totalAmount: {
      value: 1500,
      currency: 'USD',
      type: 'prefix',
    },
  },
  {
    id: '2',
    category: Category.House,
    type: CategoryType.Outcome,
    transactions: 4,
    totalAmount: {
      value: 2200,
      currency: 'USD',
      type: 'prefix',
    },
  },
  {
    id: '3',
    category: Category.Transport,
    type: CategoryType.Outcome,
    transactions: 5,
    totalAmount: {
      value: 300,
      currency: 'USD',
      type: 'prefix',
    },
  },
  {
    id: '4',
    category: Category.Entertainment,
    type: CategoryType.Outcome,
    transactions: 12,
    totalAmount: {
      value: 243,
      currency: 'USD',
      type: 'prefix',
    },
  },
  {
    id: '5',
    category: Category.Healthcare,
    type: CategoryType.Outcome,
    transactions: 3,
    totalAmount: {
      value: 743,
      currency: 'USD',
      type: 'prefix',
    },
  },
  {
    id: '6',
    category: Category.Hygiene,
    type: CategoryType.Outcome,
    transactions: 8,
    totalAmount: {
      value: 126,
      currency: 'USD',
      type: 'prefix',
    },
  },
  {
    id: '7',
    category: Category.Kids,
    type: CategoryType.Outcome,
    transactions: 9,
    totalAmount: {
      value: 376,
      currency: 'USD',
      type: 'prefix',
    },
  },
  {
    id: '8',
    category: Category.Clothes,
    type: CategoryType.Outcome,
    transactions: 3,
    totalAmount: {
      value: 78,
      currency: 'USD',
      type: 'prefix',
    },
  },
  {
    id: '9',
    category: Category.Debts,
    type: CategoryType.Outcome,
    transactions: 2,
    totalAmount: {
      value: 3500,
      currency: 'USD',
      type: 'prefix',
    },
  },
  {
    id: '10',
    category: Category.Telecommunication,
    type: CategoryType.Outcome,
    transactions: 3,
    totalAmount: {
      value: 120,
      currency: 'USD',
      type: 'prefix',
    },
  },
  {
    id: '11',
    category: Category.Savings,
    type: CategoryType.Investment,
    transactions: 3,
    totalAmount: {
      value: 1534,
      currency: 'USD',
      type: 'prefix',
    },
  },
  {
    id: '12',
    category: Category.Business,
    type: CategoryType.Outcome,
    transactions: 5,
    totalAmount: {
      value: 335,
      currency: 'USD',
      type: 'prefix',
    },
  },
  {
    id: '21',
    category: Category.Foods,
    type: CategoryType.Outcome,
    transactions: 30,
    totalAmount: {
      value: 1500,
      currency: 'USD',
      type: 'prefix',
    },
  },
  {
    id: '22',
    category: Category.House,
    type: CategoryType.Outcome,
    transactions: 4,
    totalAmount: {
      value: 2200,
      currency: 'USD',
      type: 'prefix',
    },
  },
  {
    id: '23',
    category: Category.Transport,
    type: CategoryType.Outcome,
    transactions: 5,
    totalAmount: {
      value: 300,
      currency: 'USD',
      type: 'prefix',
    },
  },
  {
    id: '24',
    category: Category.Entertainment,
    type: CategoryType.Outcome,
    transactions: 12,
    totalAmount: {
      value: 243,
      currency: 'USD',
      type: 'prefix',
    },
  },
  {
    id: '25',
    category: Category.Healthcare,
    type: CategoryType.Outcome,
    transactions: 3,
    totalAmount: {
      value: 743,
      currency: 'USD',
      type: 'prefix',
    },
  },
  {
    id: '26',
    category: Category.Hygiene,
    type: CategoryType.Outcome,
    transactions: 8,
    totalAmount: {
      value: 126,
      currency: 'USD',
      type: 'prefix',
    },
  },
  {
    id: '27',
    category: Category.Kids,
    type: CategoryType.Outcome,
    transactions: 9,
    totalAmount: {
      value: 376,
      currency: 'USD',
      type: 'prefix',
    },
  },
  {
    id: '28',
    category: Category.Clothes,
    type: CategoryType.Outcome,
    transactions: 3,
    totalAmount: {
      value: 78,
      currency: 'USD',
      type: 'prefix',
    },
  },
  {
    id: '29',
    category: Category.Debts,
    type: CategoryType.Outcome,
    transactions: 2,
    totalAmount: {
      value: 3500,
      currency: 'USD',
      type: 'prefix',
    },
  },
  {
    id: '20',
    category: Category.Telecommunication,
    type: CategoryType.Outcome,
    transactions: 3,
    totalAmount: {
      value: 120,
      currency: 'USD',
      type: 'prefix',
    },
  },
  {
    id: '212',
    category: Category.Savings,
    type: CategoryType.Investment,
    transactions: 3,
    totalAmount: {
      value: 1534,
      currency: 'USD',
      type: 'prefix',
    },
  },
  {
    id: '222',
    category: Category.Business,
    type: CategoryType.Outcome,
    transactions: 5,
    totalAmount: {
      value: 335,
      currency: 'USD',
      type: 'prefix',
    },
  },
];
