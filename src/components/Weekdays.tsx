import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { WEEKDAYS_SHORT } from '../utils';
import type { TWeekdays } from './types';

const Weekdays = memo(
  ({ weekdaysContainerStyle, weekdayStyle, weekdayTextStyle, borderColor }: TWeekdays) => {
    const renderWeekdays = (day: string) => (
      <View
        key={day}
        style={[
          { borderBottomWidth: 1, borderBottomColor: borderColor },
          weekdayStyle,
        ]}
      >
        <Text style={weekdayTextStyle}>{day}</Text>
      </View>
    );

    return (
      <View style={[{ flexDirection: 'row-reverse' }, weekdaysContainerStyle]}>
        {WEEKDAYS_SHORT.map(renderWeekdays)}
      </View>
    );
  },
);

export default Weekdays;
