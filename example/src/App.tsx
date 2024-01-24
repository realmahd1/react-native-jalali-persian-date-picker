import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import DatePicker, { Calendar } from 'react-native-jalali-persian-date-picker';
import { useState } from 'react';
import { today } from '../../src/utils';

export default function App() {
  const [value, setValue] = useState<string | undefined>(today());
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Date Picker</Text>
      <DatePicker value={value} onChange={(date) => setValue(date)} />
      <Text style={styles.title}>Date & Time Picker</Text>
      <DatePicker isShowSelectTime={true} value={value} onChange={(date) => setValue(date)} />
      <Text style={styles.title}>Date & Time Picker (Dark Theme)</Text>
      <DatePicker style={{ backgroundColor: '#161616' }} selectTimeDropdownIconColor={'white'}
                  eachMonthTextStyle={{ color: 'white' }} eachYearTextStyle={{ color: 'white' }}
                  selectTimePickerItemStyle={{ color: 'white', backgroundColor: '#161616' }}
                  datePickerDismissIconColor={'white'} yearMonthTextStyle={{ color: 'white' }}
                  datePickerModalStyle={{ backgroundColor: '#161616' }} dayTextColor={'#fff'} isShowSelectTime={true}
                  value={value} onChange={(date) => setValue(date)} />
      <Text style={styles.title}>Calendar</Text>
      <Calendar value={value} onChange={(date) => setValue(date)} style={styles.calendar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendar: {
    borderColor: '#ccc',
    borderWidth: 1,
    margin: 10,
    height: 450,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  title: {
    marginTop: 20,
    marginBottom: 5,
    fontSize: 20,
  },
});
