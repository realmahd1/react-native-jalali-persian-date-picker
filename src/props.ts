import { today, lastYear, nextYear } from './utils';
import type { TProps } from './types';

export const DEFAULT_PROPS: TProps = {
  // Date Picker
  showMonthLabel: true,
  style: {
    width: '95%',
    height: 500,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    elevation: 4,
  },
  selectedDate: today(),
  isShowSelectTime: false,
  dateSeparator: '/',
  minDate: lastYear(),
  maxDate: nextYear(),
  onDateChange: (date: string) => console.log(date),

  // Header
  headerContainerStyle: { height: '15%' },
  yearMonthBoxStyle: {
    height: '75%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  yearMonthTextStyle: { fontSize: 22, color: 'black' },
  iconContainerStyle: { width: `${100 / 7}%` },
  backIcon: { uri: 'https://img.icons8.com/metro/52/forward.png' },
  backIconStyle: {
    width: 20,
    height: 20,
    resizeMode: 'center',
    tintColor: 'coral',
  },
  nextIcon: { uri: 'https://img.icons8.com/metro/52/back.png' },
  nextIconStyle: {
    width: 20,
    height: 20,
    resizeMode: 'center',
    tintColor: 'coral',
  },

  // Select time
  selectTimeContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderTopWidth: 1,
    borderTopColor: 'rgba(204,204,204,0.5)'
  },

  selectTimePickerStyle: {
    borderBottomWidth: 1,
    width: 100,
    borderColor: 'coral',
  },

  selectTimePickerMode: 'dropdown',

  // Years
  eachYearStyle: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1.5%',
    marginBottom: 5,
    marginHorizontal: '1.5%',
  },
  selectedEachYearStyle: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1.5%',
    marginBottom: 5,
    marginHorizontal: '1.5%',
    backgroundColor: 'coral',
    borderRadius: 50,
  },
  eachYearTextStyle: { fontSize: 16 },
  selectedEachYearTextStyle: { fontSize: 16, color: 'white', fontWeight: 'bold' },
  // Months
  eachMonthStyle: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1.5%',
    marginBottom: 5,
    marginHorizontal: '1.5%',
  },
  selectedEachMonthStyle: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1.5%',
    marginBottom: 5,
    marginHorizontal: '1.5%',
    backgroundColor: 'coral',
    borderRadius: 50,
  },
  eachMonthTextStyle: { fontSize: 16 },
  selectedEachMonthTextStyle: { fontSize: 16, color: 'white', fontWeight: 'bold' },
  // Weekdays
  weekdaysContainerStyle: { height: '10%', borderBottomWidth: 1, borderColor: 'coral' },
  weekdayStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  weekdayTextStyle: { fontSize: 16, color: 'coral', marginBottom: 5, fontWeight: 'bold' },
  borderColor: 'coral',

  // Days
  dayStyle: {
    width: `${100 / 7}%`,
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1,
  },
  selectedDayStyle: {
    width: '70%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  selectedDayColor: 'coral',
  dayTextStyle: { fontSize: 18 },
  selectedDayTextColor: '#FFFFFF',
  dayTextColor: '#111111',
  disabledTextColor: '#999999',
};
