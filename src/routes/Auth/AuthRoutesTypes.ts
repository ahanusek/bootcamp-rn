import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { RouteProp } from '@react-navigation/native';

export type AuthStackList = {
  Login: undefined;
  SignUp: {
    email: string;
  };
};

export type AuthNavProps<T extends keyof AuthStackList> = {
  navigation: StackNavigationProp<AuthStackList, T>;
  route: RouteProp<AuthStackList, T>;
};
