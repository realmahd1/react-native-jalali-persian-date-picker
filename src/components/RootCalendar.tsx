import React, { memo } from 'react';
import { FlatList } from 'react-native';
import { fullDate, getDays, isBefore, isAfter } from '../utils';
import Day from './Day';
import type { TCalendar } from './types';

const RootCalendar = memo(
  ({
     year,
     month,
     selectedDate,
     onDateChange,
     dateSeparator,
     minDate,
     maxDate,
     dayStyle,
     selectedDayStyle,
     selectedDayColor,
     dayTextStyle,
     selectedDayTextColor,
     dayTextColor,
     disabledTextColor,
   }: TCalendar) => {
    const isSelected = (day: number | string) =>
      selectedDate == fullDate(year, month, day, dateSeparator);

    const isDisabled = (day: number | string) => {
      const today = fullDate(year, month, day, dateSeparator);
      return (
        isBefore(today, minDate, dateSeparator) ||
        isAfter(today, maxDate, dateSeparator)
      );
    };

    const onChange = (day: number | string) => () =>
      onDateChange(fullDate(year, month, day, dateSeparator));


    const renderDay = ({ item }: { item: string }) => (
      <Day
        item={item}
        isSelected={isSelected(item)}
        onDateChange={onChange(item)}
        disabled={isDisabled(item)}
        dayStyle={dayStyle}
        selectedDayStyle={selectedDayStyle}
        selectedDayColor={selectedDayColor}
        dayTextStyle={dayTextStyle}
        selectedDayTextColor={selectedDayTextColor}
        dayTextColor={dayTextColor}
        disabledTextColor={disabledTextColor}
      />
    );

    return (
      <FlatList
        style={{ flex: 1, }}
        data={getDays(year, month)}
        renderItem={renderDay}
        keyExtractor={item => `${year}/${month}/${item}`}
        numColumns={7}
      />
    );
  },
);

export default RootCalendar;
