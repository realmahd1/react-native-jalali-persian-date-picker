import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { WEEKDAYS_SHORT } from '../utils';
import type { TWeekdays } from './types';
import { DEFAULT_PROPS } from '../props';

const Weekdays = memo(
  ({ weekdaysContainerStyle, weekdayStyle, weekdayTextStyle }: TWeekdays) => {
    const renderWeekdays = (day: string) => (
      <View
        key={day}
        style={[DEFAULT_PROPS.weekdayStyle, weekdayStyle]}
      >
        <Text style={[DEFAULT_PROPS.weekdayTextStyle, weekdayTextStyle]}>{day}</Text>
      </View>
    );

    return (
      <View style={[{ flexDirection: 'row' }, DEFAULT_PROPS.weekdaysContainerStyle, weekdaysContainerStyle]}>
        {WEEKDAYS_SHORT.map(renderWeekdays)}
      </View>
    );
  },
);

export default Weekdays;
