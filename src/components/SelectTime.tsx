import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import type { TSelectTime } from './types';
import { getTimeHours, getTimeMinutes, toPersian } from '../utils';
import { DEFAULT_PROPS } from '../props';

export default function SelectTime({
                                     mode,
                                     time,
                                     containerStyle,
                                     pickerStyle,
                                     pickerItemStyle,
                                     dropdownIconColor,
                                     onTimeChange,
                                   }: TSelectTime) {

  const [hour, setHour] = useState('00');
  const [minute, setMinute] = useState('00');

  useEffect(() => {
    if (time) {
      setHour(time.split(':')[0] as string);
      setMinute(time.split(':')[1] as string);
    }
  }, [time]);
  return (
    <View style={containerStyle}>
      <View style={[DEFAULT_PROPS.selectTimePickerStyle, pickerStyle]}>
        <Picker selectedValue={minute} onValueChange={(itemValue) => {
          setMinute(itemValue);
          onTimeChange(`${hour}:${itemValue}`);
        }} mode={mode} dropdownIconColor={dropdownIconColor}>
          {getTimeMinutes().map(time =>
            <Picker.Item style={pickerItemStyle} key={time} label={toPersian(String(time))} value={time} />)}
        </Picker>
      </View>

      <Text style={{ marginHorizontal: 10, fontSize: 16 }}>:</Text>

      <View style={[DEFAULT_PROPS.selectTimePickerStyle, pickerStyle]}>
        <Picker dropdownIconColor={dropdownIconColor} selectedValue={hour} onValueChange={(itemValue) => {
          setHour(itemValue);
          onTimeChange(`${itemValue}:${minute}`);
        }} mode={mode}>
          {getTimeHours().map(time =>
            <Picker.Item style={pickerItemStyle} key={time} label={toPersian(String(time))} value={time} />)}
        </Picker>
      </View>
    </View>
  );
}
