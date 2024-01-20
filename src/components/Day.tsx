import React, { memo } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  type ViewStyle,
  type StyleProp,
  type TextStyle,
  type ColorValue,
} from 'react-native';
import { toPersian } from '../utils';

type TDay = {
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
     disabledTextColor
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
