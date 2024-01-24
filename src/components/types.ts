import type { ColorValue, ImageSourcePropType, ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';

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

export type TWeekdays = {
  weekdaysContainerStyle: StyleProp<ViewStyle>;
  weekdayStyle: StyleProp<ViewStyle>;
  weekdayTextStyle: StyleProp<TextStyle>;
}

export type THeader = {
  mode: string | undefined;
  containerStyle: StyleProp<ViewStyle>;
  changeModeTo: (mode: string) => void;
  yearMonthTextStyle: StyleProp<TextStyle>
  iconContainerStyle: StyleProp<ViewStyle>;
  backIcon: ImageSourcePropType | undefined;
  backIconStyle: StyleProp<ImageStyle>;
  year: number;
  month: number;
  nextIcon: ImageSourcePropType | undefined;
  nextIconStyle: StyleProp<ImageStyle>;
  decreaseYear: Function;
  increaseYear: Function;
  decreaseMonth: Function;
  increaseMonth: Function;
  minYear: number;
  maxYear: number;
  minMonth: number;
  maxMonth: number;
  yearMonthBoxStyle: StyleProp<ViewStyle>;
  isShowMonthLabel: boolean | undefined;
}

export type TYearSelector = {
  year: number;
  onYearChange: (year: number) => void;
  eachYearStyle: StyleProp<ViewStyle>;
  selectedEachYearStyle: StyleProp<ViewStyle>;
  eachYearTextStyle: StyleProp<TextStyle>;
  selectedEachYearTextStyle: StyleProp<TextStyle>;
  minYear: number;
  maxYear: number;
}
export type TMonthSelector = {
  year: number;
  month: number;
  onMonthChange: (year: number) => void;
  eachMonthStyle: StyleProp<ViewStyle>;
  selectedEachMonthStyle: StyleProp<ViewStyle>;
  eachMonthTextStyle: StyleProp<TextStyle>;
  selectedEachMonthTextStyle: StyleProp<TextStyle>;
  minYear: number;
  maxYear: number;
  minMonth: number;
  maxMonth: number;
}
export type TSelectTime = {
  mode?: 'dialog' | 'dropdown';
  dropdownIconColor?: ColorValue;
  time: string;
  containerStyle: StyleProp<ViewStyle>;
  pickerStyle: StyleProp<ViewStyle>;
  pickerItemStyle: StyleProp<TextStyle>;
  onTimeChange: (time: string) => void;
}
