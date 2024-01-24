import type { StyleProp, ViewStyle, ImageSourcePropType, TextStyle, ImageStyle, ColorValue } from 'react-native';

export type TCalendarProps = {
  /**
   * Calendar container style
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Selected date
   */
  value?: string;

  /**
   * Is Show select time picker
   */
  isShowSelectTime?: boolean;

  /**
   * Show month label
   */
  showMonthLabel?: boolean;
  /**
   * Date separator character, can be anything like `/`, `-`, etc
   */
  dateSeparator?: string;

  /**
   * Minimum date to be picked
   */
  minDate?: string;

  /**
   * Maximum date to be picked
   */
  maxDate?: string;

  /**
   * @required
   * On date change callback
   */
  onChange: (date: string) => void;

  /**
   * Header style which contains arrows and year-month
   */
  headerContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Year-month box style
   */
  yearMonthBoxStyle?: StyleProp<ViewStyle>;

  /**
   * Year - Month text style
   */
  yearMonthTextStyle?: StyleProp<TextStyle>;

  /**
   * Icons container style
   */
  iconContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Path to back icon
   */
  backIcon?: ImageSourcePropType | undefined;

  /**
   * Back icon style
   */
  backIconStyle?: StyleProp<ImageStyle>;

  /**
   * Path to next icon
   */
  nextIcon?: ImageSourcePropType | undefined;

  /**
   * Next icon style
   */
  nextIconStyle?: StyleProp<ImageStyle>;

  /**
   * Select time container style
   */
  selectTimeContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Select time picker style
   */
  selectTimePickerStyle?: StyleProp<ViewStyle>;

  /**
   * Select time picker items style
   */
  selectTimePickerItemStyle?: StyleProp<TextStyle>;

  /**
   * Select time picker mode
   */
  selectTimePickerMode?: 'dialog' | 'dropdown';

  /**
   * select time dropdown icon color
   */
  selectTimeDropdownIconColor?: ColorValue;

  /**
   * Each year box style in year selector
   */
  eachYearStyle?: StyleProp<ViewStyle>;

  /**
   * Selected Each year box style in year selector
   */
  selectedEachYearStyle?: StyleProp<ViewStyle>;

  /**
   * Each year text style in year selector
   */
  eachYearTextStyle?: StyleProp<TextStyle>;

  /**
   * Selected Each year text style in year selector
   */
  selectedEachYearTextStyle?: StyleProp<TextStyle>;

  /**
   * Each month box style in month selector
   */
  eachMonthStyle?: StyleProp<ViewStyle>;

  /**
   * Selected Each month box style in month selector
   */
  selectedEachMonthStyle?: StyleProp<ViewStyle>;

  /**
   * Each month text style in month selector
   */
  eachMonthTextStyle?: StyleProp<TextStyle>;

  /**
   * Selected Each month text style in month selector
   */
  selectedEachMonthTextStyle?: StyleProp<TextStyle>;

  /**
   * Top row style which contains weekdays
   */
  weekdaysContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Each weekday style
   */
  weekdayStyle?: StyleProp<ViewStyle>;

  /**
   * Each weekday text style
   */
  weekdayTextStyle?: StyleProp<TextStyle>;

  /**
   * Each day style in calendar
   */
  dayStyle?: StyleProp<ViewStyle>;

  /**
   * Selected day style
   */
  selectedDayStyle?: StyleProp<ViewStyle>;

  /**
   * Selected day color
   */
  selectedDayColor?: string;

  /**
   * Each day text style
   */
  dayTextStyle?: StyleProp<TextStyle>;

  /**
   * Selected day text color
   */
  selectedDayTextColor?: string;

  /**
   * Normal days text color
   */
  dayTextColor?: string;

  /**
   * Disabled days text color
   */
  disabledTextColor?: string;
}

export type TDatePickerProps = TCalendarProps & {
  /**
   * Date Picker Modal style
   */
  datePickerModalStyle?: StyleProp<ViewStyle>;
  /**
   * Date Picker Dismiss Icon color
   */
  datePickerDismissIconColor?: ColorValue;
  /**
   * Custom render Item for date picker input
   */
  renderItem?: Element
}
