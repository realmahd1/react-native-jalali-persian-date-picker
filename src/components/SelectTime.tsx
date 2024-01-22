import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import type { TSelectTime } from './types';
import { getTimeHours, getTimeMinutes } from '../utils';

export default function SelectTime({
                                     mode,
                                     containerStyle,
                                     pickerStyle,
                                     pickerItemStyle,
                                     onTimeChange,
                                   }: TSelectTime) {

  const [hour, setHour] = useState('00');
  const [minute, setMinute] = useState('00');

  return (
    <View style={containerStyle}>
      <View style={pickerStyle}>
        <Picker selectedValue={hour} onValueChange={(itemValue) => {
          setHour(itemValue);
          onTimeChange(`${itemValue}:${minute}`);
        }} itemStyle={pickerItemStyle} mode={mode}>
          {getTimeHours().map(time =>
            <Picker.Item key={time} label={String(time)} value={time} />)}
        </Picker>
      </View>

      <Text style={{ marginHorizontal: 10, fontSize: 16 }}>:</Text>

      <View style={pickerStyle}>
        <Picker selectedValue={minute} onValueChange={(itemValue) => {
          setMinute(itemValue);
          onTimeChange(`${hour}:${itemValue}`);
        }} itemStyle={pickerItemStyle} mode={mode}>
          {getTimeMinutes().map(time =>
            <Picker.Item key={time} label={String(time)} value={time} />)}
        </Picker>
      </View>
    </View>
  );
}
