import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { toPersian } from '../utils';
import type { TDay } from './types';

const Day = memo(
  ({
     item,
     onDateChange,
     isSelected,
     disabled,
     dayStyle,
     selectedDayStyle,
     selectedDayColor,
     dayTextStyle,
     selectedDayTextColor,
     dayTextColor,
     disabledTextColor,
   }: TDay) => {
    const blank = item === '.';
    if (blank) {
      return <View style={dayStyle} />;
    }

    return (
      <TouchableOpacity
        style={dayStyle}
        disabled={isSelected || disabled}
        onPress={onDateChange}
      >
        <View
          style={[
            {
              backgroundColor: isSelected ? selectedDayColor : 'transparent',
            },
            selectedDayStyle,
          ]}
        >
          <Text
            style={[
              {
                transform: [{ rotateY: '180deg' }],
                color: disabled
                  ? disabledTextColor
                  : isSelected
                    ? selectedDayTextColor
                    : dayTextColor,
              },
              dayTextStyle,
            ]}
          >
            {toPersian(item)}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },
);
export default Day;
