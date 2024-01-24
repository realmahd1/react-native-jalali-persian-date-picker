import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { toPersian } from '../utils';
import type { TDay } from './types';
import { DEFAULT_PROPS } from '../props';

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
      return <View style={[DEFAULT_PROPS.dayStyle, dayStyle]} />;
    }

    return (
      <TouchableOpacity
        style={[DEFAULT_PROPS.dayStyle, dayStyle]}
        disabled={isSelected || disabled}
        onPress={onDateChange}
      >
        <View
          style={[
            DEFAULT_PROPS.selectedDayStyle,
            {
              backgroundColor: isSelected ? selectedDayColor : 'transparent',
            },
            selectedDayStyle,
          ]}
        >
          <Text
            style={[
              DEFAULT_PROPS.dayTextStyle,
              {
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
