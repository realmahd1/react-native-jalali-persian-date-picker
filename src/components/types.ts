import type { ColorValue, StyleProp, TextStyle, ViewStyle } from 'react-native';

export type TCalendar = {
  year: number;
  month: number;
  selectedDate: string;
  onDateChange: (date: string) => void;
  dateSeparator: string;
  minDate: string;
  maxDate: string;
  dayStyle: StyleProp<ViewStyle>;
  selectedDayStyle: StyleProp<ViewStyle>;
  selectedDayColor: ColorValue | undefined;
  dayTextStyle: StyleProp<TextStyle>;
  selectedDayTextColor: ColorValue | undefined;
  dayTextColor: ColorValue | undefined;
  disabledTextColor: ColorValue | undefined;
};

export type TDay = {
  item: string;
  onDateChange: () => void;
  isSelected: boolean;
  disabled: boolean;
  dayStyle: StyleProp<ViewStyle>;
  selectedDayStyle: StyleProp<ViewStyle>;
  selectedDayColor: ColorValue | undefined;
  dayTextStyle: StyleProp<TextStyle>;
  selectedDayTextColor: ColorValue | undefined;
  dayTextColor: ColorValue | undefined;
  disabledTextColor: ColorValue | undefined;
};
